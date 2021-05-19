---
title: On Alerts
description: ""
date: 2015-04-20
terms: [monitoring, observability]
---

source: [from the Thoughtworks radar](https://www.thoughtworks.com/radar/techniques/monitoring-of-invariants)

In monitoring, the common approach is to conceive of erroneous conditions and set alerts when these appear. But it is often difficult to enumerate the myriad failure modes in a software system. Monitoring of invariants is a complementary approach to setting expected normal ranges, often by examining historical behavior, and alerting whenever a system goes outside those bounds.
