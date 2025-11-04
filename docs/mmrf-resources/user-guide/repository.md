# Repository & Data Download

## Introduction

The **Repository** is where users can browse and download data files associated with their selected cohort in the MMRF Virtual Lab. It provides detailed file listings and a powerful filtering panel for refining the dataset of interest.

> **Note:** Filters in the Repository apply to *files* within your cohort. To filter *cases or participants*, use the **Cohort Builder**.

The Repository can be accessed in two ways:
- By selecting **Repository** in the Analysis Center toolbar.
- By clicking the **Repository** card on the Analysis Center homepage.

![Repository Entry Placeholder — replace with screenshot](../images/repository-entry.png)

---

## Choosing a Cohort

The files displayed in the Repository correspond to the active cohort you are currently working with. The active cohort is shown in the **Cohort Bar** at the top of the page.

To explore all available files in the MMRF Virtual Lab, you can create a new cohort from the toolbar and use it within the Repository.

![Cohort Bar Placeholder — replace with screenshot](../images/cohort-bar.png)

---

## Filtering a Set of Files

The left-hand **Filters** panel allows you to refine which files are displayed in the Repository. Each filter category can be expanded or collapsed and includes checkboxes, search, and reset options. Filters dynamically update to reflect the available data within your active cohort.

The following filter categories are currently available in the **MMRF Virtual Lab Repository**:

- **Experimental Strategy:** Sequencing or analysis method used (e.g., *Whole Exome Sequencing (WXS)*, *Whole Genome Sequencing (WGS)*, *RNA-Seq*).  
- **WGS Coverage:** Indicates sequencing depth (e.g., *0x–10x*, *10x–25x*, *no data*).  
- **Data Category:** Groups files by data type, such as *simple nucleotide variation*, *sequencing reads*, *copy number variation*, *structural variation*, or *transcriptome profiling*.  
- **Data Type:** Describes the specific file type (e.g., *Annotated Somatic Mutation*, *Aligned Reads*, *Transcript Fusion*, *Structural Rearrangement*).  
- **Data Format:** File format used for storage (e.g., *VCF*, *BAM*, *MAF*, *TSV*, *BEDPE*, *TXT*).  
- **Platform:** Technology or instrument used to generate the data (e.g., *Illumina*).  
- **Access:** Indicates access level — *Open* or *Controlled*. Controlled-access files require approved user permissions.  
- **Tissue Type:** Biological source of the specimen (e.g., *tumor*, *normal*).  
- **Tumor Descriptor:** Describes the tumor context (e.g., *primary*, *recurrence*, *not applicable*).  
- **Specimen Type:** Source specimen (e.g., *bone marrow NOS*, *peripheral blood NOS*).  
- **Preservation Method:** Method used to preserve the specimen (e.g., *unknown*).

![Repository Filter Panel – MMRF Virtual Lab](../images/repository-filters.png)

Filters can be sorted alphabetically by **Name** or by **Files** count using the arrow icons in each card header. To search within a filter card, click the magnifying-glass icon. To reset a filter, click the circular arrow icon in the upper-right corner of the card.

If you need a filter not listed, use **Add a Custom Filter** at the top of the panel. You can browse additional filters or search by name. Added filters will appear under the **Custom Filters** section and can be removed by clicking the **X** in the card header.

![Custom Filter Placeholder — replace with screenshot](../images/custom-filter.png)

---

## Files Table

The **Files Table** displays all files associated with the current cohort after filters are applied. Each row represents an individual file with key metadata.

Default columns include:

- **Access:** Indicates *Controlled* or *Open* access. Controlled files require data access approval.  
- **File Name:** The name of the data file. Clicking opens the File Details page.  
- **Cases:** Number of subjects included in the file.
- **Project:** Identifies the MMRF study or dataset. 
- **Data Category:** Category of the file (e.g., *somatic structural variation*).  
- **Data Format:** The type of file (e.g., *VCF*, *MAF*).
- **File Size:** Size of the file.  

You can customize visible columns using the **Customize Columns** button above the table, sort by clicking column headers, or use the search bar to find specific files.

The **JSON** and **TSV** buttons allow you to download metadata summaries for all files currently displayed.

![Files Table Placeholder — replace with screenshot](../images/files-table.png)

---

## File Summary Page

Clicking on any file name within the Repository opens the **File Summary Page**, which provides:
- File name, size, and format
- MD5 checksum
- Access level (*Open* or *Controlled*)
- Associated cases and samples
- Analysis pipeline and data provenance

From this page, you can:
- Download individual files (if authorized)
- Add the file to your Cart
- Review linked metadata and related files

