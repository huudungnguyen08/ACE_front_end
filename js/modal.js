
var modal = document.getElementById("myModal");
var cancel = document.getElementById("cancel");
var xoa = document.getElementById("delete");
var btn = document.getElementById("btn");
	
	
btn.onclick = function() {
  modal.style.display = "block";
};
xoa.onclick = function(){
	modal.style.display="none";
};
cancel.onclick = function(){
	modal.style.display="none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};