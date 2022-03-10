//https://editor.p5js.org/tlu30/full/sg3UTRsNo
var capture;
//var capimg
var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(640 / vScale, 480 / vScale);
  noStroke();
  frameRate(5);
}

function draw() {
  background(51);
  capture.loadPixels();
  let stepsize = int(map((mouseX + mouseY) / 2, 0, width, 5, 25));
  loadPixels();
  for (var y = 0; y < capture.height; y++) {
    for (var x = 0; x < capture.width; x++) {
      var index = (x + y * capture.width) * 4;
      var r = capture.pixels[index + 0];
      var g = capture.pixels[index + 1];
      var b = capture.pixels[index + 2];
      
      capture.pixels[index + 0] = 255 - r;
      capture.pixels[index + 1] = 255 - g;
      capture.pixels[index + 2] = 255 - b;
      
      fill(capture.pixels[index + 0], capture.pixels[index + 1], capture.pixels[index + 2])
      circle(x * vScale, y * vScale, stepsize)
    }
  }
  capture.updatePixels();
}