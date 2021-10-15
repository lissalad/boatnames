import data from "./data.js";

const keyword = document.getElementById("keyword");
const wordCount = document.getElementById("word-count");
const generateButton = document.getElementById("generate-button");

let boatName = "";
let boatWords = [];
let count = wordCount;

// ------------------- event listener ------------------------------- //
generateButton.onclick = function (e) {
  boatName = "";
  boatWords = [];
  // ------------------ use keyword -------------------------------- //
  if (keyword.value != "") {
    boatWords += keyword.value + " ";
    count -= 1;
  }
  // -------------------------------------------------- //
  if (wordCount === 1) {
    count = getRandomWord(data.boat);
  }
  // -------------------------------------------------- //
  else {
    const nameLength = wordCount.value;
    for (let i = 0; i < nameLength; i++) {
      boatName += getRandomWord(data.noun) + " ";
    }
  }
  output();
};

function getRandomWord(list) {
  const length = list.length;
  const i = Math.floor(Math.random() * length);
  return list[i];
}

function output() {
  for (let i = 0; i < boatWords.length; i++) {
    boatName += boatWords[i];
  }
  console.log(boatName);
}

// export default boatName; // HELP
