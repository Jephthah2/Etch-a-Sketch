const container = document.getElementById('container');

//create a 16x16 grid
function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    for (let j = 0; j < size; j++) {
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
}

//Add a button on the top of the screen
const button = document.createElement("button");
button.classList.add("grid-size-btn");
button.textContent = "Change grid size";
container.insertBefore(button, container.firstElementChild);

//Check input for grid size
function checkValidity(number) {
    if(!Number.isInteger(number)) {
        alert("Please enter a valid number");
        return false;
    }
    if(number > 100) {
        alert("Enter a number less than 100");
        return false;
    }
   if(number <= 0) {
    alert("Enter a positive number")
    return false;
    }
    return true;
}

// Create a grid using the button
button.addEventListener("click", () => {
    let input = Number(prompt("Please enter a grid size:(max 100"));
    if (!checkValidity(input)) return;

    clearGrid();
    createGrid(input);
});

//Clear the grid
function clearGrid() {
    const grids = document.querySelectorAll(".gridContainer");
    grids.forEach(grid => {
        container.removeChild(grid);
    });
};

//Initial Grid
createGrid();

//Create a random function
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
