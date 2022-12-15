const lineReader = require('line-reader');



treeGrid = []
highestScenicScore = 0

lineReader.eachLine('./input8.txt',(line,last)=>{
    treeRow = []
    for (let i in line){
        treeRow.push(parseInt(line[i]))
    }
    treeGrid.push(treeRow)
    if (last){
        for (let i = 0; i < treeGrid.length; i++){
            for (let j = 0; j < treeGrid[i].length; j++){{
                console.log(calcScenicScore(i,j))
                    if (calcScenicScore(i,j) > highestScenicScore){
                        highestScenicScore = calcScenicScore(i,j)
                    }
                }  
            }
        }
        console.log(highestScenicScore) //answer: 268800
    }
})

/*
Code checks to see if the view is blocked and if so sets the variable "visible" too false.
Repeated the same check 4 times for each direction. If the view is not blocked returns "visible" as true.
*/

function calcScenicScore(i,j){
    let scenicScore = []
    let acc = 0
    for (let x = i - 1; x >= 0; x--){
        acc++
        if (treeGrid[i][j] <= treeGrid[x][j]){
            break;
        }
    }
    scenicScore.push(acc)

    acc = 0
    for (let x = i + 1; x < treeGrid.length; x++){
        acc++
        if (treeGrid[i][j] <= treeGrid[x][j]){
            break;
        }
    }
    scenicScore.push(acc)
    acc = 0
    for (let x = j - 1; x >= 0; x--){
        acc++
        if (treeGrid[i][j] <= treeGrid[i][x]){
            break;
        }
    }
    scenicScore.push(acc)
    acc = 0
    for (let x = j + 1; x < treeGrid.length; x++){
        acc++
        if (treeGrid[i][j] <= treeGrid[i][x]){
            break;
        }
    }
    scenicScore.push(acc)
    let totalScore = scenicScore[0] * scenicScore[1] * scenicScore[2] * scenicScore[3]
    return totalScore
}