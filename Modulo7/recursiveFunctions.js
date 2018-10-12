var output = document.getElementById("output");
var btnRecFunc = document.getElementById("btn_rec_func");
var secretWord;
var randomPosition;

var programmingLanguages = ["java", "python", "ruby", "c#"];

function start() {
  randomPosition = Math.ceil(Math.random() * 4);
  console.log(randomPosition);
  getSecret();
}

function getSecret() {
  var possibleAnswer = prompt(
    "What is the secret word? (Use lower case letters)");
  if (possibleAnswer === programmingLanguages[randomPosition]) {
    output.innerHTML = "you won";
  } else {
    alert("Wrong answer. Try again, you can do it");
    getSecret();
  }
}
