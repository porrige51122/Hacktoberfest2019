import { renderMain } from './render.js';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 0;
canvas.height = 0;

function eventListeners() {

}

function init() {
  eventListeners();
  loop();
}

let aspectRatio = [16,9];
let oldSize = [innerWidth, innerHeight];

function resize() {
  if (oldSize[0] != innerWidth || oldSize[1] != innerHeight) {
    let cellWidth = innerWidth/aspectRatio[0];
    let cellHeight = innerHeight/aspectRatio[1];
    if (cellWidth > cellHeight) {
      cellWidth = cellHeight;
    } else {
      cellHeight = cellWidth;
    }
    canvas.width = cellWidth * aspectRatio[0];
    canvas.height = cellHeight * aspectRatio[1];
  }
}

function tick() {

}

function render() {
  renderMain(canvas, ctx);
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
