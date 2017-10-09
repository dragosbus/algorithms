var array = [];
var num = 600851475143;
var isPrime;
var largest = 0;

for (var i = 2; i <= num; i++) {
    if (num % i === 0) {
        for (var j = 2; j < i / 2; j++) {
            if (i % j === 0) {
                isPrime = false;
            } else {
                isPrime = true;
            }

        }
        if (isPrime) {
            num /= i;
            array.push(i);
        }
    }
}

for (var k = 0; k < array.length; k++) {
    if (largest < array[k]) {
        largest = array[k];
    }
}

console.log(largest);