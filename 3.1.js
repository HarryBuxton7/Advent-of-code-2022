const lineReader = require('line-reader');

let lettersInCommon = []
let priorityTotal = 0

lineReader.eachLine('./input3.txt',(line,last)=>{
    line1 = line.slice(line.length/2)
    line2 = line.slice(0, line.length/2)

    pushedToLettersInCommon = false
    for (i = 0; i < line1.length; i++){
        for (j = 0; j < line1.length; j++){
            //if characters are equal
            if (line1.charAt(i) == line2.charAt(j)){
                if (pushedToLettersInCommon == false){
                    lettersInCommon.push(line1.charAt(i))
                    pushedToLettersInCommon = true
                }
            }
        }
    }

    if (last){
        lettersInCommon.forEach(letter => {
            if (letter.charCodeAt(0) < 93){
                priority = letter.charCodeAt(0) - 38
            } else if (letter.charCodeAt(0) > 93){
                priority = letter.charCodeAt(0) - 96
            }
            priorityTotal = priorityTotal + priority
        })
        //answer:
        console.log(priorityTotal) //7742
    }
})
