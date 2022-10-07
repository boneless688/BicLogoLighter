//#region                                ExtendScript UI Layout
var master = new Window("dialog")
master.maximumSize.height = 800
master.maximumSize.width = 1400

var big = master.add("panel", undefined, "")
big.alignment = "center"

var topPart = big.add("group")
topPart.orientation = "row"
topPart.maximumSize.width = 1400

var topLeft = topPart.add("panel", undefined, " ")
topLeft.preferredSize.width = 200

var customerInfo_outer = topLeft.add("group")
customerInfo_outer.orientation = "column"

var repName = customerInfo_outer.add("statictext", undefined, "Rep name")
var regulars = customerInfo_outer.add("dropdownlist", undefined, [
	"Regulars", //0
	"Jonathan Le - Lightning Bug", //1
	"Aaron Schimmel - Rockstar Promos", //2
	"Sarah Gillen - LogoLighters", //3
	"Mitch Sigurdson - Humble & Fume", //4
	"Angela Cicchini - Humble & Fume", //5
	"Gabrielle Seguin - Humble & Fume", //6
	"Alex Walker - Humble & Fume", //7
	"Tyler Groves - Humble & Fume", //8
	"Aline Nas - Cannabis Promotions", //9
	"Darryl Quinge - PEM America", //10
	"Erica Heft - 4 All Promos", //11
	"Shelby - 4 All Promos", //12
	"Stephen Pistel - 4 All Promos", //13
	"Cindy Sumner - 4 All Promos", //14
	"Kim Robinson - 4 All Promos", //15
	"Ryan Zvibleman - Cannabis Promotions", //16
	"Jeff Mancini - M5 Group", //17
	"Danielle Treloar - Rush Imprint", //18
	"Will Kunz - MARCO PDX", //19
	"Kari Matlack - Rush Imprint", //20
	"Josh Kyung Kim - Identity Links", //21
	"Jay Tittman - Rocky Mountain Business Products", //22
	"Brian Eskenazi - High Mountain Imports", //23
	"Jennifer - Pens R Us", //24
	"Luvbuds", //25
	"Alex Lavoie - High Mountain Imports", //26
	"Sandy Johnson - Show Your Logo Inc", //27
	"LaVerne Petry - Custom420promos", //28
	"Arlene LaRoe - Blue Sky Marketing Group", //29
	"Superior Promos", //30
	"Kaeser & Blair", //31
	"Carey Ray Jaramillo - NotionWorx", //32
])
regulars.selection = 0;

var repName = customerInfo_outer.add("statictext", undefined, "Rep name")
var repNameEdit = customerInfo_outer.add("edittext", undefined, "")
repNameEdit.characters = 20
repNameEdit.active = true
//repNameEdit.text = "Custom name"

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email")
var repEmail_Edit = customerInfo_outer.add("edittext", undefined, "")
repEmail_Edit.characters = 20
//repEmail_Edit.text = "custom email"

var companyGroup = customerInfo_outer.add("panel", undefined, "")
companyGroup.orientation = "row"

var company_A = companyGroup.add("statictext", undefined, "Company")
var company_A_Edit = companyGroup.add("edittext", undefined, "")
company_A_Edit.characters = 10
//company_A_Edit.text = "custom company"

var vipCheckbox = companyGroup.add("checkbox", undefined, "VIP")

var designerLeft = topLeft.add("panel", undefined, " ")
designerLeft.orientation = "row"

var designerLabel = designerLeft.add("statictext", undefined, "Designer")
var designerList = designerLeft.add("dropdownlist", undefined, [
	"MMiraglia",
	"GVisgaitis",
	"JBavitz",
])
designerList.characters = 10
designerList.selection = 2

var topRight = topPart.add("panel", undefined, "")
topRight.orientation = "column"
topRight.preferredSize.height = 200

var orderOne = topRight.add("group")
orderOne.orientation = "row"

var nationalityGroup = orderOne.add("panel", undefined, "")
nationalityGroup.orientation = "column"

var nationalityUS = nationalityGroup.add("radiobutton", undefined, "US")
nationalityUS.orientation = "column"
nationalityUS.value = true
var nationalityCanada = nationalityGroup.add(
	"radiobutton",
	undefined,
	"Canadian"
)

nationalityUS.value = true

var jdeNumber = orderOne.add("statictext", undefined, "JDE Number")
var jdeNumber_edit = orderOne.add("edittext", undefined, "")
jdeNumber_edit.characters = 7
//jdeNumber_edit.text = "6187745"

var poNumber = orderOne.add("statictext", undefined, "PO Number")
var poNumber_edit = orderOne.add("edittext", undefined, "")
poNumber_edit.characters = 10
//poNumber_edit.text = "PO 55225"

var webSpacer = orderOne.add("panel", undefined, " ")

var webArea = orderOne.add("panel", undefined, "Web Number")
webArea.orientation = "row"

var webNumber_edit = webArea.add("edittext", undefined, "")
webNumber_edit.characters = 10
//webNumber_edit.text = "85"

var orderThree = topRight.add("panel", undefined, "")
orderThree.orientation = "row"
orderThree.alignment = "left"

var inHandsDate = orderThree.add("statictext", undefined, "In-hands Date")
var inHandsDate_edit = orderThree.add("edittext", undefined, "")
inHandsDate_edit.characters = 10
//HandsDate_edit.text = "11/24"

var shipDate = orderThree.add("statictext", undefined, "Ship Date")
var shipDate_edit = orderThree.add("edittext", undefined, "")
shipDate_edit.characters = 10
//ipDate_edit.text = "10/13"

var rushCheckbox = orderThree.add("checkbox", undefined, "Rush order")

var spacer = orderThree.add("group")

var multiPanel = orderThree.add("panel", undefined, "")
var multi = multiPanel.add("checkbox", undefined, "Multiple Items")
var multiNumber = multiPanel.add("edittext", undefined, "Number")
var multiSub = multiPanel.add("panel", undefined, "")
multiSub.orientation = "row"
multiSub.alignChildren = "left"
var multi_itemNumber = multiSub.add("radiobutton", undefined, "_01")
multi_itemNumber.value = true
var multi_bodyColor = multiSub.add("radiobutton", undefined, "Body Color")

var orderFour = topRight.add("group")
orderFour.orientation = "row"

var instructionsCustomer_title = orderFour.add(
	"panel",
	undefined,
	"Instructions - Customer"
)
var instructionsCustomer_edit = instructionsCustomer_title.add(
	"edittext",
	undefined,
	"",
	{
		multiline: true,
	}
)
instructionsCustomer_edit.minimumSize.width = 200
instructionsCustomer_edit.minimumSize.height = 50
//instructionsCustomer_edit.text = "Instructions from the customer.";

var instructionsCustomerService_title = orderFour.add(
	"panel",
	undefined,
	"Instructions - Customer Service"
)
var instructionsCustomerService_edit = instructionsCustomerService_title.add(
	"edittext",
	undefined,
	"",
	{
		multiline: true,
	}
)
instructionsCustomerService_edit.minimumSize.width = 200
instructionsCustomerService_edit.minimumSize.height = 50
//instructionsCustomerService_edit.text = "Instructions from Customer Service.";

var instructionsProduction_title = orderFour.add(
	"panel",
	undefined,
	"Instructions - Production"
)
var instructionsProduction_edit = instructionsProduction_title.add(
	"edittext",
	undefined,
	"",
	{
		multiline: true,
	}
)
instructionsProduction_edit.minimumSize.width = 200
//instructionsProduction_edit.text = "Instructions from Production.";

var bottom = big.add("group")
bottom.orientation = "column"

var itemLeft = bottom.add("group")
itemLeft.orientation = "row"

var itemTopRow = itemLeft.add("panel", undefined, "")
itemTopRow.orientation = "row"

var descriptionSide = itemTopRow.add("group")
descriptionSide.orientation = "column"

var colors = itemTopRow.add("group")
colors.margins = [40, 0, 0, 0]

var bodyColor = descriptionSide.add("panel", undefined, "Body Color")
bodyColor.orientation = "row"

var bodyColorList = bodyColor.add("dropdownlist", undefined, [
	"Black",
	"White",
	"Green",
	"Blue",
	"Red",
	"Pink",
	"LightBlue",
	"ForestGreen",
	"Orange",
	"Yellow",
	"-",
	"DarkAssort", //11
	"LightAssort", //12
	"-",
	"Sleeve", //14
])

bodyColorList.selection = 0;

var mockup = bodyColor.add("panel", undefined)
var mockupCheckbox = bodyColor.add("checkbox", undefined, "Mockup")
var genericCheckbox = bodyColor.add("checkbox", undefined, "Generic")

mockupCheckbox.value = false
genericCheckbox.value = false

var doubleSided = bodyColor.add("panel", undefined)
var doubleSidedCheckbox = bodyColor.add(
	"checkbox",
	undefined,
	"2 Sided Assortment"
)

doubleSidedCheckbox.value = false;

var descriptionBox = descriptionSide.add("statictext", undefined, "Description")
var descriptionBox_edit = descriptionSide.add("edittext", undefined, "")
descriptionBox_edit.characters = 20
//descriptionBox_edit.text = "the only thing the only thing the only thing"

var autoSave = descriptionSide.add("checkbox", undefined, "Save the PDF?")
autoSave.value = true;

var spacerBox = descriptionSide.add("statictext", undefined, "")

var originalArt = descriptionSide.add("statictext", undefined, "Original Art")
var originalArt_edit = descriptionSide.add("edittext", undefined, "")
originalArt_edit.characters = 20
//originalArt_edit.text = "original art"

var notes = descriptionSide.add("statictext", undefined, "Notes")
var notes_edit = descriptionSide.add("edittext", undefined, "")
notes_edit.characters = 20
//notes_edit.text = "These are the notes."

var inkMaster = colors.add("group")
inkMaster.orientation = "column"
var inkColors_1 = inkMaster.add("group")
var inkColors_2 = inkMaster.add("group")

var inkColors_A = inkColors_1.add("panel", undefined, "")
inkColors_A.preferredSize = [400, 100]
inkColors_A.orientation = "row"

var inkBox_Master_A1 = inkColors_A.add("panel", undefined, "Screen A1")
inkBox_Master_A1.orientation = "column"
inkBox_Master_A1.margins = [10, 10, 5, 10]
var ink_A1 = inkBox_Master_A1.add("edittext", undefined, "")
ink_A1.characters = 10
//ink_A1.text = "white"
var ink_A1_Double = inkBox_Master_A1.add("checkbox", undefined, "Double hit")

var inkBox_Master_A2 = inkColors_A.add("panel", undefined, "Screen A2")
inkBox_Master_A2.orientation = "column"
var ink_A2 = inkBox_Master_A2.add("edittext", undefined, "")
ink_A2.characters = 10
//ink_A2.text = "reflex blue"
var ink_A2_Double = inkBox_Master_A2.add("checkbox", undefined, "Double hit")

var inkBox_Master_A3 = inkColors_A.add("panel", undefined, "Screen A3")
inkBox_Master_A3.orientation = "column"
var ink_A3 = inkBox_Master_A3.add("edittext", undefined, "")
ink_A3.characters = 10
//ink_A3.text = "black"
var ink_A3_Double = inkBox_Master_A3.add("checkbox", undefined, "Double hit")

var inkBox_Master_A4 = inkColors_A.add("panel", undefined, "Screen A4")
inkBox_Master_A4.orientation = "column"
var ink_A4 = inkBox_Master_A4.add("edittext", undefined, "")
ink_A4.characters = 10
//ink_A4.text = "white"
var ink_A4_Double = inkBox_Master_A4.add("checkbox", undefined, "Double hit")

var inkColors_C = inkColors_2.add("panel", undefined, "")
inkColors_C.preferredSize = [400, 100]
inkColors_C.orientation = "row"

