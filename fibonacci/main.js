var fib = [0, 1];
var sum = 0;

for (var i = 2; i < 4000000; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    //Check if value exceed 4million
    if (fib[i] > 4000000) {
        break;
    }
    //Make sum of all even numbers from serie
    if (fib[i] % 2 === 0) {
        sum += fib[i];
    }
}

console.log(sum);