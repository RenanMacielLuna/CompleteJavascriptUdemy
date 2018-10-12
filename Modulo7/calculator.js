var result = document.getElementById("result");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function sum() {
  res = Number(num1.value) + Number(num2.value);
  outHtml(Number(num1.value), "+", Number(num2.value), res);
}

function sub() {
  res = Number(num1.value) - Number(num2.value);
  outHtml(Number(num1.value), "-", Number(num2.value), res);
}

function div() {
  res = Number(num1.value) / Number(num2.value);
  outHtml(Number(num1.value), "/", Number(num2.value), res);
}

function mul() {
  res = Number(num1.value) * Number(num2.value);
  outHtml(Number(num1.value), "*", Number(num2.value), res);
}

function outHtml(number1, operator, number2, res) {
  result.innerHTML +=
    number1 + " " + operator + " " + number2 + " = " + res + "<br/>";
}
