import data from "./data.js";

const keyword = document.getElementById("keyword");
const wordCount = document.getElementById("word-count");
const generateButton = document.getElementById("generate-button");

// let boatWords = [];

// ------------------- event listener ------------------------------- //
generateButton.onclick = function (e) {
  let count = wordCount.value;
  let boatWords = [];
  // ------------------ use keyword if there ----------------------- //
  if (keyword.value != "") {
    boatWords.push(keyword.value);
    count -= 1;
  }
  // ----------------- fill in the rest ----------------------- //
  while (count > 1) {
    // console.log(typeof boatWords);
    // -------------------------------------------------- //
    for (let i = 1; i < count; i++) {
      boatWords.push(getRandomWord(data.noun));
      count -= 1;
    }
  }
  boatWords.push(getRandomWord(data.boat));
  count -= 1;

  output(boatWords);
};

function getRandomWord(list) {
  const length = list.length;
  const i = Math.floor(Math.random() * length);
  const word = list[i];
  list.splice(i, 1);
  return word;
}

function formatWord(word) {
  let name = word.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.substring(1);
  return name + " ";
}

function output(words) {
  let boatName = "";
  for (let i = 0; i < words.length; i++) {
    boatName += formatWord(words[i]);
  }
  console.log(boatName);
}

// export default boatName; // HELP
