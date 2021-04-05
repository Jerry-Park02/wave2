let dia = 0;
let x = 50;
let angle = 0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  noFill();
  strokeCap(ROUND);
  angleMode(DEGREES)
}
function draw(){
    stroke(0,35,45,random(10,50));
    arc(width/2+dia/2, height/2,width-x*2-dia,width-x*2-dia,180,360);
    arc(x+dia/2,height/2,dia,dia,0,180);
    dia++;
  
    if (dia>width-x*2) dia=0;
}