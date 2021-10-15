import data from "./data.js";

const keyword = document.getElementById("keyword");
const wordCount = document.getElementById("word-count");
const generateButton = document.getElementById("generate-button");

let boatName = "";
let boatWords = [];

// ------------------- event listener ------------------------------- //
generateButton.onclick = function (e) {
  let count = wordCount.value;
  boatName = "";
  boatWords = [];
  // ------------------ use keyword if there ----------------------- //
  if (keyword.value != "") {
    boatWords += keyword.value + " ";
    count -= 1;
  }
  // ----------------- fill in the rest ----------------------- //
  while (count > 0) {
    // -------------------------------------------------- //
    // if (count === 1) {
    boatWords += getRandomWord(data.noun) + " ";
    count -= 1;
    // }
    // -------------------------------------------------- //
    // else {
    //   for (let i = 0; i < count; i++) {
    //     boatName += getRandomWord(data.boat) + " ";
    //   }
    // }
  }
  output();
};

function getRandomWord(list) {
  const length = list.length;
  const i = Math.floor(Math.random() * length);
  const word = list[i];
  list.splice(i, 1);
  return word;
}

function output() {
  for (let i = 0; i < boatWords.length; i++) {
    boatName += boatWords[i];
  }
  console.log(boatName);
}

// export default boatName; // HELP
