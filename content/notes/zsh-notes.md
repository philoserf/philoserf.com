---
title: zsh notes
description: ""
date: 2010-04-20
terms: [zsh, zshenv, zprofile, zshrc, zlogin, zlogout]
---

### zsh startup and shutdown

| condition         | first            | second            |
| ----------------- | ---------------- | ----------------- |
| always            | /etc/zshenv      | ${HOME}/.zshenv   |
| login             | /etc/zprofile    | ${HOME}/.zprofile |
| interactive       | /etc/zshrc       | ${HOME}/.zshrc    |
| login at startup  | /etc/zlogin      | ${HOME}/.zlogin   |
| login at shutdown | ${HOME}/.zlogout | /etc/zlogout      |
|                   |                  |                   |

use `if [[ -o rcs ]]; then ...` to prevent execution after first in `zshenv`

### from man reading

`zcompile` to pre-compile

symlink to `sh`, `bash`, `ksh`, `rsh`, `rbash`, `rksh`, `rzsh`

`$ZDOTDIR`, `$RCS` effect startup; `bindkey -e` for emacs mode; `$HISTFILE`, `$HISTSIZE`, `$SAVEHIST` effect history; `$LANG`, `$LC_TYPE` for character set; `compsys` for completions;
