import { renderMain } from './render.js';
import Paddle from './entities/paddle.js';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = -1;
canvas.height = -1;

let entities = [new Paddle(innerWidth / 2)];

function eventListeners() {
  canvas.addEventListener("mousemove", () => {
    entities[0].pos = event.clientX;
    console.log('wow');
  })
}

function init() {
  resize();
  eventListeners();
  loop();
}

let aspectRatio = [4, 3];
let oldSize = [canvas.width, canvas.height];
let cellSize = 1;

function resize() {
  if (oldSize[0] != innerWidth || oldSize[1] != innerHeight) {
    let cellWidth = innerWidth / aspectRatio[0];
    let cellHeight = innerHeight / aspectRatio[1];
    if (cellWidth > cellHeight) {
      cellWidth = cellHeight;
    } else {
      cellHeight = cellWidth;
    }
    cellSize = cellHeight;
    canvas.width = cellWidth * aspectRatio[0];
    canvas.height = cellHeight * aspectRatio[1];
  }
}

function tick() {
}

function render() {
  renderMain(canvas, ctx, entities, cellSize);
}

function loop() {
  window.requestAnimationFrame(() => {
    resize();
    tick();
    render();
    loop();
  })
}

init();



