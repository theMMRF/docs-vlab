#!/usr/bin/env python3
"""
Convert CoMMpass clinical data dictionary CSV to JSON for jQuery DataTables.

Handles Excel-exported CSV quirks: newlines within cells, escaped quotes,
commas in values, and trailing empty columns.

Usage:
    python scripts/csv_to_json.py

Output:
    docs/mmrf-resources/mmrf-commpass/data-dictionaries/commpass_clinical_data_dictionary_v25.json
"""

import csv
import json
import re
from pathlib import Path


def sanitize_column_key(header: str) -> str:
    """Convert header to valid JSON/JS identifier."""
    if not header or not header.strip():
        return ""
    # Replace spaces/special chars with underscore, lowercase
    key = re.sub(r"[^\w]+", "_", header.strip())
    key = re.sub(r"_+", "_", key).strip("_")
    return key.lower() or "unnamed"


def main():
    repo_root = Path(__file__).resolve().parent.parent
    csv_path = repo_root / "docs/mmrf-resources/mmrf-commpass/data-dictionaries/commpass_clinical_data_dictionary_v25.csv"
    json_path = repo_root / "docs/mmrf-resources/mmrf-commpass/data-dictionaries/commpass_clinical_data_dictionary_v25.json"

    rows = []
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.reader(f, dialect="excel")
        raw_rows = list(reader)

    if not raw_rows:
        raise SystemExit("CSV is empty")

    headers = raw_rows[0]
    # Strip trailing empty columns
    while headers and (not headers[-1] or not headers[-1].strip()):
        headers.pop()

    # Build column config: title (display) and data (sanitized key)
    columns = []
    for h in headers:
        key = sanitize_column_key(h)
        if not key:
            continue
        columns.append({"title": h.strip(), "data": key})

    for row in raw_rows[1:]:
        # Trim row to match header length (drop trailing empty cells)
        row = row[: len(headers)] if len(row) > len(headers) else row
        row = row + [""] * (len(headers) - len(row))  # pad if short

        obj = {}
        for i, header in enumerate(headers):
            key = sanitize_column_key(header)
            if not key:
                continue
            value = row[i] if i < len(row) else ""
            obj[key] = value.strip() if isinstance(value, str) else value
        rows.append(obj)

    output = {"data": rows, "columns": columns}

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(rows)} rows to {json_path}")


if __name__ == "__main__":
    main()
