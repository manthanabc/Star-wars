var crScn ="home";
let stardis;
let galaxy;
function setup() {
//createCanvas(1365,660);
createCanvas(windowWidth,windowHeight);
galaxy=loadImage('data/the_galaxcy.png');
prelode();
}

function prelode(){
 galaxy=loadImage('data/thegalaxcy.jpg'); 
 stardis=loadImage('data/builtlogo.jpg');
}

function draw() {
  if(crScn=="home"){
  home();
  }else if(crScn=="built"){
    
  }
  
}
