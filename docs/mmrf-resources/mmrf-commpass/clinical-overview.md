# CoMMpass Clinical Data Overview

The clinical dataset generated through the **MMRF CoMMpass Study** is one of the richest real-world and longitudinal clinical resources available for multiple myeloma. It integrates structured clinical assessments, laboratory data, treatment timelines, and long-term outcomes for more than 1,100 patients.

This page provides a high-level overview of the clinical data and how it was harmonized for use in the MMRF Virtual Lab.

---

## Clinical Data Collection Framework

Clinical data were collected from:

- Routine clinical care  
- Structured study visits  
- Trial-based assessments (FORTE subcohort)  
- Patient-reported outcome instruments  

Because visit schedules varied across patients and centers, clinical timing was standardized using **"days from baseline"** relative to the diagnosis date to support reproducible analyses.

---

## Major Categories of Clinical Data

The harmonized dataset includes variables across key clinical domains such as:

### **Demographic Information**

- Age at diagnosis  
- Sex  
- Race and ethnicity (when collected)  
- ECOG performance status  

### **Diagnostic & Disease Characteristics**

- Laboratory values (hematology, chemistry, biomarkers)  
- Bone disease assessments  
- Imaging interpretations  
- Pathology impressions  
- Cytogenetics / FISH results (subset)

### **Treatment Details**

- Initial therapy regimens  
- Drug-level administration data  
- Transplant information  
- Response and relapse documentation  
- Subsequent lines of therapy (observational cohort)

### **Clinical Outcomes**

- Response assessments based on IMWG criteria  
- Dates of progression, relapse, and treatment change  
- PFS, OS, and time-to-event variables  
- Vital status

### **Patient-Reported & Supportive Care Data**
Where collected:

- Quality-of-life questionnaire results  
- Supportive care medications and interventions

These data enable clinical insights into disease burden, treatment patterns, and real-world outcomes.

---

## Harmonization of Clinical Data

Because CoMMpass combined data from two cohorts with different study designs, a multi-step harmonization process was required:

### **1. Variable Mapping**
Clinical variables from the observational cohort and trial cohort were aligned to a unified data dictionary modeled after **NCI GDC concepts**.

### **2. Derived Variables**
Standard logic was applied to produce:

- Days-to-event variables  
- Therapy line assignments  
- Consolidated pathology and lab indicators  
- Normalized visit timing

### **3. Quality Control**
All tables underwent:

- Consistency checks  
- Logical sequencing validation  
- Cross-referencing with sequencing metadata  
- Harmonization across sites and timepoints

### **4. Final Harmonized Tables**
The final CoMMpass clinical dataset includes a curated set of tables (e.g., demographics, diagnosis, outcomes, labs, administered regimens) used by:

- **Cohort Builder**
- **Cohort Comparison**
- **Clinical Data Analysis**

These tables form the backbone of all cohort creation and clinical analytics within the MMRF Virtual Lab.

---

## Use of Clinical Data in the Virtual Lab

The clinical dataset powers multiple tools:

### **Cohort Builder**
Filter patients by disease features, treatments, outcomes, or demographics.

### **Cohort Comparison**
Compare characteristics across user-defined cohorts with visual summaries.

### **Clinical Data Analysis**
Explore distributions, survival, and statistics for any clinical variable.

---

© The Multiple Myeloma Research Foundation. All rights reserved.
