let url = "https://coolors.co/709255-3e5622-83781b-172815-dff3e4";
const createPalette = (url) => {
  const slash_index = url.lastIndexOf("/");
  const palette_str = url.slice(slash_index + 1);
  const arr = palette_str.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `#${arr[i]}`;
  }
  return arr;
};
const palette = createPalette(url);

function setup() {
  createCanvas(1000, 1000); //SVG
  strokeWeight(0.5);
  noStroke();
  background(230);
  blendMode(MULTIPLY);
  colorMode(HSB);
  document.getElementById("bod").style.background = palette[palette.length - 1];
}

function draw() {
  for (let i = 0; i < 20; i++) {
    let c = int(random(5));
    fill(palette[c]);
    circle(random(width), random(height), random(100, 500));
  }
  noLoop();
}

function keyTyped() {
  if (key === "s") {
    save("mySVG.svg"); // give file name
    print("saved svg");
    noLoop(); // we just want to export once
  }
}
