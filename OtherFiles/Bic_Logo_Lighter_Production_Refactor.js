//#region                                ExtendScript UI Layout
var master = new Window("dialog");
master.maximumSize.height = 900;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "Bic Logo Lighter");
big.alignment = "center";

var topPart = big.add("group");
topPart.orientation = "row";
topPart.maximumSize.height = 900;
topPart.maximumSize.width = 1400;

var topLeft = topPart.add("panel", undefined, " ");
topLeft.preferredSize.height = 50;
topLeft.preferredSize.width = 200;

var customerInfo_outer = topLeft.add("group");
customerInfo_outer.orientation = "column";

var repName = customerInfo_outer.add("statictext", undefined, "Rep name");
var repNameEdit = customerInfo_outer.add("edittext", undefined, "");
repNameEdit.characters = 20;
repNameEdit.active = true;
//repNameEdit.text = "glenda vilchez";

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email");
var repEmail_Edit = customerInfo_outer.add("edittext", undefined, "");
repEmail_Edit.characters = 20;
//repEmail_Edit.text = "glenda@rockstarpromos.com";

var companyGroup = customerInfo_outer.add("panel", undefined, "");
companyGroup.orientation = "row";

var company_A = companyGroup.add("statictext", undefined, "Company");
var company_A_Edit = companyGroup.add("edittext", undefined, "");
company_A_Edit.characters = 10;
//company_A_Edit.text = "rock star promos";

var vipCheckbox = companyGroup.add("checkbox", undefined, "VIP");

var designerLeft = topLeft.add("panel", undefined, " ");
designerLeft.orientation = "row";

var designerLabel = designerLeft.add("statictext", undefined, "Designer");
var designerList = designerLeft.add("dropdownlist", undefined, [
  "MMiraglia",
  "GVisgaitis",
  "JBavitz",
]);
designerList.characters = 10;
designerList.selection = 2;

var topRight = topPart.add("panel", undefined, "");
topRight.orientation = "column";
topRight.preferredSize.height = 200;

var orderOne = topRight.add("group");
orderOne.orientation = "row";

var nationalityGroup = orderOne.add("panel", undefined, "");
nationalityGroup.orientation = "column";
nationalityGroup.margins = [20, 20, 20, 5];

var nationalityUS = nationalityGroup.add("radiobutton", undefined, "US");
nationalityUS.orientation = "column";
nationalityUS.value = true;
var nationalityCanada = nationalityGroup.add(
  "radiobutton",
  undefined,
  "Canadian"
);

var jdeNumber = orderOne.add("statictext", undefined, "JDE Number");
var jdeNumber_edit = orderOne.add("edittext", undefined, "");
jdeNumber_edit.characters = 7;
//jdeNumber_edit.text = "6187745";

var poNumber = orderOne.add("statictext", undefined, "PO Number");
var poNumber_edit = orderOne.add("edittext", undefined, "");
poNumber_edit.characters = 10;
//poNumber_edit.text = "MMMMMMMMMMM11";

var webSpacer = orderOne.add("panel", undefined, " ");
webSpacer.margins = [75, 75, 75, 75];

var webArea = orderOne.add("panel", undefined, "Web Number");
webArea.orientation = "row";

var webPrefix = webArea.add("dropdownlist", undefined, [
  "USLog",
  "CAENLog"
]);

webPrefix.characters = 8;
webPrefix.selection = 0;

var webNumber_edit = webArea.add("edittext", undefined, "");
webNumber_edit.characters = 10;
//webNumber_edit.text = "85";

var orderThree = topRight.add("panel", undefined, "");
orderThree.orientation = "row";
orderThree.alignment = "left";
orderThree.preferredSize.height = 50;
orderThree.margins = 0;

var inHandsDate = orderThree.add("statictext", undefined, "In-hands Date");
var inHandsDate_edit = orderThree.add("edittext", undefined, "");
inHandsDate_edit.characters = 10;
//inHandsDate_edit.text = "11/24/2021";

var shipDate = orderThree.add("statictext", undefined, "Ship Date");
var shipDate_edit = orderThree.add("edittext", undefined, "");
shipDate_edit.characters = 10;
//shipDate_edit.text = "10/13/2022";

var rushCheckbox = orderThree.add("checkbox", undefined, "Rush order");

var spacer = orderThree.add("group");

var multiPanel = orderThree.add("panel", undefined, "");
var multi = multiPanel.add("checkbox", undefined, "Multiple Items");
var multiSub = multiPanel.add("panel", undefined, "");
multiSub.orientation = "row";
var multi_bodyColor = multiSub.add("radiobutton", undefined, "Body Color");
multi_bodyColor.value = true;
var multi_itemNumber = multiSub.add("radiobutton", undefined, "Item01");

var orderFour = topRight.add("group");
orderFour.orientation = "row";
orderFour.preferredSize.height = 50;

var instructionsCustomer_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Customer"
);
var instructionsCustomer_edit = instructionsCustomer_title.add(
  "edittext",
  undefined,
  "",
  {
    multiline: true,
  }
);
instructionsCustomer_edit.minimumSize.width = 200;
instructionsCustomer_edit.minimumSize.height = 50;
//instructionsCustomer_text.text = "Instructions from the customer.";

var instructionsCustomerService_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Customer Service"
);
var instructionsCustomerService_edit = instructionsCustomerService_title.add(
  "edittext",
  undefined,
  "",
  {
    multiline: true,
  }
);
instructionsCustomerService_edit.minimumSize.width = 200;
instructionsCustomerService_edit.minimumSize.height = 50;
//instructionsCustomerService_edit.text = "Instructions from Customer Service.";

var instructionsProduction_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Production"
);
var instructionsProduction_edit = instructionsProduction_title.add(
  "edittext",
  undefined,
  "",
  {
    multiline: true,
  }
);
instructionsProduction_edit.minimumSize.width = 200;
instructionsProduction_edit.minimumSize.height = 50;
//instructionsProduction_edit.text = "Instructions from Production.";

var bottom = big.add("group");
bottom.orientation = "column";

var itemLeft = bottom.add("group");
itemLeft.orientation = "row";

var itemTopRow = itemLeft.add("panel", undefined, "");
itemTopRow.orientation = "row";

var descriptionSide = itemTopRow.add("group");
descriptionSide.orientation = "column";

var colors = itemTopRow.add("group");
colors.margins = [50, 0, 0, 0];

var bodyColor = descriptionSide.add("panel", undefined, "Body Color");
bodyColor.orientation = "row";

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
]);

bodyColorList.selection = 0;

var doubleSided = bodyColor.add("panel", undefined);
var doubleSidedCheckbox = bodyColor.add(
  "checkbox",
  undefined,
  "Assort-2 Sided"
);

doubleSidedCheckbox.value = false;

var descriptionBox = descriptionSide.add(
  "statictext",
  undefined,
  "Description"
);
var descriptionBox_edit = descriptionSide.add("edittext", undefined, "");
descriptionBox_edit.characters = 20;
//descriptionBox_edit.text = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX32";

var autoSave = descriptionSide.add("checkbox", undefined, "Save the PDF?");
autoSave.value = true;

var spacerBox = descriptionSide.add("statictext", undefined, "");
spacerBox.margins = 40;

var originalArt = descriptionSide.add("statictext", undefined, "Original Art");
var originalArt_edit = descriptionSide.add("edittext", undefined, "");
originalArt_edit.characters = 20;
//originalArt_edit.text = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx55";

var repeatOrder = descriptionSide.add("statictext", undefined, "Repeat order");
var repeatOrder_edit = descriptionSide.add("edittext", undefined, "");
repeatOrder_edit.characters = 20;

var inkMaster = colors.add("group");
inkMaster.orientation = "column";
var inkColors_1 = inkMaster.add("group");
var inkColors_2 = inkMaster.add("group");

