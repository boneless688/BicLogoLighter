function layerRemover() {
     var emptyLayers = []
     getEmptyLayers(doc, emptyLayers)
     for (var i = 0; i < emptyLayers.length; i++) {
          emptyLayers[i].visible = true
          emptyLayers[i].remove()
     }
}

layerRemover();