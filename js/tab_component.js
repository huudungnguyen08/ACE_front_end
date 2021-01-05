// JavaScript Document
function openTab(event, tab) {
	var i; 
	let tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(tab).style.display = "block";
		event.currentTarget.className += " active";
		}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();