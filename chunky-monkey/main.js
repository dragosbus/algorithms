function chunk(arr,size) {
    var myArr =[];
    var result;

    while(arr.length>0) {
        result=arr.splice(0,size);
        myArr.push(result);
        result=undefined;
    }
    return myArr;
}

console.log(chunk([0, 1, 2, 3, 4, 5], 4));