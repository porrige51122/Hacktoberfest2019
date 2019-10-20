class Ball {
  constructor(pos) {
    this.pos = pos;
    this.vel = [0.01, 0.01];
    this.width = 0.05;
    this.colliding = false;
  }

  reset() {
    this.pos = [1, 2];
    this.vel = [0.01, 0.01];
  }

  tick() {
    this.colliding = false;
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  render(canvas, ctx, cellSize) {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(this.pos[0] * cellSize, this.pos[1] * cellSize, this.width * cellSize, 0, 2 * Math.PI);
    ctx.fill();

  }
}

export default Ball;
