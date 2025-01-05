const container = document.querySelector('.container');
const gridSize = 4;

const squareSize = (container.offsetWidth - 4) / gridSize;

for (let i = 0; i < gridSize*gridSize; i++) {
    let div = document.createElement('div');
    div.className = "square";
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.addEventListener("mouseover", setColor);
    container.appendChild(div);
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