var inkBox_Master_C1 = inkColors_C.add("panel", undefined, "Screen C1")
inkBox_Master_C1.orientation = "column"
var ink_C1 = inkBox_Master_C1.add("edittext", undefined, "")
ink_C1.characters = 10
//ink_C1.text = "process blue"
var ink_C1_Double = inkBox_Master_C1.add("checkbox", undefined, "Double hit")

var inkBox_Master_C2 = inkColors_C.add("panel", undefined, "Screen C2")
inkBox_Master_C2.orientation = "column"
var ink_C2 = inkBox_Master_C2.add("edittext", undefined, "")
ink_C2.characters = 10
//ink_C2.text = "211 pink"
var ink_C2_Double = inkBox_Master_C2.add("checkbox", undefined, "Double hit")

var inkBox_Master_C3 = inkColors_C.add("panel", undefined, "Screen C3")
inkBox_Master_C3.orientation = "column"
var ink_C3 = inkBox_Master_C3.add("edittext", undefined, "")
ink_C3.characters = 10
//ink_C3.text = "213 red"
var ink_C3_Double = inkBox_Master_C3.add("checkbox", undefined, "Double hit")

var inkBox_Master_C4 = inkColors_C.add("panel", undefined, "Screen C4")
inkBox_Master_C4.orientation = "column"
var ink_C4 = inkBox_Master_C4.add("edittext", undefined, "")
ink_C4.characters = 10
//ink_C4.text = "571 teal"
var ink_C4_Double = inkBox_Master_C4.add("checkbox", undefined, "Double hit")

/*/* #region  OKAY / Cancel buttons */
var buttonGroup = master.add("panel")
buttonGroup.orientation = "row"
var okButton = buttonGroup.add("button", undefined, "OK")
var cancelButton = buttonGroup.add("button", undefined, "Cancel")

/* #endregion */

master.show()

//#endregion

//#region                                THIS STOPS THE SCRIPT IF THERE ISN'T A JDE NUMBER OR A WEB NUMBER ENTERED.
/* if (jdeNumber_edit.text.length < 1 || webNumber_edit.text.length < 1) {
throw ('A JDE number OR a web number must be entered.')
} */
//#endregion
//#region                                OPEN TEMPLATE FILE
// OPEN TEMPLATES WITH RELATIVE PATHS
if (
	bodyColorList.selection.index === 11 ||
	bodyColorList.selection.index === 12
) {
	if (doubleSidedCheckbox.value === false) {
		var _scriptPath = $.fileName
		var _separater = ""

		//Code to get separater based on OS
		if ($.os.toLowerCase().indexOf("mac") != -1) {
			_separater = "/"
		} else if ($.os.toLowerCase().indexOf("window") != -1) {
			_separater = "\\"
		}
		var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater))
		app.open(File(_path + "/Templates/Proof_Template_Assorted_1Side.ait"))
	} else {
		var _scriptPath = $.fileName
		var _separater = ""

		//Code to get separater based on OS
		if ($.os.toLowerCase().indexOf("mac") != -1) {
			_separater = "/"
		} else if ($.os.toLowerCase().indexOf("window") != -1) {
			_separater = "\\"
		}
		var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater))
		app.open(File(_path + "/Templates/Proof_Template_Assorted_2Side.ait"))
	}
} else if (bodyColorList.selection.index === 14) {
	var _scriptPath = $.fileName
	var _separater = ""

	//Code to get separater based on OS
	if ($.os.toLowerCase().indexOf("mac") != -1) {
		_separater = "/"
	} else if ($.os.toLowerCase().indexOf("window") != -1) {
		_separater = "\\"
	}
	var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater))
	app.open(File(_path + "/Templates/Proof_Template_Sleeve.ait"))
} else {
	var _scriptPath = $.fileName
	var _separater = ""
	//Code to get separater based on OS
	if ($.os.toLowerCase().indexOf("mac") != -1) {
		_separater = "/"
	} else if ($.os.toLowerCase().indexOf("window") != -1) {
		_separater = "\\"
	}
	var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater))
	app.open(File(_path + "/Templates/Proof_Template_Standard.ait"))
}
//#endregion
//#region                                THIS CREATES THE   .TRIM   FUNCTION
String.prototype.trim = function () {
	return this.replace(/^\s+/, "").replace(/\s+$/, "")
}
//#endregion

if (bodyColorList.selection.index < 10 || bodyColorList.selection == 14) {
	doubleSidedCheckbox.value = false
}

//#region                                CUSTOMER INFO
var repName = app.activeDocument.textFrames.getByName("Rep")
var repNameSignature =
	app.activeDocument.textFrames.getByName("RepName_Signature")
var companyName = app.activeDocument.textFrames.getByName("Company")

var rep = {
	name: null,
	email: null,
	company: null,
	nationality: null,
	vip: null,
}

if (regulars.selection.text === "Regulars") {
	;(rep.name = capitalizeSpaces(repNameEdit.text)),
		(rep.email = repEmail_Edit.text.toLowerCase())
	;(rep.company = capitalizeSpaces(company_A_Edit.text)),
		(rep.nationality = null),
		(rep.vip = null)

	if (nationalityUS.value === true) {
		rep.nationality = "US"
	} else {
		rep.nationality = "Canada"
	}
}

if (regulars.selection.index === 1) {
	rep.name = "Jonathan Le"
	rep.email = "jonathan@bugbranding.com"
	rep.company = "Lightning Bug Branding"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 2) {
	rep.name = "Aaron Schimmel"
	rep.email = "aaron@rockstarpromos.com"
	rep.company = "Rock Star Promotions"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 3) {
	rep.name = "Sarah Gillen"
	rep.email = "logolighters@live.com"
	rep.company = "LogoLighters, LLC"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 4) {
	rep.name = "Mitch Sigurdson"
	rep.email = "mitch@bobhq.com"
	rep.company = "Humble and Fume"
	rep.nationality = "Canada"
	rep.vip = false
}

if (regulars.selection.index === 5) {
	rep.name = "Angela Cicchini"
	rep.email = "angelac@bobhq.com"
	rep.company = "Humble and Fume"
	rep.nationality = "Canada"
	rep.vip = false
}

if (regulars.selection.index === 6) {
	rep.name = "Gabby Seguin"
	rep.email = "gabby@humbleandfume.com"
	rep.company = "Humble & Fume"
	rep.nationality = "Canada"
	rep.vip = false
}

if (regulars.selection.index === 7) {
	rep.name = "Alex Walker"
	rep.email = "alex@humblecs.com"
	rep.company = "Humble & Fume"
	rep.nationality = "Canada"
	rep.vip = false
}

if (regulars.selection.index === 8) {
	rep.name = "Tyler Groves"
	rep.email = "tyler@bobhq.com"
	rep.company = "Humble & Fume"
	rep.nationality = "Canada"
	rep.vip = false
}

if (regulars.selection.index === 9) {
	rep.name = "Aline Nas"
	rep.email = "orders@cannabispromotions.com"
	rep.company = "Cannabis Promotions"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 10) {
	rep.name = "Darryl Quinge"
	rep.email = "darryl@pemamericainc.com"
	rep.company = "PEM America Inc"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 11) {
	rep.name = "Erica Heft"
	rep.email = "erica@4allpromos.com"
	rep.company = "4AllPromos"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 12) {
	rep.name = "Shelby"
	rep.email = "shelby@4allpromos.com"
	rep.company = "4AllPromos"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 13) {
	rep.name = "Stephen Pistel"
	rep.email = "stephen@4allpromos.com"
	rep.company = "4 All Promos"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 14) {
	rep.name = "Cindy Sumner"
	rep.email = "cindy@4allpromos.com"
	rep.company = "4AllPromos"
	rep.nationality = "US"
	rep.vip = true
}
if (regulars.selection.index === 15) {
	rep.name = "Kim Robinson"
	rep.email = "kim@4allpromos.com"
	rep.company = "4AllPromos"
	rep.nationality = "US"
	rep.vip = true
}
if (regulars.selection.index === 16) {
	rep.name = "Ryan Zvibleman"
	rep.email = "orders@cannabispromotions.com"
	rep.company = "Cannabis Promotions"
	rep.nationality = "US"
	rep.vip = false
}
if (regulars.selection.index === 17) {
	rep.name = "Jeff Mancini"
	rep.email = "jeff@m5group.com"
	rep.company = "M5 Group"
	rep.nationality = "US"
	rep.vip = false
}
if (regulars.selection.index === 18) {
	rep.name = "Danielle Treloar"
	rep.email = "danielle@rushimprint.com"
	rep.company = "RUSH Imprint"
	rep.nationality = "US"
	rep.vip = true
}
if (regulars.selection.index === 19) {
	rep.name = "Will Kunz"
	rep.email = "orders@marcopdx.com"
	rep.company = "MARCO Ideas Unlimited"
	rep.nationality = "US"
	rep.vip = false
}
if (regulars.selection.index === 20) {
	rep.name = "Kari Matlack"
	rep.email = "kari@rushimprint.com"
	rep.company = "RUSH Imprint"
	rep.nationality = "US"
	rep.vip = true
}
if (regulars.selection.index === 21) {
	rep.name = "Josh Kyung Kim"
	rep.email = "josh@identity-links.com"
	rep.company = "Identity Links"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 22) {
	rep.name = "Jay Tittman"
	rep.email = "jay@rmbp.com"
	rep.company = "Rocky Mountain Business Products"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 23) {
	rep.name = "High Mountain Imports"
	rep.email = "orders@highmountainimports.com"
	rep.company = "High Mountain Imports"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 24) {
	rep.name = "Jennifer"
	rep.email = "jennifer@pensrus.com"
	rep.company = "Pens R Us"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 25) {
	rep.name = "Kevin Giles"
	rep.email = "kevin@luvbuds.co"
	rep.company = "Luvbuds, LLC"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 26) {
	rep.name = "Alex Lavoie"
	rep.email = "alex@highmountainimports.com"
	rep.company = "High Mountain Imports"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 27) {
	rep.name = "Sandy Johnson"
	rep.email = "orders@showyourlogo.com"
	rep.company = "Show Your Logo, Inc"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 28) {
	rep.name = "LaVerne Petry"
	rep.email = "custom420promos@gmail.com"
	rep.company = "Custom420promos"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 29) {
	rep.name = "Arlene LaRoe"
	rep.email = "alaroe@buybluesky.com"
	rep.company = "Blue Sky Marketing Group"
	rep.nationality = "US"
	rep.vip = true
}

if (regulars.selection.index === 30) {
	rep.name = "Superior Promos"
	rep.email = "art@superiorpromos.com"
	rep.company = "Superior Promos, Inc"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 31) {
	rep.name = "Kaeser & Blair"
	rep.email = "orders@kaeser-blair.com"
	rep.company = "Kaeser & Blair"
	rep.nationality = "US"
	rep.vip = false
}

if (regulars.selection.index === 32) {
	rep.name = "Carey Ray Jaramillo"
	rep.email = "vendor@notionworx.com"
	rep.company = "NotionWorx"
	rep.nationality = "US"
	rep.vip = false
}

repName.contents = rep.name + "     " + rep.email
repNameSignature = rep.name
companyName = rep.company

var repNameOutput = app.activeDocument.textFrames.getByName("Rep")
repNameOutput.contents = rep.name + "     " + rep.email

var repNameSignature =
	app.activeDocument.textFrames.getByName("RepName_Signature")
repNameSignature.contents = rep.name

var companyName = app.activeDocument.textFrames.getByName("Company")
companyName.contents = rep.company

//#endregion

//#region                                NATIONALITY

if (nationalityCanada.value === true || rep.nationality === "Canada") {
	nationalityCanada.value = true
	nationalityUS.value = false
}

if (nationalityUS.value === true || rep.nationality === "US") {
	nationalityCanada.value = false
	nationalityUS.value = true
	nationalityCanada.value = false
}

if (nationalityCanada.value === true) {
	app.activeDocument.layers.getByName("USA").visible = true
	app.activeDocument.layers.getByName("USA").remove()
	app.activeDocument.layers.getByName("Canada").visible = true
}

