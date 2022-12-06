const lineReader = require('line-reader');


answered = false
lineReader.eachLine('./input6.txt',(line,last)=>{
    for (let i = 13; i < line.length; i++){
        if (howManyRepeated(line.slice(i-13,i+1)).length == 0){
            //if repeated then find the answer
            if (answered == false){
                console.log(line.slice(i-13,i+1)) //qspgbzmjnlrdhv
                console.log(i+1) //answer: 3037
                answered = true
            }
        }
    }

    //found this function using google
    function howManyRepeated(str){
        const result = [];
        const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
        if (strArr != null) {
          strArr.forEach((elem) => {
            result.push(elem[0]);
          });
        }
        return result;
      }
    if (last){
    }
})

