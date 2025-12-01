#!/bin/bash
set -e

# shellcheck disable=SC1091
. ./release.env

if [ -z "$ISSUE_TO_CLOSE" ]; then
  GIT_MESSAGE="$RELEASE_TITLE"
else
  GIT_MESSAGE="$RELEASE_TITLE, Close $ISSUE_TO_CLOSE"
fi

set -x
git commit -m "$GIT_MESSAGE"
git push
