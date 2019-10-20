class Collisions {
  constructor(pos, vel) {
    this.pos = pos;
    this.vel = vel;
  }

  checkBounce(pos, vel) {
    if (pos[0] < 0 || pos[0] > 4) {
      this.bounceX(vel);
    }
    if (pos[1] < 0 || pos[1] > 3) {
      this.bounceY(vel);
    }
  }

  bounceX(vel) {
    vel[0] = -vel[0];
  }

  bounceY(vel) {
    vel[1] = -vel[1];
  }
}

export default Collisions;
