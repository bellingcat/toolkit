---
description: >-
  Versatile CLI tool for downloading videos, audio, subtitles, metadata and
  livestream recordings from thousands of websites
---

# yt-dlp

## URL

[https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)\
\
**Current version:** `2026.06.09`, released `2026-06-09`; last checked `2026-06-19`. The same version is listed on GitHub Releases and PyPo

## Description

yt-dlp is a free, open-source command-line tool for downloading online video, audio, subtitles, thumbnails and metadata. It is a fork of youtube-dl and describes itself as a “feature-rich command-line audio/video downloader” with support for thousands of sites.

For open-source researchers, yt-dlp is most useful as a **media preservation and monitoring tool**. You can give it a video URL, playlist, channel, livestream or a text file of URLs and ask it to save the media file, uploader metadata, subtitles, automatic captions, thumbnails and descriptions into a structured case folder. This is useful when content is likely to be deleted, edited, made private or algorithmically buried.

yt-dlp does **not** verify whether a video is authentic. Think of it as a collection tool: it helps you preserve what a platform served to you at a specific time. You still need separate verification steps, such as geolocation, chronolocation, source analysis, reverse image search, cross-platform comparison, metadata review and contextual reporting.

**Inputs:**

* Single video URL
* Playlist URL
* Channel URL
* Livestream URL
* Text file containing multiple URLs
* Browser cookies or a cookies file, when you are lawfully accessing account-visible material
* Previously saved `.info.json` files, when reprocessing metadata

**Outputs:**

* Video and/or audio files
* `.info.json` metadata files
* Subtitle files and automatic captions
* Thumbnail images
* Description files
* Playlist/channel index output
* Download archive text file showing already collected items
* Logs and terminal output, if you save them
* Hashes, if you generate them after collection

### **Typical OSINT pivots:**

* Start with a video URL; preserve the media, uploader ID, upload date, title, description, thumbnail and subtitles.
* Start with a channel URL; build a dated archive of uploads and avoid duplicates with `--download-archive`.
* Start with a livestream; capture the stream while it is still live, then preserve the final file and metadata.
* Start with subtitles; translate or search the transcript for names, places, slogans, threats, vehicle markings or claims.
* Start with a thumbnail; preserve it for reverse image search or comparison with later thumbnail changes.
* Start with a platform account visible only after login; use a dedicated research browser profile and document the access conditions.

### **Key Features**

* **Downloads media from many platforms:** yt-dlp supports a large extractor list, but the maintainers warn that not every listed site is guaranteed to work because websites change. The supported-sites page says the only reliable way to confirm support is to try it.
* **Saves metadata:** `--write-info-json` saves a `.info.json` file containing platform metadata. This may include personal information, so handle it carefully.
* **Saves subtitles and automatic captions:** `--write-subs` and `--write-auto-subs` are useful for transcript review, translation, quote checking and keyword searches.
* **Saves thumbnails:** `--write-thumbnail` and `--write-all-thumbnails` can preserve visual context that may later change.
* **Supports channel and playlist monitoring:** `--download-archive FILE` records downloaded video IDs and skips them in future runs, which is useful for recurring monitoring.
* **Supports livestream capture:** `--live-from-start` can download supported livestreams from the start, but it is marked experimental and is only listed as supported for YouTube, Twitch and TVer.
* **Works with browser cookies:** `--cookies-from-browser` can read cookies from supported browsers, including Firefox, Chrome, Chromium, Edge, Brave, Opera, Safari, Vivaldi and others. This is useful for content you can lawfully view in a research browser profile.
* **Integrates with FFmpeg:** FFmpeg and FFprobe are strongly recommended and are required for common tasks such as merging separate video and audio streams and post-processing files.
* **Includes an updater:** release binaries support `yt-dlp -U`; the project also supports release channels such as `stable`, `nightly` and `master` through `--update-to`. Some package-manager or unpackaged binaries do not auto-update, so check how you installed it.
* **Can verify official release files:** the project publishes SHA2 checksum files, signatures and a public key for release verification. This matters if you are installing yt-dlp on a system used for sensitive research.



