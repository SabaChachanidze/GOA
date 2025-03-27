let mixedArray = [
    42,                
    "Hello, World!",   
    true,           
    null,             
    undefined,       
    { key: "value" },  
    [1, 2, 3],      
    function () {},   
    Symbol("sym"),  
    BigInt(9007199254740991) 
];

console.log(mixedArray[0]); 
console.log(mixedArray[1]); 
console.log(mixedArray[2]); 
console.log(mixedArray[3]); 
console.log(mixedArray[4]); 

mixedArray[5] = { newKey: "newValue" };
mixedArray[6] = [4, 5, 6];
mixedArray[7] = () => "New Function";
mixedArray[8] = Symbol("newSym");
mixedArray[9] = BigInt(123456789);

console.log(mixedArray);