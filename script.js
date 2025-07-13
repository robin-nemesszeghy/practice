let age_1 = 15;

if (age_1 >= 18) {
  console.log("You are an adult.");
}

if (age_1 >= 65) {
  console.log("You are a senior citizen.");
} else {
  console.log("You are a minor.");
}

let score = 85;

if (score >= 90) {
  console.log("You received an A.");
} else if (score >= 80) {
  console.log("You received a B.");
} else if (score >= 70) {
  console.log("You received a C.");
} else if (score >= 60) {
  console.log("You received a D.");
} else {
  console.log("You received an F.");
}

let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's hump day.");
    break;
  case "Thursday":
    console.log("Almost the weekend.");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Not a valid day.");
}

for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: " + fruits[i]);
}
