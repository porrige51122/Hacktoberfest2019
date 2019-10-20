class Brick {
  constructor(pos, input) {
    this.pos = pos;
    this.value = input;
    this.width = this.value.length/12;
    this.height = 1/8
    this.visible = true;
  }

  tick(pos) {
    this.pos = pos;
  }

  render(canvas, ctx, cellSize) {
    if (this.visible) {
      ctx.fillStyle = "#000000";
      let x = (this.pos[0] * cellSize) - ((cellSize * this.width) / 2);
      let y = (this.pos[1] * cellSize) - (cellSize * this.height)/ 2;

      ctx.fillRect(x, y, this.width * cellSize, cellSize * this.height);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = ((this.height * cellSize))+"px Lucida Console"
      ctx.fillText(this.value, x, y+(cellSize * this.height));

    }
  }
}

export default Brick;
