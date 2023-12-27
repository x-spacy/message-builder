#!/bin/bash node

rm -rf dist
tsc --build
tsconfig-replace-paths --src src --out dist --project tsconfig.json > /dev/null
