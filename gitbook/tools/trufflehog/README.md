---
description: Find leaked credentials.
---

# TruffleHog

## URL

Product Page - [https://trufflesecurity.com/trufflehog](https://trufflesecurity.com/trufflehog)

GitHub Repository - [https://github.com/trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)

## Description

TruffleHog is a tool that is capable of finding, verifying, and analyzing leaked credentials. Credentials can be API keys, passwords, authentication tokens, private keys, etc. TruffleHog is capable of searching through multiple data sources, including local and remote git repositories, Dockerfiles, AWS S3 buckets, file-systems, CI/CD systems, and more. Once a secret is detected, TruffleHog (since version 3) will additionally validate the secret in order to identify which detections are still active and not previously disabled and/or rotated. Lastly, the tool comes with an analyze command that is capable of of taking a detected secret and giving you more information about the permissions and resources it has access to.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

While TruffleHog is free at it's core, there is an [Enterprise version](https://trufflesecurity.com/trufflehog-enterprise) available. However, there is little functionality provided in Enterprise that is of much use to an individual researcher.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

A terminal emulator is required to install and use the tool.

## Limitations

The tool is limited to detecting types of credentials that it has pre-configured detectors for. See a list [here](https://github.com/trufflesecurity/trufflehog/tree/main/pkg/detectors). You may also define [custom detectors](https://docs.trufflesecurity.com/custom-detectors).

## Ethical Considerations

Using credentials found by TruffleHog to gain (or attempt to gain) unauthorized access is unethical and illegal in most countries.

## Guides and articles

The [TruffleHog README](https://github.com/trufflesecurity/trufflehog/blob/main/README.md) has information on how to install and use the tool, including advanced usage.&#x20;

The [TruffleHog Documentation](https://docs.trufflesecurity.com/) provides additional information, though there are Enterprise features co-mingled with the open source features. If a feature is Enterprise-only, the page will have a banner that indicates this, as seen on the [Google Drive page](https://docs.trufflesecurity.com/google-drive) (as of: 27 August, 2024).

## Tool provider

Truffle Security Co. - USA

[https://trufflesecurity.com/](https://trufflesecurity.com/)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Max Louthain    |
|                 |
