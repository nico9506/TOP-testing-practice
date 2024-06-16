const capitalize = (inputWord) => {
  return inputWord[0].toUpperCase() + inputWord.slice(1).toLowerCase();
};

module.exports = { capitalize };
