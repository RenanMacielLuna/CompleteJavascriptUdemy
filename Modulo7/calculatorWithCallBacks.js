var result = document.getElementById("result");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function sum() {
  outHtml(Number(num1.value), "+", Number(num2.value), function(num1, num2) {
    return num1 + num2;
  });
}

function sub() {
  outHtml(Number(num1.value), "-", Number(num2.value), function(num1, num2) {
    return num1 - num2;
  });
}

function div() {
  outHtml(Number(num1.value), "/", Number(num2.value), function(num1, num2) {
    return num1 / num2;
  });
}

function mul() {
  outHtml(Number(num1.value), "*", Number(num2.value), function(num1, num2) {
    return num1 * num2;
  });
}

function outHtml(number1, operator, number2, cback) {
  var res = cback(Number(num1.value), Number(num2.value));
  result.innerHTML +=
    number1 + " " + operator + " " + number2 + " = " + res + "<br/>";
}
