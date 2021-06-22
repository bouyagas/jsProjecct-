function deleteBlankItems(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].length == 0) {
      items.splice(i, 1);
    }
  }
}

var names = ["Rachel", "", "Meghana", "", "", "Tim"];

console.log(deleteBlankItems(names));
