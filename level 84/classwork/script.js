function userInfo(name, lastname, age, birthYear) {
    return {
        name,
        lastname,
        age,
        birthYear,
    };
}

const user = userInfo('zuka', 'chakitadze', 18, 1995);

console.log(user.name === 'zuka');
console.log(user.lastname === 'chakitadze');
console.log(user.age === 18);
console.log(user.birthYear === 1995);