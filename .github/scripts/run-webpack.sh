#!/bin/bash

npx webpack build --entry ./dist/main/index.js \
  --output-path ./site \
  --output-filename number-to-chinese-words.bundle.js \
  --mode production \
  --output-library-type window

cp ./site/number-to-chinese-words.bundle.js dist/
