let def = 10; //default status
let hstatus = def; // current status
let cg = 250; // colour of creature
let cg2 = 250;
let cb = 250; // colour of creature
let cr = 0;
let cr_ = 255;
let timer;
let eating = 0;
let x, y, r;
let mx, my;
let d;
let mouth;
let int = 7000;


function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.parent("sketch-container");

addGUI();

timer = setInterval(mHungry, int);
y = height;
r = 20;
mouth = 5;
}

function draw() {
mx = width/2;
my = height/1.9;
x = width/2;

background(10, 100, 150);

if (hstatus <= 0) {
  clearInterval(timer)
  textSize(width/8);
  fill(200, 50, 20);
  text('LOOSER!', width/4, height/3);

}



//creature
fill(cr_, cg, cb);
noStroke();
circle(width/2, height/2, height/5)
//too full
if (hstatus > 10) {
  fill(50, 255, 20);
  noStroke();
  circle(width/2, height/2, height/5)
}
// mouth
stroke(0);
strokeWeight(5)
fill(200, 100, 150)
ellipse(mx, my, height/9, mouth);

//hunger status bar
if (hstatus <= 10){
stroke(0);
strokeWeight(1)
fill(200);
rect(10, 10, width/25, 10*10)
stroke(0);
strokeWeight(1)
fill(cr, cg, 50, 150);
rect(10, 10, width/25, hstatus*10)
} else {
strokeWeight(1)
fill(255, 0, 0);
rect(10, 10, width/25, 100)
}


// bring food out to C's mouth
if (eating == 1) {
  y-=1;
  food(x, y, r);
  button.html("FEEDING");
  button.addClass("inactive");
}



d = dist(mx, my, x, y);

// stop showing food function after hits mouth centre
if (d <= r/2) {
  eating = 0;
  y = height;
  hstatus += 1;
  cg += 20;
  cb += 20;
  cr -= 20;
  cg2 += 15;
 
  button.html("FEED");
  button.removeClass("inactive");

}

//open mouth at food
if (y <= height - (height/6)) {
  mouth += 0.3;
} else {
  mouth = 5;
}

}

function food(x, y, r) {
  fill(170, 120, 40);
  circle(x, y, r)
}

function feed() {
  eating = 1;
}

function reset() {
  timer = setInterval(mHungry, int);
  hstatus = 10;
  cg = 250; 
  cg2 = 250;
  cb = 250; 
  cr = 0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function addGUI() {
    button = createButton("FEED")
    button.addClass("button");
    button.parent("gui-container");
    button.mousePressed(feed);

    button2 = createButton("RESET")
    button2.addClass("button");
    button2.parent("gui-container");
    button2.mousePressed(reset);

  }

  function mHungry() {
    console.log("hungry")
    hstatus -= 1;
    cg -= 20;
    cb -= 20;
    cr += 20;
    cg2 -= 15;
  }

