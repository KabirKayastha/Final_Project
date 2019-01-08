// Get the modal
var modal = document.getElementById('registerModal');

// Get the button that opens the modal
var btn1 = document.getElementById("modalBtn1");
var btn2 = document.getElementById("modalBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var blur = document.getElementById("blured"); 

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
  blur.style.filter = "blur(1px)";
}

btn2.onclick = function() {
  modal.style.display = "block";
  blur.style.filter = "blur(1px)";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  blur.style.filter = "unset";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    blur.style.filter = "unset";
  }
}