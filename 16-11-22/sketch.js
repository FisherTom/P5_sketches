
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
  tiles = []
  createTiles()
}

  // colour palette from coolors.co URL
const palette = createPalette('https://coolors.co/palette/eddcd2-fff1e6-fde2e4-fad2e1-c5dedd-dbe7e4-f0efeb-d6e2e9-bcd4e6-99c1de');
let canvas;

class Tile{
  constructor(x,y,size = res){
    this.x = x
    this.y = y
    this.xorig = x
    this.yorig = y
    this.size = size
  }

  show(){
    circle(this.x,this.y,this.size)
  }

  noiseTranslate(j,t){
    this.x = this.xorig+ j * cos(noise(0,this.y/noiseDiv,t))
    this.y = this.yorig+ j * sin(noise(this.x/noiseDiv,0,t))
  }

  mouseTranslate(){
  
  }
}

////////global variables////////
let border = 100
let res = 100; //canvas division
let tiles = [];
let t =1;
let noiseDiv = 500;
///////////////////////////////

function setup() {
  canvas = createCanvas(windowWidth,windowHeight)
  canvas.position(0,0)
  windowResized()
  canvas.style('z-index','-1') // behind html elements
  //noStroke()
  fill(palette[9])
}

function draw() {
  translate(-350,-180)
  background(palette[1]);
  tiles.map(tile => tile.size = 100*noise(tile.x/500,tile.y/100,t))
  tiles.map(tile => tile.noiseTranslate(400,t))
  tiles.map(tile => tile.show())
  t+=0.005
}

function createTiles(){
  for(let y=border; y<height-border; y+=res){
    for(let x=border; x<width-border; x+=res){
      tiles.push(new Tile(x,y))
    }
  }
}


// create an array of xy coordinates 
// map the xy coordinates to create array of tile objects
