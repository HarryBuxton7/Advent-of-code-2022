const lineReader = require('line-reader');


let totalScore = 0
lineReader.eachLine('./input2.txt',(line,last)=>{

    rockPaperSissorHands = line.split(" ")
    switch (rockPaperSissorHands[1]){
        case "X":
            switch (rockPaperSissorHands[0]){
                case "A":
                    totalScore = totalScore + 1 + 3
                    break;
                case "B":
                    totalScore = totalScore + 1 + 0
                    break;
                case "C":
                    totalScore = totalScore + 1 + 6
                    break;
            }
            break;
        case "Y":
            switch (rockPaperSissorHands[0]){
                case "A":
                    totalScore = totalScore + 2 + 6
                    break;
                case "B":
                    totalScore = totalScore + 2 + 3
                    break;
                case "C":
                    totalScore = totalScore + 2 + 0
                    break;
            }
            break;
        case "Z":
            switch (rockPaperSissorHands[0]){
                case "A":
                    totalScore = totalScore + 3 + 0
                    break;
                case "B":
                    totalScore = totalScore + 3 + 6
                    break;
                case "C":
                    totalScore = totalScore + 3 + 3
                    break;
            }
            break;
    }

    if (last){
        //answer: 
        console.log(totalScore)
    }
})

