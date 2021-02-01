// copy files into a directory, file names are read from file: imgFileNames.txt; 
while read file; do cp "$file" tmpDir; done < imgFileNames.txt;