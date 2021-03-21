#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

error() {
  printf "\terror: %s\n" "%@" >&2
  exit 1
}

note() {
  printf "\tnote: %s\n" "%@" >&2
}

DEBUG=${DEBUG:=0}
[[ $DEBUG -eq 1 ]] && set -o xtrace

k6 run ./hack/load-test.js