var inkColors_A = inkColors_1.add("panel", undefined, "");
inkColors_A.preferredSize = [400, 100];
inkColors_A.orientation = "row";

var inkBox_Master_A1 = inkColors_A.add("panel", undefined, "Screen A1");
inkBox_Master_A1.orientation = "column";
inkBox_Master_A1.margins = [15, 15, 5, 15];
var ink_A1 = inkBox_Master_A1.add("edittext", undefined, "");
ink_A1.characters = 10;
//ink_A1.text = "186 ruby red";

var inkBox_Master_A2 = inkColors_A.add("panel", undefined, "Screen A2");
inkBox_Master_A2.orientation = "column";
var ink_A2 = inkBox_Master_A2.add("edittext", undefined, "");
ink_A2.characters = 10;
//ink_A2.text = "281 navy blue";

var inkBox_Master_A3 = inkColors_A.add("panel", undefined, "Screen A3");
inkBox_Master_A3.orientation = "column";
var ink_A3 = inkBox_Master_A3.add("edittext", undefined, "");
ink_A3.characters = 10;
//ink_A3.text = "186 red";

var inkBox_Master_A4 = inkColors_A.add("panel", undefined, "Screen A4");
inkBox_Master_A4.orientation = "column";
var ink_A4 = inkBox_Master_A4.add("edittext", undefined, "");
ink_A4.characters = 10;
//ink_A4.text = "142 yellow";

var inkColors_C = inkColors_2.add("panel", undefined, "");
inkColors_C.preferredSize = [400, 100];
inkColors_C.orientation = "row";

var inkBox_Master_C1 = inkColors_C.add("panel", undefined, "Screen C1");
inkBox_Master_C1.orientation = "column";
var ink_C1 = inkBox_Master_C1.add("edittext", undefined, "");
ink_C1.characters = 10;
//ink_C1.text = "black";

var inkBox_Master_C2 = inkColors_C.add("panel", undefined, "Screen C2");
inkBox_Master_C2.orientation = "column";
var ink_C2 = inkBox_Master_C2.add("edittext", undefined, "");
ink_C2.characters = 10;
//ink_C2.text = "211 pink";

var inkBox_Master_C3 = inkColors_C.add("panel", undefined, "Screen C3");
inkBox_Master_C3.orientation = "column";
var ink_C3 = inkBox_Master_C3.add("edittext", undefined, "");
ink_C3.characters = 10;
//ink_C3.text = "877 metallic silver";

var inkBox_Master_C4 = inkColors_C.add("panel", undefined, "Screen C4");
inkBox_Master_C4.orientation = "column";
var ink_C4 = inkBox_Master_C4.add("edittext", undefined, "");
ink_C4.characters = 10;
//ink_C4.text = "116 athletic gold";

/*/* #region  OKAY / Cancel buttons */
var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
var okButton = buttonGroup.add("button", undefined, "OK");
var cancelButton = buttonGroup.add("button", undefined, "Cancel");

/* #endregion */

master.show();

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
    var _scriptPath = $.fileName;
    var _separater = "";

    //Code to get separater based on OS
    if ($.os.toLowerCase().indexOf("mac") != -1) {
      _separater = "/";
    } else if ($.os.toLowerCase().indexOf("window") != -1) {
      _separater = "\\";
    }
    var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
    app.open(File(_path + "/Templates/Proof_Template_Assorted_1Side.ait"));
  } else {
    var _scriptPath = $.fileName;
    var _separater = "";

    //Code to get separater based on OS
    if ($.os.toLowerCase().indexOf("mac") != -1) {
      _separater = "/";
    } else if ($.os.toLowerCase().indexOf("window") != -1) {
      _separater = "\\";
    }
    var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
    app.open(File(_path + "/Templates/Proof_Template_Assorted_2Side.ait"));
  }
} else if (bodyColorList.selection.index === 14) {
  var _scriptPath = $.fileName;
  var _separater = "";

  //Code to get separater based on OS
  if ($.os.toLowerCase().indexOf("mac") != -1) {
    _separater = "/";
  } else if ($.os.toLowerCase().indexOf("window") != -1) {
    _separater = "\\";
  }
  var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
  app.open(File(_path + "/Templates/Proof_Template_Sleeve.ait"));
} else {
  var _scriptPath = $.fileName;
  var _separater = "";
  //Code to get separater based on OS
  if ($.os.toLowerCase().indexOf("mac") != -1) {
    _separater = "/";
  } else if ($.os.toLowerCase().indexOf("window") != -1) {
    _separater = "\\";
  }
  var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
  app.open(File(_path + "/Templates/Proof_Template_Standard.ait"));
}
//#endregion
//#region                                THIS CREATES THE   .TRIM   FUNCTION
String.prototype.trim = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};
//#endregion
//#region                                NATIONALITY
if (nationalityCanada.value === true) {
  app.activeDocument.layers.getByName("USA").visible = true;
  app.activeDocument.layers.getByName("USA").remove();
  app.activeDocument.layers.getByName("Canada").visible = true;
} else {
  app.activeDocument.layers.getByName("Canada").visible = true;
  app.activeDocument.layers.getByName("Canada").remove();
  app.activeDocument.layers.getByName("USA").visible = true;
}
//#endregion
//#region                                INK COLORS
//#region    If the order uses the standard template, then the body and ink color code is run. If it isn't, then the code is bypassed.
function neonInk(inkString, bravo) {
  var neonInks = ["801", "802", "803", "804", "805", "806", "807"];
  var alpha = inkString.search(" ");
  var numberOnly = inkString.substring(0, alpha);
  for (i = 0; i < neonInks.length; i++) {
    if (numberOnly === neonInks[i]) {
      var neon = app.activeDocument.groupItems.getByName(bravo);
      neon.hidden = false;
    }
  }
}

if (bodyColorList.selection.index < 11) {
  var item_A1_frame = app.activeDocument.pathItems.getByName("A1_Frame");
  var item_A1_name = app.activeDocument.textFrames.getByName("A1_Name");
  var item_A1_color = app.activeDocument.pathItems.getByName("A1_Color");
  var item_A1_chip = app.activeDocument.pathItems.getByName("A1_Chip");
  var item_A1_screenName = app.activeDocument.textFrames.getByName(
    "A1 Screen Ink Color"
  );

  var item_A2_frame = app.activeDocument.pathItems.getByName("A2_Frame");
  var item_A2_name = app.activeDocument.textFrames.getByName("A2_Name");
  var item_A2_color = app.activeDocument.pathItems.getByName("A2_Color");
  var item_A2_chip = app.activeDocument.pathItems.getByName("A2_Chip");
  var item_A2_screenName = app.activeDocument.textFrames.getByName(
    "A2 Screen Ink Color"
  );

  var item_A3_frame = app.activeDocument.pathItems.getByName("A3_Frame");
  var item_A3_name = app.activeDocument.textFrames.getByName("A3_Name");
  var item_A3_color = app.activeDocument.pathItems.getByName("A3_Color");
  var item_A3_chip = app.activeDocument.pathItems.getByName("A3_Chip");
  var item_A3_screenName = app.activeDocument.textFrames.getByName(
    "A3 Screen Ink Color"
  );

  var item_A4_frame = app.activeDocument.pathItems.getByName("A4_Frame");
  var item_A4_name = app.activeDocument.textFrames.getByName("A4_Name");
  var item_A4_color = app.activeDocument.pathItems.getByName("A4_Color");
  var item_A4_chip = app.activeDocument.pathItems.getByName("A4_Chip");
  var item_A4_screenName = app.activeDocument.textFrames.getByName(
    "A4 Screen Ink Color"
  );

  var item_C1_frame = app.activeDocument.pathItems.getByName("C1_Frame");
  var item_C1_name = app.activeDocument.textFrames.getByName("C1_Name");
  var item_C1_color = app.activeDocument.pathItems.getByName("C1_Color");
  var item_C1_chip = app.activeDocument.pathItems.getByName("C1_Chip");
  var item_C1_screenName = app.activeDocument.textFrames.getByName(
    "C1 Screen Ink Color"
  );

  var item_C2_frame = app.activeDocument.pathItems.getByName("C2_Frame");
  var item_C2_name = app.activeDocument.textFrames.getByName("C2_Name");
  var item_C2_color = app.activeDocument.pathItems.getByName("C2_Color");
  var item_C2_chip = app.activeDocument.pathItems.getByName("C2_Chip");
  var item_C2_screenName = app.activeDocument.textFrames.getByName(
    "C2 Screen Ink Color"
  );

  var item_C3_frame = app.activeDocument.pathItems.getByName("C3_Frame");
  var item_C3_name = app.activeDocument.textFrames.getByName("C3_Name");
  var item_C3_color = app.activeDocument.pathItems.getByName("C3_Color");
  var item_C3_chip = app.activeDocument.pathItems.getByName("C3_Chip");
  var item_C3_screenName = app.activeDocument.textFrames.getByName(
    "C3 Screen Ink Color"
  );

  var item_C4_frame = app.activeDocument.pathItems.getByName("C4_Frame");
  var item_C4_name = app.activeDocument.textFrames.getByName("C4_Name");
  var item_C4_color = app.activeDocument.pathItems.getByName("C4_Color");
  var item_C4_chip = app.activeDocument.pathItems.getByName("C4_Chip");
  var item_C4_screenName = app.activeDocument.textFrames.getByName(
    "C4 Screen Ink Color"
  );
}

