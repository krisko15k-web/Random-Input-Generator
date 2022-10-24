let inputCont = []
let inputWord
let randWord = document.getElementById("randWord")
let pickedWord

function addInput() {
    inputWord = document.getElementById("inputWord").value
    inputCont.push(inputWord)
}

function randPick() {
    for(let i = 0; i < inputCont.length; i++) {
        pickedWord = Math.floor(Math.random() * inputCont.length)
        randWord.textContent = inputCont[pickedWord]
    }
}