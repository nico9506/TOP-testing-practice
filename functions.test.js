const functions = require("./functions");

/**
 * Test of capitalize()
 */

const capitalizeCases = [
  ["jest", "Jest"],
  ["TESTING", "Testing"],
  ["123", "123"],
];

describe("Takes a string and returns it with the first character capitalized.", () => {
  test.each(capitalizeCases)(
    "given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      expect(functions.capitalize(firstArg)).toEqual(expectedResult);
    },
  );
});

/**
 * Test of reverseString()
 */

const reverseStringCases = [
  ["test", "tset"],
  ["TESTING FUNC", "CNUF GNITSET"],
  ["123!", "!321"],
];

describe("Takes a string and returns it reversed.", () => {
  test.each(reverseStringCases)(
    "given %s as argument, returns %s",
    (textInput, result) => {
      expect(functions.reverseString(textInput)).toEqual(result);
    },
  );
});

/**
 * Test of calculator
 * add
 * subtract
 * divide
 * multiply
 */

const addCases = [
  [1, 2, 3],
  [5, "one", undefined],
  [-3, -2, -5],
  [0, -999, -999],
  ["1", 1, undefined],
  ["q", "w", undefined],
];

describe("Takes two arguments (numbers) and returns the sum of both values.", () => {
  test.each(addCases)(
    "given %d and %d as arguments, returns %d",
    (firstArg, secondArg, result) => {
      expect(functions.calculator.add(firstArg, secondArg)).toEqual(result);
    },
  );
});

const subtractCases = [
  [1, 2, -1],
  [5, "one", undefined],
  [-3, -2, -1],
  [0, -999, 999],
  ["1", 1, undefined],
  ["q", "w", undefined],
];

describe("Takes two arguments (numbers) and returns the difference of both values.", () => {
  test.each(subtractCases)(
    "given %d and %d as arguments, returns %d",
    (firstArg, secondArg, result) => {
      expect(functions.calculator.subtract(firstArg, secondArg)).toEqual(
        result,
      );
    },
  );
});

const divideCases = [
  [1, 2, 0.5],
  [5, "one", undefined],
  [-3, -2, 1.5],
  [0, -999, 0],
  [1, 0, undefined],
  ["1", 1, undefined],
  ["q", "w", undefined],
];

describe("Takes two arguments (numbers) and divide the first into the second.", () => {
  test.each(divideCases)(
    "given %d and %d as arguments, returns %d",
    (firstArg, secondArg, result) => {
      expect(functions.calculator.divide(firstArg, secondArg)).toEqual(result);
    },
  );
});

const multiplyCases = [
  [1, 2.5, 2.5],
  [5, "one", undefined],
  [-3, -2, 6],
  [0, -999, 0],
  [1, 0, 0],
  ["1", 1, undefined],
  ["q", "w", undefined],
];

describe("Takes two arguments (numbers) and gets the arithmetic multiplication.", () => {
  test.each(multiplyCases)(
    "given %d and %d as arguments, returns %d",
    (firstArg, secondArg, result) => {
      expect(functions.calculator.multiply(firstArg, secondArg)).toEqual(
        result,
      );
    },
  );
});

/**
 * Test of caesarCipher()
 */

const caesarCipherCases = [
  ["xyz", 3, "abc"],
  ["HeLLo", 3, "KhOOr"],
  ["Hello, World!", 3, "Khoor, Zruog!"],
];

describe("Takes a string and a shift factor and returns it with each character 'shifted'", () => {
  test.each(caesarCipherCases)(
    "given %s as argument and %d as shif factor, returns %s",
    (textInput, shiftFactor, result) => {
      expect(functions.caesarCipher.encrypt(textInput, shiftFactor)).toEqual(
        result,
      );
    },
  );
});
