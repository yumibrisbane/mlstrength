function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function on() {
  document.getElementById("overlay").style.display = "block"; 
}
function off() {
  document.getElementById("overlay").style.display = "none"; 
}
