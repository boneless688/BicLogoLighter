var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";

var originalArt_edit = big.add("statictext", undefined, "Original Art Name");
var originalArt_edit = big.add("edittext", undefined, "");
originalArt_edit.characters = 20;
originalArt_edit.active = true;

var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
var okButton = buttonGroup.add("button", undefined, "OK");
var cancelButton = buttonGroup.add("button", undefined, "Cancel");

master.show();

var originalArt = app.activeDocument.textFrames.getByName("Original Art");
originalArt.contents = originalArt_edit.text;



/* var exist =
	app.activeDocument.textFrames.getByName("Original Art").textRange.contents;

if (exist.length > 1) {
	originalArt.contents = exist + "   " + originalArt_edit.text;
} else {
	originalArt.contents = originalArt_edit.text;
} */
