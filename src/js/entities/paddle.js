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
    ctx.fillRect(this.pos - ((cellSize * this.width)/2), canvas.height - 5, this.width * cellSize, 5);
  }
}

export default Paddle;
