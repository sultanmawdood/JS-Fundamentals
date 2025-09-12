#!/usr/bin/node

const firstArg = process.argv[2]; // first argument passed to script

if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
