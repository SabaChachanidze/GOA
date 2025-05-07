function logMessage1() {
    console.log("This is the first message.");
    setTimeout(logMessage2, 1000);
}

function logMessage2() {
    console.log("This is the second message.");
    setTimeout(logMessage3, 1000);
}

function logMessage3() {
    console.log("This is the third message.");
    setTimeout(logMessage4, 1000);
}

function logMessage4() {
    console.log("This is the fourth message.");
}

logMessage1();