#### How to use it

**1. Install yt-dlp**

For a Python-based install, use:

```bash
python -m pip install -U "yt-dlp[default]"
yt-dlp --version
```

The project supports installation through binaries, pip and several package managers. The README recommends specific release files for Linux, Windows and macOS.

**2. Install FFmpeg**

Install FFmpeg and FFprobe before doing serious collection work. Without FFmpeg, yt-dlp may not be able to merge the best available video and audio streams into a single file.

On many Linux systems:

```shellscript
sudo apt install ffmpeg
```

On macOS with Homebrew:

```bash
brew install ffmpeg
```

On Windows, install FFmpeg from the official FFmpeg project or through a trusted package manager.

**3. Create a case folder before collecting**

Use a new folder per investigation or incident. This helps you avoid mixing unrelated material.

```bash
mkdir -p yt-dlp-case/downloads yt-dlp-case/logs yt-dlp-case/tmp
cd yt-dlp-case
```

**4. Run a preservation-oriented download**

This command saves the media file, metadata, thumbnail, description and subtitles. It also records downloaded video IDs so future runs do not duplicate work.

```shellscript
yt-dlp \
  -P "home:downloads" \
  -P "temp:tmp" \
  --write-info-json \
  --write-thumbnail \
  --write-description \
  --write-subs \
  --write-auto-subs \
  --sub-langs "all,-live_chat" \
  --restrict-filenames \
  --no-overwrites \
  --download-archive "logs/downloaded.txt" \
  -o "%(upload_date)s_%(uploader_id)s_%(id)s.%(ext)s" \
  "<URL>"
```

**5. Record the yt-dlp version and create hashes**

The Berkeley Protocol recommends recording collection data and using hash values to help demonstrate that a digital item has not changed after collection. It also recommends preserving embedded media, metadata, contextual information and collection data where relevant.

On Linux or macOS:

```bash
yt-dlp --version > logs/yt-dlp_version.txt
date -u +"%Y-%m-%dT%H:%M:%SZ" > logs/collection_time_utc.txt
find downloads -maxdepth 1 -type f -print0 | xargs -0 shasum -a 256 > logs/SHA256SUMS.txt
```

On Windows PowerShell:

```powershell
yt-dlp --version | Out-File .\logs\yt-dlp_version.txt
Get-Date -Format o | Out-File .\logs\collection_time_local.txt
Get-ChildItem -Recurse .\downloads | Get-FileHash -Algorithm SHA256 | Export-Csv .\logs\SHA256SUMS.csv -NoTypeInformation
```

### Usage Examples

#### **Preserve one video with metadata, thumbnail, description and subtitles**

Use this when you have a single URL that may disappear or change.

```bash
yt-dlp \
  --write-info-json \
  --write-thumbnail \
  --write-description \
  --write-subs \
  --write-auto-subs \
  --sub-langs "all,-live_chat" \
  --no-overwrites \
  -o "%(upload_date)s_%(uploader_id)s_%(id)s.%(ext)s" \
  "<VIDEO_URL>"
```

Expected output: a media file plus sidecar files such as `.info.json`, `.description`, subtitles and thumbnails where available.

#### **Triage a video without downloading the media file**

Use this when you want metadata and thumbnails first, before deciding whether the media file is relevant enough to collect.

```bash
yt-dlp \
  --skip-download \
  --write-info-json \
  --write-thumbnail \
  --write-description \
  "<VIDEO_URL>"
```

Expected output: metadata and thumbnail files, but no video download.

#### **Create a spreadsheet-friendly index of a channel or playlist**

Use this to create a quick TSV file for review before downloading a large channel.

```bash
yt-dlp \
  --flat-playlist \
  --print "%(id)s\t%(upload_date)s\t%(uploader)s\t%(title)s\t%(webpage_url)s" \
  "<CHANNEL_OR_PLAYLIST_URL>" > index.tsv
```

