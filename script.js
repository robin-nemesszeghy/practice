// // First way of accessing an element (in the DOM)
// console.log(document.querySelector("#title"));

// // Second way of accessing an element (in the DOM)
// console.log(document.getElementById("title"));

// // Change HTML of any element (in the DOM)
// document.querySelector("#title").innerHTML += " Frontend Simplified";

// // Change CSS of any element (in the DOM)
// // document.querySelector("#title").style.color = "blue";
// // document.querySelector("#title").style.fontSize = "20px";

// Function that changes title color to red (in the DOM)
function changeTitleToRed() {
  document.getElementById("title").style.color = "red";
}

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme");
}
