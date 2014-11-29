#!/usr/bin/env node

var byline = require('byline');

var lines = {};
var stream = byline(process.stdin, {encoding:'utf8'});
var quarters = {
  Q1: "",
  Q2: "",
  Q3: "",
  Q4: "",
  Q5: ""
};
var games = {};

stream.on('data', function(d) {
  //  Should be in (name, value) touples
  var pair = d.split(/\s+/);

  //  If we haven't seen this game before, add it to our games
  if (!games[pair[0]]) { games[pair[0]] = true; }
  quarters["Q"+pair[1]]++;
});

stream.on('end', function() {
  var stats = {
    count: Object.keys(games).length,
    total:{},
    mean: {}
  };
  
  for (var k in quarters) {
    stats.total[k] = quarters[k];
    stats.mean[k] = quarters[k] / stats.count;
  }
  console.log(stats);
});


