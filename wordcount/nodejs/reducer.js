#!/usr/bin/env node
var byline = require('byline');

var lines = {};
var stream = byline(process.stdin, {encoding:'utf8'});
stream.on('data', function(d) {
  //  Should be in (key, count) touples
  var pair = d.split(/\s+/);
  if (!lines[pair[0]]) {
    lines[pair[0]] = pair[1]; 
  } else {
    lines[pair[0]] += pair[1]; 
  }
});
stream.on('end', function() {
  for (var k in lines) {
    console.log(k+" "+lines[k]);
  }
});


