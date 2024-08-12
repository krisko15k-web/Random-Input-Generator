const inputWord = document.getElementById("inputWord");
const randWord = document.querySelector(".randWord");
let inputCont = [];
let pickedWord;

const addInput = () => {
  if (inputWord.value !== "") {
    inputCont.push(inputWord.value);
    inputWord.value = "";
  }
};

const randPick = () => {
  pickedWord = Math.floor(Math.random() * inputCont.length);
  randWord.textContent = inputCont[pickedWord];
};
