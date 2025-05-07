function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

const userMessage = prompt("Enter the message to display:");
const userDelay = parseInt(prompt("Enter the delay in milliseconds:"), 10);

if (!isNaN(userDelay) && userDelay >= 0) {
    delayedMessage(userMessage, userDelay);
} else {
    console.log("Please enter a valid delay in milliseconds.");
}