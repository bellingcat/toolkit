---
description: >-
  VirusTotal aggregates detection results of 70+ antivirus scanners and
  URL/domain blocklist services to analyze suspicious files, URLs, domains, and
  IP addresses for malware and other threats.
---

# VirusTotal

## URL

[https://www.virustotal.com/gui/home/upload](https://www.virustotal.com/gui/home/upload)

## Description

VirusTotal is a threat-intelligence and analysis platform that allows users to investigate files, URLs, domains, and IP addresses, by aggregating information from numerous security vendors and other sources.

For open-source investigators, useful features include:

* **Multi-engine scanning:** VirusTotal analyzes submitted files and URLs using numerous antivirus and security engines. Results show which engines detected an item and the specific detection names they assigned. This allows investigators to quickly access whether suspicious material is already recognized as malicious, while also comparing results across different vendors.
* **Hash-based searching:** Files can be identified by cryptographic hashes such as MD5, SHA-1, and SHA-256. Searching for a hash can reveal whether VirusTotal has previously analyzed the file and allows investigators to retrieve an existing report without uploading the same file again.
* **File and URL metadata:** Reports can contain information such as file type, size, timestamps, signatures, tags, and other characteristics extracted during analysis. URL and domain reports can similarly provide information about the infrastructure associated with a suspicious resource.
* **Threat Graph:** VirusTotal's relationship data can be visualized through Threat Graph, allowing investigators to explore connections between files, URLs, domains, IP addresses, and other objects. This can help turn an individual indicator into a broader network of potentially related infrastructure.
* **Passive DNS and historical infrastructure:** VirusTotal's passive DNS data can show historical relationships between domains and IP addresses. Investigators can use this information to examine how infrastructure has changed over time or identify other domains that have resolved to the same IP addres.
* **Community intelligence:** Reports can contain comments, votes, and other information contributed by VirusTotal users. These observations can provide additional context about a file, domain, or campaign, although community contributions should be treated as leads rather than authoritative conclusions.

Together, these features allow VirusTotal to function as more than a malware scanner. An investigator can start with a single file, hash, URL, domain, or IP address, examine the information VirusTotal has collected about it, and then pivot to related indicators for further research.&#x20;

This makes the tool particularly useful for rapid triage, indicator discovery, and pivoting betwen related pieces of technical infrastructure without requiring an investigator to execute a suspicious file.

## Cost

* [x] Free
* [x] Partially Free
* [x] Paid

A robust free tier is available for individual researchers and non-commercial use. Paid Premium tiers are available for organizations, starting at approximately $5000 per year for low API volumes and scaling significantly from there based on usage and features.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* Web interface: Internet connection and a modern web browser
* API: VirusTotal Community account to obtain API key

## Limitations

* Public API Rate Limits: The free Public API is limited to 4 requests per minute and 500 requests per day. It must not be used in commercial products or business workflows that don't contribute new files.
* Privacy Concerns: Any file or URL you submit to the public service is stored and shared with the anti-malware industry and premium customers. Never upload sensitive personal data, unreleased documents, or proprietary information.
* Not a Definitive Answer: A lack of detection does not guarantee a file is safe, especially if it's a new, advanced threat.

## Ethical Considerations

Gary Ruddell explains in his ["VirusTotal has a dark side" video ](https://www.youtube.com/watch?v=4Eu8wrEejUI)that, because VirusTotal is owned by Chronicle Security, which is a subsidiary of Google, everything that is uploaded to the community by users will be available to users with a paid subscription.&#x20;



## Guides and articles

VirusTotal offers a [documentation hub](https://docs.virustotal.com/) with guides and further documentation. They also have their own [YouTube channel](https://www.youtube.com/@VirusTotal_community) with 44 videos per August 2026.



## Tool provider

The tool provider is Chronicle.Security, part of the Google Cloud Platform.



| Page maintainer          |
| ------------------------ |
| Seraphine Sheena Gunawan |
| September 2026           |
