let head_index, face_index, bottom_index;
let bottoms = [] 
let faces = []
let heads = []

function preload() {
  bottoms.push(loadImage('monsters/bottom1.png'))
  bottoms.push(loadImage('monsters/bottom2.png'))
  bottoms.push(loadImage('monsters/bottom3.png'))
  bottoms.push(loadImage('monsters/bottom4.png'))
  bottoms.push(loadImage('monsters/bottoms5.png'))
  faces.push(loadImage('monsters/face1.png'))
  faces.push(loadImage('monsters/face2.png'))
  faces.push(loadImage('monsters/face3.png'))
  faces.push(loadImage('monsters/face4.png'))
  faces.push(loadImage('monsters/face5.png'))
  heads.push(loadImage('monsters/head1.png'))
  heads.push(loadImage('monsters/head2.png'))
  heads.push(loadImage('monsters/head3.png'))
  heads.push(loadImage('monsters/head4.png'))
  heads.push(loadImage('monsters/head5.png'))
}

function setup() {
  // bg = loadImage('monsters/background.jpg');
  createCanvas(1000,780);
  randomize()
}

function draw() {
  image(heads[head_index], 100, 0, 300, 300)
  image(faces[face_index], 100, 300, 300, 300)
  image(bottoms[bottom_index], 100, 600, 300, 300)
}

function mousePressed() {
  randomize()
}

function randomize() {
  head_index = int(random(4));
  face_index = int(random(4));
  bottom_index = int(random(4));
  clear();
}