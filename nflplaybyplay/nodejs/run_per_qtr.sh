#!/bin/sh

[ ! -z "$HADOOP_HOME" ] && HH=$HADOOP_HOME
[ ! -z "$HADOOP_PREFIX" -a -z "$HH" ] && HH=$HADOOP_PREFIX
if [ -z "$HH" ]; then
  echo "Neither \$HADOOP_HOME not \$HADOOP_PREFIX is set." 2>&1
  exit 1
fi
if [ $# -ne 2 ]; then
  echo "Usage: $0 <inputFile> <outputDirectory>" 2>&1
  exit 2
fi

input=$1
output=$2

PATH=$HH/bin:$PATH
export PATH

hdfs dfs -rm $output/*
hdfs dfs -rmdir $output

hadoop jar $HH/contrib/streaming/hadoop-streaming-2.5.2.jar -input $input -output $output -mapper `pwd`/mapper.js -reducer `pwd`/reducer_per_qtr.js

hdfs dfs -cat $output/*


