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
