const sportsClub = {
    clubName: "Dynamo",
    sportType: "Football",
    foundedYear: 1923,
    achievements: {
        title1: "Championship 1990",
        title2: "Cup 2000",
        title3: "Super Cup 2010"
    }
};

console.log(Object.keys(sportsClub));

console.log(Object.values(sportsClub));

console.log(sportsClub.hasOwnProperty('sponsors'));

const updatedSportsClub = { ...sportsClub, stadiumCapacity: 50000 };
console.log(updatedSportsClub);

Object.freeze(updatedSportsClub);
updatedSportsClub.clubName = "New Dynamo";
console.log(updatedSportsClub);

console.log(Object.isFrozen(updatedSportsClub));