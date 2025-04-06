const students = ["Alice", "Bob", "Charlie"];
const grades = [85, 92, 78];

function addStudent(studentName, grade) {
    students.unshift(studentName);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}

function replaceGrade(index, newGrade) {
    if (index >= 0 && index < grades.length) {
        grades.splice(index, 1, newGrade);
    }
    return grades;
}

function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}

console.log(addStudent("David", 88)); 
console.log(removeLastStudent());
console.log(replaceGrade(1, 95)); 
console.log(updateGrades(100)); 