var output = document.getElementById("output");
var total = 0;

for (var i = 0; i < 1000; i++) {
  if (i !== 0 && i % 5 === 0) {
    total += i;
    output.innerHTML += "Parcialmente: " + i + "<br>";
  }
}
output.innerHTML += "Total :" + total;
