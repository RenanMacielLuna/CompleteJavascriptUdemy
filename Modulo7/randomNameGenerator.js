var output = document.getElementById("output");

var adjectives = ["super", "wonderful", "bad", "angry", "careful"];

function generateRandomName() {
  var name = prompt("What is your name?");
  var randomPosition = Math.floor(Math.random() * adjectives.length);
  console.log(randomPosition);
  output.innerHTML +=
    "Your name is: " +
    name +
    ", and you are " +
    adjectives[randomPosition] +
    "<br/>";
}
