function recursivesStringReverse(string) {
  if (string.length <= 1) {
    return string;
  }

  let firstChar = string.charAt(0);
  let secondChar = string.slice(1);

  return recursivesStringReverse(secondChar) + firstChar;
}

console.log(recursivesStringReverse("Gassama"));
