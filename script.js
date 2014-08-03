$(document).ready(function() {
 
  // styling stuff 
  // 1366 - the window size of browser
  var w = $(window).width();
  //alert(w);
  // 1366 - the screen size of monitor
  //w = screen.width;
  //alert(w);
  var h = $(window).height();
  $("#buttonSP1").css({marginRight: "0px", marginLeft: "0px" });
  $("#buttonR1").css({marginRight: "0px", marginLeft: "60px"});
  $("#buttonSP2").css({marginRight: "0px", marginLeft: "0px" });
  $("#buttonR2").css({marginRight: "0px", marginLeft: "60px"});
  var canv = document.getElementById("myCanvas1").width;
  $("#myCanvas1").css({marginLeft: -(canv/2)+"px"});
  var canv2 = document.getElementById("myCanvas2").width;
  $("#myCanvas2").css({marginLeft: -(canv2/2)+"px"});
  
    // pop-up window stuff
    var number = $( "#number" ),
    allFields = $( [] ).add( number ),
    tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    function checkLength( o, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of number must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }
 
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }

    $( "#dialog-form" ).dialog({
      autoOpen: true,
      draggable: false,
      height: 300,
      width: 400,
      modal: false,
      resizable: false,
 	    show: "fade",
 	  //close: "disable",
      buttons: {
        "Start the stopwatch": function() {
          var bValid = true;
          allFields.removeClass( "ui-state-error" );
          bValid = bValid && checkLength( number, 1, 7 );
          bValid = bValid && checkRegexp( number, /([0-9])+$/i, "Only numbers please!" );
        
          
          if ( bValid ) {
            $( this ).dialog( "close" );
            //count(number.val(),1000);
            count(number.val());
          }
        }
      }
    });
    //$("body").css("background-image", "url(http://www.wallcoo.net/flower/flower_pattern_fresh_simple/wallpapers/1680x1050/Flower_Pattern_Background_WA04_046L.jpg)");
    $("body").css("background-image", "url(http://us.cdn3.123rf.com/168nwm/pzaxe/pzaxe1212/pzaxe121200099/16908665-vector-background--gray-seamless-geometric-pattern.jpg)");
    $('#dialog-form').css("background-image","url(http://us.cdn3.123rf.com/168nwm/pzaxe/pzaxe1212/pzaxe121200099/16908665-vector-background--gray-seamless-geometric-pattern.jpg)");
   /* 
  $("#clockSpeed1").click(function() {
  	//speed = speed * 10;
  	speed = 0;
  	clearTimeout(myVar);
  	clearTimeout(myVar2);
  	count(countTarget, 1);
   });

  $("#clockSpeed2").click(function() {
  	//speed = speed / 10;
  	clearTimeout(myVar);
  	clearTimeout(myVar2);
  	count(countTarget, 1000);
   });*/

  //function count(value,s) {
  	function count(value) {
  
  var countTarget = value;
  var days = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  // change the speed of the stopwatch
  // var speed = s;
  var speed = 1; 
  // input windows
  

    var ctx = document.getElementById("myCanvas1").getContext("2d");
    //ctx.font = '40pt digi';
		//ctx.shadowBlur=10;
		ctx.fillStyle="#000099";
    ctx.strokeStyle = "black";
		//ctx.rotate(0.5);
		ctx.lineWidth = 5;

		//ctx.rotate(-0.5);
		ctx.beginPath();
		ctx.rect(0, 0, 1050, 10);
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.rect(0,90,1050,10);
		ctx.fill();
		ctx.stroke();

		ctx.lineWidth = 2;

		ctx.beginPath();
		ctx.rect(0,0,3,100);
		ctx.fill();
		ctx.stroke();

	  ctx.beginPath();
		ctx.rect(997,0,3,100);
		ctx.fill();
		ctx.stroke();

		//ctx.fillStyle="white";
		//ctx.shadowColor="blue";
	  ctx.font = '32pt Calibri';
	  ctx.fillText('DAYS,', 115, 60);
	  ctx.fillText('HOURS,', 305, 60);
	  ctx.fillText('MINUTES,', 535, 60);
	  ctx.fillText('SECONDS.', 815, 60);
    ctx.shadowBlur=0;
	  ctx.font = '40pt digi';
    ctx.fillStyle="black";
	  days = Math.floor(countTarget / 86400);
	  ctx.fillText(days, 5, 60);
	  hours = Math.floor((countTarget % 86400)/3600);
		ctx.fillText(hours, 235, 60);
		minutes = Math.floor(((countTarget % 86400) % 3600)/60);
    ctx.fillText(minutes, 465, 60);	
    seconds = ((countTarget % 86400) % 3600) % 60;
    ctx.fillText(seconds, 745, 60);
		//ctx.shadowBlur=0;

    var pause = 0;
    $("#buttonSP1").click(function(){
    if (pause == 0)
    {	
    pause = 1;
    document.getElementById("buttonSP1").innerHTML = "Start";
    //document.getElementById("buttonSP1").style.borderColor = "orange";
    }
    else 
    {	
    pause = 0;
    document.getElementById("buttonSP1").innerHTML = "Pause";
    //document.getElementById("buttonSP1").style.borderColor = "orange";
    }
    });

   $("#buttonR1").click(function(){
   	document.getElementById("buttonSP1").innerHTML = "Start";
   	$("#buttonSP1").prop("disabled",false);	
    countTarget = value;
    pause = 1;
});
    var activateM = 0;
    var activateH = 0;
    var activateD = 0;
    var spM = 0;
    var spH = 0;
    var spD = 0;

		/*myVar =*/	setInterval(function(){ 
     	ctx.fillStyle="white";
      ctx.fillRect(745,20,65,45);
     	//ctx.fillRect(745,21,65,50);
     	//var img="http://us.cdn2.123rf.com/168nwm/pzaxe/pzaxe1302/pzaxe130200084/17924384-vector-seamless-pattern--the-simple-gray-abstract-background.jpg";
     	//var img=document.getElementById("scream");
		 //ctx.drawImage("url(http://us.cdn2.123rf.com/168nwm/pzaxe/pzaxe1302/pzaxe130200084/17924384-vector-seamless-pattern--the-simple-gray-abstract-background.jpg)",755,23,57,42);
      seconds = ((countTarget % 86400) % 3600) % 60;
      ctx.fillStyle="black";
   		ctx.fillText(seconds, 745, 60);
      
      if (countTarget > 0 && pause == 0)
      {	
      countTarget--;
  	  }
  	  else if (countTarget == 0)
  	  $("#buttonSP1").prop("disabled",true);	
      
    }, speed);

	
 
		setInterval(function(){ 
     ctx.fillStyle="white";
     ctx.fillRect(465,20,65,45);
 		 //ctx.fillRect(465,21,65,50);
 	   minutes = Math.floor(((countTarget % 86400) % 3600)/60);
 	 	 ctx.fillStyle="black";
     ctx.fillText(minutes, 465, 60);
     if ( activateM == 0 && seconds == 0)
		 {
		 activateM = 1;
		 spM = 0;
		 }
		 else 
		 spM = speed*60;

	}, spM);
 

	setInterval(function(){ 
		ctx.fillStyle="white";
    ctx.fillRect(235,20,65,45);
	  hours = Math.floor((countTarget % 86400)/3600);
    ctx.fillStyle="black";
		ctx.fillText(hours, 235, 60);
    if ( activateH == 0 && minutes == 0)
		{
		activateH = 1;
		spH = 0;
		}
		else 
		spH = speed*3600;

	}, spH);


setInterval(function(){ 
    ctx.fillStyle="white";
    ctx.fillRect(5,20,100,45);
    days = Math.floor(countTarget / 86400);
    ctx.fillStyle="black";
	  ctx.fillText(days, 5, 60);

	   if ( activateD == 0 && hours == 0)
		 {
		 activateD = 1;
		 spD = 0;
		 }
		 else 
		 spD = speed*86400;

	}, spD);
 

    var current = 0;
    var target_days = 0;
    var target_hours = 0;
    var target_minutes = 0;
    var target_seconds = 0;

    var ctx2 = document.getElementById("myCanvas2").getContext("2d");
		//ctx2.shadowBlur=10;
		//ctx2.fillStyle="blue";
		//ctx22.shadowColor="blue";
		ctx2.fillStyle="#000099";
		//ctx2.rotate(0.5);
		ctx2.lineWidth = 5;
		ctx2.strokeStyle = "black";

		//ctx2.rotate(-0.5);
		ctx2.beginPath();
		ctx2.rect(0, 0, 1050, 10);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.rect(0,90,1050,10);
		ctx2.fill();
		ctx2.stroke();

		ctx2.lineWidth = 2;

		ctx2.beginPath();
		ctx2.rect(0,0,3,100);
		ctx2.fill();
		ctx2.stroke();
		
	  ctx2.beginPath();
		ctx2.rect(997,0,3,100);
		ctx2.fill();
		ctx2.stroke();

    ctx2.font = '32pt Calibri';
    ctx2.fillText('DAYS,', 115, 60);
    ctx2.fillText('HOURS,', 305, 60);
    ctx2.fillText('MINUTES,', 535, 60);
    ctx2.fillText('SECONDS.', 815, 60);
    ctx2.shadowBlur=0;
    ctx2.font = '40pt digi';
    target_days = Math.floor(current / 86400);
    ctx2.fillText(target_days, 5, 60);
    target_hours = Math.floor((current % 86400)/3600);
	  ctx2.fillText(target_hours, 235, 60);
	  target_minutes = Math.floor(((current % 86400) % 3600)/60);
    ctx2.fillText(target_minutes, 465, 60);	
    target_seconds = ((current % 86400) % 3600) % 60;
    ctx2.fillText(target_seconds, 745, 60);
	  //ctx2.shadowBlur=0;


var pause2 = 0;
$("#buttonSP2").click(function(){
  if (pause2 == 0)
  {	
	pause2 = 1;
	document.getElementById("buttonSP2").innerHTML = "Start";
	//document.getElementById("buttonSP2").style.borderColor = "orange";
	}
	else 
	{	
	pause2 = 0;
	document.getElementById("buttonSP2").innerHTML = "Pause";
	//document.getElementById("buttonSP2").style.borderColor = "orange";
	}
});

   $("#buttonR2").click(function(){
   	document.getElementById("buttonSP2").innerHTML = "Start";
    $("#buttonSP2").prop("disabled",false);
    current = 0;
    pause2 = 1;
});

    var activateM2 = 0;
    var activateH2 = 0;
    var activateD2 = 0;
    var spM2 = 0;
    var spH2 = 0;
    var spD2 = 0;

		/*myVar2 =*/	setInterval(function(){ 
      ctx2.fillStyle="white";
   		ctx2.fillRect(745,20,65,45);
      target_seconds = ((current % 86400) % 3600) % 60;
    	ctx2.fillStyle="black";
  		ctx2.fillText(target_seconds, 745, 60);
    
      if ( current < value && pause2 == 0)
      {	
      current++;
    	}
      else if (current == value)
      $("#buttonSP2").prop("disabled",true);	

    }, speed);

	
		setInterval(function(){ 
     ctx2.fillStyle="white";
 		 ctx2.fillRect(465,20,65,45);
 		 target_minutes = Math.floor(((current % 86400) % 3600)/60);
 		 ctx2.fillStyle="black";
     ctx2.fillText(target_minutes, 465, 60);
     if ( activateM2 == 0 && target_seconds == 0)
		 {
		 activateM2 = 1;
		 spM2 = 0;
		 }
		 else 
		 spM2 = speed*60;

	}, spM2);
 

	setInterval(function(){ 
		ctx2.fillStyle="white";
    ctx2.fillRect(235,20,65,45);
	  target_hours = Math.floor((current % 86400)/3600);
    ctx2.fillStyle="black";
		ctx2.fillText(target_hours, 235, 60);
    if ( activateH2 == 0 && target_minutes == 0)
		 {
		 activateH2 = 1;
		 spH2 = 0;
		 }
		 else 
		 spH2 = speed*3600;

	}, spH2);


setInterval(function(){ 
    ctx2.fillStyle="white";
    ctx2.fillRect(5,20,100,45);
    target_days = Math.floor(current / 86400);
    ctx2.fillStyle="black";
	  ctx2.fillText(target_days, 5, 60);
	  if ( activateD2 == 0 && target_hours == 0)
		{
		activateD2 = 1;
		spD2 = 0;
		}
		else 
		spD2 = speed*86400;

	}, spD2);
 }
});

