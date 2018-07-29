var userNames = ["renan", "victor", "maciel", "oliveira", "luna"];
var output = document.getElementById("output");
var index = prompt("Digite algo");
var indiceDeUserNames = userNames.indexOf(index);

if (indiceDeUserNames > -1) {
  alert("Hello, " + index);
  output.innerHTML = "Welcome it was true";
  var idade = prompt(index + ", qual é a sua idade?");
  if (idade >= 18) {
    output.innerHTML = index + ", você é maior de idade";
  } else {
    output.innerHTML = index + ", você é menor de idade";
  }
} else {
  output.innerHTML = "Denied was not true " + index;
}
