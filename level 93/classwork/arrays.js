const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

const flatArray = nestedArray.flat(1);
console.log('Flat Array (one level):', flatArray);

const fullyFlatArray = nestedArray.flat(Infinity);
console.log('Fully Flat Array:', fullyFlatArray);

function checkElement(array, value) {
    return array.includes(value);
}

function findIndexOfElement(array, value) {
    return array.indexOf(value);
}

function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}

console.log('Check Element (5):', checkElement(fullyFlatArray, 5));
console.log('Index of Element (5):', findIndexOfElement(fullyFlatArray, 5)); 
console.log('Last Index of Element (5):', findLastIndexOfElement(fullyFlatArray, 5)); 
console.log('Check Element (10):', checkElement(fullyFlatArray, 10)); 
console.log('Index of Element (10):', findIndexOfElement(fullyFlatArray, 10));
console.log('Last Index of Element (10):', findLastIndexOfElement(fullyFlatArray, 10)); 