if (nationalityUS.value === true) {
	app.activeDocument.layers.getByName("Canada").visible = true
	app.activeDocument.layers.getByName("Canada").remove()
	app.activeDocument.layers.getByName("USA").visible = true
}
//#endregion

//#region                                 INK COLORS
//#region    If the order uses the standard template, then the body and ink color code is run. If it isn't, then the code is bypassed.

function neonInk(inkString, bravo) {
	//The group name in Illustrator is A1_Warning, etc.
	var neonInks = ["801", "802", "803", "804", "805", "806", "807"]
	var fileName_One = inkString.search(" ")
	var numberOnly = inkString.substring(0, fileName_One)
	for (i = 0; i < neonInks.length; i++) {
		if (numberOnly === neonInks[i]) {
			var neon = app.activeDocument.groupItems.getByName(bravo)
			neon.hidden = false
		}
	}
}

if (bodyColorList.selection.index < 14) {
	var item_A1_frame = app.activeDocument.pathItems.getByName("A1_Frame")
	var item_A1_name = app.activeDocument.textFrames.getByName("A1_Name")
	var item_A1_color = app.activeDocument.pathItems.getByName("A1_Color")
	var item_A1_chip = app.activeDocument.pathItems.getByName("A1_Chip")
	var item_A1_screenName = app.activeDocument.textFrames.getByName(
		"A1 Screen Ink Color"
	)

	var item_A2_frame = app.activeDocument.pathItems.getByName("A2_Frame")
	var item_A2_name = app.activeDocument.textFrames.getByName("A2_Name")
	var item_A2_color = app.activeDocument.pathItems.getByName("A2_Color")
	var item_A2_chip = app.activeDocument.pathItems.getByName("A2_Chip")
	var item_A2_screenName = app.activeDocument.textFrames.getByName(
		"A2 Screen Ink Color"
	)

	var item_A3_frame = app.activeDocument.pathItems.getByName("A3_Frame")
	var item_A3_name = app.activeDocument.textFrames.getByName("A3_Name")
	var item_A3_color = app.activeDocument.pathItems.getByName("A3_Color")
	var item_A3_chip = app.activeDocument.pathItems.getByName("A3_Chip")
	var item_A3_screenName = app.activeDocument.textFrames.getByName(
		"A3 Screen Ink Color"
	)

	var item_A4_frame = app.activeDocument.pathItems.getByName("A4_Frame")
	var item_A4_name = app.activeDocument.textFrames.getByName("A4_Name")
	var item_A4_color = app.activeDocument.pathItems.getByName("A4_Color")
	var item_A4_chip = app.activeDocument.pathItems.getByName("A4_Chip")
	var item_A4_screenName = app.activeDocument.textFrames.getByName(
		"A4 Screen Ink Color"
	)

	var item_C1_frame = app.activeDocument.pathItems.getByName("C1_Frame")
	var item_C1_name = app.activeDocument.textFrames.getByName("C1_Name")
	var item_C1_color = app.activeDocument.pathItems.getByName("C1_Color")
	var item_C1_chip = app.activeDocument.pathItems.getByName("C1_Chip")
	var item_C1_screenName = app.activeDocument.textFrames.getByName(
		"C1 Screen Ink Color"
	)

	var item_C2_frame = app.activeDocument.pathItems.getByName("C2_Frame")
	var item_C2_name = app.activeDocument.textFrames.getByName("C2_Name")
	var item_C2_color = app.activeDocument.pathItems.getByName("C2_Color")
	var item_C2_chip = app.activeDocument.pathItems.getByName("C2_Chip")
	var item_C2_screenName = app.activeDocument.textFrames.getByName(
		"C2 Screen Ink Color"
	)

	var item_C3_frame = app.activeDocument.pathItems.getByName("C3_Frame")
	var item_C3_name = app.activeDocument.textFrames.getByName("C3_Name")
	var item_C3_color = app.activeDocument.pathItems.getByName("C3_Color")
	var item_C3_chip = app.activeDocument.pathItems.getByName("C3_Chip")
	var item_C3_screenName = app.activeDocument.textFrames.getByName(
		"C3 Screen Ink Color"
	)

	var item_C4_frame = app.activeDocument.pathItems.getByName("C4_Frame")
	var item_C4_name = app.activeDocument.textFrames.getByName("C4_Name")
	var item_C4_color = app.activeDocument.pathItems.getByName("C4_Color")
	var item_C4_chip = app.activeDocument.pathItems.getByName("C4_Chip")
	var item_C4_screenName = app.activeDocument.textFrames.getByName(
		"C4 Screen Ink Color"
	)

	var newWhite = new CMYKColor()
	newWhite.black = 2
	newWhite.cyan = 2
	newWhite.magenta = 2
	newWhite.yellow = 2

	var spotWhite = app.activeDocument.spots.add()
	spotWhite.colorType = ColorModel.SPOT
	spotWhite.name = "Spot White"
	spotWhite.color = newWhite
	var newSpotColor = new SpotColor()
	newSpotColor.spot = spotWhite

	var newBlack = new CMYKColor()
	newBlack.black = 100
	newBlack.cyan = 1
	newBlack.magenta = 1
	newBlack.yellow = 1

	var spotBlack = app.activeDocument.spots.add()
	spotBlack.colorType = ColorModel.SPOT
	spotBlack.name = "Spot Black"
	spotBlack.color = newBlack
	var newSpotBlack = new SpotColor()
	newSpotBlack.spot = spotBlack

	var standardInkNumber = [
		"114",
		"116",
		"1345",
		"1545",
		"172",
		"186",
		"202",
		"205",
		"208",
		"211",
		"316",
		"327",
		"341",
		"355",
		"281",
		"293",
		"2587",
		"424",
		"872",
		"877",
	]

	//#region   Screen counter array
	var digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
	var screenCounter_A = []
	var screenCounter_C = []
	//#endregion

	//#region                                REMOVES THE WHITE SPACES FROM INK NAMES FROM BEFORE AND AFTER THE TEXT
	ink_A1.text = ink_A1.text.trim()
	ink_A1.text = ink_A1.text.toLowerCase()
	ink_A2.text = ink_A2.text.trim()
	ink_A2.text = ink_A2.text.toLowerCase()
	ink_A3.text = ink_A3.text.trim()
	ink_A3.text = ink_A3.text.toLowerCase()
	ink_A4.text = ink_A4.text.trim()
	ink_A4.text = ink_A4.text.toLowerCase()
	ink_C1.text = ink_C1.text.trim()
	ink_C1.text = ink_C1.text.toLowerCase()
	ink_C2.text = ink_C2.text.trim()
	ink_C2.text = ink_C2.text.toLowerCase()
	ink_C3.text = ink_C3.text.trim()
	ink_C3.text = ink_C3.text.toLowerCase()
	ink_C4.text = ink_C4.text.trim()
	ink_C4.text = ink_C4.text.toLowerCase()

	//#endregion

	//#endregion

	/* THESE ARE ALL THE PMS INK COLORS WHOSE NAMES DO NOT BEGIN WITH A NUMBER. 
Actual names:
'PANTONE Black 0961 C', 'PANTONE Black 2 C', 'Pantone Black 3 C', 'Pantone Black 4 C', 'Pantone Black 5 C', 'Pantone Black 6 C', 'Pantone Black 7 C', 'Pantone Black C', 'Pantone Blue 072 C', Pantone Blue 0821 C', 'Pantone Bright Red C', 'Pantone Dark Blue C', 'Pantone Green 0921 C', 'Pantone Green C', 'Pantone Magenta 0521 C', 'Pantone Medium Purple C', 'Pantone Orange 021 C', 'Pantone Pink C', 'Pantone Purple C', 'Pantone Red 032 C', 'Pantone Red 0331 C', 'Pantone Reflex Blue', 'Pantone Rhodamine Red C', 'Pantone Rubine Red C', 'Pantone Violet 0631 C', 'Pantone Violet C', 'Pantone Warm Red C', 'Pantone Yellow 012 C', Pantone Yellow 0131 C', 'Pantone Yellow C', 'Pantone Cool Gray 1 C', 'Pantone Cool Gray 2 C', 'Pantone Cool Gray 3 C', 'Pantone Cool Gray 4 C', 'Pantone Cool Gray 5 C', 'Pantone Cool Gray 6 C', 'Pantone Cool Gray 7 C', 'Pantone Cool Gray 8 C', 'Pantone Cool Gray 9 C', 'Pantone Cool Gray 10 C', 'Pantone Cool Gray 11 C', 'Pantone Warm Gray 1 C', 'Pantone Warm Gray 2 C', 'Pantone Warm Gray 3 C', 'Pantone Warm Gray 4 C', 'Pantone Warm Gray 5 C', 'Pantone Warm Gray 6 C', 'Pantone Warm Gray 7 C', 'Pantone Warm Gray 8 C', 'Pantone Warm Gray 9 C', 'Pantone Warm Gray 10 C', 'Pantone Cool Gray 11 C']


['Black 0961', 'Black 2', 'Black 3', 'Black 4', 'Black 5', 'Black 6', 'Black 7', 'Black', 'Blue 072', 'Blue 0821', 'Bright Red', 'Dark Blue', 'Green 0921', 'Green', 'Magenta 0521', 'Medium Purple', 'Orange 021', 'Pink', 'Purple', 'Red 032', 'Red 0331', 'Reflex Blue', 'Rhodamine Red', 'Rubine Red', 'Violet 0631', 'Violet', 'Warm Red', 'Yellow 012', 'Yellow 0131', 'Yellow', 'Cool Gray 1', 'Cool Gray 2', 'Cool Gray 3', 'Cool Gray 4', 'Cool Gray 5', 'Cool Gray 6', 'Cool Gray 7', 'Cool Gray 8', 'Cool Gray 9', 'Cool Gray 10', 'Cool Gray 11', 'Warm Gray 1', 'Warm Gray 2', 'Warm Gray 3', 'Warm Gray 4', 'Warm Gray 5', 'Warm Gray 6', 'Warm Gray 7', 'Warm Gray 8', 'Warm Gray 9', 'Warm Gray 10', 'Cool Gray 11']
*/

	var inksNamedArray = [
		"blue 072",
		"magenta 0521",
		"orange 021",
		"red 032",
		"red 0331",
	]
	for (i = 0; i < inksNamedArray.length; i++) {
		if (ink_A1.text === inksNamedArray[i]) {
			item_A1_name.contents =
				"PANTONE" + capitalizeSpaces(inksNamedArray[i]) + " " + "C"
			break
		} else {
			if (ink_A1.text.length > 0) {
				var pmsTest_A1 = false
				for (var index = 0; index < ink_A1.text.length; index++) {
					for (x = 0; x < digitArray.length; x++) {
						if (ink_A1.text[index] === digitArray[x]) {
							pmsTest_A1 = true
							break
						}
					}
				}
			}
		}
	}

	//#region     A1
	if (ink_A1.text.length > 0) {
		var pmsTest_A1 = false
		for (var index = 0; index < ink_A1.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_A1.text[index] === digitArray[i]) {
					pmsTest_A1 = true
					break
				}

				if (ink_A1.text[index] === "0821") {
					item_A1_name.contents = "PANTONE Blue 0821 C"
					item_A1_screenName.contents = "PANTONE Blue 0821 C"
					item_A1_color.fillColor = "PANTONE Blue 0821 C"
					item_A1_chip.fillColor = "PANTONE Blue 0821 C"
					item_A1_frame.strokeWidth = 1
				} else {
				}
			}
		}

		if (pmsTest_A1 === true) {
			var gray = capitalizeSpaces(ink_A1.text)
			var grayArray = gray.split(" ")
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" C"

				item_A1_name.contents = grayName
				item_A1_screenName.contents = grayName
				item_A1_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
				item_A1_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
			} else {
				var kilo = ink_A1.text.search(" ")
				var pmsNumber_alpha = ink_A1.text.substring(0, kilo)
				var mike = ink_A1.text.substring(kilo)
				pmsNumber_alpha = pmsNumber_alpha.replace(/,/g, "")
				item_A1_name.contents =
					"PANTONE" +
					" " +
					pmsNumber_alpha +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike)
				item_A1_screenName.contents =
					pmsNumber_alpha + " " + capitalizeSpaces(mike)
				item_A1_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumber_alpha + " " + "C"
				).color
				item_A1_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumber_alpha + " " + "C"
				).color
			}
		}
	}

	// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
	if (pmsTest_A1 === false) {
		if (ink_A1.text === "white") {
			item_A1_name.contents = "White"
			item_A1_screenName.contents = "White"
			item_A1_color.fillColor = newSpotColor
			item_A1_chip.fillColor = newSpotColor
			item_A1_frame.strokeWidth = 1
			item_A1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else if (ink_A1.text === "black") {
			item_A1_name.contents = "Black"
			item_A1_screenName.contents = "Black"
			item_A1_color.fillColor = newSpotBlack
			item_A1_chip.fillColor = newSpotBlack
			item_A1_frame.strokeWidth = 1
			item_A1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else if (ink_A1.text === "Yellow") {
			item_A1_name.contents = "PANTONE Yellow C"
			item_A1_screenName.contents = "PANTONE Yellow C"
			item_A1_color.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A1_chip.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A1_frame.strokeWidth = 1
			item_A1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else {
			item_A1_name.contents =
				"PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
			item_A1_screenName.contents = capitalizeSpaces(ink_A1.text)
			item_A1_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
			).color
			item_A1_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
			).color
		}
	}

	// This block makes the stroke of the box thicker if the ink is a standard color.
	ink_A1.text = capitalizeSpaces(ink_A1.text)
	if (ink_A1.text === "Reflex Blue" || ink_A1.text === "Process Blue") {
		item_A1_frame.strokeWidth = 1
		item_A1_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	for (i = 0; i < standardInkNumber.length; i++) {
		if (pmsNumber_alpha === standardInkNumber[i]) {
			item_A1_frame.strokeWidth = 1
			item_A1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}
	}

	neonInk(ink_A1.text, "A1_Warning")

	if (ink_A1.text.length > 0) {
		screenCounter_A.push("One")
		item_A1_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_A1_Double.value === true) {
		var A1_DoubleBox = app.activeDocument.groupItems.getByName("Double_A1")
		A1_DoubleBox.hidden = false
	}

	//#endregion

	//#region     A2
	if (ink_A2.text.length > 0) {
		var pmsTest_A2 = false
		for (var index = 0; index < ink_A2.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_A2.text[index] === digitArray[i]) {
					pmsTest_A2 = true
					break
				}
			}
		}
	}

	if (pmsTest_A2 === true) {
		var gray = capitalizeSpaces(ink_A2.text)
		var grayArray = gray.split(" ")
		if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
			var grayName =
				"PANTONE" +
				" " +
				grayArray[0] +
				" " +
				grayArray[1] +
				" " +
				grayArray[2] +
				" " +
				"C"
			item_A2_name.contents = grayName
			item_A2_screenName.contents = grayName
			item_A2_color.fillColor =
				app.activeDocument.swatches.getByName(grayName).color
			item_A2_chip.fillColor =
				app.activeDocument.swatches.getByName(grayName).color
		} else {
			var kilo = ink_A2.text.search(" ")
			var pmsNumber_A2 = ink_A2.text.substring(0, kilo)
			var mike = ink_A2.text.substring(kilo)
			pmsNumber_A2 = pmsNumber_A2.replace(/,/g, "")
			item_A2_name.contents =
				"PANTONE" +
				" " +
				pmsNumber_A2 +
				" " +
				"C" +
				"  " +
				capitalizeSpaces(mike)
			item_A2_screenName.contents = pmsNumber_A2 + " " + capitalizeSpaces(mike)
			item_A2_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + pmsNumber_A2 + " " + "C"
			).color
			item_A2_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + pmsNumber_A2 + " " + "C"
			).color
		}
	}

	// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
	if (pmsTest_A2 === false) {
		if (ink_A2.text === "white") {
			item_A2_name.contents = "White"
			item_A2_screenName.contents = "White"
			item_A2_color.fillColor = newSpotColor
			item_A2_chip.fillColor = newSpotColor
			item_A2_frame.strokeWidth = 1
		} else if (ink_A2.text === "black") {
			item_A2_name.contents = "Black"
			item_A2_screenName.contents = "Black"
			item_A2_color.fillColor = newSpotBlack
			item_A2_chip.fillColor = newSpotBlack
			item_A2_frame.strokeWidth = 1
		} else if (ink_A2.text === "Yellow") {
			item_A2_name.contents = "PANTONE Yellow C"
			item_A2_screenName.contents = "PANTONE Yellow C"
			item_A2_color.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A2_chip.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A2_frame.strokeWidth = 1
		} else {
			item_A2_name.contents =
				"PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
			item_A2_screenName.contents = capitalizeSpaces(ink_A2.text)
			item_A2_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
			).color
			item_A2_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
			).color
		}
	}

	// This block makes the stroke of the box thicker if the ink is a standard color.
	ink_A2.text = capitalizeSpaces(ink_A2.text)
	if (ink_A2.text === "Reflex Blue" || ink_A2.text === "Process Blue") {
		item_A2_frame.strokeWidth = 1
		item_A2_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	neonInk(ink_A2.text, "A2_Warning")

	for (i = 0; i < standardInkNumber.length; i++) {
		if (pmsNumber_A2 === standardInkNumber[i]) {
			item_A2_frame.strokeWidth = 1
			item_A2_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}
	}
	if (ink_A2.text.length > 0) {
		screenCounter_A.push("Two")
		item_A2_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_A2_Double.value === true) {
		var A2_DoubleBox = app.activeDocument.groupItems.getByName("Double_A2")
		A2_DoubleBox.hidden = false
	}
	//#endregion

	//#region     A3
	if (ink_A3.text.length > 0) {
		var pmsTest_A3 = false
		for (var index = 0; index < ink_A3.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_A3.text[index] === digitArray[i]) {
					pmsTest_A3 = true
					break
				}
			}
		}
	}

	if (pmsTest_A3 === true) {
		var gray = capitalizeSpaces(ink_A3.text)
		var grayArray = gray.split(" ")
		if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
			var grayName =
				"PANTONE" +
				" " +
				grayArray[0] +
				" " +
				grayArray[1] +
				" " +
				grayArray[2] +
				" " +
				"C"
			item_A3_name.contents = grayName
			item_A3_screenName.contents = grayName
			item_A3_color.fillColor =
				app.activeDocument.swatches.getByName(grayName).color
			item_A3_chip.fillColor =
				app.activeDocument.swatches.getByName(grayName).color
		} else {
			var kilo = ink_A3.text.search(" ")
			var pmsNumberA3 = ink_A3.text.substring(0, kilo)
			var mike = ink_A3.text.substring(kilo)
			pmsNumberA3 = pmsNumberA3.replace(/,/g, "")
			item_A3_name.contents =
				"PANTONE" +
				" " +
				pmsNumberA3 +
				" " +
				"C" +
				"  " +
				capitalizeSpaces(mike)
			item_A3_screenName.contents = pmsNumberA3 + " " + capitalizeSpaces(mike)
			item_A3_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + pmsNumberA3 + " " + "C"
			).color
			item_A3_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + pmsNumberA3 + " " + "C"
			).color
		}
	}

	// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
	if (pmsTest_A3 === false) {
		if (ink_A3.text === "white") {
			item_A3_name.contents = "White"
			item_A3_screenName.contents = "White"
			item_A3_color.fillColor = newSpotColor
			item_A3_chip.fillColor = newSpotColor
			item_A3_frame.strokeWidth = 1
		} else if (ink_A3.text === "black") {
			item_A3_name.contents = "Black"
			item_A3_screenName.contents = "Black"
			item_A3_color.fillColor = newSpotBlack
			item_A3_chip.fillColor = newSpotBlack
			item_A3_frame.strokeWidth = 1
			item_A3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else if (ink_A3.text === "Yellow") {
			item_A3_name.contents = "PANTONE Yellow C"
			item_A3_screenName.contents = "PANTONE Yellow C"
			item_A3_color.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A3_chip.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A3_frame.strokeWidth = 1
			item_A3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else {
			item_A3_name.contents =
				"PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
			item_A3_screenName.contents = capitalizeSpaces(ink_A3.text)
			item_A3_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
			).color
			item_A3_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
			).color
		}
	}

	// This block makes the stroke of the box thicker if the ink is a standard color.
	ink_A3.text = capitalizeSpaces(ink_A3.text)
	if (ink_A3.text === "Reflex Blue" || ink_A3.text === "Process Blue") {
		item_A3_frame.strokeWidth = 1
		item_A3_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	neonInk(ink_A3.text, "A3_Warning")

	for (i = 0; i < standardInkNumber.length; i++) {
		if (pmsNumberA3 === standardInkNumber[i]) {
			item_A3_frame.strokeWidth = 1
			item_A3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}
	}
	if (ink_A3.text.length > 0) {
		screenCounter_A.push("Three")
		item_A3_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_A3_Double.value === true) {
		var A3_DoubleBox = app.activeDocument.groupItems.getByName("Double_A3")
		A3_DoubleBox.hidden = false
	}
	//#endregion

	//#region     A4
	if (ink_A4.text.length > 0) {
		var pmsTest_A4 = false
		for (var index = 0; index < ink_A4.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_A4.text[index] === digitArray[i]) {
					pmsTest_A4 = true
					break
				}
			}
		}
	}

	if (pmsTest_A4 === true) {
		var gray = capitalizeSpaces(ink_A4.text)
		var grayArray = gray.split(" ")
		if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
			var grayName =
				"PANTONE" +
				" " +
				grayArray[0] +
				" " +
				grayArray[1] +
				" " +
				grayArray[2] +
				" " +
				"C"
			item_A4_name.contents = grayName
			item_A4_screenName.contents = grayName
			item_A4_color.fillColor =
				app.activeDocument.swatches.getByName(grayName).color
			item_A4_chip.fillColor =
				app.activeDocument.swatches.getByName(grayName).color
		} else {
			var kilo = ink_A4.text.search(" ")
			var pmsNumberA4 = ink_A4.text.substring(0, kilo)
			var mike = ink_A4.text.substring(kilo)
			pmsNumberA4 = pmsNumberA4.replace(/,/g, "")
			item_A4_name.contents =
				"PANTONE" +
				" " +
				pmsNumberA4 +
				" " +
				"C" +
				"  " +
				capitalizeSpaces(mike)
			item_A4_screenName.contents = pmsNumberA4 + " " + capitalizeSpaces(mike)
			item_A4_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + pmsNumberA4 + " " + "C"
			).color
			item_A4_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + pmsNumberA4 + " " + "C"
			).color
		}
	}

	// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
	if (pmsTest_A4 === false) {
		if (ink_A4.text === "white") {
			item_A4_name.contents = "White"
			item_A4_screenName.contents = "White"
			item_A4_color.fillColor = newSpotColor
			item_A4_chip.fillColor = newSpotColor
			item_A4_frame.strokeWidth = 1
		} else if (ink_A4.text === "black") {
			item_A4_name.contents = "Black"
			item_A4_screenName.contents = "Black"
			item_A4_color.fillColor = newSpotBlack
			item_A4_chip.fillColor = newSpotBlack
			item_A4_frame.strokeWidth = 1
			item_A4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else if (ink_A4.text === "Yellow") {
			item_A4_name.contents = "PANTONE Yellow C"
			item_A4_screenName.contents = "PANTONE Yellow C"
			item_A4_color.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A4_chip.fillColor =
				app.activeDocument.swatches.getByName("PANTONE Yellow C").color
			item_A4_frame.strokeWidth = 1
			item_A4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		} else {
			item_A4_name.contents =
				"PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
			item_A4_screenName.contents = capitalizeSpaces(ink_A4.text)
			item_A4_color.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
			).color
			item_A4_chip.fillColor = app.activeDocument.swatches.getByName(
				"PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
			).color
		}
	}

	// This block makes the stroke of the box thicker if the ink is a standard color.
	ink_A4.text = capitalizeSpaces(ink_A4.text)
	if (ink_A4.text === "Reflex Blue" || ink_A4.text === "Process Blue") {
		item_A4_frame.strokeWidth = 1
		item_A4_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	neonInk(ink_A4.text, "A4_Warning")

	for (i = 0; i < standardInkNumber.length; i++) {
		if (pmsNumberA4 === standardInkNumber[i]) {
			item_A4_frame.strokeWidth = 1
			item_A4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}
	}
	if (ink_A4.text.length > 0) {
		screenCounter_A.push("Four")
		item_A4_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_A4_Double.value === true) {
		var A4_DoubleBox = app.activeDocument.groupItems.getByName("Double_A4")
		A4_DoubleBox.hidden = false
	}
	//#endregion

	//#region     C1
	if (ink_C1.text.length > 0) {
		var pmsTest_C1 = false
		for (var index = 0; index < ink_C1.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_C1.text[index] === digitArray[i]) {
					pmsTest_C1 = true
					break
				}
			}
		}

		if (pmsTest_C1 === true) {
			var gray = capitalizeSpaces(ink_C1.text)
			var grayArray = gray.split(" ")
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C"
				item_C1_name.contents = grayName
				item_C1_screenName.contents = grayName
				item_C1_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
				item_C1_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
			} else {
				var kilo = ink_C1.text.search(" ")
				var pmsNumberC1 = ink_C1.text.substring(0, kilo)
				var mike = ink_C1.text.substring(kilo)
				pmsNumberC1 = pmsNumberC1.replace(/,/g, "")
				item_C1_name.contents =
					"PANTONE" +
					" " +
					pmsNumberC1 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike)
				item_C1_screenName.contents = pmsNumberC1 + " " + capitalizeSpaces(mike)
				item_C1_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC1 + " " + "C"
				).color
				item_C1_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC1 + " " + "C"
				).color
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_C1 === false) {
			if (ink_C1.text === "white") {
				item_C1_name.contents = "White"
				item_C1_screenName.contents = "White"
				item_C1_color.fillColor = newSpotColor
				item_C1_chip.fillColor = newSpotColor
				item_C1_frame.strokeWidth = 1
			} else if (ink_C1.text === "black") {
				item_C1_name.contents = "Black"
				item_C1_screenName.contents = "Black"
				item_C1_color.fillColor = newSpotBlack
				item_C1_chip.fillColor = newSpotBlack
				item_C1_frame.strokeWidth = 1
				item_C1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else if (ink_C1.text === "Yellow") {
				item_C1_name.contents = "PANTONE Yellow C"
				item_C1_screenName.contents = "PANTONE Yellow C"
				item_C1_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C1_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C1_frame.strokeWidth = 1
				item_C1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else {
				item_C1_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
				item_C1_screenName.contents = capitalizeSpaces(ink_C1.text)
				item_C1_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
				).color
				item_C1_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
				).color
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_C1.text = capitalizeSpaces(ink_C1.text)
		if (ink_C1.text === "Reflex Blue" || ink_C1.text === "Process Blue") {
			item_C1_frame.strokeWidth = 1
			item_C1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}

		neonInk(ink_C1.text, "C1_Warning")

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumberC1 === standardInkNumber[i]) {
				item_C1_frame.strokeWidth = 1
				item_C1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			}
		}
	}
	if (ink_C1.text.length > 0) {
		screenCounter_C.push(1)
		item_C1_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_C1_Double.value === true) {
		var C1_DoubleBox = app.activeDocument.groupItems.getByName("Double_C1")
		C1_DoubleBox.hidden = false
	}
	//#endregion

	//#region     C2
	if (ink_C2.text.length > 0) {
		var pmsTest_C2 = false
		for (var index = 0; index < ink_C2.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_C2.text[index] === digitArray[i]) {
					pmsTest_C2 = true
					break
				}
			}
		}

		if (pmsTest_C2 === true) {
			var gray = capitalizeSpaces(ink_C2.text)
			var grayArray = gray.split(" ")
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C"
				item_C2_name.contents = grayName
				item_C2_screenName.contents = grayName
				item_C2_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
				item_C2_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
			} else {
				var kilo = ink_C2.text.search(" ")
				var pmsNumberC2 = ink_C2.text.substring(0, kilo)
				var mike = ink_C2.text.substring(kilo)
				pmsNumberC2 = pmsNumberC2.replace(/,/g, "")
				item_C2_name.contents =
					"PANTONE" +
					" " +
					pmsNumberC2 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike)
				item_C2_screenName.contents = pmsNumberC2 + " " + capitalizeSpaces(mike)
				item_C2_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC2 + " " + "C"
				).color
				item_C2_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC2 + " " + "C"
				).color
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_C2 === false) {
			if (ink_C2.text === "white") {
				item_C2_name.contents = "White"
				item_C2_screenName.contents = "White"
				item_C2_color.fillColor = newSpotColor
				item_C2_chip.fillColor = newSpotColor
				item_C2_frame.strokeWidth = 1
				item_C2_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else if (ink_C2.text === "black") {
				item_C2_name.contents = "Black"
				item_C2_screenName.contents = "Black"
				item_C2_color.fillColor = newSpotBlack
				item_C2_chip.fillColor = newSpotBlack
				item_C2_frame.strokeWidth = 1
			} else if (ink_C2.text === "Yellow") {
				item_C2_name.contents = "PANTONE Yellow C"
				item_C2_screenName.contents = "PANTONE Yellow C"
				item_C2_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C2_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C2_frame.strokeWidth = 1
				item_C2_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else {
				item_C2_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
				item_C2_screenName.contents = capitalizeSpaces(ink_C2.text)
				item_C2_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
				).color
				item_C2_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
				).color
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_C2.text = capitalizeSpaces(ink_C2.text)
		if (ink_C2.text === "Reflex Blue" || ink_C2.text === "Process Blue") {
			item_C2_frame.strokeWidth = 1
			item_C2_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}

		neonInk(ink_C2.text, "C2_Warning")

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumberC2 === standardInkNumber[i]) {
				item_C2_frame.strokeWidth = 1
				item_C2_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			}
		}
	}
	if (ink_C2.text.length > 0) {
		screenCounter_C.push(1)
		item_C2_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_C2_Double.value === true) {
		var C2_DoubleBox = app.activeDocument.groupItems.getByName("Double_C2")
		C2_DoubleBox.hidden = false
	}
	//#endregion

	//#region     C3
	if (ink_C3.text.length > 0) {
		var pmsTest_C3 = false
		for (var index = 0; index < ink_C3.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_C3.text[index] === digitArray[i]) {
					pmsTest_C3 = true
					break
				}
			}
		}

		if (pmsTest_C3 === true) {
			var gray = capitalizeSpaces(ink_C1.text)
			var grayArray = gray.split(" ")
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C"
				item_C3_name.contents = grayName
				item_C3_screenName.contents = grayName
				item_C3_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
				item_C3_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
			} else {
				var kilo = ink_C3.text.search(" ")
				var pmsNumberC3 = ink_C3.text.substring(0, kilo)
				var mike = ink_C3.text.substring(kilo)
				pmsNumberC3 = pmsNumberC3.replace(/,/g, "")
				item_C3_name.contents =
					"PANTONE" +
					" " +
					pmsNumberC3 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike)
				item_C3_screenName.contents = pmsNumberC3 + " " + capitalizeSpaces(mike)
				item_C3_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC3 + " " + "C"
				).color
				item_C3_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC3 + " " + "C"
				).color
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_C3 === false) {
			if (ink_C3.text === "white") {
				item_C3_name.contents = "White"
				item_C3_screenName.contents = "White"
				item_C3_color.fillColor = newSpotColor
				item_C3_chip.fillColor = newSpotColor
				item_C3_frame.strokeWidth = 1
				item_C3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else if (ink_C3.text === "black") {
				item_C3_name.contents = "Black"
				item_C3_screenName.contents = "Black"
				item_C3_color.fillColor = newSpotBlack
				item_C3_chip.fillColor = newSpotBlack
				item_C3_frame.strokeWidth = 1
				item_C3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else if (ink_C3.text === "Yellow") {
				item_C3_name.contents = "PANTONE Yellow C"
				item_C3_screenName.contents = "PANTONE Yellow C"
				item_C3_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C3_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C3_frame.strokeWidth = 1
				item_C3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else {
				item_C3_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
				item_C3_screenName.contents = capitalizeSpaces(ink_C3.text)
				item_C3_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
				).color
				item_C3_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
				).color
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_C3.text = capitalizeSpaces(ink_C3.text)
		if (ink_C3.text === "Reflex Blue" || ink_C3.text === "Process Blue") {
			item_C3_frame.strokeWidth = 1
			item_C3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}

		neonInk(ink_C3.text, "C3_Warning")

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumberC3 === standardInkNumber[i]) {
				item_C3_frame.strokeWidth = 1
				item_C3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			}
		}
	}
	if (ink_C3.text.length > 0) {
		screenCounter_C.push(1)
		item_C3_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (ink_C3_Double.value === true) {
		var C3_DoubleBox = app.activeDocument.groupItems.getByName("Double_C3")
		C3_DoubleBox.hidden = false
	}
	//#endregion

	//#region     C4
	function bodyColor_function() {
		var bodyColorAlpha = app.activeDocument.layers
			.getByName("Body Colors")
			.layers.getByName(bodyColorList.selection.text)
		bodyColorAlpha.visible = true
	}
	if (ink_C4.text.length > 0) {
		var pmsTest_C4 = false
		for (var index = 0; index < ink_C4.text.length; index++) {
			for (i = 0; i < digitArray.length; i++) {
				if (ink_C4.text[index] === digitArray[i]) {
					pmsTest_C4 = true
					break
				}
			}
		}

		if (pmsTest_C4 === true) {
			var gray = capitalizeSpaces(ink_C4.text)
			var grayArray = gray.split(" ")
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C"
				item_C4_name.contents = grayName
				item_C4_screenName.contents = grayName
				item_C4_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
				item_C4_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color
			} else {
				var kilo = ink_C4.text.search(" ")
				var pmsNumberC4 = ink_C4.text.substring(0, kilo)
				var mike = ink_C4.text.substring(kilo)
				pmsNumberC4 = pmsNumberC4.replace(/,/g, "")
				item_C4_name.contents =
					"PANTONE" +
					" " +
					pmsNumberC4 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike)
				item_C4_screenName.contents = pmsNumberC4 + " " + capitalizeSpaces(mike)
				item_C4_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC4 + " " + "C"
				).color
				item_C4_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberC4 + " " + "C"
				).color
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_C4 === false) {
			if (ink_C4.text === "white") {
				item_C4_name.contents = "White"
				item_C4_screenName.contents = "White"
				item_C4_color.fillColor = newSpotColor
				item_C4_chip.fillColor = newSpotColor
				item_C4_frame.strokeWidth = 1
				item_C4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else if (ink_C4.text === "black") {
				item_C4_name.contents = "Black"
				item_C4_screenName.contents = "Black"
				item_C4_color.fillColor = newSpotBlack
				item_C4_chip.fillColor = newSpotBlack
				item_C4_frame.strokeWidth = 1
				item_C4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else if (ink_C4.text === "Yellow") {
				item_C4_name.contents = "PANTONE Yellow C"
				item_C4_screenName.contents = "PANTONE Yellow C"
				item_C4_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C4_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color
				item_C4_frame.strokeWidth = 1
				item_C4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			} else {
				item_C4_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
				item_C4_screenName.contents = capitalizeSpaces(ink_C4.text)
				item_C4_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
				).color
				item_C4_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
				).color
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_C4.text = capitalizeSpaces(ink_C4.text)
		if (ink_C4.text === "Reflex Blue" || ink_C4.text === "Process Blue") {
			item_C4_frame.strokeWidth = 1
			item_C4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color
		}

		neonInk(ink_C4.text, "C4_Warning")

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumberC4 === standardInkNumber[i]) {
				item_C4_frame.strokeWidth = 1
				item_C4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color
			}
		}
	}
	if (ink_C4.text.length > 0) {
		screenCounter_C.push(1)
		item_C4_frame.strokeColor =
			app.activeDocument.swatches.getByName("Black").color
	}

	if (bodyColorList.selection.index < 11) {
		bodyColor_function()
	}

	if (ink_C4_Double.value === true) {
		var C4_DoubleBox = app.activeDocument.groupItems.getByName("Double_C4")
		C4_DoubleBox.hidden = false
	}
	//#endregion
	//#endregion
}
//#endregion                      END   INK COLORS

