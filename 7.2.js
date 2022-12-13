const lineReader = require('line-reader');

directories = new Map();
currentDirectories = []
directoryNumber = 0;

lineReader.eachLine('./input7.txt',(line,last)=>{
    directoryNumber++
    if (line.includes("$ cd ..")){
        currentDirectories.pop()
    } else if (line.includes("$ cd")){
        directories.set(directoryNumber, 0);
        currentDirectories.push(directoryNumber);
    } else if (line.includes("dir")){
    } else if (line.includes("$ ls")){

    } else {
        line = line.split(" ")
        number = parseInt(line[0])
        currentDirectories.forEach(element => {
            directories.set(element, directories.get(element)+number);
        });
    }
    if (last){
        directorySizes = []
        directories.forEach(element =>{
            directorySizes.push(element)
        })
        directorySizes.sort(function(a, b){return a - b});
        directorySizes.forEach(directorySize => {
            console.log(directorySize) //answer: 2086088
            /*
            free space = total space - used spaced = 70000000 - 42080344, which is 27919656.
            need 30000000 free space, which means need to delete a directory to free up 2080344.
            smallest directory to delete is: 2086088
            answer: 2086088
            */
        })
    }
})
