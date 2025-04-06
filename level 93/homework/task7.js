const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const nestedArray = [7, [8, 9], [10, 11]];

let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(4, 0, 2);

combinedArray.fill(0, 2, 4);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(10, 20);

combinedArray.splice(2, 2, 30, 40);

const slicedArray = combinedArray.slice(-3);

const joinedString = slicedArray.join('-');

const flatArray = nestedArray.flat();

const includesNine = flatArray.includes(9);

const indexOfTen = flatArray.indexOf(10);

const lastIndexOfNine = flatArray.lastIndexOf(9);

flatArray.push(13);

console.log('combinedArray:', combinedArray);
console.log('slicedArray:', slicedArray);
console.log('joinedString:', joinedString);
console.log('flatArray:', flatArray);
console.log('includesNine:', includesNine);
console.log('indexOfTen:', indexOfTen);
console.log('lastIndexOfNine:', lastIndexOfNine);