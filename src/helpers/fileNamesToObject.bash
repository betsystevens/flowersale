#!/bin/bash

# hbImageNames.txt, input file
# Input:
#   petuniaPurpleHB512x384.jpg
#   ivyGeraniumPinkHB512x384.jpg
#   millionBellsPinkHB512x384.jpg
# Output:
#   { name: "mixed", image: "/assets/images/hb/petuniaPurpleHB512x384.jpg"},
#   { name: "mixed", image: "/assets/images/hb/ivyGeraniumPinkHB512x384.jpg"},
#   { name: "mixed", image: "/assets/images/hb/millionsBellsPinkHB512x384.jpg"},

# sed -e 's/^/{ name: "mixed", image: "\/assets\/images\/hb\//' -e 's/$/"},/' hbImageNames.txt 

sed -e 's/^/{ name: "mixed", image: "\/assets\/images\/pots\//' -e 's/$/"},/' hbImageNames.txt 

