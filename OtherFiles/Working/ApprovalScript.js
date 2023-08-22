var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";

var approvalDate_edit = big.add("statictext", undefined, "Approval date");
var approvalDate_edit = big.add("edittext", undefined, "");
approvalDate_edit.characters = 20;
approvalDate_edit.active = true;

var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
var okButton = buttonGroup.add("button", undefined, "OK");
var cancelButton = buttonGroup.add("button", undefined, "Cancel");

master.show();




var approvalDate = app.activeDocument.textFrames.getByName("Approval Date");
approvalDate.contents = approvalDate_edit.text;

try {
     app.activeDocument.textFrames.getByName("Approval Date Back");
     var approvalDateBack = app.activeDocument.textFrames.getByName("Approval Date Back");
     approvalDateBack.contents = approvalDate_edit.text;
     }
 
 catch (e) {

}



var cover = app.activeDocument.groupItems.getByName("Approval Cover");
cover.selected = true;
cover.remove();
