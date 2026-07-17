---
description: Free, open-source self-OSINT tool that scans your own username, email, breach, and data broker exposure in one local sweep.
---

# Clearfront OSINT

## URL

https://github.com/scottmartinanderson/clearfront

## Description

Clearfront OSINT is a free, MIT-licensed tool for self-OSINT: scanning your own digital footprint the way an investigator would. A single sweep covers username presence across sites, email account registrations, breach history, and data broker exposure. It runs around 30 modular collection tools that wrap established projects such as Sherlock, Maigret, holehe, Have I Been Pwned, crt.sh, and the Wayback Machine, and renders the results as a force-directed evidence graph. An AI security analyst (Anthropic Claude or a local Ollama model) writes the findings up with per-finding confidence ratings.

Example use case: before publishing under your own name, run a sweep on your handle and email to see which old accounts, breach records, and broker listings are attached to them, then work through the report to close them down. The same workflow suits researchers assessing their operational exposure.

Everything runs locally with your own API keys; there is no hosted service. Interfaces: CLI, interactive REPL, browser console, and an MCP server so AI assistants can drive sweeps directly.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

MIT-licensed open source. Optional third-party costs: a Have I Been Pwned API key for breach lookups, and an Anthropic API key for the cloud AI analyst (a free local Ollama model works instead).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Python 3.10 or newer, installed with `pip install clearfront`. Optional: a Have I Been Pwned API key (breach module), and either an Anthropic API key or a locally installed Ollama model (AI analyst). No account or registration for the tool itself.

## Limitations

Username-presence checks inherit the false-positive and coverage limits of Sherlock-style enumeration, so hits need verification. Breach coverage depends on Have I Been Pwned. Data broker checks cover the broker set implemented in its collectors, not every broker. The AI write-up requires an API key or a local model, and like all LLM output should be treated as analysis to review, not ground truth. It is a command-line-first tool; the browser console runs locally but there is no hosted web version.

## Ethical Considerations

Clearfront is designed for self-assessment, but technically it will sweep any username or email address. Use it only on identities you own or are explicitly authorized to assess. Sweeps make active requests to target platforms from your machine, which is an OPSEC consideration in sensitive contexts. Reports and evidence graphs can concentrate sensitive personal data in one document; store and share them carefully and redact where appropriate.

## Guides and articles

Documentation and guides are maintained at https://clearfront.sh and in the repository README: https://github.com/scottmartinanderson/clearfront

## Tool provider

Scott Anderson, independent developer (https://clearfront.sh). Clearfront OSINT is an MIT-licensed fork of OpenOSINT, with the original attribution retained.

## Similar tools

Sherlock and Maigret check username presence only, and holehe checks email registrations only; Clearfront wraps all three and adds breach and data broker coverage plus reporting on top. SpiderFoot automates much broader attack-surface reconnaissance with hundreds of modules, but is heavier to set up and aimed at investigating targets in general rather than a guided audit of your own footprint. Have I Been Pwned covers breach exposure only, via a website. Clearfront's distinct strengths are the single-sweep self-audit workflow, the local-first design, and the AI-written, confidence-rated report; its weakness relative to SpiderFoot or Maltego is depth on infrastructure and link-analysis investigations.

| Page maintainer |
| --------------- |
| Scott Anderson  |