//#region                                ORIGINAL ART
var item_OriginalArt_A = "original art side A"
var item_originalArt_C = "original art side C"
//#endregion

function totalItems_function() {
	var total = app.activeDocument.textFrames.getByName("Item Total")
	if (multiNumber.text === "Number") {
		total.contents = "1"
	} else {
		total.contents = multiNumber.text
	}
}

function designer_function() {
	var designer = app.activeDocument.textFrames.getByName("Designer")
	designer.contents = designerList.selection.text
	if (doubleSidedCheckbox.value === true) {
		var designerBack = app.activeDocument.textFrames.getByName("Designer_Back")
		designerBack.contents = designerList.selection.text
	}
}
function vip_function() {
	var vipBox = app.activeDocument.layers
		.getByName("Masque")
		.groupItems.getByName("VIP")
	if (vipCheckbox.value === true || rep.vip === true) {
		vipBox.hidden = false
	} else {
		vipBox.hidden = true
	}
}
function rush_function() {
	var rushBox = app.activeDocument.layers
		.getByName("Masque")
		.groupItems.getByName("Rush")
	if (rushCheckbox.value === true) {
		rushBox.hidden = false
	}
	if (rushCheckbox.value === false) {
		rushBox.hidden = true
	} else {
		rushBox.hidden = false
	}
}
function po_function() {
	var purchaseOrder = app.activeDocument.textFrames.getByName("PO")
	purchaseOrder.contents = poNumber_edit.text
}

