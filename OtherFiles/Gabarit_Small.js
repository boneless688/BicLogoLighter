

app.activeDocument.artboards[0].rulerOrigin = [0,0];
var r = app.activeDocument.artboards[0].artboardRect;
var groupNumber = app.activeDocument.layers.getByName("Layer 2").groupItems.length;




if (groupNumber === 4) {
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[3];
     alpha.position = [68.1971, -183.5706];  //slot 1
      
     var bravo = app.activeDocument.layers.getByName('Layer 2').groupItems[2];
     bravo.position = [374.6126, -183.5706];  //slot 2
     
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[1];
     alpha.position = [681.0318, -183.5706];  //slot 3
     
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[0];
     alpha.position = [987.448 , -183.5706];  //slot 4
}

if (groupNumber === 3) {
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[2];
     alpha.position = [68.1971, -183.5706];  //slot 1
      
     var bravo = app.activeDocument.layers.getByName('Layer 2').groupItems[1];
     bravo.position = [374.6126, -183.5706];  //slot 2
     
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[0];
     alpha.position = [681.0318, -183.5706];  //slot 3
     
}

if (groupNumber === 2) {
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[1];
     alpha.position = [68.1971, -183.5706];  //slot 1
      
     var bravo = app.activeDocument.layers.getByName('Layer 2').groupItems[0];
     bravo.position = [374.6126, -183.5706];  //slot 2
}
     

if (groupNumber === 1) {
     var alpha = app.activeDocument.layers.getByName('Layer 2').groupItems[0];
     alpha.position = [68.1971, -183.5706];  //slot 1

}