const container = document.querySelector('.container')
let slider = document.querySelector('.slider')
let sliderValue = document.querySelector('.slider-value')
sliderValue.textContent = `Size: ${slider.value} x ${slider.value}`;
let resetBtn = document.querySelector('.reset-btn')
let eraserBtn = document.querySelector('.eraser-btn')
let blackBtn = document.querySelector('.black-btn')
let rainbowBtn = document.querySelector('.rainbow-btn')

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

/* let isDrawing = false;
window.addEventListener("mousedown", function() {
   isDrawing = true;
});
window.addEventListener("mouseup", function() {
   isDrawing = false;
}); */
 
// allows user to draw with a black colour
blackBtn.addEventListener('click', function () {
/*     isDrawing = false; */
    let colour = 'black'
    draw(colour)
})

//allows user to draw with a rainbow colour
rainbowBtn.addEventListener('click', function () {
  /*   isDrawing = false; */
    let colour = 'rainbow'
    draw(colour)
})

// making grid reset when button is pressed
resetBtn.addEventListener('click', function() {
    isDrawing = false;
    clearGrid();
    makeGrid(slider.value)
    draw(colour);
})

// adding eraser button functionality
eraserBtn.addEventListener('mouseover', function(e) {
/*     isDrawing = false; */
    let colour = 'white'
    draw(colour)
})


// function to allow user to draw
function draw(colour) {
        container.addEventListener('mouseover', function(e) {
        if (colour === 'black') {
            e.target.style.background = 'black'
        } else if (colour === 'white') {
            e.target.style.background = 'white'
        } else if (colour === 'rainbow') {
            e.target.style.background = `rgb(${rainbowColour()}, ${rainbowColour()}, ${rainbowColour()})`
        }
    })
}

// function to clear grid
function clearGrid() {
    let clear = document.querySelectorAll('.square');
    clear.forEach(item => {
        item.remove();
    });
};

function rainbowColour() {
    return Math.floor((Math.random() * 256));
}