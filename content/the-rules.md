---
title: The rules
description: ""
date: 2021-06-22
topics: [technology]
terms:
  [
    source code,
    simplicity,
    yagni,
    accept,
    adapt,
    default,
    fest first,
    tdd,
    bdd,
    ci,
    cd,
    continuous,
    rebase,
    merge,
    squash,
    surrender,
    reason,
  ]
---

Keep it simple. Make it when you need it.

- If it has a name, do not give it another name.
- If you have given it a name, do not give it another name.
- Start with one file until you need another file.
- Split a file when it meeds it.
- Merge a file into another when it is not needed.
- Start with one folder until you need another folder.
- Create a subfolder when it is needed.
- Remove a subfolder when it is not needed.

Surrender or have a reason.

- Adapt to the default configuration.
- After a sincere effort to adapt fails, change the default configuration.
- Do not think about lint and style. Tools can handle those.

All the continuous things.

- Test everything.
- Deploy every merge request that passes the tests.
- Test everything.
- Release main after every merge.

Source code hygiene.

- One change per commit.
- Rebase to reorganize commits before you offer a pull request.
- Rebase again to squash commits and commit messages before you merge to master.

---

TODO; add the why | provide examples | define _need_ | define _everything_
