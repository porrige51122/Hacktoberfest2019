import { renderMain } from './render.js';
import Paddle from './entities/paddle.js';
import Ball from './entities/ball.js';
import Brick from './entities/brick.js';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = -1;
canvas.height = -1;

let entities = [new Paddle(innerWidth/2), new Ball([1.15, 2.03])];
let bricks = [];
let res;

window.startGame = function () {
  document.getElementById("hide").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  let string = document.getElementById("essay").value;
  res = string.replace(/[^\w\s]|_/g, "") .replace(/\s+/g, " ");
  res = res.split(" ");
  createRack();
  init();
}

function createRack() {
  const maxLetters = 50;
  let lettersPerLine = 0;
  let index = 0;
  out: for (let height = 1/6; height < 2; height += 1/6) {
    while (lettersPerLine < maxLetters - 5) {
      if (index >= res.length) {
        break out;
      }
      bricks.push(new Brick([4 * (lettersPerLine/maxLetters), height], res[index]));
      lettersPerLine += res[index].length + 1;
      index++;
    }
    lettersPerLine = 0;
  }
}

function eventListeners() {
  window.document.onkeydown = (e) => {
    if (e.keyCode == 37 && entities[0].pos > 0) entities[0].pos -= 10;
    if (e.keyCode == 39 && entities[0].pos < canvas.width) entities[0].pos += 10;
  }
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
  entities[1].tick();
}

function render() {
  renderMain(canvas, ctx, entities, cellSize, bricks);
}

function loop() {
  window.requestAnimationFrame(() => {
    resize();
    tick();
    render();
    loop();
  })
}
