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
      console.error("Input data type must be 'number' type");
      return;
    }
  };

  const subtract = (firstArg, secondArg) => {
    if (checkInputNumber(firstArg, secondArg)) {
      return Number(firstArg) - Number(secondArg);
    } else {
      console.error("Input data type must be 'number' type");
      return;
    }
  };

  const divide = (firstArg, secondArg) => {
    if (!checkInputNumber(firstArg, secondArg)) {
      console.error("Input data type must be 'number' type");
      return;
    }

    if (firstArg === 0) return 0;

    return secondArg !== 0 ? Number(firstArg) / Number(secondArg) : undefined;
  };

  const multiply = (firstArg, secondArg) => {
    if (checkInputNumber(firstArg, secondArg)) {
      return firstArg === 0 || secondArg === 0
        ? 0
        : Number(firstArg) * Number(secondArg);
    } else {
      console.error("Input data type must be 'number' type");
      return;
    }
  };

  return { add, subtract, divide, multiply };
})();

module.exports = { capitalize, reverseString, calculator };