Expected output: a tab-separated file that can be opened in a spreadsheet or imported into analysis tools.

#### **Monitor a channel and only download new items**

Use this when you are watching a source over time.

```bash
yt-dlp \
  --download-archive "logs/downloaded.txt" \
  --write-info-json \
  --write-thumbnail \
  -P "home:downloads" \
  -o "%(upload_date)s_%(uploader_id)s_%(id)s.%(ext)s" \
  "<CHANNEL_URL>"
```

Expected output: new files only. Already downloaded video IDs are stored in `logs/downloaded.txt`.

#### **Capture a supported livestream**

Use this when an event is still live and may not remain public afterwards.

```bash
yt-dlp \
  --live-from-start \
  --write-info-json \
  --write-thumbnail \
  -P "home:downloads" \
  -o "%(upload_date)s_%(uploader_id)s_%(id)s.%(ext)s" \
  "<LIVE_URL>"
```

Note: `--live-from-start` is experimental and is not supported for every site. Test before relying on it during a high-pressure event.

#### **Use cookies from a dedicated research browser**

Use this only when you understand the account and privacy risks.

```bash
yt-dlp \
  --cookies-from-browser firefox \
  --write-info-json \
  --write-subs \
  --write-auto-subs \
  "<URL_VISIBLE_IN_RESEARCH_BROWSER>"
```

Do not run this against a personal browser profile. Use a dedicated research profile or a separate research machine.

#### **Update yt-dlp**

If you installed an official release binary, use:

```bash
yt-dlp -U
```

To move to the nightly channel:

```bash
yt-dlp --update-to nightly
```

If you installed yt-dlp with pip, update it with pip instead:

```bash
python -m pip install -U "yt-dlp[default]"
```

The maintainers note that stable releases are mostly monthly and may become stale when websites change; they recommend nightly for regular users who need fixes sooner. Older releases may show a warning if they are more than 90 days old.

#### **Verify release checksums before installing**

Use this when installing yt-dlp on a machine used for sensitive work.

```bash
curl -LO https://github.com/yt-dlp/yt-dlp/releases/download/2026.06.09/SHA2-256SUMS
curl -LO https://github.com/yt-dlp/yt-dlp/releases/download/2026.06.09/SHA2-256SUMS.sig
curl -L https://github.com/yt-dlp/yt-dlp/raw/master/public.key | gpg --import
gpg --verify SHA2-256SUMS.sig SHA2-256SUMS
```

The README documents release signature verification using the project’s public key.

### Example Use Cases

* **Single video at risk of deletion:** You have a URL to a video documenting a protest, airstrike, police action or public statement. Run yt-dlp with metadata, thumbnail, description and subtitle options. Output: a preservation bundle for later verification.
* **Recurring channel monitoring:** You have a channel belonging to a public official, armed group, company, political campaign or influencer network. Use `--download-archive` during repeated runs. Output: only new videos are downloaded, and the archive file documents what has already been collected.
* **Livestream preservation:** You have a livestream showing an unfolding event. Use `--live-from-start` where supported and start collection as early as possible. Output: a video file and metadata for later review.
* **Subtitle and transcript analysis:** You have multilingual video material. Download subtitles and automatic captions, then search or translate them separately. Output: text files that can support quote extraction, entity extraction and timeline building.
* **Metadata-first triage:** You have dozens or hundreds of URLs. Use `--skip-download --write-info-json` or `--flat-playlist --print` first. Output: a lightweight index to decide what is relevant before collecting large media files.
* **Thumbnail preservation:** You are tracking disinformation or coordinated messaging. Save thumbnails alongside videos. Output: visual material that can be compared later if titles or thumbnails change.
* **Authenticated-view collection:** You can lawfully access content while logged into a research account. Use `--cookies-from-browser` with a dedicated research profile. Output: the content served to that authenticated session, with access conditions documented in your notes.

### Tips for OSINT Researchers

