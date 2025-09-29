let grades = ["A+", "A", "FAIL"];
let newGrades = [];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] !== "FAIL") {
    newGrades.push(grades[i]);
  }
}

console.log(newGrades);