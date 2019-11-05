let pig1 = 0
let pig2 = 0
let pig3 = 0
let img1, img2, img3, mySound;

function preload() {
  mySound = loadSound('pigs/oink.mp3');
  img1 = loadImage("pigs/pig1.png")
  img2 = loadImage("pigs/pig2.png")
  img3 = loadImage("pigs/pig3.png")
}

function setup() {
  createCanvas(800, 600);
  mySound.setVolume(0.3);
  mySound.play();
}

function draw() {
  clear()
  background(229, 204, 255);
  fill(255, 255, 204);
  noStroke();

  rect(0, 0, 800, 150);
  rect(0, 200, 800, 150);
  rect(0, 400, 800, 150);
  rect(0, 600, 800, 150);

  image(img1, pig1, 100, 100, 100)
  image(img2, pig2, 300, 100, 100)
  image(img3, pig3, 500, 100, 100)

  pig1 = pig1 + 2
  pig2 = pig2 + 2.4
  pig3 = pig3 + 2.25

  if (pig1 > 850) {
    mySound.stop()
  }
}
function mousePressed() {

} 