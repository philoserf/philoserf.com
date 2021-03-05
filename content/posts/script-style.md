---
title: Script style
date: 2017-01-23
categories: []
tags: []
---

We drive our devops system of CI/CD pipelines with a collection of standardized bash shell scripts. These scripts collect required resources; validate starting conditions; check for lint and style issues; run unit, acceptance, integration, performance, and smoke tests; build deployment packages and supporting infrastructure in various environments; all while collecting metrics on the artifacts being built and the pipeline’s execution; and reporting the success and failure of each pipeline stage, job, and task into our dedicated chatops channels.
