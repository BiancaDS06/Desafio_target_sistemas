// DESAFIO INVERTER STRING

const word = "Bianca";

// separa as letras da palavra
const separateWord = word.split("");

// inverte a ordem das letras
const invertWord = []
console.log(invertWord)
for ( let i = separateWord.length - 1; i >= 0; i--) {
  invertWord.push(separateWord[i]);
}

// transforma um array em uma string.
const joinInvertedLetters = invertWord.join();

// remove as virgulas da string
const wordInverted = joinInvertedLetters.replace(/\,/g, '');

// imprime a palavra invertida
console.log(wordInverted); //Esse console retorna arvalap