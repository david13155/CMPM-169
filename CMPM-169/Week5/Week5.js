//https://editor.p5js.org/tlu30/full/MULKMfpXn
let osc, fft;

function setup() {
  createCanvas(720, 256);

  osc = new p5.TriOsc(); // set frequency and type

  fft = new p5.FFT();
  osc.start();
  
  sliderFreq = createSlider(0, width, 1, 10);
  sliderAmp = createSlider(0, 1, 0, 0.1);
}

function draw() {
  background(255);

  let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency by adjusting slider
  osc.freq(sliderFreq.value());
  osc.amp(sliderAmp.value());
}
