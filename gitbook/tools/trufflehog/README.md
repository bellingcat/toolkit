---
updated: '2026-06-23'
description: Find leaked credentials.
---

# TruffleHog

## URL

Product Page - [https://trufflesecurity.com/trufflehog](https://trufflesecurity.com/trufflehog)

GitHub Repository - [https://github.com/trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog)

## Description

TruffleHog is an open source secret scanning tool that discovers, classifies, validates, and analyses leaked credentials. Credentials like API keys, passwords, authentication tokens, private keys, and similar machine-to-machine secrets. It scans across Git, chats, wikis, logs, API testing platforms, object stories, filesystems and more, including git history, Dockerfiles, S3 buckets, and CI/CD pipelines. Since v3, detected secrets are automatically validated against the live service to confirm whether they're still active rather than already rotated or revoked. For many common credential types, its analyse command goes further, querying the provider's API to establish who created it, what resouces it can access, and what permissions it has on those resouces, rather than confirming it works.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

TruffleHog's core scanning, validation, and analysis capabilities are fully open-source and free. Truffle security also sells an [Enterprise version](https://trufflesecurity.com/trufflehog-enterprise), but this adds continuous monitoring, integrations, and team management for organisations, it doesn't extend the detection capabilities themselves, so it offers little to an individual reseaercher running one-off scans.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Requires a terminal and one of: the official install script (curl), Go (for go install), Docker, or Homebrew. Runs on Windows, macOS, and Linux. Internet access is needed for secret validations. Scanning private or cloud-hosted sources (e.g. GitHub, S3) requires appropriate credentials for that source.

## Limitations

TruffleHog can only detect credential types with a built in detector, see a list [here](https://github.com/trufflesecurity/trufflehog/tree/main/pkg/detectors) and [custom detectors](https://docs.trufflesecurity.com/custom-detectors). You can extend coverage with customer regex based detectors via config, or write more complex Go-based detectors (including verification logic) and compile them into the binary - this is a more involved process than basic configuration. Detection itself relies on regex and entropy matching, so it can produce false positives/negatives. Verification only works for credential types with an active verifier and requires network access to the relevant services; secrets without a verifier are reported as unverified rather than confirmed live.

## Ethical Considerations

Running the tool against systems or repositories without authorisation to do so is ethically and often legally questionable, independent of what is found. Using credentials found by TruffleHog to gain or attempt to gain unauthorised access is unethical and illegal in most jurisdictions (e.g. under the UK Computer Misuse Act 1990 or the US CFAA). Any live secrets discovered should be handled minimally, not retained or shared beyond what's needed to verify and report the finding, and disclosed responsibly to the credential's owner rather than published.

## Guides and articles

The [TruffleHog README](https://github.com/trufflesecurity/trufflehog/blob/main/README.md) has information on how to install and use the tool, including advanced usage.

The [TruffleHog Documentation](https://docs.trufflesecurity.com/) provides additional information, though there are Enterprise features co-mingled with the open source features. If a feature is Enterprise-only, the page will have a banner that indicates this, as seen on the [Google Drive page](https://docs.trufflesecurity.com/google-drive) (as of: 27 August, 2024).

The [Introducing TruffleHog v3](https://trufflesecurity.com/blog/introducing-trufflehog-v3) is the primary source explaining the shift from regex/entropy-only detection to validated detection.

The [TruffleHog The Kitchen](https://trufflesecurity.com/the-kitchen) covers practical things like git vs filesystem command differences and per-source scanning guides, useful for running the tool.

## Similar Tools

TruffleHog is the only free option that verifies whether a found secret is actually still active, and it scans beyond git (S3, Docker images, filesystems, CI/CD, Slack, etc).&#x20;

[Gitleaks](https://github.com/gitleaks/gitleaks) is a regex and entropy based secret scanner for git repositories. It is very fast, easy to configure, good for quick CI checks. There are however no credential verification, so it can't confirm whether a found secret is still live.

[detect\_secrets](https://github.com/Yelp/detect-secrets) Yelp's scanner, built around a baseline workflow for onboarding scanning into large existing codebases without being swamped by historical findings.  It is narrower in scope that TruffleHog or Gitleaks, no verification, and less suited to ad hoc one off OSINT scans.

[git-secrets](https://github.com/awslabs/git-secrets) AWS Labs' tool focused mainly on preventing AWS credentials from being committed via git hooks. Narrow coverage, no verification, not really designed for investigation scanning of third party repos.&#x20;

[GitGuardian](https://www.gitguardian.com) is a commercial platform for continuous monitoring across GitHub/GitLab and public commits, with dashboards and incident workflows. It isn't free, and not really a suitable tool for OSINT research, but similar to TruffleHog Enterprise.&#x20;

For an individual researcher, the most appropriate options are TruffleHog for depth and verification, versus Gitleaks for speed, simplicity, but has no verification. The other options listed above are either narrower in scope or aimed at organisational monitoring rather than one off investigations.

## Tool provider

Truffle Security Co. - USA

[https://trufflesecurity.com/](https://trufflesecurity.com/)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer                |
| ------------------------------ |
| Bellingcat Volunteer Community |