function originalFile_function() {
	var originalFile = app.activeDocument.textFrames.getByName("Original Art")
	originalFile.contents = originalArt_edit.text
}
function notes_function() {
	var notes = app.activeDocument.textFrames.getByName("Notes text")
	notes.contents = descriptionBox_edit.text + "    " + notes_edit.text
}
function currentDate() {
	var currentDate = new Date()
	var date = currentDate.toDateString()
	var date_A = date.split(" ")
	var date_B = date_A[0] + ", " + date_A[1] + " " + date_A[2] + ", " + date_A[3]
	return date_B
}
function proofDate() {
	var proofDate = app.activeDocument.textFrames.getByName("DateBox")
	proofDate.contents = currentDate()
}
function backDate() {
	if (doubleSidedCheckbox.value === true) {
		var dateBoxBack = app.activeDocument.textFrames.getByName("DateBox_Back")
		dateBoxBack.contents = currentDate()
	}
}
function ship_function() {
	var ship = app.activeDocument.textFrames.getByName("Ship Date")
	ship.contents = capitalizeSpaces(shipDate_edit.text)
}
function InHands_function() {
	var inHands = app.activeDocument.textFrames.getByName("In Hands Date")
	inHands.contents = capitalizeSpaces(inHandsDate_edit.text)
}
function JDE_function() {
	var jde = app.activeDocument.textFrames.getByName("jde number")
	jde.contents = jdeNumber_edit.text
	if (doubleSidedCheckbox.value === true) {
		var jdeBack = app.activeDocument.textFrames.getByName("jde number_Back")
		jdeBack.contents = jdeNumber_edit.text
	}
}

