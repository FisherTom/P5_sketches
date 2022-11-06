const angles = 0.015;
let t=0

function setup() {
  createCanvas(800, 800);
  strokeWeight(0.3);
  stroke(0); 
  noFill();
  spac = width / 2
}

function draw() {
  background(240,255,255);
  for(let a = 0; a < TWO_PI; a += angles)
  {
    let x = spac+cos(a)*200 
    let y = spac+sin(a)*200 
    let xoff = cos(a+t)/2 + 20 ;
    let yoff = sin(a+t)/2 + 20 ; // try tan - sin
    let r = map(noise(xoff,yoff,t),0,1,-500,500);
    circle(x,y,r);
  }
 t += 0.005
}



