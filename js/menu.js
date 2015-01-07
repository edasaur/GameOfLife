var checkbox1 = document.getElementById('checked1');
var checkbox2 = document.getElementById('checked2');
var checkbox3 = document.getElementById('checked3');
//temp hacky method
checkbox1.setAttribute('checked', 'true');
checkbox2.setAttribute('checked', 'false');
checkbox3.setAttribute('checked', 'false');
$('#checkbox1').mousedown(function(m) {
	checkbox1.setAttribute("style","width:20px");
	checkbox1.setAttribute("style","height:20px");
	checkbox1.style.visibility="visible";
	checkbox1.setAttribute('checked', 'true');
	checkbox2.setAttribute('checked', 'false');
	checkbox2.style.visibility="hidden";
	checkbox3.setAttribute('checked', 'false');
	checkbox3.style.visibility="hidden";
	
});

$('#checkbox1').mouseup(function(m) {
	checkbox1.setAttribute("style","width:16px");
	checkbox1.setAttribute("style","height:16px");
	checkbox1.style.visibility="visibile";
});

$('#checkbox2').mousedown(function(m) {
	checkbox2.setAttribute("style","width:20px");
	checkbox2.setAttribute("style","height:20px");
	checkbox2.style.visibility="visible";
	checkbox2.setAttribute('checked', 'true');
	checkbox1.setAttribute('checked', 'false');
	checkbox1.style.visibility="hidden";
	checkbox3.setAttribute('checked', 'false');
	checkbox3.style.visibility="hidden";
	
});

$('#checkbox2').mouseup(function(m) {
	checkbox2.setAttribute("style","width:16px");
	checkbox2.setAttribute("style","height:16px");
	checkbox2.style.visibility="visible";
});

$('#checkbox3').mousedown(function(m) {
	checkbox3.setAttribute("style","width:20px");
	checkbox3.setAttribute("style","height:20px");
	checkbox3.style.visibility="visible";
	checkbox3.setAttribute('checked', 'true');
	checkbox1.setAttribute('checked', 'false');
	checkbox1.style.visibility="hidden";
	checkbox2.setAttribute('checked', 'false');
	checkbox2.style.visibility="hidden";
	
});

$('#checkbox3').mouseup(function(m) {
	checkbox3.setAttribute("style","width:16px");
	checkbox3.setAttribute("style","height:16px");
	checkbox3.style.visibility="visible";
});


