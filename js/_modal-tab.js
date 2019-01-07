var tabButtons=document.querySelectorAll(".buttonContainer button");
var tabPanels=document.querySelectorAll(".tabPanel");


function showPanel(panelIndex,opacityAmount) {
	tabButtons.forEach(function(node){
		node.style.opacity="";
		node.style.color="";
	});
	tabButtons[panelIndex].style.opacity=opacityAmount;
	tabButtons[panelIndex].style.color="blue";
	
	tabPanels.forEach(function(node){
		node.style.display="NONE"; 
	});
	tabPanels[panelIndex].style.display="block";
	//tabPanels[panelIndex].style.backgroundColor=colorCode;
}

function showPassword() {
	var x=document.getElementById("password");
	var eyeSlash = document.getElementsByClassName("eye-slash")[0];
	var eyeShown = document.getElementsByClassName("eye-nonSlash")[0];
	if (x.type === "password") {
		x.type = "text";
		eyeSlash.style.display = 'inline-block';
		eyeShown.style.display = 'none';
	}

	else{
		x.type = "password";
		eyeSlash.style.display = 'none';	
		eyeShown.style.display = 'inline-block';
	}
	
}
showPanel(0,1);

$(document).ready(function() {
	
	if( $('#loginForm').css({'display':'block'}) ){
		$('#signIn').toggleClass('signIn');		
	};
		else /*if($('#loginForm').css({'display':'none'}))*/ {
			$('#signIn').removeClass('signIn');
		}

	/*if ($('#registerForm').css({'display':'block'})) {
		$('#signUp').addClass('signUp');
		$('#signIn').removeClass('signIn');
	};*/
});


