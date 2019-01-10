// Get the modal
var modal = document.getElementById('registerModal');

// Get the button that opens the modal
var btn1 = document.getElementById("modalBtnReg");
var btn2 = document.getElementById("modalBtnLog");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var sidebar = document.getElementById("sidebar"); 

var body = document.getElementById("body");

var navbar = document.getElementsByClassName("navBar")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
  sidebar.style.filter = "blur(1px)";
  body.style.filter = "blur(1px)";
  navbar.style.filter = "blur(1px)";
}

btn2.onclick = function() {
  modal.style.display = "block";
  sidebar.style.filter = "blur(1px)";
  body.style.filter = "blur(1px)";
  navbar.style.filter = "blur(1px)";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  sidebar.style.filter = "unset";
  body.style.filter = "unset";
  navbar.style.filter = "unset";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    sidebar.style.filter = "unset";
    body.style.filter = "unset";
    navbar.style.filter = "unset";
  }
}



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
