var myTime = prompt("Que horas são?");
var output = document.getElementById('output');

if(myTime>= 8 && myTime < 12){
    output.innerHTML = "morning";
}else if(myTime >= 13 && myTime<16){
    output.innerHTML = "go to work";
}else if(myTime >= 18 && myTime <22){
    output.innerHTML = "dinner time"
}
else{
    output.innerHTML = "time to sleep";
}