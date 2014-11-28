MapReduce wordcount with perl
=======

Make sure that either ``$HADOOP_HOME`` or ``$HADOOP_PREFIX`` is set.  Run with
  ./run.sh <inputFile> <outputDirectory>

This script will first delete any existing outputDirectory.  Once the job is completed, the results will be dumped to stdout with ``hdfs dfs -cat $output/*``.

