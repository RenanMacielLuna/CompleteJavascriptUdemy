var output = document.getElementById("output");
var a = 1000;

function outsideFun() {
  var b = 2000;
  function insideFun() {
    b++;
    return b;
  }
  insideFun();
  var c = insideFun();
  var d = function() {
    b++;
    return b;
  };
  d();
  var e = d();
  console.log(b);
}

outsideFun();