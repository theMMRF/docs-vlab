# Mutation Frequency

## Overview

The **Mutation Frequency** app within the MMRF Virtual Lab allows users to visualize the most frequently mutated genes and the most common somatic mutations across the selected cohort. It provides insight into the mutation landscape of the cohort, enabling researchers to identify patterns in gene alteration frequency, impact, and survival outcomes.

Access this tool from the **Analysis Center** by selecting the **Mutation Frequency** card.

![Mutation Frequency Overview Placeholder — replace with screenshot](../images/mutation-frequency-overview.png)

---

## Available Visualizations

The Mutation Frequency tool includes multiple interactive visualizations and tables to explore mutation data:

- **Mutated Genes Histogram**  
- **Mutation Frequency Survival Plot**  
- **Genes/Mutations Table**  
- **Gene Summary Page**  
- **Mutation Summary Page**

---

## Mutated Genes Histogram

This histogram displays the most frequently mutated genes within the active cohort. Each bar represents a gene, with its height corresponding to the **percentage of cases** affected.  

Features:
- Visualize the top mutated genes across the selected cohort.  
- Hover over bars to view the exact number and percentage of affected cases.  
- Download the histogram as an image (**SVG** or **PNG**) or as raw data (**JSON**) using the icons in the top-right corner.  
- Use filters on the left panel to refine results by gene impact, consequence type, or biotype.

![Mutated Genes Histogram Placeholder — replace with screenshot](../images/mutation-frequency-histogram.png)

---

## Survival Plot for Mutated Genes and Mutations

The **survival plot** compares overall survival between patients **with** and **without** a selected gene mutation or variant. Two Kaplan–Meier curves represent these groups, helping users assess whether a specific mutation impacts survival outcomes.

Features:
- Apply additional filters (e.g., **Impact = High**) to refine which cases are included in the plot.  
- View the **Log-Rank Test p-value** to assess statistical significance.  
- Download the survival plot as an image (**SVG/PNG**) or export the data (**JSON/TSV**).  
- Use the reset button to clear selections and return to default view.

![Survival Plot Placeholder — replace with screenshot](../images/mutation-frequency-survival.png)

---

## Genes and Mutations Table

The **Genes/Mutations Table** lists the most frequently mutated genes or variants, ranked by **percent frequency** within the active cohort. This table provides additional context, including copy number variation (CNV) data and affected case counts.

### Key Features:
- Toggle between **Genes** and **Mutations** view.  
- Filter or search by gene name, mutation type, or genomic position.  
- Click the **Cohort** toggle to filter the current cohort by the selected gene or mutation.  
- Select **Survival** to dynamically update the survival plot for that variant.  
- Export the table data as a **TSV** file.  
- Create new cohorts based on any gene or mutation using the action buttons in each row.

![Mutation Frequency Table Placeholder — replace with screenshot](../images/mutation-frequency-table.png)

---

## Gene and Mutation Summary Pages

Users can click on the **Gene Symbol** in the Genes Table or the **DNA Change** link in the Mutations Table to open dedicated **summary pages** for that entity. These pages display additional biological context, clinical impact, and frequency data across MMRF projects.

---

### Gene Summary Page

The **Gene Summary** page provides detailed information and analytics for a selected gene, including mutation and CNV data across MMRF cohorts.

#### Gene Summary Section
- **Symbol:** Official gene symbol.  
- **Name:** Full gene name.  
- **Synonyms:** Known aliases or alternative names.  
- **Type:** Broad classification (e.g., protein-coding, pseudogene).  
- **Location:** Chromosome number and coordinates.  
- **Strand:** Indicates if the gene is on the forward (+) or reverse (−) strand.  
- **Description:** Summary of gene function and biological relevance.  
- **Annotation:** Indicates whether the gene is part of the Cancer Gene Census (CGC).

#### External References
Links are provided to relevant external databases for additional information:  
**Entrez**, **UniProt**, **HGNC**, **OMIM**, **Ensembl**, and **CIViC**.

#### Cancer Distribution
Displays how frequently the gene is altered (mutations or CNVs) across MMRF studies.

