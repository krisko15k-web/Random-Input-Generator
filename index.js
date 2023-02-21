let inputCont = []
let inputWord = document.getElementById("inputWord")
let randWord = document.getElementById("randWord")
let pickedWord

function addInput() {
    inputCont.push(inputWord.value)
    inputWord.value = ""
}

function randPick() {
    pickedWord = Math.floor(Math.random() * inputCont.length)
    randWord.textContent = inputCont[pickedWord]
}