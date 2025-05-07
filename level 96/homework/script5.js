function firstFunction() {
    console.log("First function executed");
}

function secondFunction() {
    console.log("Second function executed");
}

function thirdFunction() {
    console.log("Third function executed");
}

setTimeout(() => {
    firstFunction();
    setTimeout(() => {
        secondFunction();
        setTimeout(() => {
            thirdFunction();
        }, 1000); 
    }, 1000);
}, 1000); 