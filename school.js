var step=0;
var lastindex=slideimages.length-1;
var whichimage=step;

var timer;
function slideDelay(n){
	clearInterval(timer);
	slide(n);
timer=setInterval("slide(1)",3500);	
}
function slide(n){
	if (!document.images)
  return;
	step=whichimage+n;
	if(step>lastindex){
		step=0;
	}
	else if(step<0){
		step=lastindex;
	}
	document.getElementById('slide').src = slideimages[step].src;
document.getElementById("caption").textContent=slideText[step];
whichimage=step;
}
timer=setInterval("slide(1)",3500);
