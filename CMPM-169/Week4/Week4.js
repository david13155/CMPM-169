//Tingyuan Lu, WEEK 4
//This is a simple music player, it has play and pause key and can also show spectrum on the side. You can change the volume by moving your mouse from left to right.
//https://editor.p5js.org/tlu30/full/Y9QdqFG77
function preload (){
  song = loadSound('BGM.wav')
}

function setup() {
  createCanvas(710, 400);
  noFill();
  button = createButton("Play");
  button.mousePressed(play);
  button = createButton("Pause");
  button.mousePressed(pause);
  fft = new p5.FFT();
  fft.setInput(song);
}

function draw() {
  background(220); 
  let volume = map(mouseX, 0, width, 0, 1)
  song.amp(volume)
  
  let spectrum = fft.analyze();
  
  beginShape();
  for(i = 0; i < spectrum.length; i++){
    vertex(i, map(spectrum[i], 0, 255, height,0));
  }
  endShape();
}

function pause() {
  song.pause();
}

function play() {
  song.play();
}