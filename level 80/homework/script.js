function checkPassword() {
    const correctPassword = "Group 41 is best";
    let attempts = 3;

    while (attempts > 0) {
        let userInput = prompt("შეიყვანეთ პაროლი:");
        if (userInput === correctPassword) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return;
        } else {
            attempts--;
            if (attempts === 0) {
                alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
            } else {
                alert(`პაროლი არასწორია, დარჩენილი მცდელობები: ${attempts}`);
            }
        }
    }
}

checkPassword();
