# Data Processing and Harmonization

To ensure data consistency and scientific rigor, all CoMMpass sequencing data were processed through a standardized bioinformatics pipeline developed and maintained by the **Translational Genomics Research Institute (TGen)**.

This system, known as the **Phoenix pipeline**, was designed to generate high-quality, harmonized genomic outputs from raw sequencing data across the study’s many sites and timepoints. The pipeline enabled reproducible analyses and uniform quality control for every sample in the study — ensuring comparability across more than a decade of sequencing.

The Phoenix framework supports multiple data types, including:

- Whole-exome sequencing (**WES**)
- Whole-genome sequencing (**WGS**)
- RNA-sequencing (**RNA-Seq**)
- Single-cell RNA-sequencing (**scRNA-Seq**)

Through automated data ingestion, alignment, and variant calling, the pipeline produces standardized files ready for downstream analysis and integration with clinical data.

Each file follows a **structured naming convention** that encodes study, participant, sample type, and data modality (e.g., WES, WGS, RNA-Seq), enabling full traceability from sample collection to processed results.

For example:

- `MMRF_1234_BM_CD138_DNA_WES.bam` → Whole exome sequencing BAM file for patient 1234, CD138+ bone marrow sample.
- `MMRF_1234_TP1_RNA_Seq.counts` → RNA-Seq gene expression counts for patient 1234 at timepoint 1.

---

*© The Multiple Myeloma Research Foundation. All rights reserved.*