var acao = prompt("O que você está fazendo?");
var output = document.getElementById('output');
var html;

// switch (Number(time)) {
//     case 8: //Type on switch has to match the tipe of case
//         html = "Wake up time";
//         break; //Break is VERY IMPORTANT
//     case 12:
//         html = "Lunch time";
//         break;
//     case 16:
//         html = "Dinner";
//         break;
//     default:
//         html = "Nothing to do";
//         break;
// }

switch(acao){
    case "acordando":
        html = "08:00";
        break;
    case "almoçando":
        html = "12:00"
        break;
    case "jantando":
        html = "16:00";
        break;
    default:
        html = "estou fazendo nada"
        break;
}

output.innerHTML = html;