function fizzBuzzFilter(numbers) {
    return numbers.map(num => {
        if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
        if (num % 3 === 0) return "Fizz";
        if (num % 5 === 0) return "Buzz";
        return num;
    }).filter(item => typeof item === "number");
}

const numbers = [1, 3, 5, 15, 7, 9, 10];
const filteredNumbers = fizzBuzzFilter(numbers);
console.log(filteredNumbers);
