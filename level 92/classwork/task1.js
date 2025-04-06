const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function modifyArray(inputArray) {

    let concatArray = inputArray.concat(array1, array2);

    concatArray.copyWithin(concatArray.length - 2, 0, 2);

    concatArray.fill(0, concatArray.length - 3);

    const lastElement = concatArray.pop();

    const firstElement = concatArray.shift();

    concatArray.unshift(10, 20);

    console.log("Modified Array:", concatArray);
    console.log("Last Element Removed:", lastElement);
    console.log("First Element Removed:", firstElement);

    return concatArray;
}

const initialArray = [7, 8, 9];
modifyArray(initialArray);