const student = {
    name: "saba chachanidze",
    age: 13,
    faculty: "it",
    course: web development,
    averageGrade: 4.5/5
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.course);
console.log(student.averageGrade);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["faculty"]);
console.log(student["course"]);
console.log(student["averageGrade"]);

console.log(`Student ${student.name} is ${student.age} years old, studying in the faculty of ${student.faculty}, currently in course ${student.course}, with an average grade of ${student.averageGrade}.`);