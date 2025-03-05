---
description: >-
  BskyThreadReader is a web-based Bluesky thread viewer that allows anyone to
  read and share Bluesky threads without logging in.
---

# BskyThreadReader

## URL

[https://bskythreadreader.glitch.me/](https://bskythreadreader.glitch.me/)

## Description

BskyThreadReader is a web-based tool that enables users to view and share Bluesky threads without requiring a Bluesky account. It fetches user profile data directly from Bluesky and retrieves complete thread content via a third-party [Bluesky Thread Visualizer](https://bsky-search.jazco.io/thread) service (provided by @jaz). This tool offers instant access to Bluesky discussions, presenting content in an easy-to-read format. It can be a valuable resource for open source researchers and journalists who need to monitor conversations on Bluesky without logging in.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

BskyThreadReader is completely free to use and open-source under the MIT License. There are no paid features or subscriptions required.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

No Bluesky account, API key, or registration is required. The tool runs in any modern web browser with JavaScript enabled and does not require extensions or additional software.

## Limitations

* Can only display public Bluesky content (all profiles and posts on Bluesky are public by design).
* Read-only access: Users cannot log in, post, or interact with threads—only view them.
* No search functionality or filtering beyond viewing a given thread.
* Relies on a third-party service for fetching threads; if that service or Bluesky’s servers are down, the viewer will not function.
* Large or deeply nested threads may be difficult to navigate.

## Ethical Considerations

BskyThreadReader accesses only publicly available data, ensuring compliance with user privacy on Bluesky. However, OSINT investigators should:

* Cite and share content responsibly to avoid misrepresentation.
* Consider archiving important threads for verification, as Bluesky posts can be deleted.
* Be mindful that third-party services could log thread fetches, which may have implications for sensitive investigations

## Comparison with similar tools

* **Skyview (skyview.social)** offers multiple viewing modes, including a nested tree view and single-post embedding. It has stronger privacy protections than BskyThreadReader.
* **Blueviewer (blueviewer.pages.dev)** is another open-source thread viewer that works across various Bluesky apps. It is lightweight and straightforward but lacks Skyview’s extra features.
* **Skythread (**[**blue.mackuba.eu**](https://blue.mackuba.eu)**)** focuses on displaying threads in a tree structure, making it better suited for long discussions.

Compared to these alternatives, BskyThreadReader is simple and effective but lacks advanced features such as thread trees and privacy-focused enhancements.

## Guides and articles

\[\[Link to guides on this tool and to articles on research that was done with the help of this tool]]

## Tool provider

Developed and maintained by Luca Hammer (@luca.run on Bluesky). The tool is based on his earlier Mastodon viewer (MastoVue) and is openly available for the community.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
