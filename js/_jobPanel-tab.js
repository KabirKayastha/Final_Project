//tab switching procedure
var tabJobButtons=document.querySelectorAll(".jobPanel .button-JobPanel button");
var tabJobPanels=document.querySelectorAll(".jobPanel-content");


function showJobPanel(panelIndex,backgroundColor,borderBottomColor) {
	tabJobButtons.forEach(function(node){
		node.style.background="";
		node.style.borderBottomColor = '';
	});
	tabJobButtons[panelIndex].style.background=backgroundColor;
	tabJobButtons[panelIndex].style.borderBottomColor = borderBottomColor;

	tabJobPanels.forEach(function(node){
		node.style.display="none"; 
	});
	tabJobPanels[panelIndex].style.display="block";
}

showJobPanel(1,'#bbb','orange');

