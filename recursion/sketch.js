const button = document.getElementById("plant-tree");
button.addEventListener("click", () => {
  plantTree();
});

function plantTree() {
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  windowResized();
  canvas.style("z-index", "-1"); // behind html elements

  strokeWeight(1);
  stroke(random(60, 200), random(60, 200), random(60, 200));
  noFill();
  background(255);
  angleMode(DEGREES);
  blendMode(MULTIPLY);
}

function draw() {
  translate(random(width), height);
  background(255, 255, 255, 20);
  branch(random(60, 200));
  stroke(random(30, 80), random(60, 255), random(60, 150));
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
