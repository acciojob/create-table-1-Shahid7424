function insert_Row() {
    //Write your code here
  // get the table by its id 
	let table = document.getELementById ("sampleTable");
	// insert new-row of the table index 0 
	let newRow = table.insertRow(0);
    // insert two cells into a row 
	let cell1 = table.insertCell(0);
	let cell2 = table.insertCell(1);
	// set the content for each cell
	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";
  
}
