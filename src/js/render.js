import Collisions from './collisions.js'

function renderMain(canvas, ctx, entities, cellSize) {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  let hit = new Collisions(entities[0], entities[1]);
  entities.forEach((entity) => entity.render(canvas,ctx, cellSize));
  hit.checkBounce(cellSize);
}

export { renderMain };