function repInfo() {
	if (
		bodyColorList.selection.index === 11 ||
		bodyColorList.selection.index === 12
	) {
		var repFront = app.activeDocument.textFrames.getByName("Rep")
		repFront.contents = rep.name + "     " + rep.email

		var reducedRep = app.activeDocument.textFrames.getByName("Rep")
		if (repFront.contents.length > 50) {
			reducedRep.textRange.characterAttributes.size = 9
			reducedRep.textRange.characterAttributes.baselineShift = -1
		}

		if (doubleSidedCheckbox.value === true) {
			var repBack = app.activeDocument.textFrames.getByName("Rep_Back")
			repBack.contents = rep.name + "     " + rep.email

			var POBack = app.activeDocument.textFrames.getByName("PO_Back")
			POBack.contents = poNumber_edit.text
			if (POBack === null) {
				POBack.contents = webPrefix.selection.text + webNumber_edit.text
			}
		}
	}
}
function description(bodyColorLayer) {
	var bodyColorLayer = descriptionBox_edit.text
	bodyColorLayer = bodyColorLayer.toLowerCase()
	bodyColorLayer = bodyColorLayer.split(" ")
	for (var i = 0; i < bodyColorLayer.length; i++) {
		bodyColorLayer[i] =
			bodyColorLayer[i].charAt(0).toUpperCase() + bodyColorLayer[i].slice(1)
	}
	return bodyColorLayer.join("")
}
function nineZeroes_Function() {
	var zeroArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
	var a = webNumber_edit.text.split("")
	var nineZeroes_alpha = zeroArray.concat(a)
	for (var i = 0; i < nineZeroes_alpha.length; i++) {
		if (nineZeroes_alpha.length > 9) {
			nineZeroes_alpha.shift()
		}
	}
	return nineZeroes_alpha.join("")
}
function capitalize(u) {
	u = u.toLowerCase()
	u = u.split(" ")
	for (var i = 0; i < u.length; i++) {
		u[i] = u[i].charAt(0).toUpperCase() + u[i].slice(1)
	}
	return u.join("")
}
function capitalizeSpaces(n) {
	n = n.toLowerCase()
	n = n.split(" ")
	for (var i = 0; i < n.length; i++) {
		n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1)
	}
	return n.join(" ")
}
function magento() {
	if (rep.nationality === "US") {
		return "USLOG" + nineZeroes_Function()
	} else {
		return "CAENLOG" + nineZeroes_Function()
	}
}
function prefix() {
	if (mockupCheckbox.value === true) return "MOCKUP"
	if (jdeNumber_edit.text.length > 0) {
		return jdeNumber_edit.text
	} else {
		return magento()
	}
}

function filenameOutput() {
	if (bodyColorList.selection.index < 14) {
		var illustratorFrame = [
			"FileName",
			"A1 Screen FileName",
			"A2 Screen FileName",
			"A3 Screen FileName",
			"A4 Screen FileName",
			"C1 Screen FileName",
			"C2 Screen FileName",
			"C3 Screen FileName",
			"C4 Screen FileName",
		]

		for (i = 0; i < illustratorFrame.length; i++) {
			var filenameOutput_One = app.activeDocument.textFrames.getByName(
				illustratorFrame[i]
			)
			filenameOutput_One.contents = fileName_One
		}
	}
}

function web_function() {
	var web = app.activeDocument.textFrames.getByName("Web")
	if (mockupCheckbox.value === true) {
		web.contents = " "
	} else if (jdeNumber_edit.text.length < 1) {
		web.contents = magento()
	}
}

function mockup_function() {
	if (mockupCheckbox.value === false) {
		app.activeDocument.layers.getByName("Mockup").visible = true
		app.activeDocument.layers.getByName("Mockup").remove()
	} else {
		app.activeDocument.layers.getByName("Mockup").visible = true
	}
}

function layerRemover() {
	var emptyLayers = []
	getEmptyLayers(doc, emptyLayers)
	for (var i = 0; i < emptyLayers.length; i++) {
		emptyLayers[i].visible = true
		emptyLayers[i].remove()
	}
}
function getEmptyLayers(container, arr) {
	var layers = container.layers
	for (var ii = 0; ii < layers.length; ii++) {
		try {
			var ilayer = layers[ii]
			ilayer.canDelete = true
			if (ilayer.layers.length > 0) {
				getEmptyLayers(ilayer, arr)
			}
			if (ilayer.pageItems.length == 0 && ilayer.canDelete) {
				arr.push(ilayer)
			} else {
				ilayer.canDelete = false
				container.canDelete = false
			}
		} catch (e) {}
	}
}

function generic_function() {
	if (nationalityCanada.value === true && genericCheckbox.value === false) {
		app.activeDocument.groupItems.getByName(
			"Canada_GenericGroup"
		).visible = true
		app.activeDocument.groupItems.getByName("Canada_GenericGroup").remove()
		app.activeDocument.groupItems.getByName("Canada_Group").hidden = false
		//layerRemover()
	}

	if (nationalityCanada.value === true && genericCheckbox.value === true) {
		app.activeDocument.groupItems.getByName("Canada_Group").visible = true
		app.activeDocument.groupItems.getByName("Canada_Group").remove()
		app.activeDocument.groupItems.getByName(
			"Canada_GenericGroup"
		).visible = true
		/*           if(bodyColorList.selection.index < 14) {
               layerRemover()
          } */
	}

	if (nationalityUS.value === true && genericCheckbox.value === false) {
		app.activeDocument.groupItems.getByName("USA_GenericGroup").visible = true
		app.activeDocument.groupItems.getByName("USA_GenericGroup").remove()
		app.activeDocument.groupItems.getByName("USA_Group").visible = true
		/*           if(bodyColorList.selection.index < 14) {
               layerRemover()
          } */
	}

	if (nationalityUS.value === true && genericCheckbox.value === true) {
		app.activeDocument.groupItems.getByName("USA_Group").visible = true
		app.activeDocument.groupItems.getByName("USA_Group").remove()
		app.activeDocument.groupItems.getByName("USA_GenericGroup").hidden = false;
		/*         if(bodyColorList.selection.index < 14) {
               layerRemover()
          } */
	}
}

//#region     FILENAME

var fileName_One;

if (bodyColorList.selection < 10) {
	fileName_One = prefix() + "_" + capitalize(descriptionBox_edit.text) + "_A"
	if (multi.value === true && multi_bodyColor.value === true) {
		fileName_One =
			prefix() +
			"_" +
			capitalize(descriptionBox_edit.text) +
			"_" +
			bodyColorList.selection.text +
			"_01_A"
	}
	if (multi.value === true && multi_itemNumber.value === true) {
		fileName_One =
			prefix() + "_" + capitalize(descriptionBox_edit.text) + "_01_A"
	}
}

if (bodyColorList.selection == 11) {
	// Dark Assort
	if (multi.value === false) {
		fileName_One =
			prefix() + "_" + capitalize(descriptionBox_edit.text) + "_DarkAssort_A"
	} else {
		fileName_One =
			prefix() + "_" + capitalize(descriptionBox_edit.text) + "_DarkAssort_01_A"

		var reducedSize = app.activeDocument.textFrames.getByName("FileName")
		reducedSize.textRange.characterAttributes.size = 6
		reducedSize.textRange.characterAttributes.baselineShift = -3
	}
}

if (bodyColorList.selection == 12) {
	//Light Assort
	if (multi.value === false) {
		fileName_One =
			prefix() +
			"_" +
			capitalize(descriptionBox_edit.text) +
			"_LightAssort_01_A"
	} else {
		fileName_One =
			prefix() +
			"_" +
			capitalize(descriptionBox_edit.text) +
			"_LightAssort_01_A"
		var reducedSize = app.activeDocument.textFrames.getByName("FileName")
		reducedSize.textRange.characterAttributes.size = 6
		reducedSize.textRange.characterAttributes.baselineShift = -3
	}
}

