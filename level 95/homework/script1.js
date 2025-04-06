function pickRandomPayer(names) {
    if (!Array.isArray(names) || names.length === 0) {
        throw new Error("Please provide a non-empty array of names.");
    }
    const random = Math.floor(Math.random() * names.length);
    return names[random];
}

const names = ["Nuca", "Giorgi", "Ana", "Nika"];
const payer = pickRandomPayer(names);
console.log(`${payer} has to pay for everyone's food!`);