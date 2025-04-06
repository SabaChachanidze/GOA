let numbers = [10, 20, 30, 40, 50];

let secondArray = [60, 70, 80];
let concatenatedArray = numbers.concat(secondArray);

numbers.copyWithin(3, 1, 3); 

numbers.fill(100, 0, 3); 

let lastElement = numbers.pop();

let firstElement = numbers.shift(); 

numbers.unshift(5, 15); 

let numbersString = numbers.join('-'); 

let slicedArray = numbers.slice(1, 4); 

numbers.splice(1, 2, 200, 300); 

let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArr.flat(2); 

let contains50 = numbers.includes(50); 

let indexOf30 = numbers.indexOf(30); 

let lastIndexOf20 = numbers.lastIndexOf(20); 

numbers.push(90, 100); 

console.log("Concatenated Array:", concatenatedArray);
console.log("Modified Numbers (after copyWithin):", numbers);
console.log("Last Element Removed:", lastElement);
console.log("First Element Removed:", firstElement);
console.log("Numbers as String:", numbersString);
console.log("Sliced Array:", slicedArray);
console.log("Flattened Array:", flattenedArray);
console.log("Contains 50:", contains50);
console.log("Index of 30:", indexOf30);
console.log("Last Index of 20:", lastIndexOf20);
console.log("Final Numbers Array:", numbers);