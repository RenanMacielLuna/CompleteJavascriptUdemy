var exercise = document.getElementById("exercise");
var myArray = [
  "hello",
  "world",
  1,
  2,
  15314,
  "hello",
  "world",
  1,
  2,
  15314,
  12334343132,
  12,
  "hello"
];

var myArrayClean = [];
var arrayDuplicateOrNot = [];
var element;
var elementToCompare;

function removeDup(array) {
  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      arrayDuplicateOrNot.push(0);
    } else if (i !== 0 && arrayDuplicateOrNot[i] !== 1) {
      arrayDuplicateOrNot[i] = 0;
    }
    for (var ind = i + 1; ind < array.length; ind++) {
      if (array[i] === array[ind]) {
        arrayDuplicateOrNot[ind] = 1;
      }
    }
  }

  for (var index = 0; index < arrayDuplicateOrNot.length; index++) {
    if (arrayDuplicateOrNot[index] === 0) {
      myArrayClean.push(array[index]);
    }
  }
  console.log(arrayDuplicateOrNot);
  exercise.innerHTML = myArrayClean + "<br/>";
  document.getElementById("btnRD").disabled = true;
}
