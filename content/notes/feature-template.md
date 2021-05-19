---
title: Feature Template
description: ""
date: 2021-05-12
terms: [template, bdd]
---

```gherkin
Feature: NAME

  DESCRIPTION

  Background: NAME

  DESCRIPTION

  Given STEP_DESCRIPTION
  And STEP_DESCRIPTION

  Scenario Outline: NAME

  DESCRIPTION

  Given STEP_DESCRIPTION
  And STEP_DESCRIPTION "<input>"
  When STEP_DESCRIPTION
  But STEP_DESCRIPTION
  Then STEP_DESCRIPTION "<output>"
  And STEP_DESCRIPTION

    Example:
    | input  | output |
    | value  | result |
    | valve  | result |
```
