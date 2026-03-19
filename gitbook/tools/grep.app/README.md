---
description: >-
  grep.app is a free web-based search engine that allows users to search the
  contents of public GitHub repositories.
---

# Grep.app

## URL

[https://grep.app/](https://grep.app/)

## Description

grep.app is a free web-based search engine that allows users to search the contents of public GitHub repositories using keywords or [regular expressions (regex)](https://github.com/google/re2/wiki/Syntax). It is primarily used by developers, security researchers, and open source investigators to locate code snippets, context data, or sensitive information that may have been committed to public repositories.

Use the main page to search for keywords or regex. You can use this to search for domains, companies, contact details, code, and much more. There are options on the right side of the search bar: Match case, Match whole words, and Use regular expression.

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

You can also toggle Compact or Expanded view in the top right corner to change how much peripheral context is included in the results.



**Key word search example** - searching for code referencing "Bellingcat".

<figure><img src=".gitbook/assets/grep1.png" alt=""><figcaption></figcaption></figure>

This example search returns all indexed public repositories which include the word "Bellingcat".



**Regex search example** - searching a Twitter repository for email addresses.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

This example search returns all indexed results matching the syntax of an email address within the selected repository (in this case, `twitter/the-algorithm`).

Regex syntax guidance: [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Each result shows a snippet of matching code, the repository name and the file path. Click the filename to view it directly on GitHub.

You can filter results by [Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories), Path and/or Programming Language using the left hand panel. For more information, please see the [Navigating code on GitHub](https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github) guidance.

Tip: Use the GitHub link to check commit history, contributors, and issues for further context

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

N/A – No account required to search

## Limitations

Public Repositories Only: grep.app can only search code that is publicly available on GitHub. Any private repositories, internal servers, or non-GitHub codebases are not accessible.

Incomplete Indexing: Not all public repositories are indexed immediately. Some updates or smaller repos may not appear in searches.

## Ethical Considerations

Attribution Accuracy: Code matches do not necessarily prove authorship as it is common practice to reuse code in software engineering.

Sensitive Information: Credentials and other private information may be included in public repositories.

## Tool provider

Vercel Inc. (USA) - Cloud application company that provides developer tools, frameworks, and cloud infrastructure to build and maintain websites.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Freya           |
