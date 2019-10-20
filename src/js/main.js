import { renderMain } from './render.js';

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function eventListeners() {

}

function init() {
  eventListeners();
  loop();
}

function resize() {

}

function tick() {

}

function render() {
  renderMain();
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
