---
description: >-
  Telegago is a Google Custom Search Engine tailored for searching public
  Telegram content for OSINT purposes.
---

# Telegago

## URL

[https://cse.google.com/cse?cx=006368593537057042503:efxu7xprihg](https://cse.google.com/cse?cx=006368593537057042503:efxu7xprihg) – Official Telegago Google Custom Search Engine

(short: [http://bit.ly/telegago](http://bit.ly/telegago))

## Description

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

Telegago is a Google Custom Search Engine (CSE) designed for Open Source Intelligence (OSINT) research on public Telegram content. By focusing on Telegram’s publicly available web domains (e.g., **t.me** and **telegram.me**), it allows users to perform targeted and precise searches without requiring a Telegram account.

**Key Features**

* **Tailored Searches:** Utilizes custom search parameters to enhance the accuracy and relevance of results within Telegram’s public content (only searches Telegram-related domains).
* **No Account Required:** Provides access to publicly shared Telegram information without needing to sign up or log in to Telegram.
* **User-Friendly Interface:** Leverages Google’s familiar search interface for ease of use, making Telegram searches feel like a regular Google query.

### Guide on how to use Telegago

**Usage Guide**

1. **Access Telegago:** Open the Telegago search engine page in your web browser (use the official link above).
2. **Enter Search Terms:**
   * Type your desired keywords into the search box.
   * Use Google search operators to refine your search (see Tips below for examples).
3. **Execute the Search:** Click the search button or press **Enter** to view the results.
4. **Review Results:** Browse the list of public Telegram profiles, channels, and groups that match your query. The results come from Telegram URLs (such as channel pages or group invite links) that Google has indexed.
5. **Optional – Join Groups or Channels:** If you find a Telegram group or channel of interest, you can join it using tools like Bellingcat’s [**Telegram Group Joiner**](https://bellingcat.gitbook.io/toolkit/more/all-tools/telegram-group-joiner), which automates joining specific channels or groups using the invite or channel links from your search results​. (This requires a Telegram account, but the search itself does not.)

## Advice for More Effective Searches:

(tips courtesy of [Jane Lytvynenko](https://www.janelytv.com/))

* **Exclude Unwanted Terms:**\
  Apply a minus sign before terms you want to remove (e.g., `European Parliament -AfD`) to filter out irrelevant results.
* **Search Within Specific Sites or Formats:**\
  Usually, you can utilize `site:` (e.g., `site:t.me`) to limit results to a specific domain (already automatically included in this CSE) or `filetype:` (e.g., `filetype:pdf`) to locate particular document types. The `filetype:pdf` operator may be less helpful unless you suspect the content you’re looking for is posted or linked to a publicly accessible PDF hosted elsewhere. If you know specific channels share documents, you might try combining `site:` with `filetype:pdf` and relevant keywords, but it’s not guaranteed to yield many results since Telegram’s web previews usually don’t directly index PDF files.
* **Leverage Additional Operators and Filters:**\
  Tools like `inurl:`, date filters (such as `before:` or `after:`), and language settings refine results to your exact needs.
* **First-Person Keywords for Eyewitness Content:**\
  Include first-person pronouns like "I," "me," or "my" alongside location or event terms to find firsthand accounts. For example, searching `"I saw" European Parliament protest` can uncover direct eyewitness posts. (Jane L., thanks for the tip, I hope you're safe.)
* **Experiment with Synonyms and Alternate Spellings:**\
  Expand beyond a single keyword. If a search for `"protests"` is too narrow, try synonyms like `"demonstrations"`, `"rallies"`, or `"marches"`. Different communities and regions may favor different terms for similar events.
* **Contextual and Localized Keywords:**\
  To target content shared by communities and experts directly involved, add relevant place names, organizations, hashtags, or language indicators.\
  Many place names, personal names, and organizations appear in multiple languages and alphabets. Experiment with different transliterations to uncover sources that English-only or single-spelling searches might miss.
  * For the Ukrainian capital, often spelled "Kyiv" in English, you can also try:
    * The Russian transliteration: `"Kiev"`
    * The Ukrainian Cyrillic form: `"Київ"`
    * The Russian Cyrillic form: `"Киев"`
*   **Local Language Keywords:**\
    Incorporate terms in the region’s native language. Eyewitnesses or local groups often post in their mother tongue.

    For instance, if you’re searching for updates from Ukraine, try Ukrainian or Russian terms:

    * `"я зняв"` (Ukrainian for “I filmed”)
    * `"я видел"` (Russian for “I saw”)

    Same goes for other countries

    * `"European Parliament" "protests"` (English)
    * `"Parlement européen" "manifestations"` (French)
    * `"Europäisches Parlament" "Demonstrationen"` (Deutsch)

    **Example Queries**

    * `"European Parliament" "I saw"`
    * `"Kyiv" "I recorded" explosion`
    * `Київ "я зняв" протест`
    * `"Ukraine front line" -rumor -speculation`
    * `("refugees" OR "migrants") "my photo"`
    * `“Kyiv protest” after:2023-01-01 before:2023-03-31`
      * _(Shows results mentioning “Kyiv protest” published between January and March 2023.)_
    * `"European Parliament" "I saw" after:2022-05-01`
      * _(Finds recent references to eyewitness accounts involving the European Parliament after May 1, 2022.)_
    * `“Kyiv explosion” "I recorded" after:2023-02-01 -rumors`
      * _(Shows recent firsthand video posts about Kyiv explosions while excluding the word “rumors.”)_

### Alternative Tools for Telegram Searches

If you want to expand your search or use other Telegram-focused search tools, [here ](https://gijn.org/resource/tipsheet/tipsheet-latest-tools-investigating-with-telegram/)[are ](https://www.osintme.com/index.php/2022/10/18/the-osint-me-ultimate-guide-to-telegram-osint-and-privacy)some alternatives that are relevant and useful for Telegram OSINT:

* [**Lyzem** ](https://lyzem.com/)– A search engine for Telegram content **and** Telegraph posts (Telegraph is Telegram’s publishing tool). Lyzem allows keyword searches across both platforms​.
* [**TgramSearch** ](https://en.tgramsearch.com/)– An unofficial Telegram channel catalog and search engine. It lets you query a database of over 700,000 Telegram channels to find channels that match your keywords​. (Supports multiple languages with region/language-specific versions.)
* [**Tlgrm.eu**](https://tlgrm.eu/channels) – An English-language Telegram channel search portal. It provides a directory of Telegram channels grouped by category and allows searching for channels by name or topic​.
* [**OSINT.ME Telegram CSE**](https://cse.google.com/cse?cx=6c3e0c0d3da8e3b4a) – A Google-based custom search engine for Telegram created by the OSINT.Me team. Like Telegago, it indexes Telegram’s public content; using a different index, it may surface slightly different results​.

Each tool works on the same principle of searching public Telegram data, but their indexes and features may vary. It can be worth trying your query on multiple engines to ensure you’re not missing relevant results.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

No technical expertise is required beyond basic internet browsing skills.

* **Internet Connection:** An active internet connection.
* **Web Browser:** Any modern web browser.

## Limitations

* **Public Content Only:** Telegago indexes only publicly accessible information on Telegram. Private or deleted content will not appear in search results.
* **CSE preview limitations:** Search results usually show channel-level pages; single messages don’t always appear
* **Search Effectiveness:** The quality of results depends on the specificity and effectiveness of your search terms.
* **EU limitations:** Some links are hidden in the EU (from EU IPs) due to legal takedown requests.&#x20;

## Ethical Considerations

* **Privacy Compliance:** Users should respect privacy rights and adhere to legal standards when accessing and using data from Telegram profiles and groups.
* **Responsible Use:** Ensure your OSINT activities are ethical and do not infringe upon individual privacy or violate any laws.
* **Assess Source Credibility:**\
  If you find eyewitness content, verify its authenticity. Look for multiple sources reporting the same event, check metadata or original posting times when possible, and see if trusted reporters or analysts have acknowledged it. OSINT verification techniques—like reverse image searches on images or keyframes from videos—add another layer of confidence.
* **Watch for Disinformation Patterns:**\
  Be aware that some channels may be dedicated to spreading misleading or false information. Consistent terminology, unusual posting frequency, or too-similar narratives across various accounts might signal coordination or inauthentic activity.
* **Use Archival Tools for Ephemeral Content:**\
  Since posts or messages may be deleted or altered over time, consider using archival services (e.g., the Internet Archive’s Wayback Machine, or local backups) to capture the state of content when you first discover it. This ensures you have a record to refer back to if the source disappears or changes.

## Guides & Resources

Telegram OSINT Basics: 5 Tips Anyone Can Do Right Now. (2022, August 3). _@hatless1der_. Retrieved February 9, 2025, from [https://hatless1der.com/telegram-osint-basics-5-tips-anyone-can-do-right-now/](https://hatless1der.com/telegram-osint-basics-5-tips-anyone-can-do-right-now/)

_Tipsheet: Latest Tools for Investigating with Telegram_. (April 16, 2024). [Alexa van Sickle](https://gijn.org/staff-member/alexa-van-sickle/). Retrieved February 9, 2025, from [https://gijn.org/resource/tipsheet/tipsheet-latest-tools-investigating-with-telegram/](https://gijn.org/resource/tipsheet/tipsheet-latest-tools-investigating-with-telegram/)

_The Osint Me ultimate guide to Telegram OSINT and privacy. (_&#x32;022, October 3). _Matt - osintme.com_. Retrieved February 9, 2025, from [https://www.osintme.com/index.php/2022/10/18/the-osint-me-ultimate-guide-to-telegram-osint-and-privacy/](https://www.osintme.com/index.php/2022/10/18/the-osint-me-ultimate-guide-to-telegram-osint-and-privacy/)

## Tool provider

Telegago is a Google Custom Search Engine.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
