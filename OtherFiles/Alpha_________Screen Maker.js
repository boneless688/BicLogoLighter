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

var screensLayer = app.activeDocument.layers.getByName("Screens");

if (exist(screensLayer.groupItems, "Screen1")) {
	app.doScript("Screen1", "Joe's Illustrator Actions");
}


if (exist(screensLayer.groupItems, "Screen2")) {
	app.doScript("Screen2", "Joe's Illustrator Actions");
}


if (exist(screensLayer.groupItems, "Screen3")) {
	app.doScript("Screen3", "Joe's Illustrator Actions");
}


if (exist(screensLayer.groupItems, "Screen4")) {
	app.doScript("Screen4", "Joe's Illustrator Actions");
}


if (exist(screensLayer.groupItems, "Screen5")) {
	app.doScript("Screen5", "Joe's Illustrator Actions");
}


if (exist(screensLayer.groupItems, "Screen6")) {
	app.doScript("Screen6", "Joe's Illustrator Actions");
}


if (exist(screensLayer.groupItems, "Screen7")) {
	app.doScript("Screen7", "Joe's Illustrator Actions");
}

if (exist(screensLayer.groupItems, "Screen8")) {
	app.doScript("Screen8", "Joe's Illustrator Actions");
}

#target illustrator

function main() {
    var doc = app.activeDocument;

    var emptyLayers = [];
    getEmptyLayers(doc, emptyLayers);

    for (var a = 0; a < emptyLayers.length; a++) {
     emptyLayers[a].visible = true;
     emptyLayers[a].remove();
    }
}

function getEmptyLayers(container, arr) {
    var layers = container.layers;

    for (var k = 0; k < layers.length; k++) {
       
            var ilayer = layers[k];
            ilayer.canDelete = true; 
            if (ilayer.layers.length > 0) {
                getEmptyLayers(ilayer, arr)
            }
            if ((ilayer.pageItems.length == 0 && ilayer.canDelete)) {
                arr.push(ilayer);
            } else {
                ilayer.canDelete = false;
                container.canDelete = false;
            }
        
    }
}
if (app.documents.length > 0)
    main();


alert("Done");