let grades = ["A+", "A", "FAIL"];

let passingGrades = grades.filter((element) => {
  console.log(element);
  if (element !== "FAIL") {
    return true;
  }
});

console.log(passingGrades);

let grades2 = ["A+", "A", "FAIL"];

let passingGrades2 = grades.filter(element => element !== "FAIL");

console.log(passingGrades2);
