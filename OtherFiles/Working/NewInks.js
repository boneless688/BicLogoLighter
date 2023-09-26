function exist(parent, child) {
	var valid;
	try {
		var test = parent[child];
		valid = true;
	} catch (e) {
		valid = false;
	}
	return valid;
}

var screensLayer = app.activeDocument.layers.getByName("S  C  R  E  E  N  S");

var fileName = app.activeDocument.textFrames.getByName("FileName").contents;

if (exist(screensLayer.groupItems, "Screen1")) {
	app.activeDocument.textFrames.getByName("A1 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen2")) {
	app.activeDocument.textFrames.getByName("A2 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen3")) {
	app.activeDocument.textFrames.getByName("A3 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen4")) {
	app.activeDocument.textFrames.getByName("A4 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen5")) {
	app.activeDocument.textFrames.getByName("C1 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen6")) {
	app.activeDocument.textFrames.getByName("C2 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen7")) {
	app.activeDocument.textFrames.getByName("C3 Screen FileName").contents =
		fileName;
}

if (exist(screensLayer.groupItems, "Screen8")) {
	app.activeDocument.textFrames.getByName("C4 Screen FileName").contents =
		fileName;
}

var swatchList = [
	"Swatch_A1",
	"Swatch_A2",
	"Swatch_A3",
	"Swatch_A4",
	"Swatch_C1",
	"Swatch_C2",
	"Swatch_C3",
	"Swatch_C4",
];

for (i = 0; i < swatchList.length; i++) {
	var alpha = swatchList[i];
	var docSelected = app.activeDocument.groupItems.getByName(alpha);
	var targetLayer = app.activeDocument.layers["INKS"];
	docSelected.move(targetLayer, ElementPlacement.PLACEATBEGINNING);
}