function renderMain(canvas, ctx, entities, cellSize) {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  entities.forEach((entity) => entity.render(canvas,ctx, cellSize));
}

export { renderMain };
