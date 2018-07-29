var question = prompt("Faça uma questão");
var questionNumber = Math.ceil(Math.random() * 8);
var output = document.getElementById("output");

switch (questionNumber) {
  case 1:
    output.innerHTML = "Sim";
    break;
  case 2:
    output.innerHTML = "Não";
    break;
  case 3:
    output.innerHTML = "Certamente";
    break;
  case 4:
    output.innerHTML = "Tenho total certeza que sim";
    break;
  case 5:
    output.innerHTML = "Não conte com isso";
    break;
  case 6:
    output.innerHTML = "Acho que não";
    break;
  case 7:
    output.innerHTML = "Não posso prever agora";
    break;
  default:
    output.innerHTML = "Pergunte de novo";
    break;
}

console.log(questionNumber);
