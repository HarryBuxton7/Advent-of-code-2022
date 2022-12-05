const lineReader = require('line-reader');



queue = [
    ["C","Z","N","B","M","W","Q","V"],
    ["H","Z","R","W","C","B"],
    ["F","Q","R","J"],
    ["Z","S","W","H","F","N","M","T"],
    ["G","F","W","L","N","Q","P"],
    ["L","P","W"],
    ["V","B","D","R","G","C","Q","J"],
    ["Z", "Q", "N", "B", "W"],
    ["H", "L", "F", "C", "G", "T", "J"],
]

lineReader.eachLine('./input5.txt',(line,last)=>{
    line = line.match(/\d+|\D+/g); // [ 'move ', '2', ' from ', '9', ' to ', '2' ]
    line = [parseInt(line[1]),parseInt(line[3]),parseInt(line[5])] // [2, 9, 2 ]
    for (let i = 0; i < line[0]; i++){
        queue[line[2]-1].push(queue[line[1] - 1].pop())
    }

    if (last){
        console.log(queue) //answer is QNHWJVJZW
    }
})
