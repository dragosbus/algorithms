const selectionSort = arr => {
    let min;
    let temp;
    for(let i=0;i<arr.length;i++) {
        min = Math.min(...arr.slice(i));
        if(min < arr[i]) {
            temp = arr[i];
            arr[arr.indexOf(min)] = temp;
            arr[i] = min;
        }
    }

    return arr;
};

console.log(selectionSort([6,5,4,3,2,1,0,10,14,-6]));