const lineReader = require('line-reader');


let commands = []
let numbers = []
let registerValue = 1;
let cycleCount = 1
cycles = new Map()

lineReader.eachLine('./input10.txt',(line,last)=>{
    line = line.split(" ")
    commands.push(line[0])
    numbers.push(parseInt(line[1]))

    if (last){
        for (let i = 0; i < commands.length; i++){
            if (commands[i] == "addx"){
                cycles.set(cycleCount, registerValue)
                cycleCount++
                cycles.set(cycleCount, registerValue)
                cycleCount++
                registerValue = registerValue + numbers[i]
            } else if (commands[i] == "noop"){
                cycles.set(cycleCount, registerValue)
                cycleCount++
            }
        }
        console.log(cycles.get(20) * 20 + cycles.get(60) * 60 + cycles.get(100) * 100 + cycles.get(140) * 140 + cycles.get(180) * 180 + cycles.get(220) * 220) //answer: 12840
    }
})
