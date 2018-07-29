var x = 0;
var output = document.getElementById("output");

var loopChallenge = prompt(
  "Digite um número. Mas lembre-se, só serâo impressos números pares"
);

loopChallenge = Number(loopChallenge);
if (isNaN(loopChallenge) == false) {
  do {
    if (x % 2 == 0) {
      output.innerHTML += x + "<br>";
    }
    x++;
  } while (x <= loopChallenge);
} else {
  output.innerHTML = "Você digitou um valor inválido";
}

// do {
//   x++;
//   output.innerHTML += "valor = " + x + "<br>";
// } while (x < 10);
// output.innerHTML += "valor final de x = " + x + "<br>";

// var valor = prompt("Qual valor você quer imprimir?");
// var loop = prompt("Quantas vezes você quer ver esse valor apareça na tela?");
// loop = Number(loop);
// if (typeof loop == "number") {
//   do {
//     output.innerHTML += valor + "<br>";
//     x++;
//   } while (x <= loop);
// } else {
//   output.innerHTML = valor;
// }
