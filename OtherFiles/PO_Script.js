var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";


var orderNumber_edit = big.add("statictext", undefined, "PO Number");
var orderNumber_edit = big.add("edittext", undefined, "");
orderNumber_edit.characters = 20;
orderNumber_edit.active = true;

var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")

master.show()


var orderNumber = app.activeDocument.textFrames.getByName("PO");
orderNumber.contents = orderNumber_edit.text;