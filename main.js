const container = document.querySelector('.container');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

for (let i = 1; i < 17; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');    
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem)
}

container.appendChild(gridContainer);