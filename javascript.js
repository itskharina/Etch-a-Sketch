const container = document.querySelector('.container')
let slider = document.querySelector('.slider')
let sliderValue = document.querySelector('.slider-value')
sliderValue.textContent = `Size: ${slider.value} x ${slider.value}`;
let resetBtn = document.querySelector('.reset-btn')

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

// function that changes grid size
function makeGrid(squares) {
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares * squares; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = "square";
    }
}

// making the grid change size when slider is used
slider.addEventListener('change', function() {
    makeGrid(slider.value)
})

let drawing = false;
window.addEventListener("mousedown", function() {
   drawing = true;
});
window.addEventListener("mouseup", function() {
   drawing = false;
});

// function to allow user to draw when they click on a square
function draw() {
        container.addEventListener('mouseover', function(e) {
        if (drawing) {
            e.target.style.background = 'black';
        }
    })
}
draw();

// making grid reset when button is pressed
resetBtn.addEventListener('click', function() {
    clearGrid();
    makeGrid(slider.value)
    draw();
})

// function to clear grid
function clearGrid() {
    let clear = document.querySelectorAll('.square');
    clear.forEach(item => {
        item.remove();
    });
};
