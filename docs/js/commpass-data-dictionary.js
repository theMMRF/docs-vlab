/**
 * Initialize jQuery DataTable for CoMMpass Clinical Data Dictionary.
 * Only runs when the table container exists on the page.
 */
(function () {
  "use strict";

  function initCommpassDataTable() {
    var tableEl = document.getElementById("commpass-datatable");
    if (!tableEl) return;

    document.documentElement.classList.add("commpass-dictionary-page");
    document.body.classList.add("commpass-dictionary-page");

    // Page is at .../commpass-data-dictionary-v25/ so JSON is in parent dir
    var jsonUrl = "../commpass_clinical_data_dictionary_v25.json";

    function newlineRender(data) {
      if (data == null || data === "") return "";
      return String(data).replace(/\n/g, "<br>");
    }

    // Columns visible by default: Table, Dataset, MMRF Variable Name, Description, Data Type, Data Standard
    var defaultVisibleDataKeys = [
      "table",
      "dataset",
      "mmrf_variable_name",
      "description",
      "data_type",
      "data_standard",
    ];

    $.ajax({
      url: jsonUrl,
      dataType: "json",
    })
      .done(function (json) {
        var columns = json.columns.map(function (col) {
          var visible = defaultVisibleDataKeys.indexOf(col.data) !== -1;
          return {
            title: col.title,
            data: col.data,
            render: newlineRender,
            visible: visible,
          };
        });

        $(tableEl).DataTable({
          data: json.data,
          columns: columns,
          buttons: ["copy", "csv", "excel", "colvis"],
          columnControl: [
            {
              extend: "dropdown",
              content: ["search"],
            },
          ],
          layout: {
            topStart: ["pageLength", "buttons"],
            topEnd: "search",
            bottomStart: "info",
            bottomEnd: "paging",
          },
          responsive: true,
          pageLength: 10,
          order: [],
          scrollX: false,
        });
      })
      .fail(function () {
        var wrapper = tableEl.closest(".commpass-dictionary-wrapper");
        if (wrapper) {
          wrapper.innerHTML =
            '<p class="md-typeset">Unable to load data dictionary. Please refresh the page.</p>';
        }
      });
  }

  if (typeof $ !== "undefined" && typeof $.fn.DataTable !== "undefined") {
    $(document).ready(initCommpassDataTable);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      if (typeof $ !== "undefined" && typeof $.fn.DataTable !== "undefined") {
        initCommpassDataTable();
      }
    });
  }
})();
