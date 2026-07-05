# Genome Browser

## Launch Genome Browser

The Genome Browser allows users to browse somatic genomic alterations over any coding, noncoding, or intergenic loci. Types of supported genomic alterations include mutation, copy number variation (CNV) segment, structural variation (SV), and gene fusion. To launch the tool, users can use the search box to search for a gene, or directly input a genomic coordinate.
[![Search Box](images/genome-browser/image1-gene-search.png)](images/genome-browser/image1-gene-search.png "Click to see the full image.")

As an example, enter "crebbp" to search for the CREBBP gene locus.

[![Genome Browser Launch](images/genome-browser/image2-gene-search.png)](images/genome-browser/image2-gene-search.png "Click to see the full image.")

This allows the launch of the Genome Browser over the CREBBP locus as seen below.

[![Genome Browser Launch](images/genome-browser/image3-crebbp-locus.png)](images/genome-browser/image3-crebbp-locus.png "Click to see the full image.")

## Genome Browser Components

On the top row are genome browser control options, including a search box that prints the genomic coordinate of the current locus, and zoom in/out buttons.

Under the control buttons is the genomic coordinate ruler. The ruler allows zooming into a region of interest by dragging on it.

Under the genomic ruler are the genome browser tracks, including Genome Browser, and gene track. To pan the genome browser, users can drag on any track and pan left or right. Under the genomic tracks is the track legend.

Similar to ProteinPaint tool, mutations are displayed in same "lollipop" style in Genome Browser. In addition, presence of SV or gene fusion break points are also displayed as half-filled disks amongst mutations.

For CNV segments, the Genome Browser displays horizontal lines in different colors indicating CNV segments in the current view range from the current cohort. Each line is one CNV segment, where line start and stop positions are segment start and stop coordinates, and line color for copy number change as indicated in the legend. 

Hovering the cursor over a CNV segment will display a tooltip as below.

[![CNV Segment Tooltip](images/genome-browser/image4-cnv-segment-tooltip.png)](images/genome-browser/image4-cnv-segment-tooltip.png "Click to see the full image.")

Clicking on a CNV segment will bring out additional details about the case.

[![Case Details](images/genome-browser/image5-cnv-segment-additional-details.png)](images/genome-browser/image5-cnv-segment-additional-details.png "Click to see the full image.")

The Genome Browser organizes CNV segments by case, with one row for each case. Each row will contain all CNV segments of that case for the view range. Thus it may show multiple CNV segments in a row, all from the same case.

[![CNV Segments by Case](images/genome-browser/image6-example-of-cnv-segments-in-a-row.png)](images/genome-browser/image6-example-of-cnv-segments-in-a-row.png "Click to see the full image.")


## Genomic Alteration Data Summaries

At the top left of the Genome Browser are two text labels showing summaries of the displayed data, including number of alterations and number of samples. Click each label to show corresponding options.

[![Data Summaries](images/genome-browser/image7-cnv-data-summaries.png)](images/genome-browser/image7-cnv-data-summaries.png "Click to see the full image.")

Click on the "N variants" label and then select the "List" option. A panel will display lists of alteration events by type. Click on an item to view its details. 

[![CNV List Panel](images/genome-browser/image8-n-cnvs-label-summary.png)](images/genome-browser/image8-n-cnvs-label-summary.png "Click to see the full image.")

Clicking the "N samples" label will show a summary of all cases with at least one alteration event across a set of dictionary variables. 

[![Sample Summary](images/genome-browser/image9-n-samples-label-summary.png)](images/genome-browser/image9-n-samples-label-summary.png "Click to see the full image.")

With any variable summary, click on a category to create a new Genome Browser track side-by-side with the existing track and display genomic alteration data from a subset of cases from that category.

[![Side-by-Side Tracks](images/genome-browser/image10-cnv-track-side-by-side-example.png)](images/genome-browser/image10-cnv-track-side-by-side-example.png "Click to see the full image.")

## Customize Display Parameters 

The legend at the bottom provides ways to filter the genomic alteration events included in the visualization. At the Mutation section, each entry represents a mutation consequence and its occurrence. CNV, SV or gene fusion will also be represented. User can click on an entry and use "Hide" or "Show only" options to customize visibility for each data type.

The CNV section in the legend displays a color scale for the CNV events.

[![Track Legend](images/genome-browser/image11-genome-browser-display-example.png)](images/genome-browser/image11-genome-browser-display-example.png "Click to see the full image.")

Clicking "Hide" for "Copy number loss" will update the view as below. To show "Copy number loss" events again, click the striked label in the legend. 

[![Hide Copy Number Loss](images/genome-browser/image12-hide-copy-number-loss-example.png)](images/genome-browser/image12-hide-copy-number-loss-example.png "Click to see the full image.")

Click on the text label "Filter" at the end of the legend to show a menu with an input box. The Genome Browser by default limits the maximum length of segments displayed to 2 Mb. The maximum length is adjustable.

[![Filter Menu](images/genome-browser/image13-max-segment-length-modification.png)](images/genome-browser/image13-max-segment-length-modification.png "Click to see the full image.")

Setting the max length to a larger value will allow it to include more segments of a longer length, as seen below using 8 Mb.

[![8 Mb Threshold](images/genome-browser/image14-larger-max-length-example.png)](images/genome-browser/image14-larger-max-length-example.png "Click to see the full image.")

Setting the max length to a smaller value will limit the analysis to focal CNV segments and exclude large ones, as demonstrated below using a 500 Kb threshold.

[![500 Kb Threshold](images/genome-browser/image15-smaller-max-segment-example.png)](images/genome-browser/image15-smaller-max-segment-example.png "Click to see the full image.")

The Genome Browser has an upper limit of 10,000 CNV segments per view. To demonstrate this limit, the following example shows a 31 Mb region on chromosome 9 containing 10,000 CNVs. At this scale, a prominent deletion hotspot becomes visible at the CDKN2A/2B locus on the telomeric region of chromosome 9.

[![Chromosome 9 CDKN2A/2B](images/genome-browser/image18-max-cnv-segments-per-view-example.png)](images/genome-browser/cnv17.png "Click to see the full image.")
