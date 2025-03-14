const university = {
    name: "Tech University",
    departments: 5,
    website: "https://www.techuniversity.edu",
    ratings: {
        student1: 4.5,
        student2: 4.0,
        student3: 4.8
    }
};

console.log("University Properties:", university);
console.log("Has scholarship property:", 'scholarship' in university);
university.studentsCount = 2000;
console.log("Updated University Properties:", university);
Object.freeze(university);
university.name = "New Tech University";
console.log("Attempted to change name:", university.name);
console.log("Is object frozen:", Object.isFrozen(university));
