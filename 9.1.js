const lineReader = require('line-reader');


let Hcoordinates = [0,0]
let Tcoordinates = [0,0]
uniqueTailCorrdinates = new Map();

lineReader.eachLine('./input9.txt',(line,last)=>{
    line = line.split(" ")
    direction = line[0]
    stepsToMove = line[1]

    for (let i = 0; i < stepsToMove; i++){ //move the head in desired direction
        switch (direction){
            case "R":
                Hcoordinates[0]++
                break;
            case "L":
                Hcoordinates[0]--
                break;
            case "U":
                Hcoordinates[1]++
                break;
            case "D":
                Hcoordinates[1]--
                break;
        }
        
        if (Hcoordinates[0] >= Tcoordinates[0] + 2|| Hcoordinates[0] <= Tcoordinates[0] - 2 || Hcoordinates[1] >= Tcoordinates[1] + 2 || Hcoordinates[1] <= Tcoordinates[1] - 2){
            //head and tail are touching, move tail

            if (Hcoordinates[0] == Tcoordinates[0]){ //head and tail same x axis, move tail in straight line
                if (Hcoordinates[1] > Tcoordinates[1]){ //move left or right
                    Tcoordinates[1]++
                } else {
                    Tcoordinates[1]--
                }

            } else if (Hcoordinates[1] == Tcoordinates[1]){//head and tail same y axis, move tail in straight line
                if (Hcoordinates[0] > Tcoordinates[0]){ //move up or down
                    Tcoordinates[0]++
                } else {
                    Tcoordinates[0]--
                }
                
            } else { //head and tail are different x and y axis, move tail diagonally
                if (Hcoordinates[0] > Tcoordinates[0] && Hcoordinates[1] > Tcoordinates[1]){
                    Tcoordinates[0]++
                    Tcoordinates[1]++
                }
                if (Hcoordinates[0] < Tcoordinates[0] && Hcoordinates[1] < Tcoordinates[1]){
                    Tcoordinates[0]--
                    Tcoordinates[1]-- 
                }
                if (Hcoordinates[0] > Tcoordinates[0] && Hcoordinates[1] < Tcoordinates[1]){
                    Tcoordinates[0]++
                    Tcoordinates[1]--
                }
                if (Hcoordinates[0] < Tcoordinates[0] && Hcoordinates[1] > Tcoordinates[1]){
                    Tcoordinates[0]--
                    Tcoordinates[1]++
                }
            }
        } else {
            //head and tail are not touching, don't move tail
        }
        
        //register tail coordinates in hash map:
        uniqueTailCorrdinates.set(Tcoordinates[0].toString() + " " + Tcoordinates[1].toString(), 0)

    }

    if (last){
        console.log(uniqueTailCorrdinates.size) //answer: 6190
    }
})