if (bodyColorList.selection == 14) {
	// Sleeve
	if (multi.value === true) {
		fileName_One =
			"SLEEVE_" +
			prefix() +
			"_" +
			capitalize(descriptionBox_edit.text) +
			"_01_A"
	} else {
		fileName_One =
			"SLEEVE_" + prefix() + "_" + capitalize(descriptionBox_edit.text) + "_A"
	}
} else if (bodyColorList.selection == 14 && multi.value === true) {
	fileName_One =
		"SLEEVE_" + prefix() + "_" + capitalize(descriptionBox_edit.text) + "_01_A"
}





//#endregion

//#region     FUNCTION CALLS
repInfo()
totalItems_function()
generic_function()
mockup_function()
vip_function()
rush_function()
po_function()
JDE_function()
web_function()
InHands_function()
ship_function()
originalFile_function()
notes_function()
designer_function()
proofDate()
backDate()
filenameOutput()

//#endregion

//#region     DARK ASSORTMENT DEFAULT INK COLOR
//If no color is entered in the A1 ink color field and a dark assortment is selected from the body color list, the ink color is set to white ink.
if (
	bodyColorList.selection.index == 11 &&
	doubleSidedCheckbox.value === false
) {
	if (ink_A1.text.length < 1) {
		var lightAssortInk = app.activeDocument.textFrames.getByName(
			"A1 Screen Ink Color"
		)
		lightAssortInk.contents = "White"
		item_A1_name.contents = "White"
		item_A1_screenName.contents = "White"
		item_A1_color.fillColor = newSpotColor
		item_A1_chip.fillColor = newSpotColor
		item_A1_frame.strokeWidth = 1
	}
}
//#endregion

//#region     LIGHT ASSORTMENT DEFAULT INK COLOR
//If no color is entered in the A1 ink color field and a light assortment is selected from the body color list, the ink color is set to black ink.

if (bodyColorList.selection.index === 12 && doubleSidedCheckbox.value === false)
	if (ink_A1.text.length < 1) {
		var lightAssortInk = app.activeDocument.textFrames.getByName(
			"A1 Screen Ink Color"
		)
		lightAssortInk.contents = "Black"
		item_A1_name.contents = "Black"
		item_A1_screenName.contents = "Black"
		item_A1_color.fillColor = newBlack
		item_A1_chip.fillColor = newBlack
		item_A1_frame.strokeWidth = 1

		if (ink_A2.text.length < 1) {
			app.activeDocument.groupItems.getByName("Screen2").remove()
		}
		if (ink_A3.text.length < 1) {
			app.activeDocument.groupItems.getByName("Screen3").remove()
		}
		if (ink_A4.text.length < 1) {
			app.activeDocument.groupItems.getByName("Screen4").remove()
		}
	}

//#endregion

//#region         DOUBLE SIDED ASSORTMENTS
if (
	bodyColorList.selection.index === 11 || bodyColorList.selection.index === 12 && doubleSidedCheckbox.value == true)
 {
	//If the Double Sided checkbox is checked, this block runs.
	var A1_Name_Back = app.activeDocument.textFrames.getByName("A1_Name_Back")
	var A2_Name_Back = app.activeDocument.textFrames.getByName("A2_Name_Back")
	var A3_Name_Back = app.activeDocument.textFrames.getByName("A3_Name_Back")
	var A4_Name_Back = app.activeDocument.textFrames.getByName("A4_Name_Back")

	var C1_Name_Back = app.activeDocument.textFrames.getByName("C1_Name_Back")
	var C2_Name_Back = app.activeDocument.textFrames.getByName("C2_Name_Back")
	var C3_Name_Back = app.activeDocument.textFrames.getByName("C3_Name_Back")
	var C4_Name_Back = app.activeDocument.textFrames.getByName("C4_Name_Back")

	var A1_Color_Back = app.activeDocument.pathItems.getByName("A1_Color_Back")
	var A2_Color_Back = app.activeDocument.pathItems.getByName("A2_Color_Back")
	var A3_Color_Back = app.activeDocument.pathItems.getByName("A3_Color_Back")
	var A4_Color_Back = app.activeDocument.pathItems.getByName("A4_Color_Back")

	var C1_Color_Back = app.activeDocument.pathItems.getByName("C1_Color_Back")
	var C2_Color_Back = app.activeDocument.pathItems.getByName("C2_Color_Back")
	var C3_Color_Back = app.activeDocument.pathItems.getByName("C3_Color_Back")
	var C4_Color_Back = app.activeDocument.pathItems.getByName("C4_Color_Back")

	var A1_Frame_Back = app.activeDocument.pathItems.getByName("A1_Frame_Back")
	var A2_Frame_Back = app.activeDocument.pathItems.getByName("A2_Frame_Back")
	var A3_Frame_Back = app.activeDocument.pathItems.getByName("A3_Frame_Back")
	var A4_Frame_Back = app.activeDocument.pathItems.getByName("A4_Frame_Back")

	var C1_Frame_Back = app.activeDocument.pathItems.getByName("C1_Frame_Back")
	var C2_Frame_Back = app.activeDocument.pathItems.getByName("C2_Frame_Back")
	var C3_Frame_Back = app.activeDocument.pathItems.getByName("C3_Frame_Back")
	var C4_Frame_Back = app.activeDocument.pathItems.getByName("C4_Frame_Back")

	A1_Name_Back.contents = ink_A1.text
	A2_Name_Back.contents = ink_A2.text
	A3_Name_Back.contents = ink_A3.text
	A4_Name_Back.contents = ink_A4.text

	C1_Name_Back.contents = ink_C1.text
	C2_Name_Back.contents = ink_C2.text
	C3_Name_Back.contents = ink_C3.text
	C4_Name_Back.contents = ink_C4.text

	A1_Color_Back.fillColor = item_A1_color.fillColor
	A2_Color_Back.fillColor = item_A2_color.fillColor
	A3_Color_Back.fillColor = item_A3_color.fillColor
	A4_Color_Back.fillColor = item_A4_color.fillColor

	C1_Color_Back.fillColor = item_C1_color.fillColor
	C2_Color_Back.fillColor = item_C2_color.fillColor
	C3_Color_Back.fillColor = item_C3_color.fillColor
	C4_Color_Back.fillColor = item_C4_color.fillColor

	A1_Frame_Back.strokeWidth = item_A1_frame.strokeWidth
	A2_Frame_Back.strokeWidth = item_A2_frame.strokeWidth
	A3_Frame_Back.strokeWidth = item_A3_frame.strokeWidth
	A4_Frame_Back.strokeWidth = item_A4_frame.strokeWidth

     A1_Frame_Back.strokeColor = item_A1_frame.strokeColor
	A2_Frame_Back.strokeColor = item_A2_frame.strokeColor
	A3_Frame_Back.strokeColor = item_A3_frame.strokeColor
	A4_Frame_Back.strokeColor = item_A4_frame.strokeColor

	C1_Frame_Back.strokeWidth = item_C1_frame.strokeWidth
	C2_Frame_Back.strokeWidth = item_C2_frame.strokeWidth
	C3_Frame_Back.strokeWidth = item_C3_frame.strokeWidth
	C4_Frame_Back.strokeWidth = item_C4_frame.strokeWidth

     C1_Frame_Back.strokeColor = item_C1_frame.strokeColor
	C2_Frame_Back.strokeColor = item_C2_frame.strokeColor
	C3_Frame_Back.strokeColor = item_C3_frame.strokeColor
	C4_Frame_Back.strokeColor = item_C4_frame.strokeColor

	app.activeDocument.textFrames.getByName("FileName_Back").contents =
		fileName_One
	app.activeDocument.textFrames.getByName("jde number_Back").contents =
		jdeNumber_edit.text
	app.activeDocument.textFrames.getByName("PO_Back").contents =
		poNumber_edit.text
	app.activeDocument.textFrames.getByName("Web_Back").contents =
		webNumber_edit.text

	var repBack = app.activeDocument.textFrames.getByName("Rep_Back")
	repBack.contents = rep.name + "     " + rep.email

	var companyBack = app.activeDocument.textFrames.getByName("Company_Back")
	companyBack.contents = rep.company

	var repSignatureBack = app.activeDocument.textFrames.getByName(
		"RepName_Signature_Back"
	)
	repSignatureBack.contents = rep.name

	var shipDateBack = app.activeDocument.textFrames.getByName("Ship Date_Back")
	shipDateBack.contents = shipDate_edit.text

	var inHandsDateBack =
		app.activeDocument.textFrames.getByName("In Hands Date_Back")
	inHandsDateBack.contents = inHandsDate_edit.text
}
//#endregion

//#region     SLEEVE

if (bodyColorList.selection.index === 14) {
	var alphaFileName = app.activeDocument.textFrames.getByName("FileName")
	alphaFileName.contents = fileName_One
}

//#endregion

//#region SPECIAL INSTRUCTIONS
var instructionsArrow = app.activeDocument.groupItems.getByName(
	"Special Instructions Arrow"
)
instructionsArrow.hidden = true;

var customer_instructions = app.activeDocument.textFrames.getByName(
	"Customer Instructions"
)
var customerService_instructions = app.activeDocument.textFrames.getByName(
	"Customer Service Instructions"
)
var production_instructions = app.activeDocument.textFrames.getByName(
	"Production Instructions"
)

