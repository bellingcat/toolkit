---
updated: '2026-05-03'
description: >-
  Uwazi is an open-source platform that simplifies the management of document
  collections, particularly for human rights documentation in the justice and
  advocacy fields.
---

# Uwazi

## URL

[https://uwazi.io/](https://uwazi.io/)\
latest stable 1.229.24 (released 2026-06-26; checked 2026-06-26)

## Description

Uwazi is an open-source platform designed to manage and organize document collections, often used in human rights documentation and advocacy contexts. It addresses the challenge of storing, categorizing, and retrieving large volumes of sensitive information, and it can be helpful when managing complex datasets.

With Uwazi, researchers can upload documents in bulk, organize them with precise metadata, cross-reference related materials, and search the entire collection efficiently. The platform also allows the translation of records into multiple languages, visualizes data in various formats, and allows collaboration with team members.

Uwazi can be useful for organizations and individuals who need a user-friendly, secure, and customizable tool to manage critical information, whether for preserving evidence, documenting violations, or creating accessible archives. It offers features tailored to the needs of human rights defenders, researchers, and advocacy groups, making it a potentially helpful resource for those working to uncover and pursue justice.

Uwazi offers two deployment options: **self-hosted (free)** and **hosted**. With the [**self-hosted**](https://github.com/huridocs/uwazi) option, users can download and set up Uwazi on their own servers at no cost. This option provides full control over the platform, including customization and data security, but it requires technical expertise to install, manage, and maintain the server environment. Self-hosting also implies responsibility for implementing security measures, performing updates, and ensuring system reliability, which might be challenging for organizations without a dedicated IT team.

On the other hand, the **hosted** option involves using Uwazi’s managed hosting service, where the platform is hosted and maintained by [HURIDOCS](https://huridocs.org/). This option is ideal for organizations that prefer a hassle-free setup with support and regular updates handled by the Uwazi team. For hosted use, Uwazi’s Try page says users can request a database to test for free; the first 100MB are complementary, and continued hosting is offered through packages scaled to the data volume used in the collection.

Since April 2025, HURIDOCS has shipped[ integrated machine‑learning features](https://huridocs.org/2025/04/using-machine-learning-in-uwazi-to-support-human-rights-documentation-work/) that assist with translation, metadata/NER extraction, topic suggestions, and PDF‑focused workflows (segmentation and table‑of‑contents generation). Some functions are powered by optional external services HURIDOCS maintains as open source.

[Integration with Tella](https://huridocs.org/2026/01/the-new-tella-app-lets-uwazi-users-document-violations-safely-and-while-offline/): Once set up, Uwazi databases can be populated via Tella, a secure mobile documentation app by Horizontal. It supports encrypted capture and import of photos, videos, audio and files, stores them separately from the device gallery, supports offline data entry, and can upload to Uwazi when connectivity returns.

<div><figure><img src=".gitbook/assets/Screenshot 2024-09-25 115523.png" alt=""><figcaption><p>This screenshot illustrates Uwazi’s geospatial mapping capability, allowing users to visually pinpoint and organize documented information by location.</p></figcaption></figure> <figure><img src=".gitbook/assets/Screenshot 2024-09-25 115546.png" alt=""><figcaption><p>Uwazi’s functionality for defining and managing relationships between different categories or templates of information. It shows how various entity types (e.g., Organization, Incident, Individuals) can be connected, enabling users to structure their data and understand links between different records.</p></figcaption></figure> <figure><img src=".gitbook/assets/Screenshot 2024-09-25 115606.png" alt=""><figcaption><p>This screenshot illustrates Uwazi’s metadata configuration capabilities, showing how administrators can define, edit, and organize custom fields (e.g., text, numeric, relationships, links) to structure the information collected about a particular entity type.</p></figcaption></figure></div>

#### Key Features:

1. **Flexible Data Management**: Uwazi supports the upload and management of various types of documents, including text files, images, audio, and video. The platform allows users to create custom collections with defined metadata fields, facilitating structured and efficient data organization.
2. **Advanced Search and Filtering**: Uwazi offers various search functionalities, enabling users to perform full-text searches, apply multiple filters, and quickly retrieve relevant documents from extensive collections.
3. **Data Visualization and Mapping**: Users can create visual representations of data and link documents to maps, which is particularly useful for geographically-oriented human rights documentation.
4. **Customizable Workflows**: Uwazi allows users to define custom workflows, automating tasks and processes to streamline document management and review.
5. **Multi-language Support**: The platform supports multilingual document collections and provides a fully localized user interface, making it accessible for global projects.
6. **Collaboration and Permissions**: Uwazi facilitates collaboration with its multi-user environment, where permissions can be finely tuned to protect sensitive information.
7. **Public and Private Sharing**: The platform enables the sharing of document collections, with options for both public access and private, controlled sharing.
8. **Security and Compliance**: Uwazi incorporates security measures, including encrypted data storage and secure access controls, to ensure compliance with privacy regulations and safeguard sensitive information.
9. Integration with the Tella App: Once set up, Uwazi databases can be populated via the [Tella App](https://tella-app.org/), which provides encrypted asynchronous uploads of photos and videos from a user's phone, in an environment separate from the phone's gallery.
10. **Machine-learning tools (beta)**: Uwazi includes optional ML-assisted workflows such as metadata extraction and paragraph extraction for PDF collections. Metadata extraction is human-in-the-loop: users define the field, label examples, train an extractor, apply it across documents and review suggested values before accepting them. HURIDOCS’ September 2025 [example](https://huridocs.org/2025/09/uwazi-ai-powered-metadata-extractor-a-game-changer-for-human-rights-documentation/) says UPR Info reduced a workflow from approximately three months of manual work for 228 documents to 43 hours to extract and process metadata from 30,267 recommendations in two languages. Official docs state that metadata extraction is in beta and is not activated automatically for all instances; paragraph extraction is also not enabled by default.

### **Security Measures**

* An independent [security audit conducted by Recurity Labs](https://huridocs.org/2024/08/uwazi-undergoes-third-independent-audit-to-ensure-security/) (commissioned by HURIDOCS) evaluated Uwazi’s architecture and code against common vulnerabilities based on OWASP and SANS standards (which is about as good as it gets). The assessment confirmed that Uwazi maintains a high level of security. Several minor issues were identified, which have since been addressed and patched. A second audit was done by [Assured ](https://www.opentech.fund/security-safety-audits/uwazi-security-audit/)in May 2024. A [third audit](https://huridocs.org/2024/08/uwazi-undergoes-third-independent-audit-to-ensure-security) was concluded in August 2024 to ensure security. Regular Audits are planned.
* Uwazi integrates several technical measures that contribute to a secure environment for handling sensitive human rights documentation and related materials. These features include support for HTTPS encryption, secure user authentication (including two-factor authentication), and the option to run Uwazi behind a reverse proxy for additional network protections. Admins can configure role-based permissions to ensure only authorized users can access or modify sensitive content. Additionally, Uwazi supports regular updates, backups, and indexing maintenance, providing a stable foundation for safeguarding data integrity. Together, these features can make Uwazi a practical choice for organizations that need a reliable, secure digital infrastructure for their human rights work.
  * For configuring HTTPS, reverse proxy and environment variables: [Sysadmin Guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html)
  * For enabling two-factor authentication (2FA) and managing user permissions:[ Administrator’s Guide](https://uwazi.readthedocs.io/en/latest/admin-docs/managing-settings.html#how-to-configure-your-account)
  * For backup and indexing procedures: [Sysadmin Guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/back-up-restore.html)

For more detailed information and guidance, users can consult:

* **Security Information:** [Uwazi Security Page](https://uwazi.io/page/o7annbvfatg/security)
* **Privacy & Cookies Policies:** [Privacy Policy](https://uwazi.io/page/frhg6i127jc/privacy-policy), [Cookies Policy](https://uwazi.io/page/sg0hbnvot3l/cookies-policy)

#### **Best Practices for Uwazi Administration if running locally**

* **Use Default Configurations First:** Start with Uwazi’s default settings to reduce complexity. Only override environment variables if you have a clear reason and know the impact on your setup.
* **Secure Your Deployment:** Run Uwazi behind a reverse proxy (like Nginx) with HTTPS, and set `LOCALHOST_ONLY=true` so that external traffic must pass through the proxy. When mail notifications are required, properly configure your sendmail or SMTP server.
* **Regular Backups and Data Integrity:** Regularly back up both the MongoDB database and the `uploaded_documents` directory. After restoring, run `yarn migrate` and `yarn reindex` to maintain data integrity and search functionality.
* **Multi-Tenancy and Scaling:** Use distinct database and index names for each tenant, and consider a reverse proxy to direct requests to the correct tenant. Keep code separate from user data, and rely on environment variables to run multiple instances from a single codebase.
* **Routine Maintenance:** Periodically run maintenance scripts like `yarn migrate` and `yarn reindex`. Monitor logs and apply updates or patches as they become available to ensure ongoing stability and security.

For detailed instructions and configurations, refer to the [Sysadmin Guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html).

#### Strengths:

* **Customizability and Flexibility**: Uwazi's customizable data structures and workflows make it adaptable to various project needs.
* **Active Development Community**: The open-source nature of Uwazi means it benefits from continuous community contributions, enhancing its features and security over time.
* **User-Friendly Interface**: Despite its robust capabilities, Uwazi is designed to be user-friendly, making it accessible even to non-technical users.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Uwazi is partially free. The self-hosted version is free to download and run on your own server if you have the technical capacity to maintain it. The hosted option is request-based: users can request an Uwazi database to test for free; the first 100MB is complimentary, and continued hosting is offered through packages scaled to the data volume used in the collection. HURIDOCS says groups using Uwazi for human-rights-related collections receive free hosting services up to 100MB, with more details available on request.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>

## Requirements

To use Uwazi, particularly if you're opting for the self-hosted version, you'll need a server with sufficient resources to handle the platform and a level of technical expertise to manage installation and maintenance. For both hosted and self-hosted options, you need a valid email address to set up accounts and manage user permissions. No additional software is required if using the hosted version, as HURIDOCS handles all management. (Self-hosting dependencies include NodeJs 20.19.6, ElasticSearch 8.18.0 with the ICU Analysis Plugin recommended, MongoDB 7.0.24 with a replica set, mongosh, Redis, Minio, pdftotext/Poppler, and Yarn 4+; the project currently uses Yarn 4.13.0.)

## Limitations

* **Technical Setup:**\
  Setting up and customizing Uwazi can require significant technical expertise, especially for self-hosted deployments. While managed hosting options are available, they may involve additional costs.
* **Integration Capabilities:**\
  Uwazi integrates with certain data sources and tools out of the box, including MongoDB and Elasticsearch for storage and indexing, as well as mapping services like Mapbox or [Google Maps](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-maps). Its public APIs also support reading and indexing data, and it can accommodate a variety of document formats. However, broad pre-built integrations with external content management systems, analytical platforms, or proprietary tools are limited. Organizations working within complex or diverse technical ecosystems may need to invest in custom development, use Uwazi’s APIs, or rely on manual data exchange methods to achieve seamless integration.
* **Configuration Requirements:**\
  Uwazi’s flexibility demands careful initial configuration, involving the definition of categories, relationships, templates, and filters. For projects with substantial data requirements or intricate structures, this setup can be complex and time-consuming.

## Ethical Considerations

While Uwazi’s security capabilities help protect sensitive information, responsible use remains essential. Human rights documentation often involves vulnerable individuals and communities, so it’s critical to limit data access to trusted team members, maintain strict user permissions, and keep collections private if public release is not appropriate. Ensure robust password practices, enable two-factor authentication, and review audit logs regularly. Consider applicable data protection laws, inform users about the use of cookies, and ensure that any publicly shared data does not expose personal details or put individuals at risk. By taking these ethical considerations into account, Uwazi users can help ensure that their documentation efforts respect privacy, uphold legal standards, and serve the broader goal of advancing human rights.

* **Data Encryption**: Uwazi uses HTTPS encryption for secure data transmission, protecting sensitive information from unauthorized access. Uwazi also supports data encryption at rest, ensuring that all sensitive information is protected from unauthorized access during transmission and while stored on the server.
* **User Authentication**: Two-factor authentication (2FA) is available to enhance account security.
* **Hosting Security**: Uwazi’s hosted environments are secured with regular updates and security patches.
* **Data Backup and Recovery**: Regular backups must be conducted to ensure data integrity and availability in case of failures.

## Requirements for a Self-Hosted UWAZI Instance

While Uwazi’s managed hosting options range from free to competitively priced, self-hosting can still be necessary for certain organizations. For example, if strict data protection laws prevent you from using external servers, or you need full control over configurations and integrations, a self-hosted instance provides more autonomy. Some NGOs or advocacy groups may also view self-hosting as a way to reduce ongoing costs, though it’s important to note that the IT overhead and complexity can outweigh initial savings.

**When Does Self-Hosting Make Sense?**

* **Data Sovereignty:** If privacy laws or security policies require complete internal oversight of sensitive information.
* **Customization Needs:** If you want to run custom scripts, integrate with proprietary systems, or manage updates and backups at your own pace.
* **In-House Expertise:** If you have team members with basic server administration experience who can handle ongoing maintenance.

**Technical Requirements and Setup**\
Running a self-hosted Uwazi instance requires a modest level of technical expertise, but it’s not entirely plug-and-play. At a minimum, you’ll need:

* **Server Environment:** The repo README lists a bare-minimum on-premise setup of 4GB RAM, 2 CPU cores, and 20GB disk, with more storage needed for large files such as video, audio, or image collections.
* **Core Dependencies:** Node.js, MongoDB, and Elasticsearch correctly installed and configured.
* **Storage and Backups:** Enough disk space for your documents and metadata, plus room for regular backups.
* **Networking and Security:** A stable connection, proper firewall settings, and a reverse proxy (like Nginx) for HTTPS to ensure secure communication.
* **Optional Email Setup:** If you need password resets or notifications, configure sendmail or SMTP.

**Realistic Expectations for Small NGOs**\
If your organization has limited IT resources, self-hosting may still be achievable if you have at least one technically inclined volunteer or staff member. However, without in-house expertise, you might find that managed hosting or hiring external support simplifies setup and reduces long-term hassle.&#x20;

Uwazi has been employed to document war crimes, manage legal evidence, and archive historical records. Its search, organization, and sharing capabilities can be used for projects that require rigorous documentation and easy access to large volumes of sensitive information. Below, you can find examples of how others have made use of UWAZI:

## Example Projects

* [Afghanistan Memory Home](https://afghanistanmemoryhome.org/): A digital archive of cultural and historical narratives.
* [Atlas of Torture](https://atlas-of-torture.org/): A platform tracking incidents of torture and ill-treatment.
* [Cartography of Attacks Against Women Journalists](https://cartografia-cimac.uwazi.io/): A resource documenting incidents targeting women journalists globally.
* [CYRILLA](https://cyrilla.org/): A database providing access to digital rights-related laws and case law.
* [Death Penalty Database](https://data.jpp.org.pk/en/): A resource on the use of the death penalty in Pakistan.
* [End Reprisals](https://endreprisals.ishr.ch/): A platform recording retaliation against human rights defenders.
* [Footprints](https://nkfootprints.info/): An archive sharing the experiences of North Korean defectors.
* [Girls’ Human Rights Database](https://www.girlsrightsplatform.org/): A collection of legal texts and analysis related to girls’ rights.
* [Global Legal Action Network](https://glanlaw.org/): An organization involved in transnational human rights litigation.
* [Justice Watch Archive](https://foreign-nationals.uwazi.io/): A database monitoring the treatment of foreign nationals in detention.

You can view the full showcase [here](https://uwazi.io/en/page/k5htkcauq7i/showcase).

### Guides and articles

Uwazi Administrator’s Guide — official guide for configuring collections, users, templates, entities, translations, visualisations, extraction workflows and integrations: [https://uwazi.readthedocs.io/en/latest/admin-docs/index.html](https://uwazi.readthedocs.io/en/latest/admin-docs/index.html?utm_source=chatgpt.com)

Uwazi Systems Administrator’s Guide — official guide for installation, backups, multi-tenancy and optional extraction services: [https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html?utm_source=chatgpt.com)

Uwazi documentation source repository — GitHub repository for the Read the Docs documentation, including the admin-docs and sysadmin-docs folders: [https://github.com/huridocs/uwazi-documentation](https://github.com/huridocs/uwazi-documentation)

## Tool provider

Uwazi is developed by the NGO HURIDOCS (Human Rights Information and Documentation Systems), Switzerland. Information about HURIDOCS funding can be found [here](https://huridocs.org/about/funding/).

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

Uwazi uses cookies on its websites and applications to improve functionality, track usage statistics (Google Analytics), facilitate navigation and enable social media sharing. First-party and third-party cookies are used, including session cookies, persistent cookies, and pixel tags. Users can control cookies through their browser settings, but disabling them may limit functionality. This would, for example, restrict the ability to embed posts or integrate content from, for example, WordPress, Matomo Analytics Facebook, YouTube, LinkedIn, LimeSurvey, or GitHub. Their dedicated [cookie policy ](https://uwazi.io/page/sg0hbnvot3l/cookies-policy)page explains their use of cookies in detail.

| Page maintainer |
| --------------- |
| Martin Sona     |
