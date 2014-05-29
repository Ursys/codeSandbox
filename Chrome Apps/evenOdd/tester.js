var userInput;

document.getElementById("test").addEventListener("click", test());

function test(){
  var userInput = document.getElementById("userInput").value;
  if(userInput % 2 === 0) {
    document.getElementById("result").innerHTML = "The number is even";
  } else {
    document.getElementById("result").innerHTML = "The number is odd";
  }
}

function testFunction() {
  userInput = document.getElementById("userInput").value;
  document.getElementById("result").innerHTML = userInput;
}
