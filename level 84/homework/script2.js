function multiplyNumbers(start, end) {
    let result = 1;
    for (let i = start; i <= end; i++) {
        result *= i;
    }
    return result;
}

console.log(multiplyNumbers(1, 5)); 