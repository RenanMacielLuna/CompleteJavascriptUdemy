var result = document.getElementById("result");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function sum() {
  result.innerHTML = Number(num1.value) + Number(num2.value);
}

function sub() {
  result.innerHTML = Number(num1.value) - Number(num2.value);
}

function div() {
  result.innerHTML = Number(num1.value) / Number(num2.value);
}

function mul() {
  result.innerHTML = Number(num1.value) * Number(num2.value);
}
