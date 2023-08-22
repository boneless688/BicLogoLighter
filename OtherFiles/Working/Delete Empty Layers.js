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