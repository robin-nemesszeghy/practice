// 1. Falsy or Truthy Functions

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));

// 2. Array Length

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

// 3. Array Last Element

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

// 4. Array Sum

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

// 5. Add Up Numbers from a Single Number

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

// 6. Calculate the Time

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

// 7. Find the Largest Number

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

// 8.1. Reverse a String For Loop

function reverseString(str) {
  let finalStr = "";
  for (let i = 0; i < str.length; ++i) {
    finalStr = str[i] + finalStr;
  }
  return finalStr;
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

// 8.2. Reverse a String Decrementing For Loop

function reverseString(str) {
  let finalStr = "";
  for (let i = str.length - 1; i >= 0; --i) {
    finalStr += str[i];
  }
  return finalStr;
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

// 8.3. Reverse a String Array Reverse

function reverseString(str) {
  const arr = str.split("");
  const arrReversed = arr.reverse();
  const strReversed = arrReversed.join("");
  return strReversed;
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

// 8.4. Reverse a String Array Reverse ONE LINE

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));

// 9.1. Turn Every Element in an Array into 0 with FOR LOOP

function convertToZeros(arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = 0;
  }
  return arr;
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

// 9.2. Turn Every Element in an Array into 0 with ARRAY FILL

function convertToZeros(arr) {
  return arr.fill(0);
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

// 9.3. Turn Every Element in an Array into 0 with ARRAY MAP

function convertToZeros(arr) {
  return arr.map((elem) => 0);
}

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3, 4, 5]));

// 10.1. Filter Out All the Apples with FOR LOOP

function removeApples(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== "Apple") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
console.log(removeApples(["Tomato", "Orange", "Banana"]));
console.log(removeApples(["Banana", "Orange", "Apple"]));

// 10.2. Filter Out All the Apples with ARRAY FILTER

function removeApples(arr) {
  return arr.filter((elem) => elem !== "Apple");
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
console.log(removeApples(["Tomato", "Orange", "Banana"]));
console.log(removeApples(["Banana", "Orange", "Apple"]));

// 11.1. Filter Out All the Falsy Values WITH FOR LOOP

function filterOutFalsy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));
console.log(filterOutFalsy(["Tomato", "Orange", "Banana", false]));

// 11.2. Filter Out All the Falsy Values WITH ARRAY FILTER

function filterOutFalsyArr(arr) {
  return arr.filter((elem) => elem);
}

console.log(filterOutFalsyArr(["", [], 0, null, undefined, "0"]));
console.log(filterOutFalsyArr(["Tomato", "Orange", "Banana", false]));

// 12. Truthy to True, Falsy to False

function convertToBoolean(arr) {
  return arr.map((elem) => !!elem);
}

console.log(convertToBoolean([500, 0, "David", "", []]));
