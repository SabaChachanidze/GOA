let mixedArray = [
    42,                
    "Hello, world!",    
    true,              
    null,              
    undefined,          
    { key: "value" }, 
    [1, 2, 3],         
    function() { return "I'm a function"; }, 
    Symbol("symbol"),   
    BigInt(9007199254740991) 
];

console.log(mixedArray[0]);
console.log(mixedArray[1]); 
console.log(mixedArray[2]); 
console.log(mixedArray[3]); 
console.log(mixedArray[4]); 

mixedArray[5] = { newKey: "newValue" }; 
mixedArray[6] = ["a", "b", "c"];        
mixedArray[7] = () => "New function"; 
mixedArray[8] = Symbol("newSymbol");  
mixedArray[9] = BigInt(123456789);     

console.log(mixedArray);