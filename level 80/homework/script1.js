function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 5! = 120
console.log(factorial(7)); // 7! = 5040
