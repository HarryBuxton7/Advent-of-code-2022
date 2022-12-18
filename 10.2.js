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
        CRTdrawing = ""
        let cycleNumber = 1
        cycles.forEach((registerValue) => {
            if (cycleNumber == registerValue || cycleNumber == registerValue + 1 || cycleNumber == registerValue + 2 ){
                CRTdrawing = CRTdrawing + "#"
            } else {
                CRTdrawing = CRTdrawing + "."
            }
            if (cycleNumber == 39){
                cycleNumber = 0
            } else {
                cycleNumber++
            }
        })
        line1 = CRTdrawing.slice(0,40)
        line2 = CRTdrawing.slice(40,80)
        line3 = CRTdrawing.slice(80,120)
        line4 = CRTdrawing.slice(120,160)
        line5 = CRTdrawing.slice(160,200)
        line6 = CRTdrawing.slice(200,240)
        console.log(line1)
        console.log(line2)
        console.log(line3)
        console.log(line4)
        console.log(line5)
        console.log(line6)
    }
})
