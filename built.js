function builtScreen(){
crScn="built";
background(0);
fill(150,50);
rect(40,40,width-80,height-80);
fill(100,0,0,40);
image(crossbt,41,5,35,35);
 consoli.log(mouse);
if(mouseX < 75 && mouseX >41 && mouseY > 40 && mouseY <5 )
{
  console.log("working");
  rect(41,5,35,35);
}
}
