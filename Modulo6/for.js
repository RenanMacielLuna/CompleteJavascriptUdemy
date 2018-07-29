var output = document.getElementById("output");
var bananas = prompt("Quantas bananas você quer comer?");
bananas = Number(bananas);
var caloriaBanana = 89; //Cada banana tem 89 calorias
var totalCaloriaBanana = 0;
// for (var i = 0; i <= 31; i++) {
//   if (i % 2 === 1) {
//     output.innerHTML += i + "<br>";
//   }
// }

if (isNaN(bananas) == false) {
  for (var i = 0; i < bananas; i++) {
    totalCaloriaBanana += caloriaBanana;
  }
  output.innerHTML =
    "Você comeu " +
    bananas +
    " bananas. O que dá o total de " +
    totalCaloriaBanana +
    " calorias";
} else {
  output.innerHTML = "Na pŕoxima vez, digite um número inteiro";
}
