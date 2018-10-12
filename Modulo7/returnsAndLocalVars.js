var output = document.getElementById("output");

var a = myFun1(1, 2, 8);
var response = "22"; //global

function myFun1(x, y, z) {
  response = x + y + z; //response ainda é global
  // var response = 0; //response agora é local
  output.innerHTML = response + "\n";
  return response;
}
myFun1(1, 5, 88);
console.log(response);

// Challenge

var a = "hello";

function concatenate(str1) {
  var b = " world";
  str1 += b;
  output.innerHTML += str1;
}

concatenate(a);
