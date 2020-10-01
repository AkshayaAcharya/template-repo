//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}


//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)"; 
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}


//function to move to next canvas
function navNext()
{
	for(temp=0;temp<=3;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//magic function for animation in each canvas
function magic() {
    if(simsubscreennum == 1) {
        //Write code for canvas 1 animations
        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(320,450,-90);//specify the left top and deg of arrow
        document.getElementById("translate").onclick = function() {
            document.getElementById("translate").onclick ="";
            myStopFunction();//stops blinking arrow
            //you have below mentioned bucketMove css, next is durations, 3rd one: repeat value, 4th can be: linear, forwards, ease-in, ease-out can refer w3schools for available options
           
            document.getElementById("water").style.animation = "waterMove 2.4s forwards";//Since it runs for 1.2s
            document.getElementById("bucket").style.animation = "bucketMove 1.2s 2 linear";//Since it runs for 1.2s
            //Next you have to write setTimeout function: what to run after 1.2s animation:
            //setTimeout duration is times*repeat if repeat is > 1
            
            setTimeout(function(){
                document.getElementById("scale").style.visibility = "visible";

                myInt = setInterval(function(){ animatearrow(); }, 500);
                animateArrowATPosition(380,450,-90);//specify the left top and deg of arrow

                document.getElementById("scale").onclick = function() {
                document.getElementById("scale").onclick = "";
                    
                    myStopFunction();//stops arrow blinking

                    document.getElementById("bucket").style.animation = "bucketScale 2.5s 2 linear";

                    setTimeout(function() {
                        document.getElementById("rotate").style.visibility = "visible";

                        myInt = setInterval(function(){ animatearrow(); }, 500);
                        animateArrowATPosition(440,450,-90);//specify the left top and deg of arrow

                        document.getElementById("rotate").onclick = function() {
                        document.getElementById("rotate").onclick = "";
                            myStopFunction();
                            document.getElementById("bucket").style.transformOrigin = "0% 50%";
                            document.getElementById("bucket").style.animation = "bucketRotate 1.2s linear"
                            setTimeout(function() {
                                document.getElementById("nextButton").style.visibility = "visible";
                            },1250);
                        }
                    },5050)
                }
            },2450)
        }
    } else if(simsubscreennum == 2) {
        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("scale").style.visibility = "hidden";
        document.getElementById("rotate").style.visibility = "hidden";
    }
}