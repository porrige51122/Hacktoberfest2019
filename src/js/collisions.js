class Collisions {
  constructor(paddle, ball) {
    console.log('hello')
    this.ball = ball;
    this.paddle = paddle;
  }

  checkBounce() {
    if (this.ball.pos[0] < 0 || this.ball.pos[0] > 4) {
      this.bounceX(vel);
    }
    if (this.ball.pos[1] < 0 || this.ball.pos[1] > 3) {
      this.bounceY(vel);
    }
  }

  bounceX(vel) {
    this.ball.vel[0] = -this.ball.vel[0];
  }

  bounceY(vel) {
    this.ball.vel[1] = -this.ball.vel[1];
  }
}

export default Collisions;
