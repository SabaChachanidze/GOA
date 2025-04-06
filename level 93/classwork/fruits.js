const fruits = ['apple', 'orange', 'lemon', 'banana', 'grape'];

const citrus = fruits.slice(1, 3);

fruits.splice(-2, 2, 'fig');

const fruitString = fruits.join('-');

function processFruits(inputFruits) {
    const fruitsCopy = [...inputFruits];

    const citrus = fruitsCopy.slice(1, 3);

    fruitsCopy.splice(-2, 2, 'fig');

    const resultString = fruitsCopy.join('-');

    return resultString;
}

const fruitsArray = ['apple', 'orange', 'lemon', 'banana', 'grape'];
console.log(processFruits(fruitsArray));
