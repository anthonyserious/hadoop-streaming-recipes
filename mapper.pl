#!/usr/bin/perl
while ($line = <>) {
  chop($line);
  @a = split(' ', $line);
  foreach (@a) {
    print "$_ 1\n";
  }
}

