#!/usr/bin/env node
var byline = require('byline');

var keys = [ 
  /* 0 */  'gameid', 
  /* 1 */  'qtr', 
  /* 2 */  'min', 
  /* 3 */  'sec', 
  /* 4 */  'off', 
  /* 5 */  'def', 
  /* 6 */  'down', 
  /* 7 */  'togo', 
  /* 8 */  'ydline', 
  /* 9 */  'description', 
  /* 10 */ 'offscore', 
  /* 11 */ 'defscore', 
  /* 12 */ 'season' ];

var re = /^2/;
var stream = byline(process.stdin, {encoding:'utf8'});
stream.on('data', function(d) {
  if (d.match(re) !== null) {
    var a = d.split(',');
    console.log(a[0], a[1]);
  }
});


