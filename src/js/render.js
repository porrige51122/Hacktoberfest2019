import Collisions from './collisions.js'

function renderMain(canvas, ctx, entities, cellSize, bricks) {
  ctx.fillStyle = "#f1c40f";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  let hit = new Collisions(entities[0], entities[1], bricks);
  entities.forEach((entity) => entity.render(canvas,ctx, cellSize));
  bricks.forEach((brick) => brick.render(canvas,ctx, cellSize));
  hit.checkBounce(cellSize);
  hit.checkBreak(cellSize);
}

export { renderMain };
