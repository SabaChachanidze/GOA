let age = prompt("გთხოვთ შეიყვანოთ თქვენი ასაკი:");

age = Number(age);

if (age > 80) {
    console.log("დაბერდი ძმაო");
} else if (age > 18) {
    console.log("შენ ხარ სრულწოვანი");
} else if (age > 12) {
    console.log("შენ ხარ თინეიჯერი/მოზარდი");
} else if (age > 5) {
    console.log("შენ ხარ ბავშვი");
} else {
    console.log("შენ ძალიან პატარა ხარ");
}
