#!/usr/bin/env node
var byline = require('byline');

var stream = byline(process.stdin, {encoding:'utf8'});
stream.on('data', function(d) { 
  var obj = JSON.parse(d);
  console.log(obj.name, obj.value);
});


