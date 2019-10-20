class Paddle {
  constructor(pos) {
    this.pos = pos;
    this.width = 1;
    this.height = 0.05;
  }

  tick(pos) {
    this.pos = pos;
  }

  render(canvas, ctx, cellSize) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos - ((cellSize * this.width) / 2), cellSize * (1 - this.height) * 3, this.width * cellSize, this.height * cellSize);
  }
}

export default Paddle;
