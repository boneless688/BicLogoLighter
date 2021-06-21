//sets the ruler origin of the open document to its default.
document.rulerOrigin = [0,0];


//creates the initial pop-up menus for the user to enter the order information.
var proofRecipientName = prompt("Proof Recipient Name.");
var proofRecipientEmailAddress = prompt("Proof Recipient Email Address.");
var originalArtFile = prompt("The file name of the original art file.");
var jde = prompt("The JDE order number.");
var po = prompt("The customer's purchase order number (if any).");
if (po= "undefined") {
    var po = "N/A";
    }
var fileNameDescription = prompt("The file name's description.");
var bodyColor = prompt("What is the body color?");
var version = prompt("What is this version?");
var fileName = jde +"_"+fileNameDescription+"_"+bodyColor+"_"+version;




//makes the lighter body color layer visible for the lighter body color specified in the initial pop-up menu.
#target illustrator;
function bodyColorLayerVisible (a) {
    var doc = app.activeDocument;
    var layers = docShow.layers;
    var showLayer = a;
    if (bodyColor === "Orange") {
        try {
            showLayer = layers.getByName (Orange);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
        } else if (bodyColor === "White") {
        try {
            showLayer = layers.getByName (White);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "Green") {
        try {
            showLayer = layers.getByName (Green);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "LightBlue") {
        try {
            showLayer = layers.getByName (LightBlue);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "Yellow") {
        try {
            showLayer = layers.getByName (Yellow);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "Black") {
        try {
            showLayer = layers.getByName (Black);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "Blue") {
        try {
            showLayer = layers.getByName (Blue);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "Pink") {
        try {
            showLayer = layers.getByName (Pink);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "Red") {
        try {
            showLayer = layers.getByName (Red);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}
                } else if (bodyColor === "DarkGreen") {
        try {
            showLayer = layers.getByName (DarkGreen);
            showLayer.visible = true;
            redraw();
            }
        catch (e) {}

//enters the current day and date in the date text box.




//delete all swatches in the swatch window. Create a new, empty swatch group. Inserts the swatches entered in the initial pop-up menu into the new swatch group.




//save the document as a PDF file with the name specified in the initial pop-up menu into the '3 - Art Proof Sent' folder.
 document.saveAs



//copies the name of the file to the clipboard.




