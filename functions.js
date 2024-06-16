const capitalize = (inputWord) => {
  return inputWord[0].toUpperCase() + inputWord.slice(1).toLowerCase();
};

const reverseString = (stringInput) => {
  let reversed = "";

  for (let index = stringInput.length - 1; index >= 0; index--) {
    reversed += stringInput[index];
  }

  return reversed;
};

console.log(reverseString("nico"));

module.exports = { capitalize, reverseString };