* Save `.info.json` files. They often contain the most useful collection context.
* Save thumbnails, descriptions and subtitles with the media file. They are often as important as the video itself.
* Keep original downloads unchanged. Make separate working copies for clipping, conversion, translation or transcription.
* Save your yt-dlp version, command, date/time and source URL in a log file.
* Use `--download-archive` when monitoring channels over time.
* Use a stable filename pattern that includes upload date, uploader ID and video ID. Titles can change; platform IDs are usually more stable.
* If a site suddenly stops working, update yt-dlp and check the latest release notes before assuming the content has disappeared.
* If you switch from `stable` to `nightly`, record that in the case notes because it may affect reproducibility.
* Do not treat an yt-dlp capture as proof that the content is authentic. It proves that your tool downloaded what was served to you under specific conditions.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

yt-dlp is free and open source. There is no pricing page or paid tier. The source code and PyPI package are listed under the Unlicense, but the README notes that some bundled release files include components under other licenses; PyInstaller-built executables are GPLv3+ because of bundled dependencies

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

A basic download is simple once yt-dlp is installed, but this is still a command-line tool. Researchers who are new to terminals need time to learn installation, paths, output templates, FFmpeg, cookies, logs, updates and safe evidence-handling habits. The project FAQ classifies command-line tools as medium difficulty when users need to learn the command line or spend time learning the tool.

## Requirements

#### Requirements

* **Operating system:** Windows, macOS, Linux or another system supported by yt-dlp’s release or Python installation methods.
* **Python:** Python `3.10+` is required for Python-based installs; PyPy `3.11+` is also supported.
* **Terminal access:** required.
* **FFmpeg and FFprobe:** strongly recommended; required for merging separate video/audio streams and many post-processing workflows.
* **JavaScript runtime for some sites:** the README recommends `yt-dlp-ejs` and a JavaScript runtime for full YouTube support; supported runtimes include Deno, Node.js, Bun and QuickJS, with Deno recommended in the README.
* **Storage space:** channel and livestream archives can become large quickly.
* **Optional browser cookies:** needed for some age-gated, region-gated or account-visible content, but use a dedicated research profile and document the access context.
* **Updater awareness:** official release binaries can use `yt-dlp -U`; pip and package-manager installs should generally be updated using the same method that installed them. Some unpackaged binaries have no auto-update support.

## Limitations

* **Site support can break:** supported extractors depend on platform behaviour. The official supported-sites page warns that not all listed sites are guaranteed to work and that the only reliable way to check a site is to try it.
* **Stable releases can lag behind platform changes:** the README says stable releases are mostly monthly and may become stale because websites change; nightly releases may contain fixes sooner.
* **A download is not a forensic original:** platforms often transcode, recompress or strip original camera metadata before serving media to users. yt-dlp preserves what the platform serves, not necessarily the original file created by the person who recorded it.
* **Metadata can include personal data:** the README explicitly warns that `.info.json` files may contain personal information. Store and share them carefully.
* **Authenticated downloads add risk:** cookies can expose account identity, session information or research infrastructure if handled carelessly.
* **Livestream capture is fragile:** `--live-from-start` is experimental and site-limited. Test it before relying on it for time-sensitive events.
* **Large-scale collection can create review and storage problems:** use date filters, playlist filters and download archives to avoid collecting more than you need.
* **Some external downloader workflows changed:** the `2026.06.09` release notes say HLS/DASH support through `aria2c` was removed after security issues; use yt-dlp’s native concurrent fragment downloader with `-N` instead.
* **Commands can be unsafe if misused:** the `2026.06.09` release notes include security-related changes around unsafe use of `--exec`. Avoid copying advanced commands that execute shell code unless you understand them.
* **No built-in evidentiary case management:** yt-dlp can download and write files, but it does not replace an evidence management system, audit log, chain-of-custody process or verification workflow.

## Ethical Considerations

