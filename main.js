
const createGrid = () => {
    const container = document.querySelector('.container');
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    
    for (let i = 1; i < 17; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.id = i; 
        gridItem.textContent = i;
        gridContainer.appendChild(gridItem)
    }
    
    container.appendChild(gridContainer);
};

const onHover = () => {
    for (let i = 1; i < 17; i++){

        document.getElementById(i).addEventListener('mouseover', (item) => {
            document.getElementById(i).style.backgroundColor = getRandomColor() ;
            console.log(item)
        })
    };
};
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    };
    return color;
};
createGrid();
onHover();

