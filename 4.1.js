const lineReader = require('line-reader');


counter = 0
lineReader.eachLine('./input4.txt',(line,last)=>{
    let input = []
    line.split(",").forEach(e => input.push(e.split("-"))) // [ [ '91', '93' ], [ '6', '92' ] ]
    input = input[0].concat(input[1]) // [ '91', '93', '6', '92' ]
    input = input.map(e => parseInt(e)) // [ 91, 93, 6, 92 ]

    if (input[2] >= input[0] && input[3] <= input[1]){
        counter++
    } else if(input[0] >= input[2] && input[1] <= input[3]){
        counter++
    }

    if (last){
        //answer:
        console.log(counter) //456
    }
})
