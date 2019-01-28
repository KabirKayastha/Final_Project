//tab switching procedure
/*var tabJobButtons=document.querySelectorAll(".jobPanel .button-JobPanel button");
var tabJobPanels=document.querySelectorAll(".jobPanel-content");


function showJobPanel(panelIndex,backgroundColor) {
	tabJobButtons.forEach(function(node){
		node.style.background="";
		node.style.color="";
	});
	tabJobButtons[panelIndex].style.background=backgroundColor;
	tabJobButtons[panelIndex].style.color="#eee";
	
	tabJobPanels.forEach(function(node){
		node.style.display="NONE"; 
	});
	tabJobPanels[panelIndex].style.display="block";
}

showJobPanel(0,'#222');*/

//tab switching procedure
var tabJobButtons=document.querySelectorAll(".jobPanel .button-JobPanel button");
var tabJobPanels=document.querySelectorAll(".jobPanel-content");


function showJobPanel(panelIndex,backgroundColor) {
	tabJobButtons.forEach(function(node){
		node.style.background="";
	});
	tabJobButtons[panelIndex].style.background=backgroundColor;
	
	tabJobPanels.forEach(function(node){
		node.style.display="none"; 
	});
	tabJobPanels[panelIndex].style.display="block";
}

showJobPanel(0,'#bbb');

