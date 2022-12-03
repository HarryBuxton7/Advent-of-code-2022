const lineReader = require('line-reader');


let tempArray = []
let linesArray = []
let counter = 0
let lettersInCommon = []
let priorityTotal = 0

lineReader.eachLine('./input3.txt',(line,last)=>{
    tempArray.push(line)
    counter++
    if (counter == 3){
      linesArray.push(tempArray)
      counter = 0
      tempArray = []
    }
    

    if (last){
      linesArray.forEach((arrayOfThree) => {
        tempArray = []
        for (let i = 0; i < arrayOfThree[0].length; i++){

          for (let j = 0; j < arrayOfThree[1].length; j++){
            if (arrayOfThree[0][i] == arrayOfThree[1][j]){

              for (let z = 0; z < arrayOfThree[2].length; z++){
                if (arrayOfThree[0][i] == arrayOfThree[2][z]){
                  tempArray.push(arrayOfThree[0][i])
                  
                }
              }
            }
          }
        }
        tempArray = tempArray.filter(function(item, pos) {
          return tempArray.indexOf(item) == pos;
        })
        lettersInCommon.push(tempArray[0])
      })


      lettersInCommon.forEach(letter => {
        if (letter.charCodeAt(0) < 93){
            priority = letter.charCodeAt(0) - 38
        } else if (letter.charCodeAt(0) > 93){
            priority = letter.charCodeAt(0) - 96
        }
        priorityTotal = priorityTotal + priority
      })

    //answer:
    console.log(priorityTotal) //2276
    }

})
