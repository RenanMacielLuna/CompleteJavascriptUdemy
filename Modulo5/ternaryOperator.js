//Ternary operator

var output = document.getElementById("output");
var login = false;
var outputHolder = "";
var userOkay = login ? outputHolder = "true" : outputHolder = "false";

output.innerHTML = userOkay;

login? alert("Okay"): alert("Denied")

var userNames = ['renan', 'victor', 'maciel', 'oliveira', 'luna']

var nome = prompt("Digite o seu nome");

var indiceDe = userNames.indexOf(nome);

var res;

indiceDe > -1 ? res = true : res = false;

output.innerHTML = res;