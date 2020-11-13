function isTouching(square1,square2){
    if (square1.x - square2.x < square2.width/2 + square1.width/2
      && square2.x - square1.x < square2.width/2 + square1.width/2
      && square1.y - square2.y < square2.height/2 + square1.height/2
      && square2.y - square1.y < square2.height/2 + square1.height/2) {
   // movingRect.shapeColor = "red";
   // fixedRect.shapeColor = "red";
   return true;
  }
  else {
   // movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
    return false;
  }
  
  }