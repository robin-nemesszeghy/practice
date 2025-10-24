// 1. Show Rating

function showRating(rating) {
  let ratings = "";
  for (i = 0; i < Math.floor(rating); ++i) {
    if (i !== Math.floor(rating) - 1) {
      ratings += "* ";
    } else {
      ratings += "*";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

// 2. Sort by Lowest to Highest Price

function sortLowToHigh(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

// 3. Sort by Highest to Lowest Price

function sortHighToLow(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortHighToLow([20, 40, 10, 30, 50, 10]));
console.log(sortHighToLow([5, 10, 0, -5]));
console.log(sortHighToLow([3, 2, 1, 0]));

// 4. Sort by Highest to Lowest Price ARRAY OF OBJECTS

function sortHighToLowObject(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLowObject([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// 5. Find all the posts by a single user

async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await promise.json();
  const posts = result.filter((element) => element.userId === userId);
  console.log(posts);
}

postsByUser(4);

// 6. First 6 Incomplete Todos

async function firstSixIncomplete(uid) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();
  const incompleteTasks = result
    .filter((elem) => !elem.completed)
    .slice(0, uid);
  console.log(incompleteTasks);
}

firstSixIncomplete(6);
