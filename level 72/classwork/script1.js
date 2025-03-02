let number = prompt("გთხოვთ შეიყვანოთ რიცხვი:");

number = Number(number);

if (number % 2 === 0) {
    console.log("რიცხვი ლუწია");
} else {
    console.log("რიცხვი კენტია");
}
