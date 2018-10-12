var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var number3 = document.getElementById("num3");
var code = document.getElementById("code");
var bool1 = false;
var bool2 = false;
var bool3 = false;

function startRandoms() {
  result1 = Math.floor(Math.random() * 10); //Generates a random number between 1 and 10
  result2 = Math.floor(Math.random() * 10); //Generates a random number between 1 and 10
  result3 = Math.floor(Math.random() * 10); //Generates a random number between 1 and 10
}

function guessCode() {
  if (Number(number1.value) < result1) {
    code.innerHTML += "L,";
    bool1 = false;
  } else if (Number(number1.value) > result1) {
    code.innerHTML += "H,";
    bool1 = false;
  } else {
    code.innerHTML += result1 + ",";
    number1.readOnly = true;
    bool1 = true;
  }

  if (Number(number2.value) < result2) {
    code.innerHTML += "L,";
    bool2 = false;
  } else if (Number(number2.value) > result2) {
    code.innerHTML += "H,";
    bool2 = false;
  } else {
    code.innerHTML += result2 + ",";
    number2.readOnly = true;
    bool2 = true;
  }

  if (Number(number3.value) < result3) {
    code.innerHTML += "L";
    bool3 = false;
  } else if (Number(number3.value) > result3) {
    code.innerHTML += "H";
    bool3 = false;
  } else {
    code.innerHTML += result3;
    number3.readOnly = true;
    bool3 = true;
  }

  if (bool1 === true && bool2 === true && bool3 === true) {
    document.getElementById("btnGC").disabled = true;
    code.innerHTML += "Congratulations, you have cracked the code";
  }

  code.innerHTML += "<br/>";
}
