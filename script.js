//check to see if this file is working
console.log('Welcome to Pixelate')
//create a table
const table = document.getElementById('table');

//create a function to add a row
function makeRow()
{
    //create a variable for a tow
    const row = document.createElement('tr')
    //add the row to the 'table' parent element
    table.appendChild(row);
    //create a loop that adds column cells to each row
    for (let i = 0; i < 25; i++) 
    {
        //create a variable for the column cell
        const td = document.createElement('td')
        //add the cells to the 'row' parent element
        row.appendChild(td);
    }
}

//create a function that allows you to change colors
function changeColor(event) 
{
    console.log(event.target.value);
}

//create a variable for an html button that changes colors
const addRowButton = document.getElementById('add-row');
//when the button is clicked, call the makeRow function
addRowButton.addEventListener('click', makeRow);

//when the table is clicked, call the colorize function
table.addEventListener('click', colorize)
//create a function called colorize that utlizes an event
function colorize(event)
{
    const target = event.target;
    if (target.className.length) {
        target.className = '';
    } else {
        target.className = chosenColor;
    }
    
}

//create a variable for the html select element (id: color-selector)
let colorSelector = document.getElementById('color-selector');
//create a variable for the current color, initial value is red
let chosenColor = 'red';

//when a different color is selected, call the changeColor function
colorSelector.addEventListener('change', function (event) {
    chosenColor = event.target.value
})
