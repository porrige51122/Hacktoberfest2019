class Brick {
  constructor(pos) {
    this.pos = pos;
    this.value = "TESTING";
    this.width = this.value.length/10;
    this.visible = true;
  }

  tick(pos) {
    this.pos = pos;
  }

  render(canvas, ctx, cellSize) {
    if (this.visible) {
      ctx.fillStyle = "#000000";
      let x = (this.pos[0] * cellSize) - ((cellSize * this.width) / 2);
      let y = (this.pos[1] * cellSize) - (cellSize / 8);

      ctx.fillRect(x, y, this.width * cellSize, cellSize/4);
    }
  }
}

export default Brick;
