#!/bin/sh
# Deliberately contains common ShellCheck-flaggable issues: unquoted
# expansions, legacy backticks, and a useless use of cat.
name=$1
echo "Hello, $name, welcome to $HOME"
files=`ls *.txt`
for f in $files; do
  cat $f | grep foo
done
if [ $name == "admin" ]; then
  echo "granted"
fi