Visuals include:
- Bar charts showing the number and percentage of affected cases by project.  
- A table summarizing **# of cases**, **percent affected**, and **unique mutations** per project.

![Gene Summary Placeholder — replace with screenshot](../images/gene-summary.png)

#### Most Frequent Mutations
Lists the top 20 mutations found in the selected gene.

For each mutation, the following fields are displayed:
- **DNA Change:** Chromosome, position, and nucleotide substitution.  
- **Protein Change:** Resulting amino acid change.  
- **Type:** General mutation classification (e.g., missense, nonsense).  
- **Consequence:** The biological effect (e.g., synonymous, noncoding).  
- **# Affected Cases in Gene:** Cases impacted by this mutation in the current dataset.  
- **Impact:** Severity classification (High, Moderate, Low, Modifier).  

All data can be exported in TSV format for external analysis.

---

### Mutation Summary Page

The **Mutation Summary** page provides detailed information about a single somatic mutation and its functional consequences.

#### Mutation Summary Section
- **UUID:** Unique mutation identifier.  
- **DNA Change:** Chromosome number, position, and nucleotide change.  
- **Type:** Mutation classification.  
- **Reference Genome Assembly:** Genome build reference (e.g., GRCh38).  
- **Reference Allele:** Nucleotide(s) in the reference sequence.  
- **Functional Impact:** Severity of the variant’s predicted effect.

#### External References
Quick links to external mutation databases: **dbSNP**, **COSMIC**, and **CIViC**.

#### Consequences
A table describes the mutation’s biological impact based on **Sequence Ontology** terms:

| Field | Description |
|-------|--------------|
| Gene | Affected gene symbol |
| AA Change | Amino acid substitution and position |
| Consequence | Effect of mutation on coding potential |
| Coding DNA Change | Exact nucleotide change and position |
| Impact | Predicted consequence severity (from VEP, SIFT, PolyPhen) |
| Transcript | Affected transcript ID (linked to Ensembl) |

![Mutation Summary Placeholder — replace with screenshot](../images/mutation-summary.png)

#### Cancer Distribution
Displays how many cases across MMRF projects contain this mutation.  
A bar graph and table summarize affected case counts and percentages by project.

---

## Filtering Mutations and Genes

### Custom Gene and Mutation Filters
Users can upload or manually input lists of genes or mutations to narrow the results. Accepted formats include **CSV**, **TSV**, and **TXT** files containing:

- **Gene Identifiers:** Gene symbols, Ensembl IDs, or Entrez IDs.  
- **Mutation Identifiers:** Mutation UUIDs or variant coordinates.

Upload your custom list using the **Upload Genes** or **Upload Somatic Mutations** buttons in the left panel.

---

### Facet Filters
Frequently used filters available on the left panel include:

- **Biotype:** Gene classification (e.g., protein-coding, lincRNA, pseudogene).  
- **Is Cancer Gene Census:** Filter for known cancer-associated genes (enabled by default).  
- **Impact:** Predicted variant impact using VEP, PolyPhen, and SIFT.  
  - *High (H):* Likely loss-of-function  
  - *Moderate (M):* Possibly functional impact  
  - *Low (L):* Likely benign  
  - *Modifier (MO):* Non-coding or unknown significance  
- **Consequence Type:** Biological effect category (missense, frameshift, stop-gained, etc.).  
- **Mutation Type:** High-level classification (SNV, insertion, deletion, etc.).

---

## Saving Gene and Mutation Sets

Filtered results can be saved for future analyses using:

- **Save/Edit Gene Set**  
- **Save/Edit Mutation Set**

These saved sets appear under your account and can be reloaded into the Mutation Frequency tool or used to define new cohorts.

---

## Exporting and Downloading

- **Download Visualizations:** Save as `.svg` or `.png`.  
- **Export Data:** Tables can be exported in `.tsv` or `.json`.  
- **Save Subsets:** Create new cohorts or save specific gene/mutation sets from within the interface.

---

*© The Multiple Myeloma Research Foundation. All rights reserved.*
