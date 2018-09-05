var coinSide = prompt("Cara ou coroa");
var caraCoroa = Math.random();

console.log(caraCoroa);

if (caraCoroa >= 0.5) {
  caraCoroa = "coroa";
} else {
  caraCoroa = "cara";
}

if (coinSide === caraCoroa) {
  alert("Você ganhou");
} else {
  alert("Você perdeu");
}
