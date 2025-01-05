const container = document.querySelector('.container');
const gridSizeBtn = document.querySelector('.grid-size-btn');
const resetBtn = document.querySelector('.reset-btn');

let initialGridSize = 4;
let maxGridSize = 64;

function createGrid(size) {
    const squareSize = (container.offsetWidth - 4) / size;

    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.className = "square";
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener("mouseover", setColor);
        container.appendChild(div);
    }
}


function setColor() {
    this.style.backgroundColor = generateColorCode();
}

function generateColorCode() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(initialGridSize);

gridSizeBtn.addEventListener('click', () => {
    let gridSize = prompt(`Enter the size of the grid (e.g., 10, 16, 40, etc.)
    Can only take a max of 64 squares
    - 16 will create a 16X16 grid
    - 40 will create a 40X40 grid`);

    if (!gridSize) {
        container.replaceChildren();
        createGrid(initialGridSize);
    } else if (gridSize > maxGridSize) {
        container.replaceChildren();
        createGrid(maxGridSize);
    } else {
        container.replaceChildren();
        createGrid(gridSize);
    }
    
});

resetBtn.addEventListener('click', () => {
    container.replaceChildren();
    createGrid(initialGridSize);
});