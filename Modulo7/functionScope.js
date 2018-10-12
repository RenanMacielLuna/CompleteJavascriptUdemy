var output = document.getElementById("output");

var outsideFun = "outside";

function myFun() {
  /*var*/ insideFun = "inside"; //Without the var declaration, the variable becomes global;
  console.log(outsideFun);
  console.log(insideFun);
}

myFun();
console.log(outsideFun);
console.log(insideFun); //To access this variable, the function must be runned
