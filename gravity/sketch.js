// Setup functions
const createPalette = (url) => {
  const slash_index = url.lastIndexOf("/");
  const palette_str = url.slice(slash_index + 1);
  const arr = palette_str.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `#${arr[i]}`;
  }
  return arr;
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// colour palette from coolors.co URL
const palette = createPalette(
  "https://coolors.co/palette/eddcd2-fff1e6-fde2e4-fad2e1-c5dedd-dbe7e4-f0efeb-d6e2e9-bcd4e6-99c1de"
);
let canvas;

let balls = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1"); // behind html elements
  noStroke();
  colorMode(HSB, 100);
  blendMode(MULTIPLY);
}

function draw() {
  background(0, 0, 100, 10);
  fill(50);
  noStroke();
  circle(width / 2, height / 2, 30);

  for (ball in balls) {
    if (balls[ball].alive === true) {
      balls[ball].update();
      balls[ball].display();
    }
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY, random(5, 100), 0)); //create a new ball and push to ball array when mouse pressed
  return false; // prevent default
}

class Ball {
  constructor(x, y, d, c) {
    this.pos = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.acc = createVector();
    this.acc.setMag(0.3);
    this.dia = d;
    this.color = random(0, 100);
    this.centerOfGravity = createVector(width / 2, height / 2);
    this.alive = true;
  }

  update() {
    this.acc = p5.Vector.sub(this.centerOfGravity, this.pos); // acceleration = mouse - position
    this.acc.setMag(0.06); // limit acceleration changes responsiveness
    this.velocity.add(this.acc); //velocity = velocity + acceleration
    this.velocity.limit(20); // limmit max velocity
    this.pos.add(this.velocity); // position = position +velocity
    this.dia -= 0.2; //shrink the diameter of the ball

    if (this.dia <= 0) {
      // if diameter gets to 0 no longer update or draw the ball
      this.alive = false;
    }
  }

  display() {
    fill(this.color, 50, 100, 30);
    noStroke();
    circle(this.pos.x, this.pos.y, this.dia);
    stroke(this.color, 50, 100);
    //line(this.pos.x,this.pos.y,this.centerOfGravity.x,this.centerOfGravity.y)
  }
}
