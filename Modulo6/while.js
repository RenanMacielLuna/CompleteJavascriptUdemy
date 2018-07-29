var output = document.getElementById("output");
// var loop = prompt("Digite quantas vezes você quer que o laço seja executado?");
// loop = Number(loop);
// var x = 1;
// if (isNaN(loop) == false) {
//   while (x < loop) {
//     output.innerHTML += x + "<br>";
//     x++;
//   }
//   output.innerHTML += "Valor final: " + x + "<br>";
// } else {
//   output.innerHTML = "Você não digitou um número";
// }

var password = "renan123(";
var passwordPrompt = prompt("Digite a sua senha para entrar no sistema");

while (password !== passwordPrompt) {
  passwordPrompt = prompt("Você errou a senha, tente de novo");
}
output.innerHTML = "Parabéns, você entrou no sistema";
