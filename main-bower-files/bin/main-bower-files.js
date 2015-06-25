#!/usr/bin/env node

var mainBowerFiles = require('main-bower-files');

var files = mainBowerFiles({
  bowerDirectory: './bower_components',
  bowerrc: './.bowerrc',
  bowerJson: './bower.json'
});

files.forEach(function (file) {
  console.log(file);
});
