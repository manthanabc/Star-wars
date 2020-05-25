
 function home(y){
   
   background(80,0,0);
   image(galaxy,-100+hidden,y,width+100-hidden,height*2);      
   noFill();
   
//   y=mouseY;
       if (mouseY<30){y++;}
       if (mouseY>height-30){y--;}
      // console.log(y);
      if(y<-670){y=-670;}
     if(y>9){y=9;}

   ////////  Built map////////////////////
   image(stardis,width-(width/4)+90,height-(height/3)+20,(width/5)-50,(height/4));
   /////////// DONE MAP /////////////////////
   
   
   
   
   ///////////////////  UP DOWN ARRROW //////////////////
  
// rect (width/2.2, 10 ,width/10,height/10);
  image(arrow,width/2.2,10,width/10,height/10);                  ///up arow
  if(mouseX-(width/2.2)+30 < 140 && mouseY-15 < 50 && mouseX-(width/2.2)+30 >50 && mouseIsPressed)
  {
   console.log(mouseX-(width/2.2)+30 );
   y++;
  }                                                       
  
  
  rect(width/2.2,height-height/10,width/10,height/10);
  image(arrow,width/2.2,height-height/10,width/10,(height/10));
  
   ////////////////////// DONE ARROW UP DOWN ////////////////
   
   
   
   ////////////////////////               BUILT        BOX              ////////////////////////////////////////////////
     rect(width-(width/4)+90,height-(height/3)+20,(width/5)-50,(height/4));
     if(mouseX>width-(width/4)+90 && mouseY>height-(height/3)+20)
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
  /////////////////////////////////////             BUILT BOX     DONE              ////////////////////////////////////////
  
  
  
  /////HERE KEY PRESSES //////////
  function keyPressed() {
    console.log("it worked"+key);
  if (key ==='h'  && hidden == 0) {
    hidden = -370;
  } else if (key ==='h' && hidden==-370) {
    hidden = 0;
  }
}
  return y;                    //////////  RETUN SCROOL VAL 
}
  
    /////HERE KEY PRESSES //////////
    

  function keyPressed() {
    console.log("it worked"+key);
  if (key ==='h'  && hidden == 0) {
    hidden = -400;
  } else if (key ==='h' && hidden==-400) {
    hidden = 0;
  }
}
