#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

DEBUG=${DEBUG:=0}
[[ $DEBUG -eq 1 ]] && set -o xtrace

error() {
  printf "\terror: %s\n" "%@" >&2
  exit 1
}

 hugo server \
  --disableFastRender \
  --buildDrafts \
  --buildFuture \
  --enableGitInfo \
  --minify \
  --navigateToChanged \
  --templateMetrics \
  --templateMetricsHints
