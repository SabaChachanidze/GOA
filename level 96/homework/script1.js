let counter = 0;
setInterval(() => {
    console.log(`Counter: ${counter}`);
    counter++;
}, 1000);

function displayCurrentTime() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
    }, 1000);
}
displayCurrentTime();

function logRandomNumber() {
    setInterval(() => {
        console.log(`Random Number: ${Math.random()}`);
    }, 1000);
}
logRandomNumber();