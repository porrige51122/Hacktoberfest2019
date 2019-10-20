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
}

function createRack() {
  for (let i = 0; i < res.length; i++) {
    bricks.push(new Brick([Math.random() * 4, Math.random() * 2], res[i]));
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

init();
