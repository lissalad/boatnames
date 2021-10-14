import data from "./data.js";

const keyword = document.getElementById("keyword");
const wordCount = document.getElementById("word-count");
const generateButton = document.getElementById("generate-button");

generateButton.onclick = function (e) {
  let boatName = "";
  const nameLength = wordCount.value;
  for (let i = 0; i < nameLength; i++) {
    boatName += getRandomWord(data.sealife) + " ";
  }
  console.log(boatName);
};

function getRandomWord(list) {
  const length = list.length;
  const i = Math.floor(Math.random() * length);
  return list[i];
}
