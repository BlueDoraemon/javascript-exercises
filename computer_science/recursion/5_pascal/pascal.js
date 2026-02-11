const pascal = function(maxRow,currentRow = 1, prevArray = [1]) {
    if (currentRow === maxRow) { 
        return prevArray;
    }

    const padded = [0,...prevArray,0];
    const nextArray = [];
    for (let i = 0; i < padded.length-1; i++) {
        nextArray.push(padded[i] + padded[i+1]);
    }
    return pascal(maxRow,currentRow+1, nextArray)
};
  
// Do not edit below this line
module.exports = pascal;
