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

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  windowResized();
  canvas.style("z-index", "-1"); // behind html elements
  background(palette[3]);
  fill(palette[9]);
  stroke(palette[1]);

  b = new Ball(); //we create our b instance of Ball;
}

let margin = 200;

function draw() {
  //background(palette[3]);
  b.update();
  b.display();
}

////////////////////////////////////////

class Ball {
  constructor(t = 0) {
    this.position = new createVector(
      random(0 + margin, width - margin),
      random(0 + margin, height - margin)
    );
    this.velocity = new createVector(random(-5, 8), random(-2, 6));
    this.dia = random(50, 200);
    this.t = t;
  }

  update() {
    // need to figure out correct velocity calc for mouse movment
    // this.velocity.x = -mouseX/200
    // this.velocity.y = -mouseY/200

    // Add the current speed to the position.
    this.position.add(this.velocity);

    ////////////  Wall Rebound conditions //////////// NEEDS FIXING
    if (this.position.x > width - margin || this.position.x < 0 + margin) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.position.y > height - margin || this.position.y < 0 + margin) {
      this.velocity.y = this.velocity.y * -1;
    }

    this.dia =
      noise(this.position.x / 300, this.position.y / 300, this.t) * 600 - 150;
    this.t += 0.001;
  }

  display() {
    // Display circle at x position
    circle(this.position.x, this.position.y, this.dia);
  }
}
