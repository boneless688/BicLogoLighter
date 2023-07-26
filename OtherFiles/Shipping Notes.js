var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";


var ShippingNotes_edit = big.add("statictext", undefined, "Shipping Notes");
var ShippingNotes_edit = big.add("edittext", undefined, "");
ShippingNotes_edit.characters = 20;
ShippingNotes_edit.active = true;

var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")

master.show()


var notes = app.activeDocument.textFrames.getByName("Ship Date");
notes.contents = "          " + ShippingNotes_edit.text;