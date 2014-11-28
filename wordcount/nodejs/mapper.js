#!/usr/bin/env node
var byline = require('byline');

var stream = byline(process.stdin, {encoding:'utf8'});
stream.on('data', function(d) { 
  var a = d.split(/\s+/);
  a.forEach(function(e) {
    console.log(e+" 1");
  });
});


