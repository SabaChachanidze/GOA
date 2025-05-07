<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>getElementById Example</title>
</head>
<body>
    <h1 id="header">Hello, World!</h1>
    <p id="description">This is a simple paragraph.</p>
    <button id="changeTextButton">Change Text</button>

    <script>
        // Access the element with id "header"
        const header = document.getElementById('header');

        // Change the text content of the header
        header.textContent = 'Welcome to JavaScript!';

        // Add an event listener to the button
        const button = document.getElementById('changeTextButton');
        button.addEventListener('click', () => {
            const description = document.getElementById('description');
            description.textContent = 'The text has been changed!';
        });
    </script>
</body>
</html>