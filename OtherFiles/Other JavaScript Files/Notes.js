var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";


var notes_edit = big.add("statictext", undefined, "Notes");
var notes_edit = big.add("edittext", undefined, "");
notes_edit.characters = 20;
notes_edit.active = true;

var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")

master.show()


var notes = app.activeDocument.textFrames.getByName("Notes text");
notes.contents = "          " + notes_edit.text;