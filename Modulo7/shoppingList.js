var output = document.getElementById("output");
var content = document.getElementById("content");

var shoppingCart = [];

function addItem(value) {
  if (content.value !== undefined || content.value !== "") {
    shoppingCart.push(content.value);
    content.value = "";
  }
  function showItems(items) {
    var ind = shoppingCart.length - 1;
    var element = shoppingCart[ind];
    output.innerHTML += ind + 1 + ". " + element + "</br>";
  }
  showItems(shoppingCart);
}
