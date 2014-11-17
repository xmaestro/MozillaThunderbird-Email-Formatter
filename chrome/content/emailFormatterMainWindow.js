window.addEventListener("load", function(e) { 
	 
}, false);

function addNewTask(objid){
	
	var parentVBox = document.getElementById(objid);
	var input = document.createElement('textbox');
        input.name = 'input_'+(parentVBox.children.length+1);
        input.id = 'input_'+(parentVBox.children.length+1);
        parentVBox.appendChild(input);
        
        
}
