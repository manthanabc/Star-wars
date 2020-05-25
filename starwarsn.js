var crScn ="home";
let stardis;
let galaxy;
var y=0;
var hidden=-400;
var prey,posty;
var arrow;
var arrow2;
var crossbt;

function setup() {
//createCanvas(1365,660);
createCanvas(windowWidth,windowHeight);
prelode();

}

function prelode(){
 galaxy=loadImage('data/thegalaxcy.jpg'); 
 stardis=loadImage('data/rhrhh.jpg');
 arrow=loadImage('data/arrow.png');
 arrow2=loadImage('data/arrow2.png');
 crossbt=loadImage('data/crossbt.png');
}

function draw() {
  
  
  if(crScn=="home"){
    
  y= home(y);
    
  }else if(crScn=="built"){
    
    builtScreen();
    
  }
  
}
