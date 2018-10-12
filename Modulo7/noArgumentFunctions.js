var output = document.getElementById("output");

var a = myFunForOldBrowsers("Renan está estudando e vai estudar mais");
console.log(a);

// ES5 Version
function myFunForOldBrowsers(params) {
  if (typeof params === "undefined") {
    params = "Hello World";
  }
  output.innerHTML += params;
  return 123;
}

// ES6 Version
function myFunForNewBrowsers(params = "Hello world") {
  output.innerHTML += params;
  return 123;
}
