const lineReader = require('line-reader');

let currentTotal = 0
let biggestTotal = 0

let listOfNumbers = []
lineReader.eachLine('./input1.txt',(line,last)=>{
    if (isNaN(parseInt(line)) != true){
        currentTotal = currentTotal + parseInt(line)
        if (biggestTotal < currentTotal){
            biggestTotal = currentTotal
            console.log(biggestTotal)
        }
    } else {
        listOfNumbers.push(currentTotal)
        currentTotal = 0
    }
})

setTimeout(function(){
    console.log("ended")
    function findThreeLargestNumbers(array) {
        return [...array].sort((a, b) => a - b).slice(-3);
      }
      
    //answer:
    console.log("the answer is: " + findThreeLargestNumbers(listOfNumbers))
}, 500);
