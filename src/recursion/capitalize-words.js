// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let result = [];

  if (!arr.length) return result;

  const capWord = arr[0].toUpperCase();

  result.push(capWord);
  return result.concat(capitalizeWords(arr.slice(1)));
}

const words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
