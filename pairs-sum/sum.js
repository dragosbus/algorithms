const pairsSum = (arr, sum) => {
    const res = [];
    const hash = [];
    for(let i=0;i<arr.length;i++) {
        let diff = sum - arr[i];
        if(hash.includes(diff)) {
            res.push([arr[i], diff]);
        }
        hash.push(arr[i]);
    }
    return res;
};

console.log(pairsSum([1,2,3,4,3,5], 7))