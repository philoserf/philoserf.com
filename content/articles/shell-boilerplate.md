---
title: Shell boilerplate
description: ""
date: 2021-03-04
topics: [technology]
terms: [shell, hashbang, template, boilerplate, example]
---

```shell
#!/bin/bash

readonly program="$(basename "${0}")"

usage() {
  cat <<USAGE

Description

Usage:
  ${program} [<arguments>]
  ${program} -h | --help

Options:
  -h --help  Show this screen.
USAGE
}

error() {
  printf "\terror: %s\n" "%@" >&2
  exit 1
}

info() {
  printf "\tinfo: %s\n" "%@" >&2
}

command_1() {
  printf "${program} is unimplemented\n"
}

main() {
  if [[ ${1:-} =~ ^-h|--help$ ]]; then
    usage
  else
    command_1 "$@"
  fi
}

trap 'error "errexit on line $LINENO with exit code: $?"' ERR
set -o errtrace
set -o errexit
set -o nounset
set -o pipefail

IFS=$'\n\t'

[[ -n "${TRACE:-}" ]] && set -o xtrace

main "$@"
```
