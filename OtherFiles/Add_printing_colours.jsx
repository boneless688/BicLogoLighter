//*********************************************************************************
// Creado por ALBERT ISUAR SOLE para el Departamento Gráfico de Bic Graphic Europe
// Fecha de última actualización: 14 de febrero de 2019
//*********************************************************************************

#target "illustrator"
#include "illustratordocument_class.jsxinc"

"use strict";

/**
 * Clase para crear objetos de tipo CMYKColor con un color determinado
 */
function BasicColor() {

}

/**
 * Clase estática para crear un color negro
 * @returns {CMYKColor} El color creado
 */
BasicColor.black = function () {
    var blackColor = new CMYKColor();
    blackColor.cyan = 0.0;
    blackColor.magenta = 0.0;
    blackColor.yellow = 0.0;
    blackColor.black = 100.0;

    return (blackColor);
}



try {
    // Referencia al documento Illustrator actual
    var currentDoc = new IllustratorDocument();
    currentDoc.getActiveDocument();
    currentDoc.getSelection();
    
    for (var p = 0; p < currentDoc.docRef.selection.length; p++) {
        if (currentDoc.docRef.selection[p].typename != "SymbolItem")
            throw new Error("All selected items must be of type 'Symbol'");
    }
    
    // Referencia a un nuevo documento Illustrator para copiar el diseño
    var newDoc = new IllustratorDocument();
    newDoc.addDocumentFromSelection(currentDoc);
    
    // Duplicamos la selección en el documento nuevo que acabamos de crear
    newDoc.selRef = currentDoc.selRef.duplicate(newDoc.docRef, ElementPlacement.INSIDE);
    
    // Centramos el diseño en la página
    newDoc.alignArtwork();
    
    // Obtenemos los colores que contiene el diseño que hay en la página
    newDoc.getPrintingColours();
    
    // Cerramos el documento nuevo que hemos creado
    newDoc.closeDocument();
    
    // Comprobamos si el diseño tiene alguna tinta, de lo contrario lanzamos una excepción
    if (newDoc.inks.length == 0){
        throw new Error("The artwork does not contain any spot colour");
    }
    
    // Creamos los grupos de colores de impresión
    var i;
    var position = 0.0;
    var printingColorGroup;

    for (i in newDoc.inks) {
        printingColorGroup = CreatePrintingColour(newDoc.inks[i], currentDoc);
        // Desplazamiento del color de impresión
        printingColorGroup.position = [currentDoc.selRef.position[0] + currentDoc.selRef.width + 10.0, currentDoc.selRef.position[1] - position];
        position += 35.0;
    }

} catch (err) {
    alert(err.message, "ERROR", true);    
}

/**
 * Crea un objeto (un grupo) que contiene un color de impresión
 * @param   {InkObject}           ink    Una tinta de impresión
 * @param   {IllustratorDocument} illDoc El documento Illustrator
 * @returns {GroupItem}           El grupo con el color de impresión
 */
function CreatePrintingColour(ink, illDoc) {
    /* Crea el grupo que contendrá el color de impresión */
    var gr = illDoc.docRef.groupItems.add();
    var initialWidth = 55.0;
    var initialHeight = 30.0;
    var roundValue = 3.0;
    var textSize = 5.5;

    // Añadimos el rectangulo con el color de relleno del color de impresión
    var colorRectangle = gr.pathItems.roundedRectangle(0.0, 0.0, initialWidth, (initialHeight - 20.0), roundValue, roundValue);
    ink.getSpotColor(illDoc);
    
    colorRectangle.fillColor = ink.spotColor;
    colorRectangle.stroked = true;
    colorRectangle.strokeColor = BasicColor.black();
    colorRectangle.strokeWidth = 0.4;
    colorRectangle.pathPoints[0].anchor = [0, -10];
    colorRectangle.pathPoints[0].leftDirection = colorRectangle.pathPoints[0].anchor;
    colorRectangle.pathPoints[0].rightDirection = colorRectangle.pathPoints[0].anchor;
    colorRectangle.pathPoints[5].anchor = [initialWidth, -10];
    colorRectangle.pathPoints[5].leftDirection = colorRectangle.pathPoints[5].anchor;
    colorRectangle.pathPoints[5].rightDirection = colorRectangle.pathPoints[5].anchor;
    colorRectangle.pathPoints[6].leftDirection = colorRectangle.pathPoints[6].anchor;
    colorRectangle.pathPoints[6].rightDirection = colorRectangle.pathPoints[6].anchor;
    colorRectangle.pathPoints[7].leftDirection = colorRectangle.pathPoints[7].anchor;
    colorRectangle.pathPoints[7].rightDirection = colorRectangle.pathPoints[7].anchor;

    // Nombramos el grupo
    gr.name = colorRectangle.fillColor.spot.name;

    //Añadimos el rectangulo exterior
    var outsideRectangle = gr.pathItems.roundedRectangle(0.0, 0.0, initialWidth, initialHeight, roundValue, roundValue);
    outsideRectangle.filled = false;
    outsideRectangle.stroked = true;
    outsideRectangle.strokeColor = BasicColor.black();
    outsideRectangle.strokeWidth = 0.5;

    // Añadimos el texto con la referencia de color
    var pantoneText = gr.textFrames.areaText(illDoc.docRef.pathItems.rectangle(-13.0, 2.0, (initialWidth - 4.0), 15.0));
    pantoneText.contents += ink.name;
    pantoneText.textRange.characterAttributes.size = textSize;
    pantoneText.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");

    return (gr);
}
