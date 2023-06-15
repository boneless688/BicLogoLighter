//#region
//#region                                ExtendScript UI Layout
var master = new Window("dialog")
master.maximumSize.height = 900
master.maximumSize.width = 1400

var big = master.add("panel", undefined, "Bic Logo Lighter")
big.alignment = "center"

var screensLabel_A = big.add("statictext", undefined, "Side A screens")
var screensTotal_A = big.add("dropdownlist", undefined, [0, 1, 2, 3, 4])
screensTotal_A.selection = 2



/*/* #region  OKAY / Cancel buttons */
var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")

/* #endregion */

master.show()
//#endregion








 
if (screensTotal_A.selection == 1) {
	screenLayers_A1()
   var alpha = app.activeDocument.layers.getByName("A1")
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false
     app.activeDocument.layers.getByName("A2").remove()
     app.activeDocument.layers.getByName("A3").remove()
     app.activeDocument.layers.getByName("A4").remove()
} 









if (screensTotal_A.selection == 2) {
	var alpha = app.activeDocument.layers.getByName("A1")
	var screen1 = app.activeDocument.groupItems.getByName("Screen1")
	screen1.move(alpha, ElementPlacement.PLACEATEND)
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false


     var bravo = app.activeDocument.layers.getByName("A2")
     var screen2 = app.activeDocument.groupItems.getByName("Screen2")
	screen2.move(bravo, ElementPlacement.PLACEATEND)
     bravo.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     bravo.hasSelectedArtwork = false

     app.activeDocument.layers.getByName("A3").remove()
     app.activeDocument.layers.getByName("A4").remove()
}










 if (screensTotal_A.selection == 3) {

	var alpha = app.activeDocument.layers.getByName("A1")
	var screen1 = app.activeDocument.groupItems.getByName("Screen1")
	screen1.move(alpha, ElementPlacement.PLACEATEND)
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     alpha.hasSelectedArtwork = false


     var bravo = app.activeDocument.layers.getByName("A2")
     var screen2 = app.activeDocument.groupItems.getByName("Screen2")
	screen2.move(bravo, ElementPlacement.PLACEATEND)
     bravo.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     bravo.hasSelectedArtwork = false


     var charlie = app.activeDocument.layers.getByName("A3")
     var screen3 = app.activeDocument.groupItems.getByName("Screen3")
	screen3.move(charlie, ElementPlacement.PLACEATEND)
     charlie.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
     charlie.hasSelectedArtwork = false

     app.activeDocument.layers.getByName("A4").remove()
}











if (screensTotal_A.selection == 4) {
	var alpha = app.activeDocument.layers.getByName("A1")
	var screen1 = app.activeDocument.groupItems.getByName("Screen1")
	screen1.move(alpha, ElementPlacement.PLACEATEND)
     alpha.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
/*      alpha.groupItems.hasSelectedArtwork = true
     alpha.groupItems.name = "A1Group" */
     alpha.hasSelectedArtwork = false


     var bravo = app.activeDocument.layers.getByName("A2")
     var screen2 = app.activeDocument.groupItems.getByName("Screen2")
	screen2.move(bravo, ElementPlacement.PLACEATEND)
     bravo.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
/*      bravo.groupItems.hasSelectedArtwork = true
     bravo.groupItems.name = "A2Group" */
     bravo.hasSelectedArtwork = false


     var charlie = app.activeDocument.layers.getByName("A3")
     var screen3 = app.activeDocument.groupItems.getByName("Screen3")
	screen3.move(charlie, ElementPlacement.PLACEATEND)
     charlie.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
/*      charlie.groupItems.hasSelectedArtwork = true
     charlie.groupItems.name = "A3Group" */
     charlie.hasSelectedArtwork = false

     var delta = app.activeDocument.layers.getByName("A4")
     var screen4 = app.activeDocument.groupItems.getByName("Screen4")
     screen4.move(delta, ElementPlacement.PLACEATEND)
     delta.hasSelectedArtwork = true
     //app.executeMenuCommand("Vertical Align Bottom")
     app.executeMenuCommand("group")
/*      delta.groupItems.hasSelectedArtwork = true
     delta.groupItems.name = "A4Group" */
     delta.hasSelectedArtwork = false
}
