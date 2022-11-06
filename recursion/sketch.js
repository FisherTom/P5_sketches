function setup() {
  createCanvas(1000, 1000, SVG);
  strokeWeight(1);
  stroke(255); 
  noFill();
  background(0);
  angleMode(DEGREES)
  noLoop()
}

function draw() {
 
  translate(width/2,height)
  branch(200)
}
    

function branch(len)
{
  push()
  if(len>2){
    strokeWeight(map(len,2,100,0.5,6))

  line(0,0,0,-len)
  translate(0,-len)
  rotate(25+random(-10,10))

  branch(len*random(0.5,0.9))

  rotate(-50+random(-10,10))

  branch(len*random(0.5,0.9))
}
pop()
}
noLoop()

function keyTyped() {
    if (key === 's') {
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
  }
}
