//global variable for the image object
let bgImg;
let bgImg2;

//load image before running code in canvas
function preload() {
  bgImg = loadImage('https://live.staticflickr.com/3391/3528338480_45db89b142.jpg');
  bgImg2 = loadImage(
'https://live.staticflickr.com/7460/13494792063_c471773c85_b.jpg');

}

function setup() {
  createCanvas(400, 400);
  noStroke();
  textFont('Georgia');
  textSize(20);

  
}

function draw() {
  //background(220);
  
  
 image(bgImg, 0, 0, 400, 400);
  
  if (mouseX < width-150 && mouseX > 150 && mouseY < height-150 && mouseY > 150){
 //face shape 
  fill(205, 127, 50);
    image(bgImg2, 0, 0, 400, 400); 
  
  }
  else{
      fill(0);

  }
  ellipse(width/2, height/2, 100,130);
  fill(255,255,255);
  text('touch the face for a suprise',80,50);
  
  translate(random(-3,3),random(-3,3));
  
  //sclera
  fill(255);
  
  //right eye
  push();
   translate(width/2 - 20,.47* height);
   ellipse(0, 0, 15, 10);
   fill(100,70,10);
   ellipse(0,0,9,9);
   fill(0);
   ellipse(0,0,3,3);
 pop();
  
  //left eye
 push();
  translate(width/2 + 20,.47* height);
  ellipse(0, 0, 15, 10);
  fill(100,70,10);
  ellipse(0,0,9,9);
  fill(0);
  ellipse(0,0,3,3);
  pop();
  
  //mouth
  
  translate(width/2, height/2 +20);
  fill(0);
  beginShape();
  curveVertex(20,0);
  curveVertex(0,10);
  curveVertex(-20,0);
  curveVertex(20,0);
  curveVertex(0,10);
  curveVertex(-20,0);
  curveVertex(20,0);
  endShape();  
  
}