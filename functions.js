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

const caesarCipher = (() => {
  const encrypt = (word, n) => {
    const wordArray = word.split("");
    const encryptedArray = [];

    wordArray.forEach((char) => {
      if (
        char.charCodeAt() < 65 ||
        (char.charCodeAt() > 90 && char.charCodeAt() < 97) ||
        char.charCodeAt() > 122
      ) {
        // Punctuations, spaces, and other non-alphabeticalcharacters
        // characters remain unchanged
        encryptedArray.push(char);
      } else {
        char === char.toUpperCase()
          ? encryptedArray.push(encryptUpperCase(char, n))
          : encryptedArray.push(encryptLowerCase(char, n));
      }
    });

    return encryptedArray.join("");
  };

  const encryptLowerCase = (char, n) => {
    /**
     * @returns {String} Character displaced N times
     */
    if (char.charCodeAt() > 122 - n) {
      return String.fromCharCode(n - (122 - char.charCodeAt()) + 96);
    } else {
      return String.fromCharCode(char.charCodeAt() + n);
    }
  };

  const encryptUpperCase = (char, n) => {
    /**
     * @returns {String} Character displaced N times
     */
    if (char.charCodeAt() > 90 - n) {
      return String.fromCharCode(n - (90 - char.charCodeAt()) + 64);
    } else {
      return String.fromCharCode(char.charCodeAt() + n);
    }
  }; //ASCII

  return { encrypt };
})();

module.exports = { capitalize, reverseString, calculator, caesarCipher };
