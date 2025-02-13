---
description: Open source software for processing and analyzing images.
---

# ImageJ

## URL

https://imagej.com

## Description

ImageJ provides a powerful toolkit to manipulate and analyze images at the pixel level. It supports operations like contrast enhancement, filtering (sharpening, blurring), edge detection, and color channel analysis. After calibrating the scale, the software can measure distances and areas, [count or detect objects, align and overlay multiple images, and perform mathematical image comparisons​](https://imagej.net/ij/docs/pdfs/Image_Processing_with_ImageJ.pdf). Its capabilities span many techniques, including image registration, segmentation, object tracking, and more​, all expandable through hundreds of community-developed [plugins](https://imagej.net/list-of-extensions)​. Because it is free and open-source with a large user community, new formats and features are constantly being added.

**Investigative Applications:** OSINT researchers can leverage ImageJ in various ways to support investigations:

* **Geospatial Analysis (Satellite and Aerial Images):** Investigators analyze satellite imagery to measure features of interest. For example, an OSINT team used ImageJ alongside Google Earth to calculate the diameter of an [explosion crater in Gaza​](https://thepublicsource.org/al-maghazi-bakery-bombing-gaza). By calibrating the image using a known reference (in that case,[ a person of known height visible next to the crater](https://www.youtube.com/watch?v=c1ml-TGiGLk)), they set a pixel-to-meter scale and measured the crater (\~13.6 m across). ImageJ’s measurement tools and ability to overlay images help verify dimensions of buildings, craters, or distances between landmarks in conflict zone imagery. It can also be used to compare “before and after” images by aligning them (using plugins like [**StackReg** ](https://bigwww.epfl.ch/thevenaz/stackreg/)for image registration) and then flickering or subtracting images to highlight changes — useful for damage assessments or detecting new construction.
* **Crowd Monitoring and Object Counting:** ImageJ can semi-automate the counting of objects or people in imagery. By converting an image (e.g. an overhead protest photo) to grayscale and applying a threshold, researchers can isolate high-contrast features like heads or vehicles and use the _Analyze > Analyze Particles_ [function ](https://edis.ifas.ufl.edu/publication/HS1405)to count them​. Initially used in scientific contexts (counting cells or plant leaves), this technique can estimate crowd sizes or count assets (cars, aircraft, etc.) in an image, saving time over manual counting. ImageJ’s counting tools can label each detected object, helping avoid double-counting​. Analysts should visually verify the results, as complex scenes may require adjusting parameters or minor manual corrections.
* **Infrastructure and Environmental Assessments:** In conflict monitoring or disaster response, ImageJ enables detailed comparisons of infrastructure images. An investigator might use ImageJ to measure the extent of damage to a building by tracing craters or blast marks on satellite photos. The area measurement tool can calculate the size of an oil spill or flood waters in pixels, which can be converted to a real area with proper calibration. By aligning multi-date images of the exact location, one can detect new defensive fortifications, terrain changes, or scorched earth by subtracting one image from another. ImageJ’s ability to apply consistent processing (e.g. identical contrast adjustment or background subtraction across images) ensures a[ fair side-by-side](https://microscopy.arizona.edu/learn/digital-image-ethics) comparison​. This can be crucial for maintaining objectivity in reporting changes and highlighting only actual differences rather than artifacts.
* **Maritime Tracking (Imagery-Based):** While dedicated tools exist for vessel tracking (AIS databases, etc.), ImageJ can assist in analyzing imagery where ships appear. For instance, a researcher examining a synthetic aperture radar (SAR) image or high-resolution aerial photo of a port can use ImageJ to enhance the image and detect vessels. By increasing contrast or using [edge-detection](https://imagej.net/ij/plugins/canny/index.html), ships and their wakes become more distinguishable from water. The investigator can then threshold the image to isolate those shapes and count them or measure their lengths. Measuring a ship’s length in an image (after setting the scale) can help identify the ship class or type if exact dimensions are known. This technique might reveal “dark ships” (vessels not broadcasting their position) in areas of interest. ImageJ’s time-series support (opening[ image stacks](https://serc.carleton.edu/earth_analysis/image_analysis/introduction/day_2_part_2.html) or sequential frames) also allows frame-by-frame analysis of ship movement in a series of satellite images, effectively tracking motion when automated tools are not available.
* **Forensic Image Verification:** ImageJ is not a one-click deepfake detector, but it offers a suite of tools that, in the hands of an experienced user, can assist in verifying the authenticity of images. Investigators can perform Error Level Analysis (ELA) manually by resaving an image at a known compression level and subtracting it from the original to reveal compression inconsistencies (areas that might have been digitally altered). They can examine noise distribution by zooming in and checking if the noise pattern or color levels are uniform across the image – discrepancies might indicate cloning or splicing. With plugins or macros, ImageJ can detect duplicated segments within an image (similar to Forensically’s clone detection) by finding identical areas. However, interpreting these results requires expertise. Open-source researchers **should not rely on ImageJ analysis alone** to conclude an image is fake or doctored​. Any anomalies flagged by the software must be corroborated with other methods (metadata checks, visual inspection, source verification), since false positives are possible and context is crucial. Still, using ImageJ offline can be preferable for sensitive cases, as noted by investigators who avoid uploading images to[ online forensics services ](https://bellingcat.gitbook.io/toolkit/more/all-tools/forensically)for privacy reasons.

#### Other possible uses related to open source investigations:

* [**Dot Counting**](https://imagej.net/imaging/particle-analysis): Count distinct markers, symbols, or objects (e.g., dots, like in maritime or geospatial datasets) using Analyze Particles after applying thresholding. This can be useful for mapping or monitoring activities in specific regions.
* **Crowd Analysis**: Estimate crowd sizes in aerial or event photographs by isolating individuals with segmentation techniques and counting them with Analyze Particles or other machine learning-based approaches, such as convolutional neural networks in Python.&#x20;
* **Infrastructure Analysis**: Measure the dimensions of buildings, roads, or other infrastructure elements in satellite or drone imagery by calibrating the scale and using tools like [Add Scale Bar](https://kaplinskylab.domains.swarthmore.edu/scalebar.htm).
* **Maritime Traffic Monitoring:** Count ships or vessels in ocean imagery by isolating them through segmentation and thresholding. This enables the analysis of port activities or maritime patterns.
* **Deforestation Tracking:** Using binary masks and particle analysis, identify and count cleared forest patches in satellite imagery, providing quantitative measures over time.
* **Object Detection in Crowded Areas**: Segment overlapping objects, such as cars in parking lots or containers in industrial areas, using tools like the Watershed Algorithm, and count them for research purposes.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

**a. For Classic ImageJ or Fiji**

* **Operating System**: Works on Windows, macOS, and Linux.
* **Java Requirement**: Requires Java Runtime Environment (JRE) 1.5 or later. Many distributions come bundled with Java to simplify installation.
* **Hardware**: Minimum hardware requirements are low, but tasks involving large datasets or complex analyses (e.g., 3D rendering) benefit from higher RAM and faster CPUs.
* **Installation**: Download and install from the official [ImageJ website](https://imagej.net/ij/) or the [Fiji website](https://fiji.sc/).

**b. For ImageJ Online**

* **Browser**: A modern web browser that supports Java applets or WebAssembly.
* **Platform Independence**: Can run on any device with internet access, including tablets and Chromebooks.
* **No Installation Required**: Simply access the tool through the browser.

## Limitations

* **Manual Preprocessing**: Effective object detection often requires initial adjustments like noise reduction or contrast enhancement.
* **Complexity**: Advanced tasks may require plugins or scripting knowledge for optimal results.
* **Learning Curve**: Understanding the settings (e.g., particle size thresholds, segmentation parameters) can take time.

## Ethical Considerations

#### Ethical Considerations in Using ImageJ for open source investigations

When using ImageJ (or any similar tool) for open source research purposes, several ethical considerations must be considered to ensure responsible, lawful, and ethical usage of the software.

* **Avoid Analyzing Private Individuals**: Refrain from analyzing or sharing images that contain identifiable individuals without their consent, especially if the data collection could lead to harm or violate privacy laws.
* **Adhere to GDPR and Data Privacy Laws**: Ensure compliance with local and international privacy regulations, such as the EU's General Data Protection Regulation (GDPR), especially when working with images collected from public or private sources.
* **Fact-Check Metadata**: Validate the authenticity of metadata (e.g., timestamps, geotags) accompanying the images to avoid using misleading or falsified information.
* **Avoid Overinterpreting Results**: Ensure that any conclusions drawn from image analysis are based on accurate and reproducible data. Misrepresentation of findings could lead to misinformation or damage of reputations.
* **Disclose Limitations**: Be transparent about the limitations of your analysis (e.g., errors in segmentation or counting accuracy).
* **Respect Intellectual Property**: When using publicly available images (e.g., from social media or mapping platforms), attribute the source appropriately.
* **Open Access to Findings**: Share your methodologies openly (without sensitive data) to enable peer review and prevent misuse.

## Guides and articles

[ImageJ User Guides](https://imagej.net/learn/user-guides)

## Tool provider

[ImageJ](https://imagej.net/software/imagej) Schneider, C. A., Rasband, W. S., & Eliceiri, K. W. (2012). NIH Image to ImageJ: 25 years of image analysis. _Nature Methods_, _9_(7), 671–675.[ doi:10.1038/nmeth.2089](https://doi.org/10.1038/nmeth.2089)

[ImageJ2](https://imagej.net/software/imagej2) Rueden, C. T., Schindelin, J., Hiner, M. C., DeZonia, B. E., Walter, A. E., Arena, E. T., & Eliceiri, K. W. (2017). ImageJ2: ImageJ for the next generation of scientific image data. _BMC Bioinformatics_, _18_(1).[ doi:10.1186/s12859-017-1934-z](https://doi.org/10.1186/s12859-017-1934-z)

[Fiji](https://imagej.net/software/fiji) Schindelin, J., Arganda-Carreras, I., Frise, E., Kaynig, V., Longair, M., Pietzsch, T., … Cardona, A. (2012). Fiji: an open-source platform for biological-image analysis. _Nature Methods_, _9_(7), 676–682.[ doi:10.1038/nmeth.2019](https://doi.org/10.1038/nmeth.2019)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
