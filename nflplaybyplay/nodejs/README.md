MapReduce - Generate statistics from NFL play-by-play data for the 2012 season with Node.js
=======

Make sure that either ``$HADOOP_HOME`` or ``$HADOOP_PREFIX`` is set.  There are two programs here will build some statistics based on play-by-play data for the NFL 2012 season:
1. reducer_per_qtr.sh - Print out total numbers of plays in each quarter for the season, as well as average number of plays per quarter for the season.
2. reducer_per_qtr_per_game.sh - For each game, print out the number of plays in each quarter.

The data for the 2012 season are in 2012_nfl_pbp_data.csv.

Run with
  ./<programName> 2012_nfl_pbp_data.csv <outputDirectory>

This script will first delete any existing outputDirectory.  Once the job is completed, the results will be dumped to stdout with ``hdfs dfs -cat $output/*``.

## Example
Run with the following:
```bash
./run_per_qtr.sh 2012_nfl_pbp_data.csv output
```
The output will be:
```javascript
{ count: 268, 
  total: { Q1: 10135, Q2: 11854, Q3: 10302, Q4: 12071, Q5: 491 }, 
  mean:   
   { Q1: 37.81716417910448, 
     Q2: 44.23134328358209, 
     Q3: 38.440298507462686,  
     Q4: 45.041044776119406,  
     Q5: 1.8320895522388059 } } 
```

