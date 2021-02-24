/*Omgeving*/
function move() {
	var elem = document.getElementById("myBar"); 
	var elem2 = document.getElementById("myBar2");   
  	var elem3 = document.getElementById("myBar3");   
  	var width = 20;
  	var id = setInterval(frame, 50);
  	function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
      
      elem2.style.width = width + '%'; 
      elem2.innerHTML = width * 1  + '%';

      elem3.style.width = width + '%'; 
      elem3.innerHTML = width * 1  + '%';
    }
  }
}