var newWhite = new CMYKColor();
newWhite.black = 0;
newWhite.cyan = 0;
newWhite.magenta = 0;
newWhite.yellow = 0;

var newBlack = new CMYKColor();
newBlack.black = 100;
newBlack.cyan = 0;
newBlack.magenta = 0;
newBlack.yellow = 0;

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
];

var digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var screenCounter_A = [];
var screenCounter_C = [];

//#region                                REMOVES THE WHITE SPACES FROM INK NAMES FROM BEFORE AND AFTER THE TEXT
ink_A1.text = ink_A1.text.trim();
ink_A1.text = ink_A1.text.toLowerCase();
ink_A2.text = ink_A2.text.trim();
ink_A2.text = ink_A2.text.toLowerCase();
ink_A3.text = ink_A3.text.trim();
ink_A3.text = ink_A3.text.toLowerCase();
ink_A4.text = ink_A4.text.trim();
ink_A4.text = ink_A4.text.toLowerCase();
ink_C1.text = ink_C1.text.trim();
ink_C1.text = ink_C1.text.toLowerCase();
ink_C2.text = ink_C2.text.trim();
ink_C2.text = ink_C2.text.toLowerCase();
ink_C3.text = ink_C3.text.trim();
ink_C3.text = ink_C3.text.toLowerCase();
ink_C4.text = ink_C4.text.trim();
ink_C4.text = ink_C4.text.toLowerCase();
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
];
for (i = 0; i < inksNamedArray.length; i++) {
  if (ink_A1.text === inksNamedArray[i]) {
    item_A1_name.contents = "PANTONE" + capitalizeSpaces(inksNamedArray[i]) + " " + "C";
    break;
  } else {
    if (ink_A1.text.length > 0) {
      var pmsTest_A1 = false;
      for (var index = 0; index < ink_A1.text.length; index++) {
        for (x = 0; x < digitArray.length; x++) {
          if (ink_A1.text[index] === digitArray[x]) {
            pmsTest_A1 = true;
            break;
          }
        }
      }
    }
  }
}

//#region     A1
if (ink_A1.text.length > 0) {
  var pmsTest_A1 = false;
  for (var index = 0; index < ink_A1.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_A1.text[index] === digitArray[i]) {
        pmsTest_A1 = true;
        break;
      }
    }
  }
}

if (pmsTest_A1 === true) {
  var gray = capitalize(ink_A1.text);
  var grayArray = gray.split(" ");
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
      "C";
    item_A1_name.contents = grayName;
    item_A1_screenName.contents = grayName;
    item_A1_color.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
    item_A1_chip.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
  } else {
    var kilo = ink_A1.text.search(" ");
    var pmsNumberA2 = ink_A1.text.substring(0, kilo);
    var mike = ink_A1.text.substring(kilo);
    pmsNumberA2 = pmsNumberA2.replace(/,/g, "");
    item_A1_name.contents =
      "PANTONE" + " " + pmsNumberA2 + " " + "C" + "  " + capitalize(mike);
    item_A1_screenName.contents = pmsNumberA2 + " " + capitalize(mike);
    item_A1_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA2 + " " + "C"
    ).color;
    item_A1_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA2 + " " + "C"
    ).color;
  }
}

// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
if (pmsTest_A1 === false) {
  if (ink_A1.text === "white") {
    item_A1_name.contents = "White";
    item_A1_screenName.contents = "White";
    item_A1_color.fillColor = newWhite;
    item_A1_chip.fillColor = newWhite;
    item_A1_frame.strokeWidth = 1.25;
  } else if (ink_A1.text === "black") {
    item_A1_name.contents = "Black";
    item_A1_screenName.contents = "Black";
    item_A1_color.fillColor = newBlack;
    item_A1_chip.fillColor = newBlack;
    item_A1_frame.strokeWidth = 1.25;
  } else {
    item_A1_name.contents =
      "PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C";
    item_A1_screenName.contents = capitalize(ink_A1.text);
    item_A1_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
    ).color;
    item_A1_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
    ).color;
  }
}


// This block makes the stroke of the box thicker if the ink is a standard color.
ink_A1.text = capitalize(ink_A1.text);
if (ink_A1.text === "Reflex Blue" || ink_A1.text === "Process Blue") {
  item_A1_frame.strokeWidth = 1.25;
}

neonInk(ink_A1.text, "A2_Warning");

for (i = 0; i < standardInkNumber.length; i++) {
  if (pmsNumberA2 === standardInkNumber[i]) {
    item_A1_frame.strokeWidth = 1.25;
  }
}
if (ink_A1.text.length > 0) {
  screenCounter_A.push("Two");
}
//#endregion

//#region     A2
if (ink_A2.text.length > 0) {
  var pmsTest_A2 = false;
  for (var index = 0; index < ink_A2.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_A2.text[index] === digitArray[i]) {
        pmsTest_A2 = true;
        break;
      }
    }
  }
}

if (pmsTest_A2 === true) {
  var gray = capitalize(ink_A2.text);
  var grayArray = gray.split(" ");
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
      "C";
    item_A2_name.contents = grayName;
    item_A2_screenName.contents = grayName;
    item_A2_color.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
    item_A2_chip.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
  } else {
    var kilo = ink_A2.text.search(" ");
    var pmsNumberA2 = ink_A2.text.substring(0, kilo);
    var mike = ink_A2.text.substring(kilo);
    pmsNumberA2 = pmsNumberA2.replace(/,/g, "");
    item_A2_name.contents =
      "PANTONE" + " " + pmsNumberA2 + " " + "C" + "  " + capitalize(mike);
    item_A2_screenName.contents = pmsNumberA2 + " " + capitalize(mike);
    item_A2_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA2 + " " + "C"
    ).color;
    item_A2_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA2 + " " + "C"
    ).color;
  }
}

// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
if (pmsTest_A2 === false) {
  if (ink_A2.text === "white") {
    item_A2_name.contents = "White";
    item_A2_screenName.contents = "White";
    item_A2_color.fillColor = newWhite;
    item_A2_chip.fillColor = newWhite;
    item_A2_frame.strokeWidth = 1.25;
  } else if (ink_A2.text === "black") {
    item_A2_name.contents = "Black";
    item_A2_screenName.contents = "Black";
    item_A2_color.fillColor = newBlack;
    item_A2_chip.fillColor = newBlack;
    item_A2_frame.strokeWidth = 1.25;
  } else {
    item_A2_name.contents =
      "PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C";
    item_A2_screenName.contents = capitalizeSpaces(ink_A2.text);
    item_A2_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
    ).color;
    item_A2_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
    ).color;
  }
}

// This block makes the stroke of the box thicker if the ink is a standard color.
ink_A2.text = capitalize(ink_A2.text);
if (ink_A2.text === "Reflex Blue" || ink_A2.text === "Process Blue") {
  item_A2_frame.strokeWidth = 1.25;
}

neonInk(ink_A2.text, "A2_Warning");

for (i = 0; i < standardInkNumber.length; i++) {
  if (pmsNumberA2 === standardInkNumber[i]) {
    item_A2_frame.strokeWidth = 1.25;
  }
}
if (ink_A2.text.length > 0) {
  screenCounter_A.push("Two");
}
//#endregion

//#region     A3
if (ink_A3.text.length > 0) {
  var pmsTest_A3 = false;
  for (var index = 0; index < ink_A3.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_A3.text[index] === digitArray[i]) {
        pmsTest_A3 = true;
        break;
      }
    }
  }
}

if (pmsTest_A3 === true) {
  var gray = capitalize(ink_A3.text);
  var grayArray = gray.split(" ");
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
      "C";
    item_A3_name.contents = grayName;
    item_A3_screenName.contents = grayName;
    item_A3_color.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
    item_A3_chip.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
  } else {
    var kilo = ink_A3.text.search(" ");
    var pmsNumberA3 = ink_A3.text.substring(0, kilo);
    var mike = ink_A3.text.substring(kilo);
    pmsNumberA3 = pmsNumberA3.replace(/,/g, "");
    item_A3_name.contents =
      "PANTONE" + " " + pmsNumberA3 + " " + "C" + "  " + capitalize(mike);
    item_A3_screenName.contents = pmsNumberA3 + " " + capitalize(mike);
    item_A3_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA3 + " " + "C"
    ).color;
    item_A3_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA3 + " " + "C"
    ).color;
  }
}

// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
if (pmsTest_A3 === false) {
  if (ink_A3.text === "white") {
    item_A3_name.contents = "White";
    item_A3_screenName.contents = "White";
    item_A3_color.fillColor = newWhite;
    item_A3_chip.fillColor = newWhite;
    item_A3_frame.strokeWidth = 1.25;
  } else if (ink_A3.text === "black") {
    item_A3_name.contents = "Black";
    item_A3_screenName.contents = "Black";
    item_A3_color.fillColor = newBlack;
    item_A3_chip.fillColor = newBlack;
    item_A3_frame.strokeWidth = 1.25;
  } else {
    item_A3_name.contents =
      "PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C";
    item_A3_screenName.contents = capitalizeSpaces(ink_A3.text);
    item_A3_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
    ).color;
    item_A3_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
    ).color;
  }
}

// This block makes the stroke of the box thicker if the ink is a standard color.
ink_A3.text = capitalize(ink_A3.text);
if (ink_A3.text === "Reflex Blue" || ink_A3.text === "Process Blue") {
  item_A3_frame.strokeWidth = 1.25;
}

neonInk(ink_A3.text, "A3_Warning");

for (i = 0; i < standardInkNumber.length; i++) {
  if (pmsNumberA3 === standardInkNumber[i]) {
    item_A3_frame.strokeWidth = 1.25;
  }
}
if (ink_A3.text.length > 0) {
  screenCounter_A.push("Three");
}
//#endregion

//#region     A4
if (ink_A4.text.length > 0) {
  var pmsTest_A4 = false;
  for (var index = 0; index < ink_A4.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_A4.text[index] === digitArray[i]) {
        pmsTest_A4 = true;
        break;
      }
    }
  }
}

if (pmsTest_A4 === true) {
  var gray = capitalize(ink_A4.text);
  var grayArray = gray.split(" ");
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
      "C";
    item_A4_name.contents = grayName;
    item_A4_screenName.contents = grayName;
    item_A4_color.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
    item_A4_chip.fillColor =
      app.activeDocument.swatches.getByName(grayName).color;
  } else {
    var kilo = ink_A4.text.search(" ");
    var pmsNumberA4 = ink_A4.text.substring(0, kilo);
    var mike = ink_A4.text.substring(kilo);
    pmsNumberA4 = pmsNumberA4.replace(/,/g, "");
    item_A4_name.contents =
      "PANTONE" + " " + pmsNumberA4 + " " + "C" + "  " + capitalize(mike);
    item_A4_screenName.contents = pmsNumberA4 + " " + capitalize(mike);
    item_A4_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA4 + " " + "C"
    ).color;
    item_A4_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + pmsNumberA4 + " " + "C"
    ).color;
  }
}

// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
if (pmsTest_A4 === false) {
  if (ink_A4.text === "white") {
    item_A4_name.contents = "White";
    item_A4_screenName.contents = "White";
    item_A4_color.fillColor = newWhite;
    item_A4_chip.fillColor = newWhite;
    item_A4_frame.strokeWidth = 1.25;
  } else if (ink_A4.text === "black") {
    item_A4_name.contents = "Black";
    item_A4_screenName.contents = "Black";
    item_A4_color.fillColor = newBlack;
    item_A4_chip.fillColor = newBlack;
    item_A4_frame.strokeWidth = 1.25;
  } else {
    item_A4_name.contents =
      "PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C";
    item_A4_screenName.contents = capitalizeSpaces(ink_A4.text);
    item_A4_color.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
    ).color;
    item_A4_chip.fillColor = app.activeDocument.swatches.getByName(
      "PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
    ).color;
  }
}

// This block makes the stroke of the box thicker if the ink is a standard color.
ink_A4.text = capitalize(ink_A4.text);
if (ink_A4.text === "Reflex Blue" || ink_A4.text === "Process Blue") {
  item_A4_frame.strokeWidth = 1.25;
}

neonInk(ink_A4.text, "A4_Warning");

for (i = 0; i < standardInkNumber.length; i++) {
  if (pmsNumberA4 === standardInkNumber[i]) {
    item_A4_frame.strokeWidth = 1.25;
  }
}
if (ink_A4.text.length > 0) {
  screenCounter_A.push("four");
}
//#endregion

