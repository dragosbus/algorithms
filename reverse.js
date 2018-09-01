const reverse = arr => {
    let compl = 0;
    for(let i=Math.floor((arr.length-1)/2);i>=0;i--) {
        compl = arr.length - i - 1;
        [arr[i], arr[compl]] = [arr[compl], arr[i]]
    }
    console.log(arr);
};

reverse([1,2,3,4,5]);