if (doubleSidedCheckbox.value === true) {
	if (
		//none of the boxes have text.
		instructionsCustomer_edit.text.length < 1 &&
		instructionsProduction_edit.text.length < 1 &&
		instructionsCustomerService_edit.text.length < 1
	) {
		var SILayer = app.activeDocument.layers.getByName("Special Instructions")
		SILayer.visible = true
		SILayer.remove()
		instructionsArrow.remove()
	}

	if (
		//  if all 3 of the boxes have text.
		instructionsCustomer_edit.text.length > 0 &&
		instructionsProduction_edit.text.length > 0 &&
		instructionsCustomerService_edit.text.length > 0
	) {
		app.activeDocument.groupItems.getByName("Special Instructions").remove()
		app.activeDocument.groupItems
			.getByName("Customer Service - Production")
			.remove()
		app.activeDocument.groupItems
			.getByName("Customer - Customer Service")
			.remove()
		app.activeDocument.groupItems.getByName("Customer - Production").remove()
		app.activeDocument.textFrames.getByName("Customer Instructions").contents =
			instructionsCustomer_edit.text
		app.activeDocument.textFrames.getByName("Customer Instructions").contents =
			instructionsCustomer_edit.text
		app.activeDocument.textFrames.getByName(
			"Production Instructions"
		).contents = instructionsProduction_edit.text
		app.activeDocument.textFrames.getByName(
			"Customer Service Instructions"
		).contents = instructionsCustomerService_edit.text
	}

	if (
		//  if only the CUSTOMER box has text.
		instructionsCustomer_edit.text.length > 0 &&
		instructionsProduction_edit.text.length < 1 &&
		instructionsCustomerService_edit.text.length < 1
	) {
		app.activeDocument.groupItems
			.getByName("Customer Service - Production")
			.remove()
		app.activeDocument.groupItems
			.getByName("Customer - Customer Service")
			.remove()
		app.activeDocument.groupItems.getByName("Customer - Production").remove()
		app.activeDocument.groupItems
			.getByName("Customer - Production - Customer Service")
			.remove()
		app.activeDocument.textFrames.getByName("Special Instructions").contents =
			instructionsCustomer_edit.text
	}

	if (
		//  if the CUSTOMER and PRODUCTION boxes have text.
		instructionsCustomer_edit.text.length > 0 &&
		instructionsCustomerService_edit.text.length < 1 &&
		instructionsProduction_edit.text.length > 0
	) {
		app.activeDocument.groupItems
			.getByName("Customer Service - Production")
			.remove()
		app.activeDocument.groupItems.getByName("Special Instructions").remove()
		app.activeDocument.groupItems
			.getByName("Customer - Customer Service")
			.remove()
		app.activeDocument.groupItems
			.getByName("Customer - Production - Customer Service")
			.remove()

		app.activeDocument.textFrames.getByName("Customer Instructions").contents =
			instructionsCustomer_edit.text
		app.activeDocument.textFrames.getByName(
			"Production Instructions"
		).contents = instructionsProduction_edit.text
	}

	if (
		//  if only the CUSTOMER SERVICE box has text.
		instructionsCustomer_edit.text.length < 1 &&
		instructionsProduction_edit.text.length < 1 &&
		instructionsCustomerService_edit.text.length > 0
	) {
		app.activeDocument.groupItems
			.getByName("Customer Service - Production")
			.remove()
		app.activeDocument.groupItems
			.getByName("Customer - Customer Service")
			.remove()
		app.activeDocument.groupItems.getByName("Customer - Production").remove()
		app.activeDocument.groupItems
			.getByName("Customer - Production - Customer Service")
			.remove()

		app.activeDocument.textFrames.getByName("Special Instructions").contents =
			instructionsCustomerService_edit.text
	}

	if (
		//  if the CUSTOMER SERVICE and PRODUCTION boxes have text.
		instructionsCustomer_edit.text.length < 1 &&
		instructionsProduction_edit.text.length > 0 &&
		instructionsCustomerService_edit.text.length > 0
	) {
		app.activeDocument.groupItems.getByName("Special Instructions").remove()

		app.activeDocument.groupItems
			.getByName("Customer - Customer Service")
			.remove()
		app.activeDocument.groupItems.getByName("Customer - Production").remove()
		app.activeDocument.groupItems
			.getByName("Customer - Production - Customer Service")
			.remove()

		app.activeDocument.textFrames.getByName(
			"Customer Service Instructions"
		).contents = instructionsCustomerService_edit.text
		app.activeDocument.textFrames.getByName(
			"Production Instructions"
		).contents = instructionsProduction_edit.text
	}

	if (
		//  if the CUSTOMER and the CUSTOMER SERVICE boxes have text.
		instructionsCustomer_edit.text.length > 0 &&
		instructionsProduction_edit.text.length < 1 &&
		instructionsCustomerService_edit.text.length > 0
	) {
		app.activeDocument.groupItems.getByName("Special Instructions").remove()
		app.activeDocument.groupItems
			.getByName("Customer Service - Production")
			.remove()

		app.activeDocument.groupItems.getByName("Customer - Production").remove()
		app.activeDocument.groupItems
			.getByName("Customer - Production - Customer Service")
			.remove()

		app.activeDocument.textFrames.getByName("Customer Instructions").contents =
			instructionsCustomer_edit.text
		app.activeDocument.textFrames.getByName(
			"Customer Service Instructions"
		).contents = instructionsCustomerService_edit.text
	}

	if (
		//  if only the PRODUCTION box has text.
		instructionsCustomer_edit.text.length < 1 &&
		instructionsProduction_edit.text.length > 0 &&
		instructionsCustomerService_edit.text.length < 1
	) {
		app.activeDocument.groupItems
			.getByName("Customer Service - Production")
			.remove()
		app.activeDocument.groupItems
			.getByName("Customer - Customer Service")
			.remove()
		app.activeDocument.groupItems.getByName("Customer - Production").remove()
		app.activeDocument.groupItems
			.getByName("Customer - Production - Customer Service")
			.remove()

		app.activeDocument.textFrames.getByName("Special Instructions").contents =
			instructionsProduction_edit.text
	}
} else {
	if (instructionsCustomer_edit.text.length > 0) {
		instructionsArrow.hidden = false
		app.activeDocument.textFrames.getByName("Customer Instructions").contents =
			instructionsCustomer_edit.text
	}

	if (instructionsCustomerService_edit.text.length > 0) {
		instructionsArrow.hidden = false
		app.activeDocument.textFrames.getByName(
			"Customer Service Instructions"
		).contents = instructionsCustomerService_edit.text
	}

	if (instructionsProduction_edit.text.length > 0) {
		instructionsArrow.hidden = false
		app.activeDocument.textFrames.getByName(
			"Production Instructions"
		).contents = instructionsProduction_edit.text
	}

	if (instructionsCustomer_edit.text.length < 1) {
		app.activeDocument.groupItems
			.getByName("Customer Instructions Group")
			.remove()
	}

	if (instructionsCustomerService_edit.text.length < 1) {
		app.activeDocument.groupItems
			.getByName("Customer Service Instructions Group")
			.remove()
	}

	if (instructionsProduction_edit.text.length < 1) {
		app.activeDocument.groupItems
			.getByName("Production Instructions Group")
			.remove()
	}

	if (bodyColorList.selection.index < 14) {
		if (
			instructionsCustomer_edit.text.length < 1 &&
			instructionsCustomerService_edit.text.length < 1 &&
			instructionsProduction_edit.text.length < 1
		) {
			app.activeDocument.groupItems.getByName("Bic Logo Group").remove()
			app.activeDocument.artboards.getByName("Back").remove()
		}
	}
}

//#endregion

//#region     ASSORTMENT VISIBILITY
if (bodyColorList.selection.index === 11) {
	app.activeDocument.layers.getByName("LIGHT ASSORTMENT").visible = false
	app.activeDocument.layers.getByName("DARK ASSORTMENT").visible = true
}

if (bodyColorList.selection.index === 12) {
	app.activeDocument.layers.getByName("DARK ASSORTMENT").visible = false
	app.activeDocument.layers.getByName("LIGHT ASSORTMENT").visible = true
}
//#endregion

//#region     SCREENCOUNTER
if (bodyColorList.selection.index < 14 && mockupCheckbox.value === false) {
	var screenTotal = screenCounter_A.length + screenCounter_C.length

	var screenNumberLast_1 =
		app.activeDocument.textFrames.getByName("A1 Screen Number")
	screenNumberLast_1.contents = screenTotal

	var screenNumberLast_2 = app.activeDocument.textFrames.getByName("A2 Screen Number")
	screenNumberLast_2.contents = screenTotal
      // This generates an error with LIGHT ASSORTMENTS, no such element. It prevents the file from being saved, and the screen info number is 1/0.

      

	var screenNumberLast_3 =
		app.activeDocument.textFrames.getByName("A3 Screen Number")
	screenNumberLast_3.contents = screenTotal

	var screenNumberLast_4 =
		app.activeDocument.textFrames.getByName("A4 Screen Number")
	screenNumberLast_4.contents = screenTotal

	var screenNumberFirst_5 =
		app.activeDocument.textFrames.getByName("InkNumber_5")
	screenNumberFirst_5.contents = screenCounter_A.length + 1
	var screenNumberLast_5 =
		app.activeDocument.textFrames.getByName("C1 Screen Number")
	screenNumberLast_5.contents = screenTotal

	var screenNumberFirst_6 =
		app.activeDocument.textFrames.getByName("InkNumber_6")
	screenNumberFirst_6.contents = screenCounter_A.length + 2
	var screenNumberLast_6 =
		app.activeDocument.textFrames.getByName("C2 Screen Number")
	screenNumberLast_6.contents = screenTotal

	var screenNumberFirst_7 =
		app.activeDocument.textFrames.getByName("InkNumber_7")
	screenNumberFirst_7.contents = screenCounter_A.length + 3
	var screenNumberLast_7 =
		app.activeDocument.textFrames.getByName("C3 Screen Number")
	screenNumberLast_7.contents = screenTotal

	var screenNumberFirst_8 =
		app.activeDocument.textFrames.getByName("InkNumber_8")
	screenNumberFirst_8.contents = screenCounter_A.length + 4
	var screenNumberLast_8 =
		app.activeDocument.textFrames.getByName("C4 Screen Number")
	screenNumberLast_8.contents = screenTotal
}


if (fileName_One.length > 35) {
     var fileName_box = app.activeDocument.textFrames.getByName("FileName");

     fileName_box.textRange.characterAttributes.size = 8
	fileName_box.textRange.characterAttributes.baselineShift = -1
}

var reducedOriginalArt = app.activeDocument.textFrames.getByName("Original Art")
if (originalArt_edit.text.length > 50) {
	reducedOriginalArt.textRange.characterAttributes.size = 4
	reducedOriginalArt.textRange.characterAttributes.baselineShift = -1
}

var reducedPO = app.activeDocument.textFrames.getByName("PO")
if (poNumber_edit.text.length > 11) {
	reducedPO.textRange.characterAttributes.size = 6
	reducedPO.textRange.characterAttributes.baselineShift = -3
}

//#region      This section deletes any unused screen info groups.

if (bodyColorList.selection.index < 14) {
	if (mockupCheckbox.value === true) {
		app.activeDocument.groupItems.getByName("Screen8").remove()
		app.activeDocument.groupItems.getByName("Screen7").remove()
		app.activeDocument.groupItems.getByName("Screen6").remove()
		app.activeDocument.groupItems.getByName("Screen5").remove()
		app.activeDocument.groupItems.getByName("Screen4").remove() //light assortment  this produces an error
		app.activeDocument.groupItems.getByName("Screen3").remove()
		app.activeDocument.groupItems.getByName("Screen2").remove()
		app.activeDocument.groupItems.getByName("Screen1").remove()
	} else {
		if (screenCounter_A.length === 3) {
			app.activeDocument.groupItems.getByName("Screen4").remove()
		} else if (screenCounter_A.length === 2) {
			app.activeDocument.groupItems.getByName("Screen4").remove()
			app.activeDocument.groupItems.getByName("Screen3").remove()
		} else if (screenCounter_A.length === 1) {
			app.activeDocument.groupItems.getByName("Screen4").remove()
			app.activeDocument.groupItems.getByName("Screen3").remove()
			app.activeDocument.groupItems.getByName("Screen2").remove()
		}

		if (screenCounter_C.length === 3) {
			app.activeDocument.groupItems.getByName("Screen8").remove()
		} else if (screenCounter_C.length === 2) {
			app.activeDocument.groupItems.getByName("Screen8").remove()
			app.activeDocument.groupItems.getByName("Screen7").remove()
		} else if (screenCounter_C.length === 1) {
			app.activeDocument.groupItems.getByName("Screen8").remove()
			app.activeDocument.groupItems.getByName("Screen7").remove()
			app.activeDocument.groupItems.getByName("Screen6").remove()
		} else if (screenCounter_C.length === 0) {
			app.activeDocument.groupItems.getByName("Screen8").remove()
			app.activeDocument.groupItems.getByName("Screen7").remove()
			app.activeDocument.groupItems.getByName("Screen6").remove()
			app.activeDocument.groupItems.getByName("Screen5").remove()
		}
	}
}
//#endregion
//#endregion

//#region     AUTOSAVE
if (autoSave.value === true) {
	var doc = app.activeDocument
	var docPath =
		"/c/Users/JBavitz/BIC/BIC logo lighter Customer Service - General/Graphic Design/3 - Art Proof sent"
	var sleevePath =
		"/c/Users/JBavitz/BIC/BIC logo lighter Customer Service - General/Graphic Design/5 - Sleeves/Sleeve_ Proof_Sent"
	var opts = new PDFSaveOptions()
	opts.PDFPreset = "Illustrator Default"

	if (bodyColorList.selection.index < 11) {
		doc.saveAs(File(docPath + "/" + fileName_One + ".pdf"), opts)
	}

	if (bodyColorList.selection.index === 11) {
		doc.saveAs(File(docPath + "/" + fileName_One + ".pdf"), opts)
	}

	if (bodyColorList.selection.index === 12) {
		doc.saveAs(File(docPath + "/" + fileName_One + ".pdf"), opts)
	}

	if (bodyColorList.selection.index === 14) {
		doc.saveAs(File(sleevePath + "/" + fileName_One + ".pdf"), opts)
	}
}
//#endregion

/*      BUG LIST





*/
