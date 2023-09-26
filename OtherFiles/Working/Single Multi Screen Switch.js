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




if (exist(screensLayer.groupItems, "Screen2")) {
	app.doScript("Master Guide A Multi", "Joe's Illustrator Actions");
} else {
     app.doScript("Master Guide A Single", "Joe's Illustrator Actions");

}


 if (exist(screensLayer.groupItems, "Screen5") && !(screensLayer.groupItems, "Screen6")) {
	app.doScript("Master Guide C Single", "Joe's Illustrator Actions");
}

if (exist(screensLayer.groupItems, "Screen5") && (screensLayer.groupItems, "Screen6")) {
	app.doScript("Master Guide C Multi", "Joe's Illustrator Actions");
} 


