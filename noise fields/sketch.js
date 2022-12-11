
let mult = 0.002//noise density
let zoff = 0
let rotat = 3

function windowResized() {
  resizeCanvas(windowWidth/2,windowHeight/8*7);
}

function setup() {
  const cnv = createCanvas(windowWidth/2,windowHeight/8*7);
  cnv.parent('sketch-container')
  cnv.style('border-radius: 1em;')
  angleMode(DEGREES)    
  strokeWeight(0.3);
  stroke(0); 
  noFill();
  background('#FFFFFF');
  }
  
function draw() {
background('#FFFFFF');
spots(3,5,80)
noLoop()

}

////////////// different field functions ///////////////////


function field(){

  seg_len = 5
  line_len = 30
  density = 50

  for (x=width/density/2; x<width; x+=width/density){
    for (y=height/density/2; y<height; y+=width/density){
  
    let p = createVector(x+random(-20,20) ,y+random(-20,20))    //Create grid of equaly spaced points can add random
  
    beginShape()
  
    for( i = 0; i<line_len; i++){                                   //draws one whole line at a time
      angle = map(noise(p.x * mult ,p.y * mult),0,1,0,720)         //map noise at vector to angle 
      p.add(createVector(cos(angle/3)*seg_len,sin(angle/3)*seg_len))  //add angle vector to current
      vertex(p.x,p.y)
    }
    endShape()
  }
  }
}

function ring(xp,yp,rad,n,steps){
 
    for (x=0; x<360; x+=steps){
      
      let p = createVector(cos(x)*rad + xp,sin(x)*rad + yp) //Create ring of equaly spaced points can add random
     
      beginShape()
      
      for( i = 0; i<60; i++){                                    //draws one whole line at a time
        angle = map(noise(p.x * mult ,p.y * mult,n),0,1,0,360)     //map noise at vector to angle 
        p.add(createVector(cos(angle)*5,sin(angle)*5))        //add angle vector to current
        vertex(p.x,p.y)
      }
      endShape()

    }
  
}
  
function spots(s,m,r) {
  

  for(q = 0; q<m; q++){
  for(l = 0; l<s; l++){
    ring((l*width/s)+0.5*width/s,(q*height/m)+0.5*height/m,r,0,5 );}}

noLoop()
}

function spiral(){
  
  revs = 20       //rings in the spiral
  l_space = 1     //line every x degrees
  seg_len = 2
  line_len = 10
  length_Rnd = 100
  deviation = 360   //angle range 720 is full rotation
  
  push()
  translate(width/2,height/2)
  
    for (x=0; x<360*revs; x+=l_space){
      
      let p = createVector(cos(x)*x/15,sin(x)*x/15)
     
      beginShape()

      //stroke(map(x,0,360*8,30,160),map(x,0,360*8,130,0),map(x,0,360*8,60,200))
      
      for( i = 0; i<line_len+(random(0,length_Rnd)); i++){
        angle = map(noise(p.x * mult ,p.y * mult),0,1,0,deviation)///should be 720
        p.add(createVector(cos(angle)*seg_len,sin(angle)*seg_len))
        vertex(p.x,p.y)
      }
      endShape()
    }
    pop()
}
    
function rota(){
  ring(0,100,50,zoff)
rotate(60)
ring(0,100,50,zoff)
rotate(60)
ring(0,100,50,zoff)
rotate(60)
ring(0,100,50,zoff)
rotate(60)
ring(0,100,50,zoff)
rotate(60)
ring(0,100,50,zoff)
zoff += 0.003
}