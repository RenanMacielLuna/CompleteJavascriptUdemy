var pedraPapelTesoura = prompt("Pedra papel ou tesoura?");
var pedraPapelTesouraRandom = Math.ceil(Math.random() * 3);

if (pedraPapelTesoura === "pedra" && pedraPapelTesouraRandom === 1) {
  alert("Empate");
} else if (pedraPapelTesoura === "papel" && pedraPapelTesouraRandom === 2) {
  alert("Empate");
} else if (pedraPapelTesoura === "tesoura" && pedraPapelTesouraRandom === 3) {
  alert("Empate");
} else if (pedraPapelTesoura === "pedra" && pedraPapelTesouraRandom === 3) {
  alert("Você ganhou");
} else if (pedraPapelTesoura === "papel" && pedraPapelTesouraRandom === 1) {
  alert("Você ganhou");
} else if (pedraPapelTesoura === "tesoura" && pedraPapelTesouraRandom === 2) {
  alert("Você ganhou");
} else if (pedraPapelTesoura === "pedra" && pedraPapelTesouraRandom === 2) {
  alert("Você perdeu");
} else if (pedraPapelTesoura === "papel" && pedraPapelTesouraRandom === 3) {
  alert("Você perdeu");
} else if (pedraPapelTesoura === "tesoura" && pedraPapelTesouraRandom === 1) {
  alert("Você perdeu");
}

console.log(pedraPapelTesouraRandom);
