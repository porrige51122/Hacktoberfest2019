class Paddle {
  constructor(pos) {
    this.pos = pos;
    this.width = 1;
  }

  tick(pos) {
    this.pos = pos;
  }

  render(canvas, ctx, cellSize) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos - ((cellSize * this.width) / 2), canvas.height - 20, this.width * cellSize, 10);
  }
}

export default Paddle;
