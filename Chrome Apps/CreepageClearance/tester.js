createBarrier();

function createBarrier () {
  var testButton = document.getElementById("calculate");
  testButton.onclick = function() {
    processBarrier();
  };
}

function processBarrier() {
  var tableID = document.getElementById("barrierMatrix");
  addTableRow(tableID);
}

function addTableRow(tableID) {
  //Get a reference to the table
  var tableRef = document.getElementById(tableID);
  
  // Insert a row in the table at row index 0
  var newRow = tableRef.insertRow(0);
  
  // Insert a cell in the row at index 0
  var newCell = newRow.insertCell(0);
  
  // Append a text node to the cell
  
  var newText = document.createTextNode('New top row');
  newCell.appendChild(newText);
}