## Downloading a Set of Files

Once you have refined your filters and file list, you can export data and metadata using the toolbar above the table.

### Repository Toolbar Actions

- **Sample Sheet:** Download a summary of all samples in the current file view.  
- **Metadata:** Export detailed file metadata in JSON format.  
- **Manifest:** Generate a manifest for batch downloads via the Gen3 Client.  
- **Add All Files to Cart:** Add all visible files to your Cart.  
- **Remove All From Cart:** Clear all files from the Cart.  

> The **Manifest** file is required for downloading files using the **Gen3 Client** (instructions below).

![Repository Toolbar — replace with screenshot](../images/repository-toolbar.png)

---

## Working with the Cart

Click **My Cart** in the upper-right corner to review all files you’ve selected. The Cart view provides file-level details, totals, and metadata export options.

### Cart Options

- **Download Cart:** Download the manifest of all files currently in the cart.  
- **Biospecimen / Clinical / Sample Sheet / Metadata:** Export metadata in various formats.  
- **Remove From Cart:** Remove selected files individually or in bulk.  

Each row includes interactive links for **File Name**, **Cases**, and **Project ID**, which navigate to corresponding detail pages.

![Cart Page Placeholder — replace with screenshot](../images/cart.png)

---

## Manifest File

A **Manifest** file is a list of file identifiers (GUIDs) that reference data stored in the MMRF Virtual Lab. Manifest files are used with the **Gen3 Client** to download large datasets efficiently via the command line.

To generate a manifest:
1. Filter your files or add files to your cart.

2. Click **Manifest** in the Repository toolbar or **Download Cart** on the Cart page.

3. Save the `.json` file to your local system.

![Manifest Placeholder — replace with screenshot](../images/repository-manifest.png)

---

## Downloading Data with the Gen3 Client

The **Gen3 Client** is a secure command-line tool for downloading data from Gen3-based platforms such as the MMRF Virtual Lab. You can use it to download single files or batches of files listed in a manifest.

---

### Step 1. Install the Gen3 Client

**Mac Installation**
1. Download the latest installer:  
   [https://github.com/uc-cdis/cdis-data-client/releases/latest](https://github.com/uc-cdis/cdis-data-client/releases/latest)
2. Run the installer (typically installs to `/Applications`).

**Windows Installation**

1. Download the latest executable from the same link.  
2. Unzip and place it in a directory of your choice.  
3. (Optional) Add that directory to your **PATH** via *Edit Environment Variables* in the Control Panel.

---

### Step 2. Obtain Your Credentials

1. Go to [https://dev-virtuallab.themmrf.org](https://dev-virtuallab.themmrf.org) and log in.  
2. Click your username in the top-right corner.  
3. Select **Create an API Key**.  
4. Download your credentials JSON file.  

> Keep your credentials secure. API keys are valid for **30 days**, after which new credentials must be generated.

---

### Step 3. Configure a Profile

Once installed, configure your Gen3 Client profile with your credentials:

```bash
/Applications/gen3-client configure \
  --profile=dev-mmrf \
  --cred=path-from-current-dir-to-file.json \
  --apiendpoint=https://dev-virtuallab.themmrf.org
```

- `profile`: Name your configuration (e.g., *dev-mmrf*). 

- `cred`: Path to your downloaded credentials file.

- `apiendpoint`: API endpoint for the Virtual Lab environment.

Test your setup:

```bash
/Applications/gen3-client auth --profile=dev-mmrf
```

You should see a lsit of your authorized projects and permissions.

### Step 4. Download Data

**a. Single File Download**

```bash
/Applications/gen3-client download-single \
--profile=dev-mmrf \
--guid=dg.MMRF/dc1040c6-abc3-4863-8560-d5107a30a828 \
--no-prompt --skip-completed
```

  **b. Manifest (Batch) Download**

```bash
/Applications/gen3-client download-multiple \
--profile=dev-mmrf \
--manifest='/path-to-manifest.json' \
--no-prompt --skip-completed
```

  - Ensure the manifest file path is correct.
  - The download will begin automatically and show progress in the terminal.
  - Files are saved to your current working directory unless specified otherwise.

## Notes & Best Practices

- Use **manifest downloads** for large datasets; browser downloads are suitable for small sets only.
- **Controlled Access** data requires approved permissions through the MMRF Data Access Committee.
- Always ensure your API credentials are valid before initiating downloads.
- If your credentials expire, reconfigure your Gen3 Client profile with the new key.
- Manifest files are tied to the data version at the time of creation; regenerating them ensures accuracy with new data releases.