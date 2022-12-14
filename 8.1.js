const lineReader = require('line-reader');



treeGrid = []
visibleTrees = 0
lineReader.eachLine('./input8.txt',(line,last)=>{
    treeRow = []
    for (let i in line){
        treeRow.push(parseInt(line[i]))
    }
    treeGrid.push(treeRow)
    if (last){
        for (let i = 0; i < treeGrid.length; i++){
            for (let j = 0; j < treeGrid[i].length; j++){
                if (i == 0 || i == treeGrid.length - 1 || j == 0|| j == treeGrid[i].length - 1){
                    visibleTrees++
                } else {
                    if (checkIfVisible(i,j) == true){
                        visibleTrees++
                    }
                }  
            }
        }
        console.log(visibleTrees)
    }
})

/*
Code checks to see if the view is blocked and if so sets the variable "visible" too false.
Repeated the same check 4 times for each direction. If the view is not blocked returns "visible" as true.
*/

function checkIfVisible(i,j){
    let visible = true;
    for (let x = i - 1; x >= 0; x--){
        if (treeGrid[i][j] <= treeGrid[x][j]){
            visible = false
        }
    }
    if (visible == true){
        return visible
    }

    visible = true;
    for (let x = i + 1; x < treeGrid.length; x++){
        if (treeGrid[i][j] <= treeGrid[x][j]){
            visible = false
        }
    }
    if (visible == true){
        return visible
    }

    visible = true;
    for (let x = j - 1; x >= 0; x--){
        if (treeGrid[i][j] <= treeGrid[i][x]){
            visible = false
        }
    }
    if (visible == true){
        return visible
    }

    visible = true;
    for (let x = j + 1; x < treeGrid.length; x++){
        if (treeGrid[i][j] <= treeGrid[i][x]){
            visible = false
        }
    }
    return visible
}