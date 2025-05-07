function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();

    let greetingMessage = '';

    if (hours < 12) {
        greetingMessage = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
        greetingMessage = 'Good Afternoon';
    } else {
        greetingMessage = 'Good Evening';
    }

    greetingElement.textContent = greetingMessage;
}

setInterval(displayGreeting, 1000);

displayGreeting();