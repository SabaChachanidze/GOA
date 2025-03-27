let array = [10, 20, 30, 40, 50];

function checkValue(value) {
    console.log(`Value ${value} exists: ${array.includes(value)}`);
}

checkValue(20); 
checkValue(60); 

array.push(60);
array.push(70);
array.push(80);
console.log("Array after adding values:", array);

array.pop();
array.pop();
array.pop();
array.pop();
console.log("Array after removing values:", array);