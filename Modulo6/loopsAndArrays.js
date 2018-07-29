var output = document.getElementById("output");
var userNames = ["renan", "victor", "maciel", "de", "oliveira", "luna"];

// for (var i = 0; i < userNames.length; i++) {
//   output.innerHTML += userNames[i] + "<br>";
// }
var i = 0;
while (userNames[i]) {
  output.innerHTML += userNames[i] + "<br>";
  i++;
}

output.innerHTML += "<br>";

//Desafio: mostrar o array ao contrário

for (var i = userNames.length - 1; i >= 0; i--) {
  output.innerHTML += userNames[i] + "<br>";
}
