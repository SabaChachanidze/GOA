function calculateSum(n) {
    let sum = 0;
    switch (true) {
        case n <= 0:
            return 0;
        default:
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            return sum;
    }
}

console.log(calculateSum(5)); 