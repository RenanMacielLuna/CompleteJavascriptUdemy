var output = document.getElementById("output");

function makeMessage(s1, s2, callback) {
  var result = callback(s1, s2);
  output.innerHTML = result;
}

makeMessage("Java", "Script is ", function(s1, s2) {
  var result2 = s1 + s2 + "great.";
  return result2;
});
