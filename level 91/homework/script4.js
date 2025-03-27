function concatenateAndPush(arr1, arr2, newValue) {
    const concatenatedArray = arr1.concat(arr2);

    concatenatedArray.push(newValue);

    return concatenatedArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = concatenateAndPush(array1, array2, 7);
console.log(result); 