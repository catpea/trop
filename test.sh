#!/usr/bin/env bash

./index.mjs poem.txt > actual.txt;
diff expected.txt actual.txt
rm actual.txt
