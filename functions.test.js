const functions = require("./functions");

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
