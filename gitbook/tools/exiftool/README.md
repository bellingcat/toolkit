---
updated: '2025-10-31'
description: >-
  ExifTool is a command-line application for reading, writing, and editing meta
  information in files.
---

# ExifTool

## URL

[https://exiftool.org/](https://exiftool.org/)

current version: **13.40 (2025‑10‑24)**; latest **production** (MetaCPAN) release is **13.36 (2025‑09‑09)**

## Description

ExifTool is a cross‑platform Perl library and command‑line application for reading, writing and editing metadata across thousands of file types (images, video, audio, documents). It supports major standards (EXIF, IPTC, XMP, ICC) plus extensive camera maker notes, and can output JSON/CSV/XML/HTML for downstream analysis. It also reads timed/video metadata (e.g., GPS tracks), computes image‑data hashes, and (since 2025) can generate SVG plots of tag values via `-plot`. Typical OSINT pivots include extracting capture dates/locations, identifying editing software, reconciling sidecars, and comparing metadata deltas between versions.

## Using ExifTool for Open Source Research: Code Examples and Applications

ExifTool can be a helpful utility for open-source researchers. It allows for the extraction and analysis of metadata from various file types, which can reveal hidden information about digital media.

{% hint style="warning" %}
Remember that all metadata can be manipulated and should never be taken at face value. Always verify metadata through independent sources or methods before drawing conclusions.
{% endhint %}

### Getting started (install, PATH, and first commands)

ExifTool is designed to be used from the command line (Terminal on macOS/Linux, Command Prompt/PowerShell on Windows). The quickest workflow is: **install → confirm it runs → `cd` into your case folder → run `exiftool` on files**.

#### **1) Install ExifTool**

**Windows (standalone executable)**

1. Download the Windows package from the [official ExifTool site](https://exiftool.org/) and unzip it.&#x20;
2. Rename `exiftool(-k).exe` to `exiftool.exe`. (The **`(-k)`** part is intentional: it makes ExifTool **pause at the end** with a “press any key” prompt when you run it by double-clicking, so the window doesn’t immediately close.)
3. Move **both** `exiftool.exe` **and** the `exiftool_files` folder into a directory that is in your [**PATH** (or keep them together in a folder you’ll add to PATH).](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)&#x20;

**macOS (Homebrew)**

```bash
brew install exiftool
```

**Linux (package manager)**\
On Debian/Ubuntu-family systems, ExifTool is commonly installed via:

```bash
sudo apt update
sudo apt install libimage-exiftool-perl
```

### **2) Add ExifTool to your PATH (so it runs from any folder)**

If `exiftool -ver` works anywhere, you can skip this step.

**Windows (recommended approach)**

1. Create a folder such as `C:\Tools\exiftool\` and place `exiftool.exe` + `exiftool_files\` inside it.
2. Add `C:\Tools\exiftool\` to your [**Path** environment variable (User or System PATH).](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)
3. Open a _new_ Command Prompt/PowerShell window and test:

```powershell
exiftool -ver
```

<div align="left"><figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure></div>

**macOS/Linux**\
Homebrew and most package-manager installs place `exiftool` on your PATH automatically. Test:

```bash
exiftool -ver
```

Tip: If you’re unsure what’s being executed, check:

* Windows: `where exiftool`
* macOS/Linux: `which exiftool`

### **3) Work from a case folder (and navigate to it)**

Keeping a dedicated folder per investigation makes it easier to track inputs/outputs and avoid overwriting originals.

**macOS/Linux**

```bash
mkdir -p ~/osint/case
cd ~/osint/case
ls
```

**Windows (PowerShell)**

```bat
mkdir D:\osint\case
cd D:\osint\case
dir
```

**4) Run your first commands**

**Read all metadata from one file**

```bash
exiftool image.jpg
```

<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

***

### **Example Commands**

#### **Extracting GPS Coordinates from Images**

```bash
exiftool -gpslatitude -gpslongitude suspect_image.jpg
```

This command extracts GPS latitude and longitude data from `suspect_image.jpg`. After obtaining the GPS coordinates, you can input them into mapping services like Google Earth to visualize the location.

#### **Analyzing Timestamps to Build Timelines**

```bash
exiftool -AllDates suspect_image.jpg
```

This command retrieves all date and time metadata tags from the image, such as `CreateDate`, `ModifyDate`, and `DateTimeOriginal`. This information can help establish a timeline of events.**Comparing Metadata Across Multiple Files**

```bash
exiftool -T -FileName -CreateDate -Model *.jpg > metadata_report.txt
```

This command generates a tab-delimited report (`metadata_report.txt`) for all `.jpg` files in the directory, listing filenames, creation dates, and camera models.

#### **Identifying Software Used for Editing**

```bash
exiftool -Software suspect_image.jpg
```

This command extracts the `Software` tag, indicating any software used to edit or process the image. Detecting editing software can suggest whether an image has been manipulated.

#### **Detecting Metadata Anomalies**

```bash
exiftool -G1 -a -s suspect_image.jpg
```

This command displays all metadata tags, including duplicates, with group names (`-G1`), and in short format (`-s`). Anomalies or inconsistencies in metadata can indicate tampering or provide investigative leads.

#### **Extracting Thumbnail Images**

```bash
exiftool -b -ThumbnailImage suspect_image.jpg > extracted_thumbnail.jpg
```

Extracting the embedded thumbnail can reveal the original image before any edits were made, which is useful if the main image has been altered but the thumbnail hasn't.

#### **Retrieving Metadata from Documents**

```bash
exiftool suspect_document.pdf
```

For documents, this command extracts metadata from `suspect_document.pdf`, potentially revealing the author's name, creation date, software used, and more.

#### **Extracting Metadata from Video Files**

```bash
exiftool -Title -CreationDate -Duration suspect_video.mp4
```

This command retrieves specific metadata from `suspect_video.mp4`, such as the title, creation date, and duration, aiding in video analysis during investigations.

#### **Filtering Files with Specific Metadata Attributes**

```bash
exiftool -if '$Make eq "Apple"' -FileName *.jpg
```

This command processes all `.jpg` files and lists filenames where the `Make` tag equals "Apple". This is useful for identifying images taken with specific devices.

#### **Searching for Files Created in a Specific Timeframe**

```bash
exiftool -if '$CreateDate ge "2024:01:01 00:00:00" and $CreateDate le "2024:12:31 23:59:59"' -FileName *.jpg
```

This command lists all images taken within the year 2024, helping to narrow down files relevant to a specific period.

#### **Automating Metadata Extraction for Web Downloads**

When downloading media from the web, you can automate metadata extraction:

```bash
wget -O downloaded_image.jpg http://example.com/image.jpg && exiftool downloaded_image.jpg
```

This command downloads an image and immediately extracts its metadata, streamlining the process during an investigation.

#### **Extracting Hidden Metadata from Social Media Images**

**Note:** Many social media platforms strip metadata from images. However, some may retain certain metadata.

```bash
exiftool social_media_image.jpg
```

This command attempts to extract any remaining metadata from an image downloaded from social media. While limited, any recovered data could be valuable.

#### **Extracting Metadata from Audio Files**

```bash
exiftool -Artist -Album -Track suspect_audio.mp3
```

This command retrieves metadata from `suspect_audio.mp3`, which can reveal artist information, album names, and track numbers, helpful in tracking the distribution of audio files.

#### **Generating KML Files for Geospatial Analysis**

```bash
exiftool -p kml.fmt -q -n images/ > photos.kml
```

This command creates a KML file (`photos.kml`) from images in the `images/` directory that can be loaded into Google Earth or other GIS software to visualize photo locations.

**Note:** You'll need to create a `kml.fmt` formatting file as per ExifTool documentation.

#### **Verifying File Authenticity with Checksums**

```bash
exiftool -MD5Checksum suspect_file.jpg
```

This command calculates the MD5 checksum of `suspect_file.jpg`, which can be used to verify file integrity or compare against known hashes.

**Note:** An MD5 checksum is a unique, fixed-size “fingerprint” generated by applying the MD5 hashing algorithm to a file’s contents. Even a tiny change, like altering one pixel in an image or one character in a text document, results in a completely different MD5 value. By comparing the MD5 checksum of a file to a trusted, known-good checksum, you can quickly determine if the file has been altered, corrupted, or tampered with.

Keep in mind that MD5 is just one type of hash, and while it’s useful for basic integrity checks, it’s considered less secure against certain attacks. For higher assurance, especially in forensic contexts, consider using more robust hashing algorithms like SHA-256 or SHA-512.

### **Identifying Embedded Files or Steganography**

```bash
exiftool -ee -b suspect_file.jpg > embedded_data.bin
```

The `-ee` option extracts embedded data streams. This command attempts to extract any embedded files or data within `suspect_file.jpg`, which may be hidden intentionally.

### **Extracting Metadata from Emails**

While ExifTool primarily handles files, you can save emails as `.eml` files and extract headers:

```bash
exiftool email.eml
```

This command extracts metadata from `email.eml`, including headers that reveal sender IP addresses, email clients, and routing information.

### **Checking for Metadata Inconsistencies**

```bash
exiftool -warning suspect_image.jpg
```

This command checks for any warnings or errors in the metadata structure of `suspect_image.jpg`. Inconsistencies may indicate manipulation or corruption.

***

## Additional Tips for Open Source Researchers

* **Combine Tools:** Use ExifTool in conjunction with other tools like `strings`, `binwalk`, or `foremost` for comprehensive analysis.
* **Script Automation:** Create scripts to automate metadata extraction from large datasets.
* **Stay Ethical:** Always ensure your activities comply with legal and ethical guidelines, respecting privacy and data protection laws.
* Since v 13.20 you can visualise tag data with the `-plot` option (SVG output). Example: `exiftool -plot GPSAltitude DIR`

***

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* **Runtime**: Perl **≥5.004** for the full Perl distribution; **not required** when using the Windows executable or macOS package. [exiftool.org](https://exiftool.org/)
* **Install methods**:\
  – Official downloads (Windows `.zip` with bundled Perl; macOS `.pkg`; full `Image-ExifTool-13.40.tar.gz`). [exiftool.org](https://exiftool.org/)\
  – Package managers (e.g., **Homebrew**: `brew install exiftool`; **Arch Linux** package `perl-image-exiftool` 13.36). [Homebrew Formulae](https://formulae.brew.sh/formula/exiftool?utm_source=chatgpt.com)
* **Auth/tokens**: None; ExifTool runs locally/offline. (Verified in upstream docs.) [exiftool.org](https://exiftool.org/exiftool_pod2.html)
* **Supported modules/features (selection)**:\
  – Read/write EXIF, IPTC, XMP, ICC; extensive MakerNotes. [exiftool.org](https://exiftool.org/)\
  – Read **C2PA/JUMBF** (not currently writable; JUMBF can be deleted). [exiftool.org](https://exiftool.org/)\
  – Timed/video metadata (`-ee` to extract embedded streams). [exiftool.org](https://exiftool.org/exiftool_pod2.html)\
  – Output formats: JSON/CSV/XML/HTML; CSV/JSON import for writing. [exiftool.org](https://exiftool.org/exiftool_pod2.html)\
  – Geotag from GPX (`-geotag`) and generate GPS track logs. [exiftool.org](https://exiftool.org/)\
  – Generate **MD5/SHA256/SHA512 of image data** (for comparison/validation). [exiftool.org](https://exiftool.org/)\
  – **`-plot`** to create SVG plots from tag values. [exiftool.org](https://exiftool.org/plot.html?utm_source=chatgpt.com)
* **Optional**: For more flexible date parsing with `-d` when writing, Perl modules `POSIX::strptime` or `Time::Piece` may be used if installed. [exiftool.org](https://exiftool.org/faq.html?utm_source=chatgpt.com)

## Limitations

* **Incomplete Metadata Removal**: ExifTool may not fully remove all metadata from certain file types. While it can strip many common fields, some proprietary metadata structures or embedded data might persist. This can leave sensitive information, such as GPS coordinates, camera serial numbers, or user comments, exposed after a “cleaning” attempt. Users who require guaranteed anonymity or privacy must verify that no residual metadata remains.
* **Limited Support for Some File Formats**: While ExifTool is highly versatile, it doesn’t support every existing or emerging file format. Specialized, proprietary, or niche formats may not be fully recognized. As a result, some metadata fields may not be extracted or modified correctly, limiting the tool’s usefulness for cutting-edge devices or obscure media types.
* **Command-Line Complexity**: ExifTool primarily operates through the command line, which can be intimidating for users who lack technical experience. Understanding syntax, parameters, and output formatting takes practice, and beginners may struggle to remember commands or apply them efficiently.
* **No Native Graphical User Interface (GUI)**: Without a built-in graphical interface, users must rely on the command line or third-party GUIs. These external interfaces might not support all of ExifTool’s features, potentially limiting functionality and increasing the learning curve for non-technical users.
* **Risk of Data Loss or Corruption**: Incorrectly typed commands or misuse of advanced options can damage files or destroy important metadata. For example, a bulk operation that writes incorrect tags to a set of images could render them unusable. Regular backups and careful testing of commands on sample files can mitigate these risks.
* **Potential Conflicts with Antivirus Software**: Some antivirus tools may flag ExifTool’s operations as suspicious, particularly when it reads or modifies large numbers of files. These false positives can block operations, slow workflows, or require users to adjust security settings.
* **Cannot Detect Metadata Tampering**: While ExifTool can read and write metadata, it cannot confirm whether metadata is authentic. Malicious actors can modify tags to provide misleading information. Users who need to establish authenticity must rely on additional tools or verification methods.
* **Performance Limitations with Large Files or Datasets**: Analyzing huge video files or thousands of photos can be slow and resource-intensive. Large-scale operations may degrade system performance or take significant time to complete, making ExifTool less efficient for handling massive media archives.
* **Steep Learning Curve for Advanced Features**: Basic extraction is straightforward, but leveraging ExifTool’s full capabilities requires a deep understanding of metadata standards and careful reading of documentation.
* **Not a Comprehensive Forensic Tool**: ExifTool is not designed to produce secure, tamper-proof logs or follow strict forensic procedures. Suppose you require chain-of-custody compliance, write-blocking capabilities, or court-admissible evidence handling; you need dedicated digital forensic solutions.
* **Limited Detection of Hidden or Embedded Data**: ExifTool specializes in known metadata fields. It may not detect hidden or steganographically embedded content concealed in unexpected places. Investigators seeking such hidden data must supplement ExifTool with other specialized detection tools.
* **No Built-in Reporting or Visualization Tools**: ExifTool outputs raw text data by default. Users who need graphical summaries, charts, or maps must export the data and rely on third-party software for visualization. This extra step can be inconvenient and time-consuming.
* **Legal and Ethical Considerations**: Modifying or extracting metadata without proper consent can breach privacy laws or terms of use. Handling sensitive information, especially personal data, may be illegal or unethical. Researchers must remain aware of and compliant with relevant regulations.
* **Metadata Standard Variations**: Metadata standards aren’t always implemented consistently. Different cameras, software, and devices may handle metadata fields differently—using unique tags, labels, or formats. This can cause confusion or misinterpretation, as assumptions about one device’s metadata may not hold true for another. As a result, metadata analysis requires careful consideration of each source’s conventions.
* **Multilingual and Encoding Issues**: ExifTool may struggle with files that contain non-UTF-8 text or special characters. Encodings like Shift-JIS (Japanese Text) or ISO-8859-1 (also known as Latin-1, an older, legacy standard designed to cover Western European languages, including common characters like letters with accents such as é or ß) could cause garbled output. This is particularly problematic when analyzing international content or files with older character sets.
* **No Undo Functionality**: Changes made by ExifTool are permanent. If users overwrite crucial metadata or apply the wrong tags to a large set of files, there’s no built-in rollback feature. Careful planning, backups, and test runs are essential to prevent irreversible mistakes.
* **Limited Support for Encrypted or Password-Protected Files**: ExifTool cannot access metadata locked behind encryption or password protection. Users must first unlock or decrypt the file to analyze its metadata, which may be difficult or impossible without proper credentials.
* **No Real-Time Monitoring**: ExifTool does not watch files or directories for metadata changes over time. Users must run commands manually whenever they need updated information, making it unsuitable as a continuous monitoring tool.
* **Limited Support for Network Locations**: Accessing files stored on complex network paths can be problematic. Network latency, permissions, and mounting issues may prevent ExifTool from functioning smoothly, particularly in enterprise environments or remote research scenarios.

## Ethical Considerations Specific to Open Source Research

Use ExifTool lawfully and proportionately. Limit collection to what is necessary, retain audit trails (input files, command logs, outputs), and avoid exposing sensitive personal data inadvertently contained in metadata (e.g., GPS). Investigators should align workflows with the **Berkeley Protocol on Digital Open Source Investigations** for documentation, chain‑of‑custody and verification standards.

***

## Conclusion

ExifTool can be a useful addition to an open source researcher's toolkit, enabling the extraction and analysis of metadata that can uncover critical information. By applying the commands and techniques outlined above, you can enhance your investigative capabilities while adhering to ethical standards.

For further learning and community support:

* **Official Website:** [https://exiftool.org/](https://exiftool.org/)

## Guide

**Installing ExifTool** (official): platform‑specific steps and troubleshooting. [exiftool.org](https://exiftool.org/install.html)

**Application Documentation** (`exiftool` options reference). [exiftool.org](https://exiftool.org/exiftool_pod2.html)

**Command‑Line Examples** (curated upstream snippets). [exiftool.org](https://exiftool.org/examples.html?utm_source=chatgpt.com)

**Plot Feature** (`-plot` usage and examples). [exiftool.org](https://exiftool.org/plot.html?utm_source=chatgpt.com)

Kris Occhipinti. (2010, December 12). _**Working with jpg Metadata Comments—Exiftool—BASH - Linux Command Line**_ \[Video recording]. [https://www.youtube.com/watch?v=WchknYwbFJY](https://www.youtube.com/watch?v=WchknYwbFJY)

spartaco80. (2015). _**exiftool1line—Useful one-line ExifTool commands**_**.** [https://sourceforge.net/projects/exiftool1line/files/](https://sourceforge.net/projects/exiftool1line/files/)

Harvey, P. (2024). _**ExifTool FAQ**_. [https://exiftool.org/faq.html](https://exiftool.org/faq.html)

Harvey, P. (2021). _**Common ExifTool Mistakes**_**.** [https://exiftool.org/mistakes.html](https://exiftool.org/mistakes.html)

## Tool provider

Phil Harvey (will respond to inquiries in the [https://exiftool.org/forum/](https://exiftool.org/forum/))

**License**: Artistic‑1.0‑Perl OR GPL‑1.0‑or‑later (dual license).

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
