const initalize = () => {
    const container = document.querySelector('.container');
    const title = document.createElement('h1');
    title.textContent = 'Etch-A-Sketch!';
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start to sketch!';
    container.appendChild(title);
    container.appendChild(startBtn);

};

const createGrid = () => {
    const container = document.querySelector('.container');
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    
    for (let i = 1; i < 65; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.id = i; 
        gridContainer.appendChild(gridItem)
    }
    
    container.appendChild(gridContainer);
};

const onHover = () => {
    for (let i = 1; i < 65; i++){

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

initalize();
createGrid();
onHover();

