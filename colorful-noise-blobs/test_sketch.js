let url = 'https://coolors.co/palette/eddcd2-fff1e6-fde2e4-fad2e1-c5dedd-dbe7e4-f0efeb-d6e2e9-bcd4e6-99c1de';
const createPalette = url => {
const slash_index = url.lastIndexOf('/');
const palette_str = url.slice(slash_index + 1);
const arr = palette_str.split('-');
for (let i = 0; i < arr.length; i++) {
  arr[i] = `#${arr[i]}`;
}
return arr;
}
const palette = createPalette(url);

let canvas;
let t=0;
let slider

function windowResized(){

    resizeCanvas(windowWidth,windowHeight)
    hmargin = clamp((windowHeight-800)/2,100,800);
    wmargin = clamp((windowWidth-900)/2,100,900);
   
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
    canvas.position(0,0)
    windowResized()
    canvas.style('z-index','-1')

    blendMode(MULTIPLY)
    noStroke()
    colorMode(HSB)

    sliderOne = createSlider(10,1000,300)
    sliderOne.class("slider")
    sliderTwo = createSlider(10,50,30)
    sliderTwo.class("slider")
    sliderThree = createSlider(5,25,10)
    sliderThree.class("slider")
}

function draw(){
    clear()
    background(240,2,99)
    
    let gap = sliderTwo.value()
    let noiseDiv = sliderOne.value()
    let colDiv = sliderThree.value()   //5-10

    for(let x=wmargin;x<=width-wmargin;x+=gap){
        for(let y=hmargin;y<=innerHeight-hmargin;y+=gap){
            
            let size = gap/noise(x/noiseDiv,y/noiseDiv,t)/1.5
            
            fill(size*size/colDiv,50,90)
            circle(x,y,size)
        }
    }
    t+=0.005
}