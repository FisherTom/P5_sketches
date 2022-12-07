
  // Setup functions
const createPalette = url => {
  const slash_index = url.lastIndexOf('/');
  const palette_str = url.slice(slash_index + 1);
  const arr = palette_str.split('-');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = `#${arr[i]}`;
    }
  return arr;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

 // colour palette from coolors.co URL
const palette = createPalette('https://coolors.co/palette/eddcd2-fff1e6-fde2e4-fad2e1-c5dedd-dbe7e4-f0efeb-d6e2e9-bcd4e6-99c1de');
let canvas;
let numberOfBalls = 300

let balls = []

function setup() {
  canvas = createCanvas(windowWidth,windowHeight)
  canvas.position(0,0)
  windowResized()
  canvas.style('z-index','-1') // behind html elements
 
  fill(palette[9])
  stroke(palette[1])
  colorMode(HSB,100)


    /////////////////create Balls/////////////////
  for(let i=0; i<= numberOfBalls; i++){
    let x = width/2+cos(TWO_PI/numberOfBalls*i)*500
    let y = height/2+sin(TWO_PI/numberOfBalls*i)*500
    balls.push(new Ball(x,y,20)); //we create our b instance of Ball;
  }
}

let margin = 200

function draw() {
  background(100,0,100,5);
  for(ball in balls){
    balls[ball].update(); 
    balls[ball].display();
  }
}

class Ball {
  constructor(x,y,d) {
    this.pos = createVector(x,y);
    this.velocity = createVector();
    this.acc = createVector()
    this.acc.setMag(0.1) 
    this.dia = d
  }
  
  update() {
    let mouse = createVector(mouseX,mouseY); // get mouse vector     *********OVERRIDE*******
    this.acc = p5.Vector.sub(mouse, this.pos) // acceleration = mouse - position
    this.acc.setMag(0.1)          // limit acceleration changes responsiveness
    this.velocity.add(this.acc)           //velocity = velocity + acceleration
    this.velocity.limit(6)               // limmit max velocity
    this.pos.add(this.velocity);    // position = position +velocity

    
    ////////////  Wall Rebound conditions //////////// 
    // if ((this.pos.x > width -margin) || (this.pos.x < 0+margin)) {
    //   this.velocity.x = this.velocity.x * -1;
    // }
    // if ((this.pos.y > height -margin) || (this.pos.y < 0 +margin)) {
    //   this.velocity.y = this.velocity.y * -1;
    // }
    
  }

  display() {
    // Draws the circle
    circle(this.pos.x, this.pos.y, this.dia);
  }
}


