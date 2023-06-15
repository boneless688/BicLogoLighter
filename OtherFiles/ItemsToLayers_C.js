//#region
//#region                                ExtendScript UI Layout
var master = new Window("dialog")
master.maximumSize.height = 900
master.maximumSize.width = 1400

var big = master.add("panel", undefined, "Bic Logo Lighter")
big.alignment = "center"

var screensLabel_C = big.add("statictext", undefined, "Side C screens")
var screensTotal_C = big.add("dropdownlist", undefined, [0, 1, 2, 3, 4])
screensTotal_C.selection = 0



/*/* #region  OKAY / Cancel buttons */
var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")

/* #endregion */

master.show()
//#endregion








 
if (screensTotal_C.selection == 1) {
	screenLayers_A1()
   var alpha = app.activeDocument.layers.getByName("C1")
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false
     app.activeDocument.layers.getByName("C2").remove()
     app.activeDocument.layers.getByName("C3").remove()
     app.activeDocument.layers.getByName("C4").remove()
} 









if (screensTotal_C.selection == 2) {
	var alpha = app.activeDocument.layers.getByName("C1")
	var screen5 = app.activeDocument.groupItems.getByName("Screen5")
	screen5.move(alpha, ElementPlacement.PLACEATEND)
     alpha.hasSelectedArtwork = true
     app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false


     var bravo = app.activeDocument.layers.getByName("C2")
     var screen6 = app.activeDocument.groupItems.getByName("Screen6")
	screen6.move(bravo, ElementPlacement.PLACEATEND)
     bravo.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     bravo.hasSelectedArtwork = false

     app.activeDocument.layers.getByName("C3").remove()
     app.activeDocument.layers.getByName("C4").remove()
}










 if (screensTotal_C.selection == 3) {

	var alpha = app.activeDocument.layers.getByName("C1")
	var screen5 = app.activeDocument.groupItems.getByName("Screen5")
	screen5.move(alpha, ElementPlacement.PLACEATEND)
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false


     var bravo = app.activeDocument.layers.getByName("C2")
     var screen6 = app.activeDocument.groupItems.getByName("Screen6")
	screen6.move(bravo, ElementPlacement.PLACEATEND)
     bravo.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     bravo.hasSelectedArtwork = false


     var charlie = app.activeDocument.layers.getByName("C3")
     var screen7 = app.activeDocument.groupItems.getByName("Screen7")
	screen7.move(charlie, ElementPlacement.PLACEATEND)
     charlie.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     charlie.hasSelectedArtwork = false

     app.activeDocument.layers.getByName("C4").remove()
}











if (screensTotal_C.selection == 4) {
	var alpha = app.activeDocument.layers.getByName("C1")
	var screen5 = app.activeDocument.groupItems.getByName("Screen5")
	screen5.move(alpha, ElementPlacement.PLACEATEND)
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false


     var bravo = app.activeDocument.layers.getByName("C2")
     var screen6 = app.activeDocument.groupItems.getByName("Screen6")
	screen6.move(bravo, ElementPlacement.PLACEATEND)
     bravo.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     bravo.hasSelectedArtwork = false


     var charlie = app.activeDocument.layers.getByName("C3")
     var screen7 = app.activeDocument.groupItems.getByName("Screen7")
	screen7.move(charlie, ElementPlacement.PLACEATEND)
     charlie.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     charlie.hasSelectedArtwork = false

     var delta = app.activeDocument.layers.getByName("C4")
     var screen8 = app.activeDocument.groupItems.getByName("Screen8")
     screen8.move(delta, ElementPlacement.PLACEATEND)
     delta.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     delta.hasSelectedArtwork = false
}






