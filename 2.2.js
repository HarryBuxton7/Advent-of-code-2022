const lineReader = require('line-reader');


let totalScore = 0
lineReader.eachLine('./input2.txt',(line,last)=>{

    rockPaperSissorHands = line.split(" ")
    switch (rockPaperSissorHands[1]){
        case "X":
            switch (rockPaperSissorHands[0]){
                case "A":
                    totalScore = totalScore + 0 + 3
                    break;
                case "B":
                    totalScore = totalScore + 0 + 1
                    break;
                case "C":
                    totalScore = totalScore + 0 + 2
                    break;
            }
            break;
        case "Y":
            switch (rockPaperSissorHands[0]){
                case "A":
                    totalScore = totalScore + 3 + 1
                    break;
                case "B":
                    totalScore = totalScore + 3 + 2
                    break;
                case "C":
                    totalScore = totalScore + 3 + 3
                    break;
            }
            break;
        case "Z":
            switch (rockPaperSissorHands[0]){
                case "A":
                    totalScore = totalScore + 6 + 2
                    break;
                case "B":
                    totalScore = totalScore + 6 + 3
                    break;
                case "C":
                    totalScore = totalScore + 6 + 1
                    break;
            }
            break;
    }

    if (last){
        //answer:
        console.log(totalScore)
    }
})

