// the p5.js canvas
let canvas;
let sketchWidth;
let sketchHeight;
const sketchMarginRatio = 1.1;
let sketchSide;
let fontStyle;

function preload(){
    // fontStyle = loadFont('../fonts/ArchitectsDaughter-Regular.tff');
}

function setup() {
    setSketchSide();
    canvas = createCanvas(sketchSide, sketchSide);
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
        text("click me.", sketchSide/2, sketchSide-sketchSide/7)
}

function windowResized() {
    setSketchSide();
    resizeCanvas(sketchSide, sketchSide);
}

function setSketchSide(){
    sketchWidth = windowWidth / sketchMarginRatio;
    sketchHeight = windowHeight / sketchMarginRatio;
    sketchSide = sketchWidth < sketchHeight ? sketchWidth : sketchHeight;
}
