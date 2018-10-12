var output = document.getElementById("output");

var secretWord = ["java", "javascript", "ruby", "python", "c#"];
function start() {
  shuffleArray(secretWord);
  output.innerHTML += secretWord + "<br/>";
}

function shuffleArray(arr) {
  for (var x = arr.length - 1; x > 0; x--) {
    var holder = Math.floor(Math.random() * (x + 1));
    var temp = arr[x];
    arr[x] = arr[holder];
    arr[holder] = temp;
  }
}
