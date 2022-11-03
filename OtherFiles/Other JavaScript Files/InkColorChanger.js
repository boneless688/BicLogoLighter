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








 