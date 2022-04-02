function changeColor(e) {
	// if (e.type === "mousedown")
	// 	mousedown = 1;
	if (mousedown === 1)
		e.target.style.backgroundColor = `${colorValue}`;
}

function clearGrid() {
	document.querySelectorAll('.gridElem').forEach(e => e.style.backgroundColor = "white");
}

function setGridValue() {
	gridValue = slider.value;
	size.textContent = `${gridValue} X ${gridValue}`;
	// erase previous grid
	document.querySelectorAll('.gridElem').forEach(e => e.remove());
	// set new grid
	setGrid();
}

function setColorValue() {
	colorValue = color.value;
}

function setGrid() {
	grid.style.display = "grid";
	grid.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
	for (let i = 0; i < (gridValue * gridValue); i++) {
		let elem = document.createElement('div');
		elem.classList.add('gridElem');
		elem.addEventListener('mousedown', changeColor);
		elem.addEventListener('mouseover', changeColor);
		grid.appendChild(elem);
	}
}

// get selectors for different html parts
const grid = document.querySelector('#grid');
const clear = document.querySelector('#clear')
const color = document.querySelector('#color');
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');

// set event listener on clear button and inputs
clear.addEventListener('click', clearGrid);
color.addEventListener('input', setColorValue);
slider.addEventListener('input', setGridValue);
document.addEventListener('mouseup', () => {mousedown = 0;});
document.addEventListener('mousedown', () => {mousedown = 1;});

// variables initialization
let gridValue = 16; // make a 16x16 grid at the beginning
let colorValue = "black";
let mousedown = 0;

setGrid();