function mao(){
	 var picture=document.getElementById('meitu');
	 picture.style.position='absolute';
	 picture.style.right=0px;
	 picture.style.top=0px;
	var chun=document.getElementsByClassName('mao');
	chun[0].onmouseover=function(){
		moveElement('meitu',0,0,10);
	}
	
}