const capitalize = (inputWord) => {
  const splited = inputWord.split("");

  return (
    String(splited[0].toUpperCase()) + String(splited[(1, splited.length - 1)])
  );
};

module.exports = { capitalize };
