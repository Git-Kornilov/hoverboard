'use strict';

const container = document.getElementById('container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const SQUARES = 3500;

// random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]; // remember array.length

// set color when hover
const setColor = function (element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  //   like neon effect - box-shadow
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// remove color (reset color and box-shadow)
const removeColor = function (element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
};

// field with squares
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}
