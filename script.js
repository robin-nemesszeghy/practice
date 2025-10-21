// Falsy or Truthy Functions

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));

// Array Length

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

// Array Last Element

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

// Array Sum

function arrSum(arrr) {
  let sum = 0;
  for (let i = 0; i < arrr.length; ++i) {
    sum = sum + arrr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

// Add Up Numbers from a Single Number

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

// Calculate the Time

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }
  if (timerSeconds.toString().length === 1) {
    timerSeconds = "0" + timerSeconds;
  }
  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));