//#region     C1
if (ink_C1.text.length > 0) {
  var pmsTest_C1 = false;
  for (var index = 0; index < ink_C1.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_C1.text[index] === digitArray[i]) {
        pmsTest_C1 = true;
        break;
      }
    }
  }

  if (pmsTest_C1 === true) {
    var gray = capitalize(ink_C1.text);
    var grayArray = gray.split(" ");
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
        "C";
      item_C1_name.contents = grayName;
      item_C1_screenName.contents = grayName;
      item_C1_color.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
      item_C1_chip.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
    } else {
      var kilo = ink_C1.text.search(" ");
      var pmsNumberC1 = ink_C1.text.substring(0, kilo);
      var mike = ink_C1.text.substring(kilo);
      pmsNumberC1 = pmsNumberC1.replace(/,/g, "");
      item_C1_name.contents =
        "PANTONE" + " " + pmsNumberC1 + " " + "C" + "  " + capitalize(mike);
      item_C1_screenName.contents = pmsNumberC1 + " " + capitalize(mike);
      item_C1_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC1 + " " + "C"
      ).color;
      item_C1_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC1 + " " + "C"
      ).color;
    }
  }

  // If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
  if (pmsTest_C1 === false) {
    if (ink_C1.text === "white") {
      item_C1_name.contents = "White";
      item_C1_screenName.contents = "White";
      item_C1_color.fillColor = newWhite;
      item_C1_chip.fillColor = newWhite;
      item_C1_frame.strokeWidth = 1.25;
    } else if (ink_C1.text === "black") {
      item_C1_name.contents = "Black";
      item_C1_screenName.contents = "Black";
      item_C1_color.fillColor = newBlack;
      item_C1_chip.fillColor = newBlack;
      item_C1_frame.strokeWidth = 1.25;
    } else {
      item_C1_name.contents =
        "PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C";
      item_C1_screenName.contents = capitalizeSpaces(ink_C1.text);
      item_C1_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
      ).color;
      item_C1_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
      ).color;
    }
  }

  // This block makes the stroke of the box thicker if the ink is a standard color.
  ink_C1.text = capitalize(ink_C1.text);
  if (ink_C1.text === "Reflex Blue" || ink_C1.text === "Process Blue") {
    item_C1_frame.strokeWidth = 1.25;
  }

  neonInk(ink_C1.text, "C1_Warning");

  for (i = 0; i < standardInkNumber.length; i++) {
    if (pmsNumberC1 === standardInkNumber[i]) {
      item_C1_frame.strokeWidth = 1.25;
    }
  }
}
if (ink_C1.text.length > 0) {
  screenCounter_C.push(1);
}
//#endregion

//#region     C2
if (ink_C2.text.length > 0) {
  var pmsTest_C2 = false;
  for (var index = 0; index < ink_C2.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_C2.text[index] === digitArray[i]) {
        pmsTest_C2 = true;
        break;
      }
    }
  }

  if (pmsTest_C2 === true) {
    var gray = capitalize(ink_C2.text);
    var grayArray = gray.split(" ");
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
        "C";
      item_C2_name.contents = grayName;
      item_C2_screenName.contents = grayName;
      item_C2_color.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
      item_C2_chip.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
    } else {
      var kilo = ink_C2.text.search(" ");
      var pmsNumberC2 = ink_C2.text.substring(0, kilo);
      var mike = ink_C2.text.substring(kilo);
      pmsNumberC2 = pmsNumberC2.replace(/,/g, "");
      item_C2_name.contents =
        "PANTONE" + " " + pmsNumberC2 + " " + "C" + "  " + capitalize(mike);
      item_C2_screenName.contents = pmsNumberC2 + " " + capitalize(mike);
      item_C2_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC2 + " " + "C"
      ).color;
      item_C2_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC2 + " " + "C"
      ).color;
    }
  }

  // If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
  if (pmsTest_C2 === false) {
    if (ink_C2.text === "white") {
      item_C2_name.contents = "White";
      item_C2_screenName.contents = "White";
      item_C2_color.fillColor = newWhite;
      item_C2_chip.fillColor = newWhite;
      item_C2_frame.strokeWidth = 1.25;
    } else if (ink_C2.text === "black") {
      item_C2_name.contents = "Black";
      item_C2_screenName.contents = "Black";
      item_C2_color.fillColor = newBlack;
      item_C2_chip.fillColor = newBlack;
      item_C2_frame.strokeWidth = 1.25;
    } else {
      item_C2_name.contents =
        "PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C";
      item_C2_screenName.contents = capitalizeSpaces(ink_C2.text);
      item_C2_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
      ).color;
      item_C2_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
      ).color;
    }
  }

  // This block makes the stroke of the box thicker if the ink is a standard color.
  ink_C2.text = capitalize(ink_C2.text);
  if (ink_C2.text === "Reflex Blue" || ink_C2.text === "Process Blue") {
    item_C2_frame.strokeWidth = 1.25;
  }

  neonInk(ink_C2.text, "C2_Warning");

  for (i = 0; i < standardInkNumber.length; i++) {
    if (pmsNumberC2 === standardInkNumber[i]) {
      item_C2_frame.strokeWidth = 1.25;
    }
  }
}
if (ink_C2.text.length > 0) {
  screenCounter_C.push(1);
}
//#endregion

//#region     C3
if (ink_C3.text.length > 0) {
  var pmsTest_C3 = false;
  for (var index = 0; index < ink_C3.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_C3.text[index] === digitArray[i]) {
        pmsTest_C3 = true;
        break;
      }
    }
  }

  if (pmsTest_C3 === true) {
    var gray = capitalize(ink_C1.text);
    var grayArray = gray.split(" ");
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
        "C";
      item_C3_name.contents = grayName;
      item_C3_screenName.contents = grayName;
      item_C3_color.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
      item_C3_chip.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
    } else {
      var kilo = ink_C3.text.search(" ");
      var pmsNumberC3 = ink_C3.text.substring(0, kilo);
      var mike = ink_C3.text.substring(kilo);
      pmsNumberC3 = pmsNumberC3.replace(/,/g, "");
      item_C3_name.contents =
        "PANTONE" + " " + pmsNumberC3 + " " + "C" + "  " + capitalize(mike);
      item_C3_screenName.contents = pmsNumberC3 + " " + capitalize(mike);
      item_C3_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC3 + " " + "C"
      ).color;
      item_C3_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC3 + " " + "C"
      ).color;
    }
  }

  // If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
  if (pmsTest_C3 === false) {
    if (ink_C3.text === "white") {
      item_C3_name.contents = "White";
      item_C3_screenName.contents = "White";
      item_C3_color.fillColor = newWhite;
      item_C3_chip.fillColor = newWhite;
      item_C3_frame.strokeWidth = 1.25;
    } else if (ink_C3.text === "black") {
      item_C3_name.contents = "Black";
      item_C3_screenName.contents = "Black";
      item_C3_color.fillColor = newBlack;
      item_C3_chip.fillColor = newBlack;
      item_C3_frame.strokeWidth = 1.25;
    } else {
      item_C3_name.contents =
        "PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C";
      item_C3_screenName.contents = capitalizeSpaces(ink_C3.text);
      item_C3_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
      ).color;
      item_C3_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
      ).color;
    }
  }

  // This block makes the stroke of the box thicker if the ink is a standard color.
  ink_C3.text = capitalize(ink_C3.text);
  if (ink_C3.text === "Reflex Blue" || ink_C3.text === "Process Blue") {
    item_C3_frame.strokeWidth = 1.25;
  }

  neonInk(ink_C3.text, "C3_Warning");

  for (i = 0; i < standardInkNumber.length; i++) {
    if (pmsNumberC3 === standardInkNumber[i]) {
      item_C3_frame.strokeWidth = 1.25;
    }
  }
}
if (ink_C3.text.length > 0) {
  screenCounter_C.push(1);
}

//#endregion

