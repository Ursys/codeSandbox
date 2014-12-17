createBarrier();

function createBarrier () {
  var testButton = document.getElementById("calculate");
  testButton.onclick = function() {
    processBarrier();
  };
}

function processBarrier() {
  var input = document.getElementById("BarrierName").value;
  if (isNaN(input)) {
    document.getElementById("result").innerHTML = input + " is not a number. Please Enter A Number";
  } else {
    if (input % 2 === 0) {
      document.getElementById("result").innerHTML = input + " is an EVEN number";
    } else {
      document.getElementById("result").innerHTML = input + " is an ODD number";
    }
  }
}