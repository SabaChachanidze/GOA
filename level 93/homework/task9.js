let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

let morePeople = [
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
];

let allPeople = people.concat(morePeople);

allPeople.copyWithin(allPeople.length - 2, 0, 2);

allPeople.fill({ id: 0, name: 'Unknown' }, 0, 2);

let removedPerson = allPeople.pop();

let firstRemovedPerson = allPeople.shift();

allPeople.unshift({ id: 6, name: 'Frank' }, { id: 7, name: 'Grace' });

let peopleString = allPeople.map(person => person.name).join(',');

let somePeople = allPeople.slice(1, 4);

allPeople.splice(2, 2, { id: 10, name: 'Ivan' }, { id: 11, name: 'Judy' });

let nestedArray = [[1, 2], [3, 4], [[5, 6], [7, 8]]];
let flatArray = nestedArray.flat(2);

let includesEve = allPeople.some(person => person.id === 5 && person.name === 'Eve');

let indexOfCharlie = allPeople.findIndex(person => person.id === 3);

let lastIndexOfBob = allPeople.map(person => person.id === 2 && person.name === 'Bob').lastIndexOf(true);

flatArray.push({ id: 8, name: 'Hank' });

console.log('All People:', allPeople);
console.log('Removed Person:', removedPerson);
console.log('First Removed Person:', firstRemovedPerson);
console.log('People String:', peopleString);
console.log('Some People:', somePeople);
console.log('Flat Array:', flatArray);
console.log('Includes Eve:', includesEve);
console.log('Index of Charlie:', indexOfCharlie);
console.log('Last Index of Bob:', lastIndexOfBob);