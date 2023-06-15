var docSelected = app.activeDocument.selection;  
var targetLayer = app.activeDocument.layers["Art - C"];

for (s = 0; s < docSelected.length; s++) {  
     myPath = docSelected[s];
     myPath.move(targetLayer, ElementPlacement.PLACEATBEGINNING);
}