document.addEventListener("DOMContentLoaded", async () => {
  const tableEl = document.getElementById("commpass-dictionary-table");
  if (!tableEl) return;

  const csvUrl = tableEl.dataset.csv;
  const sectionSelect = document.getElementById("dictionary-section-filter");

  // Fetch CSV
  const resp = await fetch(csvUrl);
  const csvText = await resp.text();

  // Parse CSV (PapaParse is loaded via mkdocs.yml)
  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const rows = parsed.data;

  // Build columns from CSV headers
  const headers = parsed.meta.fields;

  // Populate section filter if column exists
  const sectionCol = headers.includes("dictionary_section") ? "dictionary_section" : null;
  if (sectionCol && sectionSelect) {
    const sections = Array.from(new Set(rows.map(r => r[sectionCol]).filter(Boolean))).sort();
    for (const s of sections) {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      sectionSelect.appendChild(opt);
    }
  }

  // Create DataTable
  const dt = new DataTable("#commpass-dictionary-table", {
    data: rows,
    columns: headers.map(h => ({ title: h, data: h })),
    paging: true,
    pageLength: 25,
    searching: true,
    fixedHeader: true,
    scrollX: true,
    order: [],
  });

  // Hook up section filter
  if (sectionCol && sectionSelect) {
    const sectionIdx = headers.indexOf(sectionCol);
    sectionSelect.addEventListener("change", () => {
      const val = sectionSelect.value;
      if (!val) {
        dt.column(sectionIdx).search("").draw();
      } else {
        // exact match
        dt.column(sectionIdx).search(`^${val}$`, true, false).draw();
      }
    });
  }
});
