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
	//tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0,1);


//Password visibility switching procedure
	//ids from login form
	var pw=document.getElementById("password");
	var eyeSlash = document.getElementById("eye-slash");
	var eyeShown = document.getElementById("eye-nonSlash");

	//ids from register form
	var pwReg=document.getElementById("passwordReg");
	var eyeSlashReg = document.getElementById("eye-slashReg");
	var eyeShownReg = document.getElementById("eye-nonSlashReg");

//password visibility switch for login form
function showPassword() {
	if (pw.type === "password") {
		pw.type = "text";
		eyeSlash.style.display = 'inline-block';
		eyeShown.style.display = 'none';
	}

	else{
		pw.type = "password";
		eyeSlash.style.display = 'none';	
		eyeShown.style.display = 'inline-block';
		eyeSlashReg.style.display = 'none';	
		eyeShownReg.style.display = 'inline-block';
	}		
}

//password visibility switch for register form
function showPasswordReg() {
	if (pwReg.type === "password") {
		pwReg.type = "text";
		eyeSlashReg.style.display = 'inline-block';
		eyeShownReg.style.display = 'none';
	}

	else{
		pwReg.type = "password";
		eyeSlashReg.style.display = 'none';	
		eyeShownReg.style.display = 'inline-block';
	}		
}


