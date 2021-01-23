"use strict";
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
