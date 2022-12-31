import ball from "./Ball.js";

const ballElem = document.getElementById("ball");
const ballObj = new ball(ballElem);
let lastTime;
let shiftX, shiftY;

function normX(x){
  return 100*x/window.innerWidth;
}
function normY(y){
  return 100*y/window.innerHeight;
}
function moveAt(pageX, pageY) {
  ballObj.x = pageX - shiftX;
  ballObj.y = pageY - shiftY;
}

function onMouseMove(event) {
  moveAt(normX(event.pageX), normY(event.pageY));
}

ballElem.onmousedown = function(event) {
  shiftX = normX(event.pageX) - ballObj.x;
  shiftY = normY(event.pageY) - ballObj.y;
  document.addEventListener('mousemove', onMouseMove);
  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ballElem.onmouseup = null;
  };
};

function update(time) {
  if (lastTime != null) { // once lastTime exists
    const delta = time - lastTime; // usually 16.666 ms
    ballObj.update(time); // adjust updates to delta (prob help w lag)
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);