let age = 18;
let height = 160;
let has_adult = false;

// Write your code below
if (age < 12) {
  console.log("Sorry, you're too young");
} else if (height < 150) {
  console.log("Sorry, you're not tall enough");
} else if (age < 15) {
  if (!has_adult) {
    console.log("Sorry, you need an adult with you");
  } else {
    console.log("You can ride with adult supervision!");
  }
} else {
  console.log("You can ride by yourself!");
}
