app.activeDocument.artboards[0].rulerOrigin = [0, 0];

var r = app.activeDocument.artboards[0].artboardRect;

var groupNumber =
	app.activeDocument.layers.getByName("Layer 2").groupItems.length;

if (groupNumber >= 8) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[7];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[6];
	bravo.position = [373.1956, -203.7857]; //slot 2

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[5];
	alpha.position = [679.6148, -203.7857]; //slot 3

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[4];
	alpha.position = [986.031, -203.7857]; //slot 4

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[3];
	alpha.position = [66.7778, -670.209]; //slot 5

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[2];
	alpha.position = [373.1956, -670.209]; //slot 6

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	alpha.position = [679.6148, -670.209]; //slot 7

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [986.031, -670.209]; //slot 8
}

if (groupNumber === 7) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[6];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[5];
	bravo.position = [373.1956, -203.7857]; //slot 2

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[4];
	alpha.position = [679.6148, -203.7857]; //slot 3

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[3];
	alpha.position = [986.031, -203.7857]; //slot 4

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[2];
	alpha.position = [66.7778, -670.209]; //slot 5

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	alpha.position = [373.1956, -670.209]; //slot 6

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [679.6148, -670.209]; //slot 7
}

if (groupNumber === 6) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[5];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[4];
	bravo.position = [373.1956, -203.7857]; //slot 2

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[3];
	alpha.position = [679.6148, -203.7857]; //slot 3

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[2];
	alpha.position = [986.031, -203.7857]; //slot 4

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	alpha.position = [66.7778, -670.209]; //slot 5

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [373.1956, -670.209]; //slot 6
}

if (groupNumber === 5) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[4];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[3];
	bravo.position = [373.1956, -203.7857]; //slot 2

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[2];
	alpha.position = [679.6148, -203.7857]; //slot 3

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	alpha.position = [986.031, -203.7857]; //slot 4

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [66.7778, -670.209]; //slot 5
}

if (groupNumber === 4) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[3];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[2];
	bravo.position = [373.1956, -203.7857]; //slot 2

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	alpha.position = [679.6148, -203.7857]; //slot 3

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [986.031, -203.7857]; //slot 4
}

if (groupNumber === 3) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[2];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	bravo.position = [373.1956, -203.7857]; //slot 2

	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [679.6148, -203.7857]; //slot 3
}

if (groupNumber === 2) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[1];
	alpha.position = [66.7778, -203.7857]; //slot 1

	var bravo = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	bravo.position = [373.1956, -203.7857]; //slot 2
}

if (groupNumber === 1) {
	var alpha = app.activeDocument.layers.getByName("Layer 2").groupItems[0];
	alpha.position = [66.7778, -203.7857]; //slot 1
}