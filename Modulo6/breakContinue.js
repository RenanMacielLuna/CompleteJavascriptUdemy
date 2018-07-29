var output = document.getElementById("output");
var html = "<table>";

var colNumber = 0;

for (var row = 0; row < 10; row++) {
  //   if (row === 5) {
  //     break;
  //   }
  if (row === 5 || row === 7) {
    continue;
  }
  html += "<tr>";
  for (var col = colNumber; col < colNumber + 5; col++) {
    html += "<td> Cell = " + (col + 1) + "</td>";
  }
  colNumber += 5;
  html += "</tr>";
}
html += "</table>";
output.innerHTML = html;
