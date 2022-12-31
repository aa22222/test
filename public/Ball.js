export default class ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
    this.dragged = false;
  }

  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
  }

  set x(value) {
    this.ballElem.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
  }

  set y(value) {
    this.ballElem.style.setProperty("--y", value);
  }

  update(dt) {
    if (!this.dragged) {
      this.x = this.x + 0;
      this.y = this.y + .000000000005*(0.5)*(9.8)*(dt)*(dt);
    }
  }
}