* **Collect only what is relevant.**[ The Berkeley Protocol](https://www.ohchr.org/en/publications/policy-and-methodological-publications/berkeley-protocol-digital-open-source) recommends assessing relevance before collection and warns against over-collection; collection should be justified, necessary, and proportionate.
* **Document the collection process.** Record the source URL, collection date/time, tool name, tool version, command used, account or browser profile used, and hash values for collected files. The Berkeley Protocol recommends recording collection data and hash values where relevant.
* **Preserve an evidentiary copy.** Keep the original download unchanged and work from copies when clipping, converting or translating. The Berkeley Protocol describes the importance of evidentiary copies, working copies and chain of custody.
* **Handle personal data carefully.** `.info.json` files, comments, captions and thumbnails may identify uploaders, commenters, bystanders or victims.
* **Do not use personal accounts or devices for risky collection.** The Berkeley Protocol recommends separating personal and professional online activity and avoiding unnecessary attribution of investigators or organizations.
* **Respect access limits and applicable law.** Using cookies to access content you can see in a browser is not the same as having permission to republish, redistribute or expose that content.
* **Consider copyright before publication.** The Berkeley Protocol notes that creators often retain rights in photos, videos and text, and that consent or a specific legal exception may be needed depending on jurisdiction and use.
* **Archiving is not verification.** A preserved video still needs source analysis, provenance research, geolocation, chronolocation and corroboration before you rely on it in findings.

## Guides and articles

* yt-dlp project: [Official README / documentation](https://github.com/yt-dlp/yt-dlp/blob/master/README.md) (Accessed: `2026-06-19`)
* yt-dlp project: [Installation guide](https://github.com/yt-dlp/yt-dlp/wiki/Installation?utm_source=chatgpt.com) (Accessed: `2026-06-19`)
* yt-dlp project: [Releases / changelog](https://github.com/yt-dlp/yt-dlp/releases) (Accessed: `2026-06-19`)
* yt-dlp project: [Supported sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md?utm_source=chatgpt.com) (Accessed: `2026-06-19`)
* FFmpeg project: [FFmpeg documentation](https://ffmpeg.org/documentation.html) (Accessed: `2026-06-19`)
* OHCHR and UC Berkeley Human Rights Center: [Berkeley Protocol on Digital Open Source Investigations](https://www.ohchr.org/en/publications/policy-and-methodological-publications/berkeley-protocol-digital-open-source) (Accessed: `2026-06-19`)

## Tool provider

yt-dlp is maintained by the yt-dlp open-source community through the `yt-dlp/yt-dlp` GitHub repository. The project is distributed through GitHub releases and PyPI. The source code and PyPI package are listed under the Unlicense, while some bundled release executables include components under other licenses, as described in the README

## Similar tools

* **youtube-dl** - Use mainly for legacy workflows. yt-dlp is a fork of youtube-dl and documents many differences, including improved format sorting, YouTube-related improvements, browser-cookie support, multi-threaded fragment downloads and update-channel support.
* [**gallery-dl**](https://github.com/mikf/gallery-dl) - Use when your main target is image galleries, image collections or artwork rather than video. gallery-dl is a command-line downloader focused on image galleries and collections.
* [**ArchiveBox**](https://archivebox.io/) - Use when you need to preserve full web pages, bookmarks, social posts, WARC/PDF/HTML/PNG/TXT/JSON outputs and broader archive context. ArchiveBox can also use yt-dlp as part of its media-saving workflow.
* [**Hunchly**](https://hunch.ly/) - Use when you need browser-based web capture, audit trails, full-page captures, timestamps and hashes for pages visited during an investigation. It is commercial software rather than a free command-line downloader.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

yt-dlp itself is a local command-line tool, not a hosted web application. In normal use, it sends requests to the target platform you are downloading from and, when updating or installing, to services such as GitHub or PyPI. Those third-party services and target platforms may log requests. If you use browser cookies, yt-dlp can access account-specific sessions that you provide, so use a dedicated research browser profile rather than a personal one.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
