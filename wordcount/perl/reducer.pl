#!/usr/bin/perl

#  Roughly translated from Michael Noll's wordcount with Python and hadoop-streaming
#  http://www.michael-noll.com/tutorials/writing-an-hadoop-mapreduce-program-in-python/

my $currentWord = "", $total = 0;
my $word = "";

while ($line = <>) {
  chop($line);
  my $count = 0;
  
  ($word, $count) = split(' ', $line);
  if ($word eq $currentWord) {
    #print "$word eq $currentWord\n";
    $total += $count;
  } else {
    if ($currentWord ne "") {
      #print "$currentWord != ''\n";
      print "$currentWord $total\n";
    }
    $currentWord = $word;
    $total = $count;
  }
}

if ($currentWord eq $word) {
  #print "$currentWord == $word ''\n";
  print "$currentWord $total\n";
}

