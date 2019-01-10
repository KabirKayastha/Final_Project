//tab switching procedure
var tabButtons=document.querySelectorAll(".buttonContainer button");
var tabPanels=document.querySelectorAll(".tabPanel");


function showPanel(panelIndex,opacityAmount) {
	tabButtons.forEach(function(node){
		node.style.opacity="";
		node.style.color="";
	});
	tabButtons[panelIndex].style.opacity=opacityAmount;
	tabButtons[panelIndex].style.color="#000";
	
	tabPanels.forEach(function(node){
		node.style.display="NONE"; 
	});
	tabPanels[panelIndex].style.display="block";
}

showPanel(0,1);

var btn1 = document.getElementById("modalBtnReg");
var btn2 = document.getElementById("modalBtnLog");





