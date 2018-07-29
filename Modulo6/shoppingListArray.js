var output = document.getElementById("output");

var shoppingList = [];

var addItem = "nada";

do {
  addItem = prompt("O que você gostaria de adicionar?");

  if (addItem !== "nada") {
    shoppingList.push(addItem);
  } else {
    break;
  }
} while (addItem !== "nada");

for (var item in shoppingList) {
  output.innerHTML += shoppingList[item] + "<br>";
}
