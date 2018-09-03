const mergeSort = arr =>{

    if(arr.length < 2) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let result = [];
    while(left.length && right.length) {
        let min;
        if(left[0] < right[0]) min=left.shift();
        else min = right.shift();
        result.push(min);
    }
    if(left.length) result = result.concat(left);
    else result = result.concat(right);

    return result;
}

console.log(mergeSort([5,5,4,3,2,1]));