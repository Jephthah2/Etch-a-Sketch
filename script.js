const container = document.getElementById('container');

//create a 16x16 grid
for (let i = 0; i < 16; i++) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');

        grid.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "blue";
        });

        gridContainer.appendChild(grid);
    }
    container.appendChild(gridContainer);
}
