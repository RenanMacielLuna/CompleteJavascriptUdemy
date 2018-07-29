var output = document.getElementById("output");

var userNames = {
  a: "Mike",
  b: "John",
  c: "Jarry"
};

// for (var userName in userNames) {
//   output.innerHTML += userName + " = " + userNames[userName] + "<br>";
// }

var documents = document;

for (var property in documents) {
  output.innerHTML += property + "<br>";
}