//#region     C4
function bodyColor_function() {
  var bodyColorAlpha = app.activeDocument.layers
    .getByName("Body Colors")
    .layers.getByName(bodyColorList.selection.text);
  bodyColorAlpha.visible = true;
}
if (ink_C4.text.length > 0) {
  var pmsTest_C4 = false;
  for (var index = 0; index < ink_C4.text.length; index++) {
    for (i = 0; i < digitArray.length; i++) {
      if (ink_C4.text[index] === digitArray[i]) {
        pmsTest_C4 = true;
        break;
      }
    }
  }

  if (pmsTest_C4 === true) {
    var gray = capitalize(ink_C4.text);
    var grayArray = gray.split(" ");
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
        "C";
      item_C4_name.contents = grayName;
      item_C4_screenName.contents = grayName;
      item_C4_color.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
      item_C4_chip.fillColor =
        app.activeDocument.swatches.getByName(grayName).color;
    } else {
      var kilo = ink_C4.text.search(" ");
      var pmsNumberC4 = ink_C4.text.substring(0, kilo);
      var mike = ink_C4.text.substring(kilo);
      pmsNumberC4 = pmsNumberC4.replace(/,/g, "");
      item_C4_name.contents =
        "PANTONE" + " " + pmsNumberC4 + " " + "C" + "  " + capitalize(mike);
      item_C4_screenName.contents = pmsNumberC4 + " " + capitalize(mike);
      item_C4_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC4 + " " + "C"
      ).color;
      item_C4_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + pmsNumberC4 + " " + "C"
      ).color;
    }
  }

  // If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
  if (pmsTest_C4 === false) {
    if (ink_C4.text === "white") {
      item_C4_name.contents = "White";
      item_C4_screenName.contents = "White";
      item_C4_color.fillColor = newWhite;
      item_C4_chip.fillColor = newWhite;
      item_C4_frame.strokeWidth = 1.25;
    } else if (ink_C4.text === "black") {
      item_C4_name.contents = "Black";
      item_C4_screenName.contents = "Black";
      item_C4_color.fillColor = newBlack;
      item_C4_chip.fillColor = newBlack;
      item_C4_frame.strokeWidth = 1.25;
    } else {
      item_C4_name.contents =
        "PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C";
      item_C4_screenName.contents = capitalizeSpaces(ink_C4.text);
      item_C4_color.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
      ).color;
      item_C4_chip.fillColor = app.activeDocument.swatches.getByName(
        "PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
      ).color;
    }
  }

  // This block makes the stroke of the box thicker if the ink is a standard color.
  ink_C4.text = capitalize(ink_C4.text);
  if (ink_C4.text === "Reflex Blue" || ink_C4.text === "Process Blue") {
    item_C4_frame.strokeWidth = 1.25;
  }

  neonInk(ink_C4.text, "C4_Warning");

  for (i = 0; i < standardInkNumber.length; i++) {
    if (pmsNumberC4 === standardInkNumber[i]) {
      item_C4_frame.strokeWidth = 1.25;
    }
  }
}
if (ink_C4.text.length > 0) {
  screenCounter_C.push(1);
}

if (bodyColorList.selection.index < 11) {
  bodyColor_function();
}
//#endregion
//#endregion
//#region                                ORIGINAL ART
var item_OriginalArt_A = "original art side A";
var item_originalArt_C = "original art side C";
//#endregion
//#region                                CUSTOMER INFO
function customerInfo_function() {
  var rep = app.activeDocument.textFrames.getByName("Rep");
  rep.contents = capitalizeSpaces(repNameEdit.text) + "     " + repEmail_Edit.text.toLowerCase();
  var repNameSignature = app.activeDocument.textFrames.getByName("RepName_Signature");
  repNameSignature.contents = repNameEdit.text;
  repNameSignature.contents = capitalizeSpaces(repNameSignature.contents);

  var repNameSignature = app.activeDocument.textFrames.getByName("RepName_Signature");
  repNameSignature.contents = repNameEdit.text;
  repNameSignature.contents = capitalizeSpaces(repNameSignature.contents);
}

function companyName_function() {
  var companyName = app.activeDocument.textFrames.getByName("Company");
  companyName.contents = company_A_Edit.text;
  companyName.contents = companyName.contents;
}

//#endregion

function designer_function() {
  var designer = app.activeDocument.textFrames.getByName("Designer");
  designer.contents = designerList.selection.text;
  if (doubleSidedCheckbox.value === true) {
    var designerBack = app.activeDocument.textFrames.getByName("Designer_Back");
    designerBack.contents = designerList.selection.text;
  }
}
function vip_function() {
  var vipBox = app.activeDocument.layers
    .getByName("Masque")
    .groupItems.getByName("VIP");
  if (vipCheckbox.value === true) {
    vipBox.hidden = false;
  } else {
    vipBox.hidden = true;
  }
}
function rush_function() {
  var rushBox = app.activeDocument.layers
    .getByName("Masque")
    .groupItems.getByName("Rush");
  if (rushCheckbox.value === true) {
    rushBox.hidden = false;
  }
  if (rushCheckbox.value === false) {
    rushBox.hidden = true;
  } else {
    rushBox.hidden = false;
  }
}
function po_function() {
  if (nationalityCanada.value === true) {
    var purchaseOrder = app.activeDocument.layers
      .getByName("Canada")
      .textFrames.getByName("PO");
      purchaseOrder.contents = poNumber_edit.text
  } else {
    var purchaseOrder = app.activeDocument.layers
      .getByName("USA")
      .textFrames.getByName("PO");
    purchaseOrder.contents = poNumber_edit.text;

  }
}
function originalFile_function() {
  var originalFile = app.activeDocument.textFrames.getByName("Original Art");
  originalFile.contents = originalArt_edit.text;
}
function repeatOrder_function() {
  var repeatOrder = app.activeDocument.textFrames.getByName("RepeatOrderText");
  repeatOrder.contents = repeatOrder_edit.text;
}
function currentDate() {
  var currentDate = new Date();
  var date = currentDate.toDateString();
  var date_A = date.split(" ");
  var date_B =
    date_A[0] + ", " + date_A[1] + " " + date_A[2] + ", " + date_A[3];
  return date_B;
}
function proofDate() {
  var proofDate = app.activeDocument.textFrames.getByName("DateBox");
  proofDate.contents = currentDate();
}
function backDate() {
  if (doubleSidedCheckbox.value === true) {
    var dateBoxBack = app.activeDocument.textFrames.getByName("DateBox_Back");
    dateBoxBack.contents = currentDate();
  }
}
function ship_function() {
  var ship = app.activeDocument.textFrames.getByName("Ship Date");
  ship.contents = capitalizeSpaces(shipDate_edit.text);
}
function InHands_function() {
  var inHands = app.activeDocument.textFrames.getByName("In Hands Date");
  inHands.contents = capitalizeSpaces(inHandsDate_edit.text);
}
function JDE_function() {
  if (nationalityUS.value === true) {
    var jde = app.activeDocument.layers
      .getByName("USA")
      .textFrames.getByName("jde number");
    jde.contents = jdeNumber_edit.text;
  } else {
    var canadaJde = app.activeDocument.layers
      .getByName("Canada")
      .textFrames.getByName("jde number");
    canadaJde.contents = jdeNumber_edit.text;
  }
  if (doubleSidedCheckbox.value === true) {
var jdeBack = app.activeDocument.textFrames.getByName("jde number_Back");
jdeBack.contents = jdeNumber_edit.text;
}
}
function repInfo() {
  if (
    bodyColorList.selection.index === 11 ||
    bodyColorList.selection.index === 12
  ) {
    var repFront = app.activeDocument.textFrames.getByName("Rep");
    repFront.contents =
      capitalize(repNameEdit.text) + "     " + repEmail_Edit.text.toLowerCase();

    if (doubleSidedCheckbox.value === true) {
      var repBack = app.activeDocument.textFrames.getByName("Rep_Back");
      repBack.contents =
        capitalize(repNameEdit.text) +
        "     " +
        repEmail_Edit.text.toLowerCase();

      if (nationalityCanada.value === true) {
        var POBack = app.activeDocument.layers
          .getByName("Canada")
          .textFrames.getByName("PO_Back");
      } else {
        var POBack = app.activeDocument.layers
          .getByName("USA")
          .textFrames.getByName("PO_Back");
      }

      POBack.contents = poNumber_edit.text;
      if (POBack === null) {
        POBack.contents = webPrefix.selection.text + webNumber_edit.text;
      }
    }
  }
}
function description(bodyColorLayer) {
  var bodyColorLayer = descriptionBox_edit.text;
  bodyColorLayer = bodyColorLayer.toLowerCase();
  bodyColorLayer = bodyColorLayer.split(" ");
  for (var i = 0; i < bodyColorLayer.length; i++) {
    bodyColorLayer[i] =
      bodyColorLayer[i].charAt(0).toUpperCase() + bodyColorLayer[i].slice(1);
  }
  return bodyColorLayer.join("");
}
function nineZeroes_Function() {
  var zeroArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
  var a = webNumber_edit.text.split("");
  var nineZeroes_alpha = zeroArray.concat(a);
  for (var i = 0; i < nineZeroes_alpha.length; i++) {
    if (nineZeroes_alpha.length > 9) {
     nineZeroes_alpha.shift();
    }
  }
  return nineZeroes_alpha.join("");
}
function capitalize(u) {
  u = u.toLowerCase();
  u = u.split(" ");
  for (var i = 0; i < u.length; i++) {
    u[i] = u[i].charAt(0).toUpperCase() + u[i].slice(1);
  }
  return u.join("");
}
function capitalizeSpaces(n) {
  n = n.toLowerCase();
  n = n.split(" ");
  for (var i = 0; i < n.length; i++) {
    n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
  }
  return n.join(" ");
}
function magento() {
  if (webPrefix.selection == 0) {
    return "USLog" + nineZeroes_Function();
  }
  if (webPrefix.selection == 1) {
    return "CAENLog" + nineZeroes_Function();
  }
}
function prefix() {
  if (jdeNumber_edit.text.length > 0) {
    return jdeNumber_edit.text;
  } else {
    return magento();
  }
}
function filenameOutput() {
  if (bodyColorList.selection.index < 11) {
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
    ];


    for (i = 0; i < illustratorFrame.length; i++) {
         var bravo2 = app.activeDocument.textFrames.getByName(illustratorFrame[i]);
         bravo2.contents = alpha;
     }
   }










}

