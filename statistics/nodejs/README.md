MapReduce - statistics generation with Node.js
=======

Make sure that either ``$HADOOP_HOME`` or ``$HADOOP_PREFIX`` is set.  Run with
```bash
./run.sh <inputFile> <outputDirectory>
```

This script will first delete any existing outputDirectory.  Once the job is completed, the results will be dumped to stdout with ``hdfs dfs -cat $output/*``.

## Example
Run with the following:
```bash
./run.sh input.txt output
```
The input file contains previously recorded interrupt and context switch data from vmstat, where each line contains a name/value pair in its own JSON object.  The mapper will output "key value" pairs, the reducer will pull these values into the Node.js "numbers" package, and will output a JSON report for each name.  The output should be:
```json
{ name: 'contextSwitches',  
  mean: 25.833333333333332, 
  firstQuartile: 22,  
  median: 24, 
  thirdQuartile: 28,  
  standardDev: 6.96219952473514 } 
{ name: 'interrupts', 
  mean: 16.020833333333332, 
  firstQuartile: 13,  
  median: 15.5, 
  thirdQuartile: 18.5,  
  standardDev: 4.634515361813885 }
```

