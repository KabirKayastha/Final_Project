//tab switching procedure
var tabSearchButtons=document.querySelectorAll(".searchTabBtns button");
var tabSearchPanels=document.querySelectorAll(".searchPanel");


function showSearchPanel(panelIndex,opacityAmount) {
	tabSearchButtons.forEach(function(node){
		node.style.background="";
	});
	tabSearchButtons[panelIndex].style.background=opacityAmount;
	
	tabSearchPanels.forEach(function(node){
		node.style.display="none"; 
	});
	tabSearchPanels[panelIndex].style.display="block";
}

showSearchPanel(0,'#ccc');

