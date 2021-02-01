#!/bin/bash

## convert data from sql into mongo document/object format 
## take data from the flower table and put into object notation

## password for mySql 
PASS=$1

## sql
FNAME="select fname from flower"
FVARIETY="select fvariety from flower"
FCONTAINER="select fcontainer from flower"
## put each field of flower table into a separate file
echo $FNAME | mysql -u root -p$PASS plantsale > names
echo $FVARIETY | mysql -u root -p$PASS plantsale > varieties
echo $FCONTAINER | mysql -u root -p$PASS plantsale > containers

## turn fields into object properties - name:"value" 
## rename because we did not like old names
sed -e 's/^/{ name: "/' -e 's/$/",/' names > n1
sed -e 's/^/ variety: "/' -e 's/$/",/' varieties > v1
sed -e 's/^/ container: "/' -e 's/$/" },/' containers > c1

# paste separate files into one (paste ≈ merge lines)
paste n1 v1 c1 > flower.props 

## remove tabs, remove sql column header line
sed -e "s/$(printf '\t')//g"  -e "1d" flower.props > temp
mv temp flower.props

## $(printf '\t') is needed on my mac's sed
## on linux aws site this works
## sed -e "s/'\t'//g" flower.props

## clean up
/bin/rm names 
/bin/rm varieties 
/bin/rm containers 
/bin/rm n1 
/bin/rm v1 
/bin/rm c1 

