  function note(){
    var preview=document.getElementById('meitu');
    preview.style.position='absolute';
    preview.style.left='0px';
    preview.style.top='0px';
    var list=document.getElementById('chunmao');
    var links=list.getElementsByTagName('a');
    links[0].onmouseover=function(){
      moveElement("meitu",0,0,10);
    }
    links[1].onmouseover=function(){
      moveElement('meitu',0,-230,10);
    }
    links[2].onmouseover=function(){
      moveElement('meitu',0,-450,10);
    }
    links[3].onmouseover=function(){
      moveElement('meitu',0,-680,10);
    }
   }
   addLoadEvent(note);