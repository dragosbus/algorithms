const search = (arr, key) => {
    let middle = Math.floor(arr.length / 2);
    if(key === arr[middle]) {
        return true;
    }
    if(key < arr[middle]) {
        return search(arr.splice(0, middle), key);
    }
    if(key>arr[middle]) {
        return search(arr.splice(middle+1), key);
    }
    return false;
}
//the array must be sorted
console.log(search([1,2,3,4,5], 3))