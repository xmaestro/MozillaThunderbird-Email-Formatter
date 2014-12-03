var {Cc, Ci} = require("chrome");
var Application = Cc["@mozilla.org/steel/application;1"]
    .getService(Ci.steelIApplication);

Components.utils.import("resource:///modules/MailUtils.js");

window.addEventListener("load", function(e) {
	 
}, false);

function addNewTask(objid){
	
	var parentVBox = document.getElementById(objid);
	var input = document.createElement('textbox');
        input.name = 'input_'+(parentVBox.children.length+1);
        input.id = 'input_'+(parentVBox.children.length+1);
        parentVBox.appendChild(input);
        
        
}

function nodeIterator(objid){

        var _mainNode = document.getElementById(objid).childNodes;

        var itemsToReturn = [];

        for(var i=0; i<_mainNode.length; i++){

                itemsToReturn.push(_mainNode[i].value);

        }

        return itemsToReturn;

}

function getFormData(){

        var emailsTo = [];
        var emailsCc = [];
        var tasksToday = [];
        var tasksInProgress = [];
        var tasksTomorrow = [];

        emailsTo = nodeIterator('emailformatter-emailstobox');
        emailsCc = nodeIterator('emailformatter-emailsccbox');
        tasksToday = nodeIterator('emailformatter-todaytasksvbox');
        tasksInProgress = nodeIterator('emailformatter-tasksinprogress');
        tasksTomorrow = nodeIterator('emailformatter-tomorrowtasksbox');


        return {

                emailsTo: emailsTo,
                emailsCc: emailsCc,
                tasksToday:tasksToday,
                tasksInProgress:tasksInProgress,
                tasksTomorrow:tasksTomorrow

        };

};

function openMailWindow(){

        var data = getFormData();

        var emailsToString="";

        for(var emailsTo in data.emailsTo){

                emailsToString+=data.emailsTo[emailsTo]+"<"+data.emailsTo[emailsTo]+">,";


        }

        var emailsCcString="";

        for(var emailsCc in data.emailsCc){

                emailsCcString+=data.emailsCc[emailsCc]+"<"+data.emailsCc[emailsCc]+">,";


        }

        var today = new Date();

        var sURL="mailto:"+encodeURI(emailsToString)+"?"+"subject="+encodeURI('DAILY STATUS REPORT ('+today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate()+')')+"&cc="+encodeURI(emailsCcString);

        var msgComposeService=
            Components.classes["@mozilla.org/messengercompose;1"]
                .getService(Components.interfaces.nsIMsgComposeService);


        var ioService =
            Components.classes["@mozilla.org/network/io-service;1"]
                .getService(Components.interfaces.nsIIOService);

        aURI = ioService.newURI(sURL, null, null);

        msgComposeService.OpenComposeWindowWithURI (null, aURI);


}
