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

const calculator = (() => {
  const checkInputNumber = (firstArg, secondArg) => {
    console.log(typeof firstArg, "---", typeof secondArg);
    return typeof firstArg !== "number" || typeof secondArg !== "number"
      ? false
      : true;
  };

  const add = (firstArg, secondArg) => {
    if (checkInputNumber(firstArg, secondArg)) {
      return Number(firstArg) + Number(secondArg);
    } else {
      console.error("Input data type must be 'number'");
      return;
    }
  };

  return { add };
})();

module.exports = { capitalize, reverseString, calculator };