function web_function() {
     if (jdeNumber_edit.text.length < 1) {
     var web = app.activeDocument.textFrames.getByName("Web");
     web.contents = magento();
}
}

//#region     FILENAME
var alpha;
if (bodyColorList.selection < 10) {
  alpha = prefix() + "_" + capitalize(descriptionBox_edit.text) + "_A";
  if (multi.value === true && multi_bodyColor.value === true) {
    alpha =
      prefix() +
      "_" +
      capitalize(descriptionBox_edit.text) +
      "_" +
      bodyColorList.selection.text +
      "_A";
  }
  if (multi.value === true && multi_itemNumber.value === true) {
    alpha = prefix() + "_" + capitalize(descriptionBox_edit.text) + "_Item01_A";
  }
}

if (bodyColorList.selection == 11) {
  if (multi.value === false) { 
    alpha =
      prefix() + "_" + capitalize(descriptionBox_edit.text) + "_DarkAssort_A";
  } else {
    alpha =
      prefix() +
      "_" +
      capitalize(descriptionBox_edit.text) +
      "_DarkAssort_Item01_A";
  }
}

if (bodyColorList.selection == 12) {
  if (multi.value === false) {
    alpha =
      prefix() + "_" + capitalize(descriptionBox_edit.text) + "_LightAssort_A";
  } else {
    alpha =
      prefix() +
      "_" +
      capitalize(descriptionBox_edit.text) +
      "_LightAssort_Item01_A";
  }
}

if (bodyColorList.selection == 14) {
  if (multi.value === true) {
    alpha =
      "SLEEVE_" +
      prefix() +
      "_" +
      capitalize(descriptionBox_edit.text) +
      "_Item01_A";
  } else {
    alpha =
      "SLEEVE_" + prefix() + "_" + capitalize(descriptionBox_edit.text) + "_A";
  }
} else if (bodyColorList.selection == 14 && multi.value === true) {
  alpha =
    "SLEEVE_" +
    prefix() +
    "_" +
    capitalize(descriptionBox_edit.text) +
    "_Item01_A";
}
//#endregion





var reducedFileName = app.activeDocument.textFrames.getByName("FileName");
if (alpha.length > 32) {
     reducedFileName.textRange.characterAttributes.size = 6;
     reducedFileName.textRange.characterAttributes.baselineShift = -3;
}


var reducedOriginalArt = app.activeDocument.textFrames.getByName("Original Art");
if (originalArt_edit.text.length > 50) {
     reducedOriginalArt.textRange.characterAttributes.size = 4;
     reducedOriginalArt.textRange.characterAttributes.baselineShift = -1;
}


var reducedPO = app.activeDocument.textFrames.getByName("PO");
if (poNumber_edit.text.length > 11) { 
     reducedPO.textRange.characterAttributes.size = 6;
     reducedPO.textRange.characterAttributes.baselineShift = -3;
}









//#region     FUNCTION CALLS
repInfo();
customerInfo_function();
vip_function();
rush_function();
po_function();
JDE_function();
web_function();
InHands_function();
ship_function();
originalFile_function();
repeatOrder_function();
companyName_function();
designer_function();
filenameOutput();
proofDate();
backDate();
//#endregion

//#region     DARK ASSORTMENT
if (bodyColorList.selection.index === 11) {
  var assortFile = app.activeDocument.textFrames.getByName("FileName");
  assortFile.contents = alpha;

  var assortFileScreen = app.activeDocument.textFrames.getByName(
    "Assortment Screen Filename"
  );
  assortFileScreen.contents = alpha;
  if(doubleSidedCheckbox.value === true) {
    var bravoFileName = app.activeDocument.textFrames.getByName("FileName_Back");
    bravoFileName.contents = alpha;
    var bravoFileNameBack = app.activeDocument.textFrames.getByName("Assortment Screen Filename Back");
    bravoFileNameBack.contents = alpha;
    }
  }

//#endregion

//#region     LIGHT ASSORTMENT
if (bodyColorList.selection.index === 12) {
  var assortFile = app.activeDocument.textFrames.getByName("FileName");
  assortFile.contents = alpha;

  var assortFileScreen = app.activeDocument.textFrames.getByName(
    "Assortment Screen Filename"
  );
  assortFileScreen.contents = alpha;

  }

  //#region          DOUBLE SIDED ASSORTMENTS




  if (bodyColorList.selection.index === 11 || bodyColorList.selection.index === 12) {
     if (doubleSidedCheckbox.value == true) {
       var assortment_screenName_back = app.activeDocument.textFrames.getByName("Assortment Ink Color Back");
       var bravoFileNameBack = app.activeDocument.textFrames.getByName("Assortment Screen Filename Back");
       bravoFileNameBack.contents = alpha;

       var reducedDoubleFileName = app.activeDocument.textFrames.getByName("FileName_Back");
       if (alpha.length > 32) {
         reducedDoubleFileName.textRange.characterAttributes.size = 6;
         reducedDoubleFileName.textRange.characterAttributes.baselineShift = -3;
       }
       var reducedDoubleOriginalArt = app.activeDocument.textFrames.getByName("Original Art_Back");
       if (originalArt_edit.text.length > 50) {
         reducedDoubleOriginalArt.textRange.characterAttributes.size = 4;
         reducedDoubleOriginalArt.textRange.characterAttributes.baselineShift = -1;
       }
       var reducedDoublePO = app.activeDocument.textFrames.getByName("PO_Back");
       if (poNumber_edit.text.length > 11) {
         reducedDoublePO.textRange.characterAttributes.size = 6;
         reducedDoublePO.textRange.characterAttributes.baselineShift = -3;
       }
     }
   }
  //#endregion







//#endregion

//#region     SLEEVE
var alphaFileName = app.activeDocument.textFrames.getByName("FileName");

  alphaFileName.contents = alpha;

//#endregion

//#region     SPECIAL INSTRUCTIONS 
var instructionsArrow = app.activeDocument.groupItems.getByName(
  "SpecialInstructionsArrow"
);

