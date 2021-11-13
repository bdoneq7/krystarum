alert("Welcome to Feria RPG!");

// add event listener for Box 1 - reference the document box model - getElementById is the method
// other events include mouseover and mouseout
document.getElementById("box1").addEventListener("click", changeColor);
function changeColor() {
    document.getElementById("box1").innerHTML = "CLICK!";
    document.getElementById("box1").style.backgroundColor = "orange";
}