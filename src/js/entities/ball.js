class Ball {
  constructor(pos) {
    this.pos = pos;
    this.vel = [0.01, 0.01];
    this.width = 0.05;
    this.colliding = false;
    this.difficulty = 1;
  }

  reset() {
    this.difficulty = 1;
    this.pos = [1, 2];
    this.vel = [0.01, 0.01];
  }

  tick() {
    this.colliding = false;
    this.pos[0] += this.vel[0] * this.difficulty;
    this.pos[1] += this.vel[1] * this.difficulty;
  }

  render(canvas, ctx, cellSize) {
    this.difficulty += 0.001
    this.colliding = false;
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(this.pos[0] * cellSize, this.pos[1] * cellSize, this.width * cellSize, 0, 2 * Math.PI);
    ctx.fill();

  }
}

export default Ball;
