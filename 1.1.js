const lineReader = require('line-reader');

let currentTotal = 0
let biggestTotal = 0

lineReader.eachLine('./input1.txt',(line,last)=>{
    if (isNaN(parseInt(line)) != true){
        currentTotal = currentTotal + parseInt(line)
        if (biggestTotal < currentTotal){
            biggestTotal = currentTotal
            console.log(biggestTotal)
        }
    } else {
        currentTotal = 0
    }
})


setTimeout(function(){
    //answer:
    console.log("the answer is: " + biggestTotal)
}, 500);

