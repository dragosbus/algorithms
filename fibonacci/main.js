const fib = n => {
    var fib = [0, 1];
    var sum = 0;
    
    for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    //Check if value exceed 4million
    if (fib[i] > n) {
        break;
    } 
     //Make sum of all even numbers from serie
    if (fib[i] % 2 === 0) {
        sum += fib[i];
    }
}
    return fib;
}

console.log(fib(4));
