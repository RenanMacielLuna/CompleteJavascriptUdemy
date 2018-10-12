var output = document.getElementById("output");

var a = " world";

(function() {
  var a = "hello";
  output.innerHTML = a;
})();

output.innerHTML += a;
