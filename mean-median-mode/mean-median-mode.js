const meanMedianMode = arr => {
    return {
        mean: mean(arr),
        median: median(arr),
        mode: mode(arr)
    }
}

const mean = arr => {
    return arr.reduce((acc, n) => acc + n, 0) / arr.length;
}

const median = arr => {
    return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
}

const mode = arr => {
    let mapArr = new Map();
    arr.forEach(element => {
       if(!mapArr.has(element)) {
           mapArr.set(element, 1)
       } else {
           mapArr.set(element, mapArr.get(element) + 1)
       }
    });
    
    let max = 0;
    let mostOften;
    for(let value of mapArr.entries()) {
        if(max < value[1]) {
            max=value[1];
            mostOften = value[0];
        }
    }
    return mostOften;
}

console.log(meanMedianMode([1, 9, 5, 7, 8, 6, 4, 4, 5,5]))