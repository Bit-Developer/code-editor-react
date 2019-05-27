#!/bin/bash
echo -e "\nReady to delete procfile \n"
echo "TRAVIS_BUILD_DIR" + $TRAVIS_BUILD_DIR
#CURR_DIR="/home/travis/build/jojozhuang/code-editor-react"
CURR_DIR=$TRAVIS_BUILD_DIR
CURR_DIR=`basename "$CURR_DIR"`
echo "CURR_DIR = $CURR_DIR"
if [ $CURR_DIR == "code-editor-react" ]; then
  echo -e "\n Procfile is removed \n"
  rm Procfile
fi
