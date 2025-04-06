function comprehensiveArrayTask(arr1, arr2, arr3) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.copyWithin(5, 0, 3);

    mergedArray.fill(0, 6);

    mergedArray.pop();

    mergedArray.shift();

    mergedArray.unshift(100, 200);

    mergedArray.splice(2, 2, ...arr3);

    let slicedArray = mergedArray.slice(-5);

    let resultString = slicedArray.join(',');

    return resultString;

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
console.log(comprehensiveArrayTask(arr1, arr2, arr3));
}