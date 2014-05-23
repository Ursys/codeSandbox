var userInput;

getElementById("test").onclick = testFunction();

function test(userInput){
  if(userInput % 2 === 0) {
    document.getElementById("result").innerHTML = "The number is even";
  } else {
    document.getElementById("result").innerHTML = "The number is odd";
  }
}

function testFunction() {
  userInput = document.getElementById("userInput").value;
  document.getEmementById("result").innerHTML = "6";
}

