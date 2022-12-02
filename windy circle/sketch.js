
const noff = 300    //xy pos/ noff = position in noise space
let t = 0
let circleRad = 250
let div = 0.017    //twoPI/ div = number of lines in the circle
let lengths = []

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function setup() {
canvas = createCanvas(windowWidth,windowHeight)
canvas.position(0,0)
windowResized()
canvas.style('z-index','-1') // behind html elements

strokeWeight(0.5)
noFill()
background(230)
// colorMode(HSB); //needed for url color pallete

for( let i=0; i<=TWO_PI; i+=div){
  lengths.push(Math.floor(random(200,250)))  //array of line lengths in random range
}
}

function draw() 
{
  background(248,248,255)
  n = 0       //counter for line length
  for( let i=0; i<=TWO_PI; i+=div){
    noiseLine(t,width/2 + cos(i)*circleRad,height/3 + sin(i)*circleRad,lengths[n])
    n+=1      //counter for line length
  }
  t+=0.01
  //noLoop()

}

function noiseLine(t,xstart,ystart,segments = 100,segmentDistance = 2){
  beginShape()
  x = xstart
  y = ystart
  vertex(x,y) //define and vertex the start point
  
  for(let i =0; i<=segments; i++){
    x = x+cos(noise(x/noff,y/noff,t)*PI)*segmentDistance
    y = y+sin(noise(x/noff,y/noff,t)*PI)*segmentDistance
    vertex(x,y)
  }
  endShape()
}
