//https://editor.p5js.org/tlu30/full/cmNpj0v_F
let img;
function setup() {
  createCanvas(710, 400, WEBGL);
  img = loadImage('KQ.jpg');
}

function draw() {
  background(0);
  
  directionalLight(0, 255, 0, -0.25,-0.25,0)
  directionalLight(255, 0, 0, 0.25,0.25,0)
  directionalLight(0, 0, 255, -0.25,0.25,0)
  
  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(80);
  pop();
  
  push();
  translate(width / 4, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noStroke();
  ambientMaterial(255, 255, 255);
  torus(80,20);
  pop();
}