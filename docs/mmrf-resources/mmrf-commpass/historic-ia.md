# CoMMpass Interim Analysis  

The **CoMMpass study** was designed to collect and release genomic and clinical data in an iterative fashion over the course of the project. This structure ensured that researchers, pharmaceutical partners, and internal MMRF teams had access to high quality data in a timely and reproducible manner. Each **Interim Analysis (IA)** served as a defined “data cut”, incorporating new patients, new follow-up visits, or refinements to analytical pipelines and quality control standards.

Across the lifespan of CoMMpass, 24 interim analyses were planned, culminating in IA24, the final comprehensive release of harmonized clinical and genomic data for all study participants. 

## Data Release Framework
Each Interim Analysis release contained multiple data layers:

| Data Layer | Description | Example Outputs
|-------|--------------| --------------|
| Clinical Data | Updated patient-level variables (diagnosis, treatments, outcomes) | Clinical.tsv, therapy tables |
| Genomic Data | WGS/WES VCFs, RNA-seq expression, CNV, SV, and annotation files | .vcf.gz, .maf, .counts.txt |
| Metadata | Sample identifiers, assay QC metrics, version tracking | Sample manifests, readme logs |
| Documentation | README, change logs, pipeline versions | IA11_README.txt, JetStream logs |

## Accessing the Data

Historic **Interim Analysis (IA)** releases can be accessed directly through the **Cohort Builder** and **Repository** within the MMRF Virtual Lab. These releases contain **summary-level project files** (not individual patient-level files).

Follow the steps below to view and download an IA release:

**1. Select a Historic IA Release in the Cohort Builder**

- Navigate to **Cohort Builder** from the top navigation bar.
- Expand the **General** category.
- Open the **Project ID card**.
- Select the IA release you wish to access (e.g., MMRF-COMMPASS-IA22, MMRF-IA11, MMRF-IA15, etc.).

Selecting an IA sets your **active cohort** to that project-level data package.

**2. Navigate to the Repository**

- Within the IA selected, click **Repository** in the header.
- The Repository will now display **only the files associated with the selected IA release**.

**3. Download Summary Files**

Historic IA releases contain **project-level summary files**. These files can be downloaded individually or added to your Cart for batch download.

> **Note:** 
Historic IA releases include *summary-level files* only.
Sample-level genomic files (WGS/WES/RNA-seq) are available through the final IA24 release.

---

*© The Multiple Myeloma Research Foundation. All rights reserved.*