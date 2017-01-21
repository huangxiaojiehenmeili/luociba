function moveElement(elementID,x,y,interval){
  var elem=document.getElementById(elementID);
  if(elem.movement){
    clearTimeout(elem.movement);
  }
  var xpos=parseInt(elem.style.left);
  var ypos=parseInt(elem.style.top);
  var dist=0;
  if(xpos==x && ypos==y){
    return true;
  }
  if(xpos<x){
    dist=Math.ceil((x-xpos)/10);
    xpos=xpos+dist;
  }
  if (xpos>x) {
    dist=Math.ceil((xpos-x)/10);
    xpos=xpos-dist;
  }
  if(ypos<y){
   dist=Math.ceil((y-ypos)/10);
    ypos=ypos+dist;
  }
  if(ypos>y){
    dist=Math.ceil((ypos-y)/10);
    ypos=ypos-dist;
  }
  elem.style.left=xpos+"px";
  elem.style.top=ypos+"px";
  var repeat="moveElement('"+elementID+"',"+x+","+y+","+interval+")";
  elem.movement=setTimeout(repeat,interval);
 }