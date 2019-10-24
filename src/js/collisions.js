import { createRack } from './main.js';

class Collisions {
  constructor(paddle, ball, bricks) {
    this.ball = ball;
    this.paddle = paddle;
    this.bricks = bricks;
  }

  checkBreak(nextLevel) {
    let isWin = true;
    let bp = this.ball.pos;
    let bw = this.ball.width;
    for (let i = 0; i < this.bricks.length; i++) {
      let b = this.bricks[i];
      if (b.visible) {
        let brickX = (b.pos[0]);
        let brickY = (b.pos[1]);
        isWin = false;
        let withinX = bp[0] + bw > brickX && bp[0] - bw < (brickX + b.width);
        let withinY = bp[1] + bw > brickY && bp[1] - bw < (brickY + b.height);
        if (withinX && withinY) {
          withinY = bp[1] + bw/2 > brickY && bp[1] - bw/2 < (brickY + b.height);
          if (withinY) {
            this.bounceX();
          } else {
            this.bounceY();
          }
          window.hits++;
          this.bricks[i].visible = false;
        }
      }
    }
    if (isWin) {
      if (nextLevel) {
        createRack();
      } else {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("youWin").style.display = "block";
        this.ball.vel = [0,0];
      }
    }
  }

  checkBounce(cellSize, lives) {
    if (!this.ball.colliding) {
      if (this.ball.pos[0] - this.ball.width < 0 || this.ball.pos[0] + this.ball.width > 4) {
        this.ball.colliding = true;
        this.bounceX();
      }
      if (this.ball.pos[1] + this.ball.width > 3 - this.paddle.buffer - this.paddle.height) {
        let paddle = ((this.paddle.pos/cellSize) - (this.paddle.width/2)) < this.ball.pos[0] + this.ball.width &&
        ((this.paddle.pos/cellSize) + (this.paddle.width/2)) > this.ball.pos[0] - this.ball.width;
        if (paddle) {
          this.ball.colliding = true;
          this.paddleBounce((this.paddle.pos/cellSize) - (this.paddle.width/2), this.paddle.width, this.ball.pos[0]);
        } else {
            document.getElementById("canvas").style.display = "none";
            document.getElementById("gameOver").style.display = "block";
            this.ball.vel = [0,0];
        }
      } else if (this.ball.pos[1] - this.ball.width < 0) {
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
