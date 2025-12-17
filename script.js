const container = document.getElementById('container');

//create a 16x16 grid
for (let i = 0; i < 16; i++) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        
        // Add a hover effect
        grid.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "blue";
        });

        gridContainer.appendChild(grid);
    }
    container.appendChild(gridContainer);
}

//Add a button on the top of the screen
const button = document.createElement("button");
button.classList.add("grid-size-btn");
button.textContent = "Change grid size";
container.insertBefore(button, container.firstElementChild);

//Check inout for grid size
function checkValidity(number) {
    if(!Number.isInteger(number)) {
        alert("Please enter a valid number")
    }
    if(number > 100) {
        alert("Enter a number less than 100")
    }
}   if(number < 0) {
    alert("Enter a positive number")
}