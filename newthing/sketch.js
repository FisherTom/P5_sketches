let dia = 100
let t = 0
x = 0

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
  dia = windowWidth/6
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight)
  canvas.position(0,0)
  windowResized()
  canvas.style('z-index','-1') // behind html elements
  stroke(255)
  strokeWeight(0.5)
  angleMode(DEGREES)
  background(0)
  
}

function draw() {
translate(width/2,height*0.8)
background(0,60)
for (let r = 0; r<=360; r+=1)
      { 
        //line(sin(r/3)*dia*sin(t), cos(r/3)*dia*cos(t/2), sin(-r+18)*dia*2*cos(t), cos(-r)*dia-dia*sin(t))  // mess with everything here   eg...
       line(
         2*sin(r)*dia*(sin(t)), 
         2*cos(r)*dia-360, 
         sin(r*2)*dia*2, 
         cos(r*2)*dia*(cos(t)+1)-dia*1.5
         )
       //line(2*sin(r)*dia, 2*cos(r)*dia-300, sin(-r)*dia, cos(-r)*dia/3-dia*1.5)
      }
x += 0.01
t+=1//map(noise(x),0,1,0,720)
//noLoop()
}

