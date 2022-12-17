const lineReader = require('line-reader');


let coordinates = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
uniqueTailCorrdinates = new Map();

lineReader.eachLine('./input9.txt',(line,last)=>{
    line = line.split(" ")
    direction = line[0]
    stepsToMove = line[1]

    for (let j = 0; j < stepsToMove; j++){
        for (let i = 0; i < coordinates.length; i++){
            if (i == 0){
                switch (direction){
                    case "R":
                        coordinates[i][0]++
                        break;
                    case "L":
                        coordinates[i][0]--
                        break;
                    case "U":
                        coordinates[i][1]++
                        break;
                    case "D":
                        coordinates[i][1]--
                        break;
                }
            } else {
                if (coordinates[i-1][0] >= coordinates[i][0] + 2|| coordinates[i-1][0] <= coordinates[i][0] - 2 || coordinates[i-1][1] >= coordinates[i][1] + 2 || coordinates[i-1][1] <= coordinates[i][1] - 2){
        
                    if (coordinates[i-1][0] == coordinates[i][0]){ 
                        if (coordinates[i-1][1] > coordinates[i][1]){
                            coordinates[i][1]++
                        } else {
                            coordinates[i][1]--
                        }
        
                    } else if (coordinates[i-1][1] == coordinates[i][1]){
                        if (coordinates[i-1][0] > coordinates[i][0]){ 
                            coordinates[i][0]++
                        } else {
                            coordinates[i][0]--
                        }
                        
                    } else { 
                        if (coordinates[i-1][0] > coordinates[i][0] && coordinates[i-1][1] > coordinates[i][1]){
                            coordinates[i][0]++
                            coordinates[i][1]++
                        }
                        if (coordinates[i-1][0] < coordinates[i][0] && coordinates[i-1][1] < coordinates[i][1]){
                            coordinates[i][0]--
                            coordinates[i][1]-- 
                        }
                        if (coordinates[i-1][0] > coordinates[i][0] && coordinates[i-1][1] < coordinates[i][1]){
                            coordinates[i][0]++
                            coordinates[i][1]--
                        }
                        if (coordinates[i-1][0] < coordinates[i][0] && coordinates[i-1][1] > coordinates[i][1]){
                            coordinates[i][0]--
                            coordinates[i][1]++
                        }
                    }
                } else {
                    
                }
                if (i == 9){
                    uniqueTailCorrdinates.set(coordinates[i][0].toString() + " " + coordinates[i][1].toString(), 0)    
                }
            }
        }
    }


    if (last){
        console.log(uniqueTailCorrdinates.size) //answer: 2516
    }
})
