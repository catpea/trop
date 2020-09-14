#!/usr/bin/env bash

./index.mjs test/poem-html.txt > test/poem-html-actual.txt;
diff test/poem-html-expected.txt test/poem-html-actual.txt
rm test/poem-html-actual.txt
