const container = document.querySelector('.container')
let newGrid = document.querySelector('.newgrid')
let slider = document.querySelector('.slider')
let sliderValue = document.querySelector('.slider-value')
sliderValue.textContent = `Size: ${slider.value} x ${slider.value}`;

// creating initial grid
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
      const createDiv = document.createElement('div');
      container.appendChild(createDiv).className = "pixel";
    }
}
defaultGrid();

// creates text that shows the grid size and dynamically changes when slider is used
slider.addEventListener('input', function() {
    sliderValue.textContent = `Size: ${slider.value} x ${slider.value}`;
})

// making the grid change size when slider is used
slider.addEventListener('change', function() {
    let squares = slider.value;
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares * squares; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = "square";
    }
})
