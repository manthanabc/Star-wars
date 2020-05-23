function home()
{

   background(80,0,0);
   image(galaxy,-100,0,width+100,height*2);
   noFill();
   image(stardis,width-(width/4)+90,height-(height/3)+20,(width/5)-50,(height/4));
   rect(width-(width/4)+90,height-(height/3)+20,(width/5)-50,(height/4));
     if(mouseX>width-(width/4)+60 && mouseY>height-(height/3)+50)
     {
      strokeWeight(5);
      rect(width-(width/4)+90,height-(height/3)+20,(width/5)-50,(height/4));
      strokeWeight(1);
     
       if(mouseIsPressed)
       {
       builtScreen();
       }
     }  
  strokeWeight(20);
  rect(0,0,width,height);
  strokeWeight(1);
}
    
  
