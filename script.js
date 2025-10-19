// Addition Function

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 5));

// Hours Into Seconds Function

function hoursIntoSeconds(hour) {
  return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));

// Perimeter of a Rectangle Function

function calcPerimeter(length, width) {
  return (length + width) * 2;
}

console.log(calcPerimeter(6, 7));

// Area of a Triangle Function

function calcTriangleArea(base, height) {
  return 0.5 * base * height;
}

console.log(calcTriangleArea(3, 2));

// Extend a String

function appendFrontend(str) {
  return str + "Frontend";
}

console.log(appendFrontend("Apple"));

// Greater than 100 FULL

function sumGreaterThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(sumGreaterThan100(50, 60));

// Greater than 100 LESS CODE

function sumGreaterThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return true;
  }
  return false;
}

console.log(sumGreaterThan100(50, 60));

// Greater than 100 SIMPLEST

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

console.log(sumGreaterThan100(50, 60));

// Less than or Euqal to Zero

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-10));
console.log(lessThanOrEqualToZero(8));
console.log(lessThanOrEqualToZero(100));
console.log(lessThanOrEqualToZero(-100));

// Return Opposite Boolean

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(false));
console.log(oppositeBoolean(true));

// Is Not Zero Function

function isNotZero(num) {
  return num !== 0;
}

console.log(isNotZero(0));
console.log(isNotZero(9));
console.log(isNotZero(null));
console.log(isNotZero("0"));

// Calculate Remainder

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Is the Number Odd?

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Number Even: 1, Number Odd: -1

function booleanInteger(num) {
  if (num % 2 === 0) {
    return 1;
  }
  return -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

// Number Even: 1, Number Odd: -1 in ONE LINE using TURNARY OPERATOR

function booleanIntegerT(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanIntegerT(1));
console.log(booleanIntegerT(2));
console.log(booleanIntegerT(5));

// Check if User is Logged In AND Subscribed

function isLoggedInAndSubscribed(str1, str2) {
  return str1 === "LOGGED_IN" && str2 === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

// Check if User is Logged In OR Subscribed

function isLoggedInOrSubscribed(str1, str2) {
  return str1 === "LOGGED_IN" || str2 === "SUBSCRIBED";
}

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));
