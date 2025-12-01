#!/bin/bash
set -e

# shellcheck disable=SC1091
. ./release.env

sed -i 'package.json' -e 's@"version": ".*"@"version": "'"$RELEASE_VERSION"'"@g'
