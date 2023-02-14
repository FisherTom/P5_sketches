// Setup functions
const createPalette = (url) => {
  const slash_index = url.lastIndexOf("/");
  const palette_str = url.slice(slash_index + 1);
  const arr = palette_str.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `#${arr[i]}`;
  }
  return arr;
};

let font,
  fontsize = 60;

const advicePromise = fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return response.json();
  })
  .then((adviceData) => {
    return Promise.resolve(adviceData);
  });

async function preload() {
  bfont = loadFont("SourceSansPro-Bold.ttf");
  lfont = loadFont("SourceSansPro-Regular.ttf");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight / 6);
}

// colour palette from coolors.co URL
const palette = createPalette(
  "https://coolors.co/palette/eddcd2-fff1e6-fde2e4-fad2e1-c5dedd-dbe7e4-f0efeb-d6e2e9-bcd4e6-99c1de"
);
let canvas;
const tomArr = ["T", "o", "m"];
const fishArr = ["F", "i", "s", "h", "e", "r"];
let dumTomArray = ["a", "b", "a"];
let dumFishArray = ["a", "b", "a", "a", "a", "a"];
let count = 0;

async function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  windowResized();
  canvas.style("z-index", "-1"); // behind html elements
  textFont(bfont);
  textSize(fontsize);
  const adviceObj = await advicePromise;

  advice = adviceObj.slip.advice;

  console.log(advice);
}

function draw() {
  count++;
  background(255, 255, 255, 90);
  let x = 80;

  textFont(lfont);

  dumTomArray = dumTomArray.map((letter, index) => {
    if (letter != tomArr[index]) {
      letter = char(random(40, 130));
    }
    return letter;
  });

  let printTom = dumTomArray.join("");
  text(printTom, x, height / 2 - 15);

  textFont(bfont);

  dumFishArray = dumFishArray.map((letter, index) => {
    if (letter != fishArr[index]) {
      letter = char(random(40, 130));
    }
    return letter;
  });

  let printFish = dumFishArray.join("");

  text(printFish, x + 3, height / 2 + 40);

  if (count === 150) {
    dumTomArray = tomArr;
    dumFishArray = fishArr;
  }

  if (count === 300) {
    noLoop();
  }
}
