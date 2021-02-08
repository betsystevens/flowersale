"use strict";
// input file - array of objects with 'id' property
// id's maybe be duplicates, skipped, out of order
// require input file
// assign sequential values to id
// no duplicates, ordered beginning at 0
// write to file given in command
// usage: node orderIdsSnippet <someFileName>

const { idArray } = require("./allFlowers_bak.js");
const process = require("process");
const fs = require("fs");

const outFile = process.argv[2];

console.log(idArray);
let newArray = idArray.map((flower, i) => {
  flower.id = i;
  return flower;
});
console.log(newArray);
const data = JSON.stringify(newArray);
fs.writeFile(outFile, data, function(err) {
  if (err) return console.log(err);
  console.log(`write to ${outFile}`);
});