var customer_instructions = app.activeDocument.textFrames.getByName(
  "Customer Instructions"
);
customer_instructions.contents = instructionsCustomer_edit.text;
instructionsArrow.hidden = false;

if (instructionsCustomer_edit.text.length < 1) {
  var instructionsCustomerGroup = app.activeDocument.groupItems.getByName(
    "Customer Instructions Group"
  );
  instructionsArrow.hidden = true;
  instructionsCustomerGroup.remove();
}

var customerService_instructions = app.activeDocument.textFrames.getByName(
  "Customer Service Instructions"
);
customerService_instructions.contents = instructionsCustomerService_edit.text;
instructionsArrow.hidden = false;

if (instructionsCustomerService_edit.text.length < 1) {
  var instructionsCustomerServiceGroup =
    app.activeDocument.groupItems.getByName(
      "Customer Service Instructions Group"
    );
  instructionsCustomerServiceGroup.remove();
}

var production_instructions = app.activeDocument.textFrames.getByName(
  "Production Instructions"
);
production_instructions.contents = instructionsProduction_edit.text;

if (instructionsProduction_edit.text.length < 1) {
  var instructionsProductionGroup = app.activeDocument.groupItems.getByName(
    "Production Instructions Group"
  );
  instructionsProductionGroup.remove();
}

if (
  instructionsCustomer_edit.text.length < 1 &&
  instructionsProduction_edit.text.length < 1 &&
  instructionsCustomerService_edit.text.length < 1
) {
  instructionsArrow.hidden = true;
  if (bodyColorList.selection < 11) {
    var artboardLogo =
      app.activeDocument.groupItems.getByName("Bic Logo Group");
    artboardLogo.remove();
    app.activeDocument.artboards.getByName("Back").remove();
  }
} else {
  instructionsArrow.hidden = false;
}

if (
  bodyColorList.selection.index === 11 ||
  bodyColorList.selection.index === 12
) {
  if (doubleSidedCheckbox.value === false) {
    var artboardLogo =
      app.activeDocument.groupItems.getByName("Bic Logo Group");
    artboardLogo.remove();
    app.activeDocument.artboards.getByName("Back").remove();
  }

  if (doubleSidedCheckbox.value === true) {
    var SILayer = app.activeDocument.layers.getByName("Special Instructions");
    SILayer.visible = true;
    SILayer.remove();
  }
}
//#endregion

//#region     ASSORTMENT VISIBILITY
if (bodyColorList.selection.index === 11) {
  app.activeDocument.layers.getByName("LIGHT ASSORTMENT").visible = false;
  app.activeDocument.layers.getByName("DARK ASSORTMENT").visible = true;
}

if (bodyColorList.selection.index === 12) {
  app.activeDocument.layers.getByName("DARK ASSORTMENT").visible = false;
  app.activeDocument.layers.getByName("LIGHT ASSORTMENT").visible = true;
}
//#endregion

//#region     SCREENCOUNTER
if (bodyColorList.selection.index < 11) {
  var screenTotal = screenCounter_A.length + screenCounter_C.length;

  var screenNumberLast_1 =
    app.activeDocument.textFrames.getByName("A1 Screen Number");
  screenNumberLast_1.contents = screenTotal;

  var screenNumberLast_2 =
    app.activeDocument.textFrames.getByName("A2 Screen Number");
  screenNumberLast_2.contents = screenTotal;

  var screenNumberLast_3 =
    app.activeDocument.textFrames.getByName("A3 Screen Number");
  screenNumberLast_3.contents = screenTotal;

  var screenNumberLast_4 =
    app.activeDocument.textFrames.getByName("A4 Screen Number");
  screenNumberLast_4.contents = screenTotal;

  var screenNumberFirst_5 =
    app.activeDocument.textFrames.getByName("InkNumber_5");
  screenNumberFirst_5.contents = screenCounter_A.length + 1;
  var screenNumberLast_5 =
    app.activeDocument.textFrames.getByName("C1 Screen Number");
  screenNumberLast_5.contents = screenTotal;

  var screenNumberFirst_6 =
    app.activeDocument.textFrames.getByName("InkNumber_6");
  screenNumberFirst_6.contents = screenCounter_A.length + 2;
  var screenNumberLast_6 =
    app.activeDocument.textFrames.getByName("C2 Screen Number");
  screenNumberLast_6.contents = screenTotal;

  var screenNumberFirst_7 =
    app.activeDocument.textFrames.getByName("InkNumber_7");
  screenNumberFirst_7.contents = screenCounter_A.length + 3;
  var screenNumberLast_7 =
    app.activeDocument.textFrames.getByName("C3 Screen Number");
  screenNumberLast_7.contents = screenTotal;

  var screenNumberFirst_8 =
    app.activeDocument.textFrames.getByName("InkNumber_8");
  screenNumberFirst_8.contents = screenCounter_A.length + 4;
  var screenNumberLast_8 =
    app.activeDocument.textFrames.getByName("C4 Screen Number");
  screenNumberLast_8.contents = screenTotal;

  if (screenCounter_A.length === 3) {
    app.activeDocument.groupItems.getByName("Screen4").remove();
  } else if (screenCounter_A.length === 2) {
    app.activeDocument.groupItems.getByName("Screen4").remove();
    app.activeDocument.groupItems.getByName("Screen3").remove();
  } else if (screenCounter_A.length === 1) {
    app.activeDocument.groupItems.getByName("Screen4").remove();
    app.activeDocument.groupItems.getByName("Screen3").remove();
    app.activeDocument.groupItems.getByName("Screen2").remove();
  }

  if (screenCounter_C.length === 3) {
    app.activeDocument.groupItems.getByName("Screen8").remove();
  } else if (screenCounter_C.length === 2) {
    app.activeDocument.groupItems.getByName("Screen8").remove();
    app.activeDocument.groupItems.getByName("Screen7").remove();
  } else if (screenCounter_C.length === 1) {
    app.activeDocument.groupItems.getByName("Screen8").remove();
    app.activeDocument.groupItems.getByName("Screen7").remove();
    app.activeDocument.groupItems.getByName("Screen6").remove();
  } else if (screenCounter_C.length === 0) {
    app.activeDocument.groupItems.getByName("Screen8").remove();
    app.activeDocument.groupItems.getByName("Screen7").remove();
    app.activeDocument.groupItems.getByName("Screen6").remove();
    app.activeDocument.groupItems.getByName("Screen5").remove();
  }
}
//#endregion

//#region     AUTOSAVE
if (autoSave.value === true) {
  var doc = app.activeDocument;
  var docPath =
    "/c/Users/JBavitz/BIC/BIC logo lighter Customer Service - General/Graphic Design/3 - Art Proof sent";
  {
    var opts = new PDFSaveOptions();
    opts.PDFPreset = "Illustrator Default";

if (bodyColorList.selection.index < 11) {

     doc.saveAs(File(docPath + "/" + alpha + ".pdf"), opts);
     
     /*     if (multi.value === true) {
        doc.saveAs(File(docPath + "/" + multiName + ".pdf"), opts);
      } else {
        doc.saveAs(File(docPath + "/" + singleName + ".pdf"), opts);
      }
    } */

    if (bodyColorList.selection.index === 11) {
      doc.saveAs(File(docPath + "/" + darkAssortName + ".pdf"), opts);
    }

    if (bodyColorList.selection.index === 12) {
      doc.saveAs(File(docPath + "/" + lightAssortName + ".pdf"), opts);
    }

    if (bodyColorList.selection.index === 14) {
      doc.saveAs(File(docPath + "/" + sleeveName + ".pdf"), opts);
    }
  }
}
}
//#endregion
 





//#region     BUG LIST
/* Certain ink colors don't begin with numbers:
blue 072
red 032



*/
//#endregion