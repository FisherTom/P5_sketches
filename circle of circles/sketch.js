const angles = 0.015;
let t=0

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight)
  canvas.position(0,0)
  windowResized()
  canvas.style('z-index','-1') // behind html elements
  
  strokeWeight(0.3);
  stroke(0); 
  noFill();
  spacx = width / 2
  spacy = height / 2
}

function draw() {
  background(240,255,255);
  for(let a = 0; a < TWO_PI; a += angles)
  {
    let x = spacx+cos(a)*200 
    let y = spacy+sin(a)*200 
    let xoff = cos(a+t)/2 + 20 ;
    let yoff = sin(a+t)/2 + 20 ; // try tan - sin
    let r = map(noise(xoff,yoff,t),0,1,-500,500);
    circle(x,y,r);
  }
 t += 0.005
}



