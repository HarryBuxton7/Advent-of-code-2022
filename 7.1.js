const lineReader = require('line-reader');

/*
Did not realise names of directories repeat. I was confused as to why my input didn't work so checked on reddit and saw that directory names repeat which caused issues.
This was very quickly solved by making each directory name a unique number, directoryNumber which increments each loop.
*/

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
        accumulator = 0
        directories.forEach(element =>{
            if (element <= 100000 ){
                accumulator+= element
            }
        })
        console.log(accumulator) //answer: 1611443
    }
})

