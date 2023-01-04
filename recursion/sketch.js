function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  windowResized();
  canvas.style("z-index", "-1"); // behind html elements

  strokeWeight(1);
  stroke(255);
  noFill();
  background(0);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height);
  branch(200);
  noloop();
}

function branch(len) {
  push();
  if (len > 2) {
    strokeWeight(map(len, 2, 100, 0.5, 8));

    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(25 + random(-10, 10));

    branch(len * random(0.5, 0.9));

    rotate(-50 + random(-10, 10));

    branch(len * random(0.5, 0.9));
  }
  pop();
}
