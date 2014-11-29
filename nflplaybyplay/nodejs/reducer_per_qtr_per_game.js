#!/usr/bin/env node

var byline = require('byline');
var numbers = require('numbers');

var lines = {};
var stream = byline(process.stdin, {encoding:'utf8'});
stream.on('data', function(d) {
  //  Should be in (name, value) touples
  var pair = d.split(/\s+/);
  var quarter = "Q"+pair[1];
  if (!lines[pair[0]]) {
    lines[pair[0]] = {};
    lines[pair[0]].Q1 = 0;
    lines[pair[0]].Q2 = 0;
    lines[pair[0]].Q3 = 0;
    lines[pair[0]].Q4 = 0;
  }
  if (!lines[pair[0]][quarter]) {
    lines[pair[0]][quarter] = 0;
  }
  lines[pair[0]][quarter]++;
});

stream.on('end', function() {
  console.log(lines);
});


