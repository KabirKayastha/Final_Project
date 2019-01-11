//tab switching procedure
var tabButtons=document.querySelectorAll(".searchBtns button");
var tabPanels=document.querySelectorAll(".searchPanel");


function showSearchPanel(panelIndex,opacityAmount) {
	tabButtons.forEach(function(node){
		node.style.background="";
	});
	tabButtons[panelIndex].style.background=opacityAmount;
	
	tabPanels.forEach(function(node){
		node.style.display="none"; 
	});
	tabPanels[panelIndex].style.display="block";
}

showSearchPanel(0,'#aaa');

