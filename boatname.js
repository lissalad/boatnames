// import boatName from "./scripts.js";
const nameInput = document.querySelector("#title");

const name = document.querySelector("#title");

console.log(window.localStorage.getItem("boatName"));

nameInput.innerHTML = window.localStorage.getItem("boatName");
