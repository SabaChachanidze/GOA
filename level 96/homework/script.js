function displayCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.body.innerHTML += `<p>Current Date and Time: ${formattedDateTime}</p>`;
}
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.body.innerHTML += `<p>Age: ${years} years, ${months} months, and ${days} days</p>`;
}

function displayDayOfWeek(dateInput) {
    const date = new Date(dateInput);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[date.getDay()];
    document.body.innerHTML += `<p>Day of the Week: ${dayName}</p>`;
}

displayCurrentDateTime();
calculateAge('1990-05-15');
displayDayOfWeek('2023-10-05');