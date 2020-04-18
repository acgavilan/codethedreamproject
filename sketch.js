//below is where you should build your prework drawing.
//You can declare variables above the setup function.
// The rest of your code will need to either
// live in the setup or draw function.
// Your own custom functions will need to be called within either the setup or draw function.

// If you need more information feel free to look to the https://p5js.org/ documenation.
//erase what is here and input your own code.

//sets up colorful background; 
function colorbg () {
    colorMode(red, 400);
    for (var i = 0; i < 400; i++) {
      for (var j = 0; j < 400; j++) {
        stroke(i, j, 0);
        point(i, j);
      }
    }
}

//icecream cone base
function iceCone () {
    stroke(255,255,255);
    strokeWeight(5);
    fill(230, 159, 7);
    triangle(197,381,127,232,258,230);
}

//icecream bubbles
function bubbles () {
    fill(0, 255, 21);
    ellipse(142,214,33,35);
    ellipse(168,221,20,20);
    ellipse(195,214,33,35);
    ellipse(170,204,14,14);
    ellipse(156,188,25,25);
    ellipse(244,190,36,35);
    ellipse(225,215,25,28);
    ellipse(248,219,18,19);
    ellipse(211,187,26,25);
    ellipse(183,181,33,35);
}

//icecream top bubbles
function bubblesTop() {
    fill(255, 0, 0);
    strokeWeight(3);
    ellipse(142,178,33,35);
    ellipse(164,163,20,20);
    ellipse(195,152,33,35);
    ellipse(199,128,14,14);
    ellipse(179,127,25,25);
    ellipse(244,154,36,35);
    ellipse(221,164,25,28);
    ellipse(238,129,18,19);
    ellipse(219,139,26,25);
    ellipse(168,145,23,24);
    ellipse(145,148,26,24);
}

function setup() {
  createCanvas(400, 400);
}

function draw() { 
    
    colorbg();
    iceCone();
    bubbles();
    bubblesTop();
}

