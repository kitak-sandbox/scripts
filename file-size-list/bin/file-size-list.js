#!/usr/bin/env node

var fs = require('fs');
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var totalSize = 0;

reader.on('line', function (path) {
  fs.stat(path, function (err, stat) {
    var size;
    if (err) {
      return;
    }
    size = stat.size;
    totalSize += size;
    process.stdout.write(path+":\t"+size+"\n");
  });
});

process.stdin.on('end', function () {
  process.stdout.write("total:\t"+totalSize+"\n");
});
