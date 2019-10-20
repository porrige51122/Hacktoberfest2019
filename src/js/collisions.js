class Collisions {
  constructor(paddle, ball, bricks) {
    this.ball = ball;
    this.paddle = paddle;
    this.bricks = bricks;
  }

  checkBreak() {
    let bp = this.ball.pos;
    for (let i = 0; i < this.bricks.length; i++) {
      let b = this.bricks[i];
      let brickX = (b.pos[0]) - (this.width) / 2;
      let brickY = (b.pos[1]) - (1 / 4);
      let withinX = bp[0] > brickX && bp[0] < (brickX + b.width);
      let withinY = bp[1] > brickY && bp[1] < (brickY + 1/8);
      if (withinX && withinY) {
        console.log('HIT');
      }
    }
  }

  checkBounce(cellSize) {
    if (this.ball.pos[0] < 0 || this.ball.pos[0] > 4) {
        this.bounceX();
    }
    if (!this.ball.colliding) {
      if (this.ball.pos[1] > 3) {
        let paddle = ((this.paddle.pos/cellSize) - (this.paddle.width/2)) < this.ball.pos[0] &&
        ((this.paddle.pos/cellSize) + (this.paddle.width/2)) > this.ball.pos[0];
        if (paddle) {
          this.ball.colliding = true;
          this.paddleBounce((this.paddle.pos/cellSize) - (this.paddle.width/2), this.paddle.width, this.ball.pos[0]);
        } else {
          this.ball.reset();
        }
      } else if (this.ball.pos[1] < 0) {
        this.ball.colliding = true;
        this.bounceY();
      }
    }
  }

  bounceX() {
    this.ball.vel[0] = -this.ball.vel[0];
  }

  bounceY() {
    this.ball.vel[1] = -this.ball.vel[1];
  }

  paddleBounce(padPos, padWidth, ballPos) {
    let newVel;
    if (ballPos < padPos + padWidth/6) {
      newVel = [-0.03, -0.005];
    } else if (ballPos < padPos + (2*padWidth)/6) {
      newVel = [-0.02, -0.0075];
    } else if (ballPos < padPos + (3*padWidth)/6) {
      newVel = [-0.01, -0.01];
    } else if (ballPos < padPos + (4*padWidth)/6) {
      newVel = [0.01, -0.01];
    } else if (ballPos < padPos + (5*padWidth)/6) {
      newVel = [0.02, -0.0075];
    } else {
      newVel = [0.03, -0.005];
    }
    this.ball.vel = newVel;
  }
}

export default Collisions;
