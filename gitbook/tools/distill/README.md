---
description: >-
  Distill.io is a website change monitoring tool that allows users to track
  changes on web pages.
---

# Distill.io

## URL

[https://distill.io/](https://distill.io/)\
(last revised Aug 31., 2025)

## Description

Distill.io is a website‑change monitoring tool that tracks **web pages, PDFs, JSON, Word docs, XML, RSS/Atom feeds, uptime endpoints and, new in 2024, crawler‑based Sitemap monitors (alpha)**. Alerts can arrive by email, SMS, push, Discord, Slack, MS Teams or custom webhooks. Distill is available as a **web app, browser extension, mobile apps (iOS & Android) and a desktop app for Windows & macOS (public alpha)**

#### **Practical Applications for Open Source Researchers**

For Open Source Researchers, Distill.io can be an invaluable tool for:

* **Monitoring Target Websites:** Keep track of updates on websites related to investigations, including changes in content, new postings, and removals.
* **Tracking Social Media Profiles:** Monitor public social media pages or profiles for updates without needing to log in to the platform.
* **Alerting on Keyword Changes:** Set up alerts for specific keywords or phrases that appear or disappear from web pages, which can signal significant events.
* **Watching Dynamic Content:** Use advanced selection tools to monitor content that changes dynamically, such as JavaScript-rendered pages.
* **Archiving Web Page Changes:** Maintaining a history of changes to a web page is useful for documenting the evolution of information over time.
* **Monitoring Hidden Elements:** Detect changes in hidden HTML elements or metadata that might not be immediately visible on the page.

#### **Key Features Beneficial for Open Source Researchers**

* **Visual Selector Tool:**
  * Allows users to select specific parts of a web page to monitor.
  * Useful for focusing on relevant sections and ignoring irrelevant content.
* [**Regular Expressions**](https://en.wikipedia.org/wiki/Regular_expression) **(Regex):**
  * Enable advanced pattern matching to monitor specific text patterns.
  * Helpful for filtering and extracting specific data from complex pages.
  * **Regex in Visual Selector** – apply regular expressions from the _Text filter_ panel to include or exclude specific patterns at selection time
* **Content Extraction:**
  * Ability to extract and export data from monitored pages.
  * Supports formats like CSV or JSON for integration with other analysis tools.
* **Change Highlighting:**
  * Visual representation of the changes made to the page.
  * Simplifies the process of identifying significant alterations.
* **Scheduling and Frequency:**
  * Customizable check intervals, with paid plans offering more frequent monitoring.
  * Free 6 h · Starter 10 min · Professional 5 min · Flexi 2 min for cloud monitors; local checks can run as fast as 5 s.
  * Potentially useful for time-sensitive investigations where prompt alerts are crucial.

## Using Distill.io

First, you can register with your own email, or use a dedicated email address or alias. You can see all running monitors on your [watchlist](https://distill.io/docs/web-monitor/what-is-watchlist/). You can monitor websites, feeds, JSONs, PDFs, Word documents, uptime and whole sitemaps (alpha, may be buggy).

<figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption><p>Click on Add Monitor to configure a new monitor</p></figcaption></figure>

When you add a new monitor, you make the following choices:

* [Source](https://distill.io/docs/web-monitor/config-and-advanced-monitor-options/): Whether to monitor the whole page or only a part of it. Select the [Visual Selector ](https://distill.io/docs/web-monitor/what-is-visual-selector/)if you want to monitor only certain parts (recommended).
* Device:[ Where the service runs](https://distill.io/docs/web-monitor/cloud-local-monitors/) - Distill.io can run locally or in the cloud. This determines whether it only checks while your computer is running (local) or 24/7 (cloud). In the free plan, you can run only a limited number of trackers in one account, but more locally than in the cloud (25 local vs 5 cloud monitors on Free). Consequently, you can check cloud-based monitors in the [web-app](https://distill.io/docs/web-monitor/using-web-app-to-track-webpage-changes/), while local monitors live in [the browser extension](https://distill.io/docs/web-monitor/distill-chrome-extension/).
* Name: Pick a name for your Monitor that's easy to recognize for you and informative. You may want to configure several monitors for one website, so consider the purpose as well when picking a name.
* Actions: The free service allows you to send yourself an [email](https://distill.io/docs/web-monitor/get-email-alert-on-webpage-change/), or if you're running a local monitor, open the website, get a notification, or [play a sound](https://distill.io/docs/web-monitor/audio-notification-on-change/). Starter unlocks webhooks & SMS; Professional adds unlimited emails/push & higher SMS caps; Flexi raises all limits. Noteworthy among those are push notifications if you're using the [phone app ](https://distill.io/docs/web-monitor/web-monitor-for-ios/)(be mindful of possible tracking), [SMS](https://distill.io/docs/web-monitor/get-sms-alert-on-webpage-change/), notifications on [Discord, Teams and Slack](https://distill.io/docs/web-monitor/change-notifications-on-slack-discord-and-teams/), [webhooks ](https://distill.io/docs/web-monitor/trigger-webhook-on-website-change/)(which allow developers to integrate it into 3rd party services)
* [Schedule Checks](https://distill.io/docs/web-monitor/schedule-checks/): How often do you need your source to be checked for changes?

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>Add a monitor for your website and configure source, schedule checks, and define alerts when changes occur.</p></figcaption></figure>

When you add a monitor, you can use the Visual Selector Tool, to select only those parts of the website that you want to be alerted about if they change. These could be release versions, GitHub issue submissions, or parts of a text that contain information about a person or entity.

<figure><img src=".gitbook/assets/image (5).png" alt=""><figcaption><p>This monitor will check for updates on the author's bio in the toolkit guardian section.</p></figcaption></figure>

<figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption><p>This monitor shows will check a github repository for new issues, changes, and new releases.</p></figcaption></figure>

<figure><img src=".gitbook/assets/image (8).png" alt=""><figcaption><p>This monitor will check whether a chrome extrension was updated recently. (It was!)</p></figcaption></figure>

After you click save, your monitor will be active.

## **Additional Tips for OSINT Researchers**

* **is critical because uptime is crucialCombine with Other Tools:**
  * You can use Distill.io with other open-source research tools to integrate data from Distill.io with databases or visualization tools.
* **Use Cloud Monitors for Reliability:**
  * One option is to run monitors on Distill.io's servers, ensuring continuous monitoring even when your device is offline. For monitoring tasks where information can change quickly, this can be critical because uptime is constant.
* **API (Enterprise only)**&#x20;
  * Request programmatic access to watchlists and change data for full automation.
* **Monitor Authentication-Protected Pages:**
  * Distill.io supports monitoring pages that require a login. This can ensure compliance with the terms of service and legal considerations when monitoring such content.
  * **Proxy & Macros** – cloud monitors can route through residential/geo‑proxies and execute multi‑step macros; loops and the new “doesn’t match any previous text” condition (Feb 2025) reduce false positives.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

- **Free Plan:**
  * Up to 25 local monitors
  * 5 cloud monitors
  * 1,000 checks per month
  * 30 email alerts
  * **Limitations:** Maximum check interval of 6 hours for cloud monitors
- **Paid Plans:**
- Starter $15 / Professional $35 / Flexi $80+ per month; see [pricing page](https://distill.io/pricing/) for full resource tables.
  * **Starter Plan:** Increased limits and faster check frequencies (e.g., every 10 minutes)
  * **Professional Plan:** More monitors, higher check frequency (e.g., every 5 minutes), SMS alerts
  * **Enterprise Plan:** Custom solutions with the highest limits and priority support
  * **Pricing:** Detailed pricing is available on the Distill.io pricing page

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

#### **Requirements**

* **Account Creation:**
  * Required for synchronization across devices and accessing cloud monitoring features
* **Browser Extension:**
  * Available for Chrome, Firefox, Opera, and Edge
  * **Local Monitoring:** Runs checks when the browser is open
* **Mobile App:**
  * Available on iOS and Android
  * **Features:** Receive push notifications and manage monitors
* **Desktop App:**
  * Desktop App for Windows & macOS (public alpha – install links in Docs).
  * **Advantage:** Allows local monitoring without keeping the browser open

#### **Limitations**

* **Free Plan Limitations:**
  * Limited to 25 local monitors and 5 cloud monitors
  * Minimum check interval of 6 hours for cloud monitors
  * Limited number of email alerts per month
* **Cloud Checks:**
  * Limited by the subscription plan
  * Faster check frequencies require higher-tier plans
* **Local Checks:**
  * Require the browser or desktop app to be running
  * Less reliable if the device is turned off or disconnected from the internet
* **Dynamic Content:**
  * Monitoring JavaScript-rendered content may require advanced configuration
  * Some dynamic elements might not be captured without using cloud monitors or by running a macro with loop support (added 2024) to pre‑load dynamic sections.

## Ethical Considerations

* **Privacy and Legal Compliance:**
  * Keep the website's terms of service in mind when monitoring website changes
  * Be aware of legal regulations regarding automated access or scraping
* **Responsible Use:**
  * Avoid overloading target websites with excessive requests
  * Use appropriate check intervals to minimize impact
* **Data Validation:**
  * Verify the accuracy of monitored changes before acting on them
  * Be cautious of false positives or changes that may not be relevant

## Guides and articles

_What is Distill? | Distill_. (2023). Retrieved August 1, 2024, from [https://distill.io/docs/web-monitor/what-is-distill/](https://distill.io/docs/web-monitor/what-is-distill/)

_Local Monitor vs. Cloud Monitor | Distill_. (2023). Retrieved August 1, 2024, from [https://distill.io/docs/web-monitor/cloud-local-monitors/](https://distill.io/docs/web-monitor/cloud-local-monitors/)

Distill (Director). (2023, May 26). _How to Use the Visual Selector in Distill_ \[Video recording]. [https://www.youtube.com/watch?v=MY1DjyHqy\_o](https://www.youtube.com/watch?v=MY1DjyHqy_o)

## Tool provider

**Distill.io by** Neemb LLC (Delaware), U.S.

* **Contact Information:** Available on their [Contact Us page](https://distill.io/docs/contact-us/)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
