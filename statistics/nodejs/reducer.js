#!/usr/bin/env node
var byline = require('byline');
var numbers = require('numbers');

var lines = {};
var stream = byline(process.stdin, {encoding:'utf8'});
stream.on('data', function(d) {
  //  Should be in (name, value) touples
  var pair = d.split(/\s+/);
  pair[1] = parseInt(pair[1]);
  if (!lines[pair[0]]) {
    lines[pair[0]] = [pair[1]]; 
  } else {
    lines[pair[0]].push(pair[1]); 
  }
});

stream.on('end', function() {
  for (var k in lines) {
    var obj = {};
    obj.name = k;
    var report = numbers.statistic.report(lines[k]);
    for (var r in report) {
      obj[r] = report[r];
    }
    console.log(obj);
  }
});


