var array = [];
var product;
var palindrome;
var largest = 0;

for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        product = i * j;
        //Because split is a string method the product must became a string
        product = product + "";
        palindrome = product.split("").reverse().join("");

        if (palindrome === product) {
            //Push the number product
            array.push(Number(product));
        }
    }
}

for (var k = 0; k < array.length; k++) {
    if (largest < array[k]) {
        largest = array[k];
    }
}

console.log(largest);