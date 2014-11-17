window.addEventListener("load", function(e) { 
	startup(); 
}, false);

function startup() {
	var myPanel = document.getElementById("menuItemEmailFormatter");
	myPanel.label = "Email Formatter";
	
	myPanel.onclick=function(){ 
		window.open("chrome://emailformatter/content/emailFormatterMainWindow.xul", "bmarks", "chrome,width=600,height=300");
		 };
	
}
