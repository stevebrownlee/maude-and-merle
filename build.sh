#!/bin/bash

rm -rf build
mkdir -p build/styles
mkdir -p build/scripts
mkdir -p build/images
cp src/index.html build
cp src/styles/* build/styles
cp src/images/* build/images
javascript-obfuscator ./src/scripts --output build/scripts
