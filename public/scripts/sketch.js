// the p5.js canvas
let canvas;
let sketchWidth;
let sketchHeight;
let sketchMarginRatio = 1.1;
let fontStyle;

function preload(){
    // fontStyle = loadFont('../fonts/ArchitectsDaughter-Regular.tff');
}

function setup() {
    sketchWidth = windowWidth / sketchMarginRatio;
    sketchHeight = windowHeight / sketchMarginRatio;
    canvas = createCanvas(sketchWidth, sketchHeight);
    canvas.parent('sketch-holder');
    frameRate(24);
    imageMode(CENTER);
}

function draw() {
    // 1.) background color
    background(100, 100, 200);

    // 2.) gif(s)

    // 3.) button to initiate sequence.
    // placeholder:
        // textFont(fontStyle)
        // offset the textbox / button by half the width of the textbox
        text("click me.", sketchWidth/2, sketchHeight-sketchHeight/7)
}

function windowResized() {
    sketchWidth = windowWidth / sketchMarginRatio;
    sketchHeight = windowHeight / sketchMarginRatio;
    resizeCanvas(sketchWidth, sketchHeight);
}
