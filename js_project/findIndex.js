function firstIndexOfElementInArray(element, array) {
  let result = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return result;
}

let arr = [1, 24, 5, 6, 6, 7];

console.log(firstIndexOfElementInArray(7, arr));
