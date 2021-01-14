// Your code here
function mapToNegativize(sourceArray){
    const negativeWords = sourceArray.map(function(number){
        return number * -1
    })
    return negativeWords
}

function mapToNoChange(sourceArray){
    const sameWords = sourceArray.map(function(number){
        return number 
    })
    return sameWords
}

function mapToDouble(sourceArray){
    const doubleWords = sourceArray.map(function(number){
        return number + number
    })
    return doubleWords
}

function mapToSquare(sourceArray){
    const squareWords = sourceArray.map(function(number){
        return number * number
    })
    return squareWords
}

function reduceToTotal(sourceArray, startingPoint){
    let arrayTotals = sourceArray.reduce(function (accumulator, start) {
        return accumulator += start;
    })
    if (startingPoint){
     arrayTotals += startingPoint
    }
    return arrayTotals
}

function reduceToAllTrue(sourceArray){
    let savedBoolean = true
    for (const i in sourceArray) {
        if (sourceArray[i] === false) {
          savedBoolean = false
        }
      }
       return savedBoolean
    }

function reduceToAnyTrue(sourceArray){
    let savedBoolean = false
    for (const i in sourceArray) {
        if (sourceArray[i] === true) {
          savedBoolean = true
        }
      }
       return savedBoolean

}