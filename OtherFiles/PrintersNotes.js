var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";

var printersNotes_edit = big.add("statictext", undefined, "Printers Notes");
var printersNotes_edit = big.add("edittext", undefined, "");
printersNotes_edit.characters = 20;
printersNotes_edit.active = true;

var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
var okButton = buttonGroup.add("button", undefined, "OK");
var cancelButton = buttonGroup.add("button", undefined, "Cancel");

master.show();

var printersNotes = app.activeDocument.textFrames.getByName("Printers Text Box");
printersNotes.contents = printersNotes_edit.text;

app.activeDocument.layers.getByName("Printers Note").visible = true
