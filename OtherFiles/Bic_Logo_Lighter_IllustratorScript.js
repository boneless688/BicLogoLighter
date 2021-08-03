/*  This javaScript file works with the illustrator file
Proof_Template_Layout.ai
*/

//#region
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
topLeft.preferredSize.height = 200;
topLeft.preferredSize.width = 200;

var customerInfo_outer = topLeft.add("group");
customerInfo_outer.orientation = "column";

var repName = customerInfo_outer.add("statictext", undefined, "Rep name");
var repNameEdit = customerInfo_outer.add("edittext", undefined, "");
repNameEdit.characters = 20;
repNameEdit.text = 'glenda vilchez';

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email");
var repEmail_Edit = customerInfo_outer.add("edittext", undefined, "");
repEmail_Edit.characters = 20;
repEmail_Edit.text = 'glenda@rockstarpromos.com';

var companyGroup = customerInfo_outer.add("panel", undefined, "");
companyGroup.orientation = "row";

var company_A = companyGroup.add("statictext", undefined, "Company");
var company_A_Edit = companyGroup.add("edittext", undefined, "");
company_A_Edit.characters = 10;
company_A_Edit.text = 'rock star promos';

var vipCheckbox = companyGroup.add("checkbox", undefined, "VIP");

var nationalityGroup = topLeft.add("panel", undefined, "");
nationalityGroup.orientation = "row";
nationalityGroup.margins = [20, 20, 20, 5];

var nationalityUS = nationalityGroup.add("radiobutton", undefined, "US");
nationalityUS.orientation = "row";
nationalityUS.value = true;
var nationalityCanada = nationalityGroup.add("radiobutton", undefined, "Canadian");
var topRight = topPart.add("panel", undefined, "");
topRight.orientation = "column";
topRight.preferredSize.height = 265;

var orderOne = topRight.add("group");
orderOne.orientation = "row";

var jdeNumber = orderOne.add("statictext", undefined, "JDE Number");
var jdeNumber_edit = orderOne.add("edittext", undefined, "");
jdeNumber_edit.characters = 7;
jdeNumber_edit.text = '9991654';

var poNumber = orderOne.add("statictext", undefined, "PO Number");
var poNumber_edit = orderOne.add("edittext", undefined, "");
poNumber_edit.characters = 20;
poNumber_edit.text = 'po-test1234';

var webPrefix = orderOne.add("dropdownlist", undefined, ["None", "B2B", "D2CWEB", "CA2C"]);
webPrefix.characters = 6;
webPrefix.selection = 2;

var webNumber = orderOne.add("statictext", undefined, "Web Number");
var webNumber_edit = orderOne.add("edittext", undefined, "");
webNumber_edit.characters = 10;
webNumber_edit.text = '23404';

var orderThree = topRight.add("panel", undefined, "");
orderThree.orientation = "row";
orderThree.alignment = "left";

var inHandsDate = orderThree.add("statictext", undefined, "In-hands Date");
var inHandsDate_edit = orderThree.add("edittext", undefined, "");
inHandsDate_edit.characters = 10;


var shipDate = orderThree.add("statictext", undefined, "Ship Date");
var shipDate_edit = orderThree.add("edittext", undefined, "");
shipDate_edit.characters = 10;

var rushCheckbox = orderThree.add("checkbox", undefined, "Rush order");

var spacer = orderThree.add("group");

var itemNumber = orderThree.add("statictext", undefined, "Number of Items");
var itemNumber_edit = orderThree.add("edittext", undefined, "1");
itemNumber_edit.characters = 2;
if (itemNumber_edit.text < 2 || itemNumber_edit.length === 0) {
  itemNumber_edit.value = 1;
}

var orderFour = topRight.add("group");
orderFour.orientation = "row";
orderFour.preferredSize.height = 100;

var instructionsCustomer_title = orderFour.add("panel", undefined, "Instructions - Customer");
var instructionsCustomer_text = instructionsCustomer_title.add("edittext", undefined, "", { multiline: true } );
instructionsCustomer_text.minimumSize.width = 200;
instructionsCustomer_text.minimumSize.height = 100;
instructionsCustomer_text.text = 'Instructions from the customer.';

var instructionsCustomerService_title = orderFour.add("panel", undefined, "Instructions - Customer Service");
var instructionsCustomerService_edit = instructionsCustomerService_title.add("edittext", undefined, "", { multiline: true });
instructionsCustomerService_edit.minimumSize.width = 200;
instructionsCustomerService_edit.minimumSize.height = 100;
instructionsCustomerService_edit.text = 'Instructions from Customer Service.';


var instructionsProduction_title = orderFour.add("panel", undefined, "Instructions - Production");
var instructionsProduction_edit = instructionsProduction_title.add("edittext", undefined, "", { multiline: true });
instructionsProduction_edit.minimumSize.width = 200;
instructionsProduction_edit.minimumSize.height = 100;
instructionsProduction_edit.text = 'Instructions from Production.';

var bottom = big.add("group");
bottom.orientation = "column";

var itemLeft = bottom.add("group");
itemLeft.orientation = "row";


var itemTopRow = itemLeft.add("panel", undefined, "");
itemTopRow.orientation = "row";
/*  itemTopRow.preferredSize.width = 150;
itemTopRow.preferredSize.height = 75;  */

var descriptionSide = itemTopRow.add("group");
descriptionSide.orientation = "column";

var colors = itemTopRow.add("group");
colors.margins = [50, 0, 0, 0];

var bodyColor = descriptionSide.add("panel", undefined, "Body Color");
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
  "DarkAssort",
  "LightAssort",
  "-",
  "Sleeve",
]);
bodyColorList.selection = 3;

var descriptionBox = descriptionSide.add("statictext", undefined, "Description");
var descriptionBox_edit = descriptionSide.add("edittext", undefined, "");
descriptionBox_edit.characters = 20;
descriptionBox_edit.text = 'the only thing';

var spacerBox = descriptionSide.add("statictext", undefined, "");
spacerBox.margins = 20;

var originalArt_A = descriptionSide.add("statictext", undefined, "Original Art-Side A");
var originalArt_A_edit = descriptionSide.add("edittext", undefined, "");
originalArt_A_edit.characters = 20;
originalArt_A_edit.text = 'Original art file name for side A.';


var originalArt_C = descriptionSide.add("statictext", undefined, "Original Art-Side C");
var originalArt_C_edit = descriptionSide.add("edittext", undefined, "");
originalArt_C_edit.characters = 20;
originalArt_C_edit.text = 'Original art file name for side C.';


var inkMaster = colors.add("group");
inkMaster.orientation = "column";
var inkColors_1 = inkMaster.add("group");
var inkColors_2 = inkMaster.add("group");

var inkColors_A = inkColors_1.add("panel", undefined, "inkColors_A");
inkColors_A.preferredSize = [400, 100];
inkColors_A.margins = [20, 20, 20, 20];
inkColors_A.orientation = "row";



var inkBox_Master_A1 = inkColors_A.add("panel", undefined, "Screen A1");
inkBox_Master_A1.orientation = "column";
inkBox_Master_A1.margins = [15, 15, 5, 15];
var ink_A1Number = inkBox_Master_A1.add("edittext", undefined, "");
ink_A1Number.characters = 4;
ink_A1Number.text = '186';
var ink_A1Text = inkBox_Master_A1.add("edittext", undefined, "");
ink_A1Text.characters = 10;
ink_A1Text.text = "red"
var ink_A1Checkbox = inkBox_Master_A1.add("checkbox", undefined, "Custom ink");
ink_A1Checkbox.value = false;


var inkBox_Master_A2 = inkColors_A.add("panel", undefined, "Screen A2");
inkBox_Master_A2.orientation = "column";
var ink_A2Number = inkBox_Master_A2.add("edittext", undefined, "");
ink_A2Number.characters = 4;
var ink_A2Text = inkBox_Master_A2.add("edittext", undefined, "");
ink_A2Text.characters = 10;
//ink_A2Text.text = "reflex blue"
var ink_A2Checkbox = inkBox_Master_A2.add("checkbox", undefined, "Custom ink");
ink_A2Checkbox.value = false;


var inkBox_Master_A3 = inkColors_A.add("panel", undefined, "Screen A3");
inkBox_Master_A3.orientation = "column";
var ink_A3Number = inkBox_Master_A3.add("edittext", undefined, "");
ink_A3Number.characters = 4;
var ink_A3Text = inkBox_Master_A3.add("edittext", undefined, "");
ink_A3Text.characters = 10;
//ink_A3Text.text = "reflex blue"
var ink_A3Checkbox = inkBox_Master_A3.add("checkbox", undefined, "Custom ink");
ink_A3Checkbox.value = false;


var inkBox_Master_A4 = inkColors_A.add("panel", undefined, "Screen A4");
inkBox_Master_A4.orientation = "column";
var ink_A4Number = inkBox_Master_A4.add("edittext", undefined, "");
ink_A4Number.characters = 4;
var ink_A4Text = inkBox_Master_A4.add("edittext", undefined, "");
ink_A4Text.characters = 10;
//ink_A4Text.text = "reflex blue"
var ink_A4Checkbox = inkBox_Master_A4.add("checkbox", undefined, "Custom ink");
ink_A4Checkbox.value = false;







var inkColors_C = inkColors_2.add("panel", undefined, "inkColors_C");
inkColors_C.preferredSize = [400, 100];
inkColors_C.margins = [20, 20, 20, 20];
inkColors_C.orientation = "row";

var inkBox_Master_C1 = inkColors_C.add("panel", undefined, "Screen C1");
inkBox_Master_C1.orientation = "column";
var ink_C1Number = inkBox_Master_C1.add("edittext", undefined, "");
ink_C1Number.characters = 4;
ink_C1Number.text = "211"
var ink_C1Text = inkBox_Master_C1.add("edittext", undefined, "");
ink_C1Text.characters = 10;
ink_C1Text.text = "pink"
var ink_C1Checkbox = inkBox_Master_C1.add("checkbox", undefined, "Custom ink");
ink_C1Checkbox.value = false;


var inkBox_Master_C2 = inkColors_C.add("panel", undefined, "Screen C2");
inkBox_Master_C2.orientation = "column";
var ink_C2Number = inkBox_Master_C2.add("edittext", undefined, "");
ink_C2Number.characters = 4;
var ink_C2Text = inkBox_Master_C2.add("edittext", undefined, "");
ink_C2Text.characters = 10;
//ink_C2Text.text = "reflex blue"
var ink_C2Checkbox = inkBox_Master_C2.add("checkbox", undefined, "Custom ink");
ink_C2Checkbox.value = false;


var inkBox_Master_C3 = inkColors_C.add("panel", undefined, "Screen C3");
inkBox_Master_C3.orientation = "column";
var ink_C3Number = inkBox_Master_C3.add("edittext", undefined, "");
ink_C3Number.characters = 4;
var ink_C3Text = inkBox_Master_C3.add("edittext", undefined, "");
ink_C3Text.characters = 10;
//ink_C3Text.text = "reflex blue"
var ink_C3Checkbox = inkBox_Master_C3.add("checkbox", undefined, "Custom ink");
ink_C3Checkbox.value = false;


var inkBox_Master_C4 = inkColors_C.add("panel", undefined, "Screen C4");
inkBox_Master_C4.orientation = "column";
var ink_C4Number = inkBox_Master_C4.add("edittext", undefined, "");
ink_C4Number.characters = 4;
var ink_C4Text = inkBox_Master_C4.add("edittext", undefined, "");
ink_C4Text.characters = 10;
//ink_C4Text.text = "reflex blue"
var ink_C4Checkbox = inkBox_Master_C4.add("checkbox", undefined, "Custom ink");
ink_C4Checkbox.value = false;

/* #region  OKAY / Cancel buttons */
var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
buttonGroup.add("button", undefined, "OK");
buttonGroup.add("button", undefined, "Cancel");
/* #endregion */

master.show();
//#endregion






/* These are the inputs from the UI.
ink_A1Number
ink_A1Text
ink_A1Checkbox

ink_A2Number
ink_A1Text
ink_A1Checkbox

ink_A3Number
ink_A3Text
ink_A3Checkbox

ink_A4Number
ink_A4Text
ink_A4Checkbox



ink_C1Number
ink_C1Text
ink_C1Checkbox

ink_C2Number
ink_C2Text
ink_C2Checkbox

ink_C3Number
ink_C3Text
ink_C3Checkbox

ink_C4Number
ink_C4Text
ink_C4Checkbox

*/







// These are the outputs to illustrator.
// The path below for item_A1_name is correct.
var item_A1_frame = app.activeDocument.pathItems.getByName("A1_Frame");
var item_A1_name = app.activeDocument.textFrames.getByName("A1_Name");
var item_A1_color = app.activeDocument.pathItems.getByName("A1_Color");
var item_A1_chip = app.activeDocument.pathItems.getByName("A1_Chip");
var item_A1_screenName = app.activeDocument.textFrames.getByName("A1 Screen Ink Color");

var item_A2_frame = app.activeDocument.pathItems.getByName("A2_Frame");
var item_A2_name = app.activeDocument.textFrames.getByName("A2_Name");
var item_A2_color = app.activeDocument.pathItems.getByName("A2_Color");
var item_A2_chip = app.activeDocument.pathItems.getByName("A2_Chip");
var item_A2_screenName = app.activeDocument.textFrames.getByName("A2 Screen Ink Color");


var item_A3_frame = app.activeDocument.pathItems.getByName("A3_Frame");
var item_A3_name = app.activeDocument.textFrames.getByName("A3_Name");
var item_A3_color = app.activeDocument.pathItems.getByName("A3_Color");
var item_A3_chip = app.activeDocument.pathItems.getByName("A3_Chip");
var item_A3_screenName = app.activeDocument.textFrames.getByName("A3 Screen Ink Color");


var item_A4_frame = app.activeDocument.pathItems.getByName("A4_Frame");
var item_A4_name = app.activeDocument.textFrames.getByName("A4_Name");
var item_A4_color = app.activeDocument.pathItems.getByName("A4_Color");
var item_A4_chip = app.activeDocument.pathItems.getByName("A4_Chip");
var item_A4_screenName = app.activeDocument.textFrames.getByName("A4 Screen Ink Color");






var item_C1_frame = app.activeDocument.pathItems.getByName("C1_Frame");
var item_C1_name = app.activeDocument.textFrames.getByName("C1_Name");
var item_C1_color = app.activeDocument.pathItems.getByName("C1_Color");
var item_C1_chip = app.activeDocument.pathItems.getByName("C1_Chip");
var item_C1_screenName = app.activeDocument.textFrames.getByName("C1 Screen Ink Color");

var item_C2_frame = app.activeDocument.pathItems.getByName("C2_Frame");
var item_C2_name = app.activeDocument.textFrames.getByName("C2_Name");
var item_C2_color = app.activeDocument.pathItems.getByName("C2_Color");
var item_C2_chip = app.activeDocument.pathItems.getByName("C2_Chip");
var item_C2_screenName = app.activeDocument.textFrames.getByName("C2 Screen Ink Color");


var item_C3_frame = app.activeDocument.pathItems.getByName("C3_Frame");
var item_C3_name = app.activeDocument.textFrames.getByName("C3_Name");
var item_C3_color = app.activeDocument.pathItems.getByName("C3_Color");
var item_C3_chip = app.activeDocument.pathItems.getByName("C3_Chip");
var item_C3_screenName = app.activeDocument.textFrames.getByName("C3 Screen Ink Color");


var item_C4_frame = app.activeDocument.pathItems.getByName("C4_Frame");
var item_C4_name = app.activeDocument.textFrames.getByName("C4_Name");
var item_C4_color = app.activeDocument.pathItems.getByName("C4_Color");
var item_C4_chip = app.activeDocument.pathItems.getByName("C4_Chip");
var item_C4_screenName = app.activeDocument.textFrames.getByName("C4 Screen Ink Color");



var item_OriginalArt_A = "original art side A";
var item_originalArt_C = "original art side C";



var screenInk_A1 = app.activeDocument.textFrames.getByName('A1 Screen Ink Color');
var screenInk_A2 = app.activeDocument.textFrames.getByName('A2 Screen Ink Color');
var screenInk_A3 = app.activeDocument.textFrames.getByName('A3 Screen Ink Color');
var screenInk_A4 = app.activeDocument.textFrames.getByName('A4 Screen Ink Color');

var screenInk_C1 = app.activeDocument.textFrames.getByName('C1 Screen Ink Color');
var screenInk_C2 = app.activeDocument.textFrames.getByName('C2 Screen Ink Color');
var screenInk_C3 = app.activeDocument.textFrames.getByName('C3 Screen Ink Color');
var screenInk_C4 = app.activeDocument.textFrames.getByName('C4 Screen Ink Color');


/*
The examples below are how the colors are named in illustrator.
PANTONE Reflex Blue C
PANTONE 186 C
*/

//#region     This area deals with the color ink swatches and the screen info.
if (ink_A1Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_A1_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_A1_color.selected = true;
  item_A1_color.fillColor = newWhite;
  item_A1_chip.fillColor = newWhite;
  item_A1_frame.strokeWidth = 1.25;
} else {
  if (ink_A1Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_A1_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_A1_color.selected = true;
    item_A1_color.fillColor = newBlack;
    item_A1_chip.fillColor = newBlack;
    item_A1_frame.strokeWidth = 1.25;
  }
}

if (ink_A1Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_A1_name.contents = 'PANTONE' + ' ' + ink_A1Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_A1Text.text);
  screenInk_A1.contents = ink_A1Number.text + ' ' + capitalize_function(ink_A1Text.text);
  item_A1_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A1Number.text + ' ' + 'C').color;
  item_A1_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A1Number.text + ' ' + 'C').color;
} else {
  
  if (ink_A1Number.text.length < 1 && ink_A1Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_A1_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_A1Text.text) + ' ' + 'C';
    screenInk_A1.contents = capitalize_function(ink_A1Text.text);
    item_A1_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A1.contents + " " + "C").color;
    item_A1_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A1.contents + " " + "C").color;
  }
}

var standardInk = [
  '114',
  '116',
  '1345',
  '1545',
  '172',
  '186',
  '202',
  '205',
  '208',
  '211',
  '316',
  '327',
  '341',
  '355',
  '281',
  '293',
  '2587',
  '424',
  '872',
  '877'
];

for (i = 0; i < standardInk.length; i++) {
  if (ink_A1Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_A1_frame.strokeWidth = 1.25;
  }
}







if (ink_A2Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_A2_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_A2_color.selected = true;
  item_A2_color.fillColor = newWhite;
  item_A2_chip.fillColor = newWhite;
  item_A2_frame.strokeWidth = 1.25;
} else {
  if (ink_A2Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_A2_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_A2_color.selected = true;
    item_A2_color.fillColor = newBlack;
    item_A2_chip.fillColor = newBlack;
    item_A2_frame.strokeWidth = 1.25;
  }
}

if (ink_A2Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_A2_name.contents = 'PANTONE' + ' ' + ink_A2Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_A2Text.text);
  screenInk_A2.contents = ink_A2Number.text + ' ' + capitalize_function(ink_A2Text.text);
  item_A2_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A2Number.text + ' ' + 'C').color;
  item_A2_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A2Number.text + ' ' + 'C').color;
} else {
  
  if (ink_A2Number.text.length < 1 && ink_A2Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_A2_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_A2Text.text) + ' ' + 'C';
    screenInk_A2.contents = capitalize_function(ink_A2Text.text);
    item_A2_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A2.contents + " " + "C").color;
    item_A2_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A2.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen2").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_A2Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_A2_frame.strokeWidth = 1.25;
  }
}



if (ink_A3Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_A3_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_A3_color.selected = true;
  item_A3_color.fillColor = newWhite;
  item_A3_chip.fillColor = newWhite;
  item_A3_frame.strokeWidth = 1.25;
} else {
  if (ink_A3Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_A3_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_A3_color.selected = true;
    item_A3_color.fillColor = newBlack;
    item_A3_chip.fillColor = newBlack;
    item_A3_frame.strokeWidth = 1.25;
  }
}

if (ink_A3Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_A3_name.contents = 'PANTONE' + ' ' + ink_A3Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_A3Text.text);
  screenInk_A3.contents = ink_A3Number.text + ' ' + capitalize_function(ink_A3Text.text);
  item_A3_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A3Number.text + ' ' + 'C').color;
  item_A3_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A3Number.text + ' ' + 'C').color;
} else {
  
  if (ink_A3Number.text.length < 1 && ink_A3Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_A3_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_A3Text.text) + ' ' + 'C';
    screenInk_A3.contents = capitalize_function(ink_A3Text.text);
    item_A3_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A3.contents + " " + "C").color;
    item_A3_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A3.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen3").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_A3Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_A3_frame.strokeWidth = 1.25;
  }
}



if (ink_A4Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_A4_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_A4_color.selected = true;
  item_A4_color.fillColor = newWhite;
  item_A4_chip.fillColor = newWhite;
  item_A4_frame.strokeWidth = 1.25;
} else {
  if (ink_A4Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_A4_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_A4_color.selected = true;
    item_A4_color.fillColor = newBlack;
    item_A4_chip.fillColor = newBlack;
    item_A4_frame.strokeWidth = 1.25;
  }
}

if (ink_A4Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_A4_name.contents = 'PANTONE' + ' ' + ink_A4Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_A4Text.text);
  screenInk_A4.contents = ink_A4Number.text + ' ' + capitalize_function(ink_A4Text.text);
  item_A4_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A4Number.text + ' ' + 'C').color;
  item_A4_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_A4Number.text + ' ' + 'C').color;
} else {
  
  if (ink_A4Number.text.length < 1 && ink_A4Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_A4_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_A4Text.text) + ' ' + 'C';
    screenInk_A4.contents = capitalize_function(ink_A4Text.text);
    item_A4_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A4.contents + " " + "C").color;
    item_A4_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_A4.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen4").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_A4Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_A4_frame.strokeWidth = 1.25;
  }
}





if (ink_C1Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_C1_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_C1_color.selected = true;
  item_C1_color.fillColor = newWhite;
  item_C1_chip.fillColor = newWhite;
  item_C1_frame.strokeWidth = 1.25;
} else {
  if (ink_C1Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_C1_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_C1_color.selected = true;
    item_C1_color.fillColor = newBlack;
    item_C1_chip.fillColor = newBlack;
    item_C1_frame.strokeWidth = 1.25;
  }
}

if (ink_C1Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_C1_name.contents = 'PANTONE' + ' ' + ink_C1Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_C1Text.text);
  screenInk_C1.contents = ink_C1Number.text + ' ' + capitalize_function(ink_C1Text.text);
  item_C1_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C1Number.text + ' ' + 'C').color;
  item_C1_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C1Number.text + ' ' + 'C').color;
} else {
  
  if (ink_C1Number.text.length < 1 && ink_C1Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_C1_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_C1Text.text) + ' ' + 'C';
    screenInk_C1.contents = capitalize_function(ink_C1Text.text);
    item_C1_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C1.contents + " " + "C").color;
    item_C1_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C1.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen5").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_C1Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_C1_frame.strokeWidth = 1.25;
  }
}







if (ink_C2Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_C2_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_C2_color.selected = true;
  item_C2_color.fillColor = newWhite;
  item_C2_chip.fillColor = newWhite;
  item_C2_frame.strokeWidth = 1.25;
} else {
  if (ink_C2Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_C2_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_C2_color.selected = true;
    item_C2_color.fillColor = newBlack;
    item_C2_chip.fillColor = newBlack;
    item_C2_frame.strokeWidth = 1.25;
  }
}

if (ink_C2Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_C2_name.contents = 'PANTONE' + ' ' + ink_C2Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_C2Text.text);
  screenInk_C2.contents = ink_C2Number.text + ' ' + capitalize_function(ink_C2Text.text);
  item_C2_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C2Number.text + ' ' + 'C').color;
  item_C2_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C2Number.text + ' ' + 'C').color;
} else {
  
  if (ink_C2Number.text.length < 1 && ink_C2Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_C2_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_C2Text.text) + ' ' + 'C';
    screenInk_C2.contents = capitalize_function(ink_C2Text.text);
    item_C2_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C2.contents + " " + "C").color;
    item_C2_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C2.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen6").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_A2Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_A2_frame.strokeWidth = 1.25;
  }
}



if (ink_C3Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_C3_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_C3_color.selected = true;
  item_C3_color.fillColor = newWhite;
  item_C3_chip.fillColor = newWhite;
  item_C3_frame.strokeWidth = 1.25;
} else {
  if (ink_C3Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_C3_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_C3_color.selected = true;
    item_C3_color.fillColor = newBlack;
    item_C3_chip.fillColor = newBlack;
    item_C3_frame.strokeWidth = 1.25;
  }
}

if (ink_C3Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_C3_name.contents = 'PANTONE' + ' ' + ink_C3Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_C3Text.text);
  screenInk_C3.contents = ink_C3Number.text + ' ' + capitalize_function(ink_C3Text.text);
  item_C3_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C3Number.text + ' ' + 'C').color;
  item_C3_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C3Number.text + ' ' + 'C').color;
} else {
  
  if (ink_C3Number.text.length < 1 && ink_C3Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_C3_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_C3Text.text) + ' ' + 'C';
    screenInk_C3.contents = capitalize_function(ink_C3Text.text);
    item_C3_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C3.contents + " " + "C").color;
    item_C3_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C3.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen7").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_C3Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_C3_frame.strokeWidth = 1.25;
  }
}



if (ink_C4Text.text === 'white') {
  //  This fills the text box with the word white and creates the white color swatch.
  item_C4_name.contents = 'White';
  var newWhite = new CMYKColor();
  newWhite.black = 00;
  newWhite.cyan = 00;
  newWhite.magenta = 00;
  newWhite.yellow = 00;
  item_C4_color.selected = true;
  item_C4_color.fillColor = newWhite;
  item_C4_chip.fillColor = newWhite;
  item_C4_frame.strokeWidth = 1.25;
} else {
  if (ink_C4Text.text === 'black') {
      //  This fills the text box with the word black and creates the black color swatch.
    item_C4_name.contents = 'Black';
    var newBlack = new CMYKColor();
    newBlack.black = 100;
    newBlack.cyan = 00;
    newBlack.magenta = 00;
    newBlack.yellow = 00;
    item_C4_color.selected = true;
    item_C4_color.fillColor = newBlack;
    item_C4_chip.fillColor = newBlack;
    item_C4_frame.strokeWidth = 1.25;
  }
}

if (ink_C4Number.text.length > 0) {
  //  If there are characters entered into the PMS number field, this block will run.
  item_C4_name.contents = 'PANTONE' + ' ' + ink_C4Number.text + ' ' + 'C' + '  ' + capitalize_function(ink_C4Text.text);
  screenInk_C4.contents = ink_C4Number.text + ' ' + capitalize_function(ink_C4Text.text);
  item_C4_color.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C4Number.text + ' ' + 'C').color;
  item_C4_chip.fillColor = app.activeDocument.swatches.getByName('PANTONE' + ' ' + ink_C4Number.text + ' ' + 'C').color;
} else {
  
  if (ink_C4Number.text.length < 1 && ink_C4Text.text.length > 0) {
    //  If there is nothing entered in the PMS number field, but something typed in the PMS name field, this block will run.
    item_C4_name.contents = 'PANTONE' + ' ' + capitalize_function(ink_C4Text.text) + ' ' + 'C';
    screenInk_C4.contents = capitalize_function(ink_C4Text.text);
    item_C4_color.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C4.contents + " " + "C").color;
    item_C4_chip.fillColor = app.activeDocument.swatches.getByName("PANTONE" + " " + screenInk_C4.contents + " " + "C").color;
  } else {
    app.activeDocument.groupItems.getByName("Screen8").remove();
  }
}

var standardInk = ['114', '116', '1345', '1545', '172', '186', '202', '205', '208', '211', '316', '327', '341', '355', '281', '293', '2587', '424', '872', '877'];
for (i = 0; i < standardInk.length; i++) {
  if (ink_C4Number.text == standardInk[i]) {
    //  If the text entered into the PMS number field matches one of the standard inks, this block will run.
    item_C4_frame.strokeWidth = 1.25;
  }
}
//#endregion















function bodyColor_function() {
  var bodyColorAlpha = app.activeDocument.layers.getByName("Body Colors").layers.getByName(bodyColorList.selection.text);
  bodyColorAlpha.visible = true;
};
function customerInfo_function() {
  var rep_Name = app.activeDocument.textFrames.getByName("RepName");
  rep_Name.contents = repNameEdit.text;
  rep_Name.contents = capitalize_function(rep_Name.contents);

  var rep_Name_approved = app.activeDocument.textFrames.getByName("RepName_2");
  rep_Name_approved.contents = repNameEdit.text;
  rep_Name_approved.contents = capitalize_function(rep_Name_approved.contents);


  var repNameSignature = app.activeDocument.textFrames.getByName("RepName_Signature");
  repNameSignature.contents = repNameEdit.text;
  repNameSignature.contents = capitalize_function(repNameSignature.contents);

  var email = app.activeDocument.textFrames.getByName("RepEmail");
  email.contents = repEmail_Edit.text;
  email.contents = email.contents.toLowerCase();

  var emailApproved = app.activeDocument.textFrames.getByName("RepEmail_2");
  emailApproved.contents = repEmail_Edit.text;
  emailApproved.contents = capitalize_function(emailApproved.contents);

  var companyName = app.activeDocument.textFrames.getByName("Company");
  companyName.contents = company_A_Edit.text;
  companyName.contents = capitalize_function(companyName.contents);
};
function vip_function() {
  var vipBox = app.activeDocument.layers
    .getByName("Masque")
    .groupItems.getByName("VIP");
  if (vipCheckbox.value == true) {
    vipBox.hidden = false;
  }
  if (vipCheckbox.value == false) {
    vipBox.hidden = true;
  }
};
function rush_function() {
  var rushBox = app.activeDocument.layers
    .getByName("Masque")
    .groupItems.getByName("Rush");
  if (rushCheckbox.value == true) {
    rushBox.hidden = false;
  }
  if (rushCheckbox.value == false) {
    rushBox.hidden = true;
  } else {
    rushBox.hidden = false;
  }
};
function po_function() {
  var purchaseOrder = app.activeDocument.textFrames.getByName("PO");
  purchaseOrder.contents = poNumber_edit.text;
  if (purchaseOrder === null) {
    purchaseOrder.contents = webPrefix.selection.text + webNumber_edit.text;
  }
};
function capitalize_function(u) {
  //  This capitalizes every letter that comes after a space.
  u = u.toLowerCase();
  u = u.split(' ');
  for (var i = 0; i < u.length; i++) {
    u[i] = u[i].charAt(0).toUpperCase() + u[i].slice(1);
  };
  return u.join(' ');
};
function descriptionField_function (bodyColorLayer) {
  var bodyColorLayer = descriptionBox_edit.text;
  bodyColorLayer = bodyColorLayer.split(' ');
  for (var i = 0; i < bodyColorLayer.length; i++) {
    bodyColorLayer[i] = bodyColorLayer[i].charAt(0).toUpperCase() + bodyColorLayer[i].slice(1);
  }
  return bodyColorLayer.join('');
};
function fileName_function() {
  var shortName = jdeNumber_edit.text + "_" + descriptionField_function() + "_A";
  var longName = jdeNumber_edit.text + "_" + descriptionField_function() + "_" + bodyColorList.selection.text + "_A";


  var illustratorFrame = [
    "FileName",
    "A1 Screen FileName",
    "A2 Screen FileName",
    "A3 Screen FileName",
    "A4 Screen FileName",
    "C1 Screen FileName",
    "C2 Screen FileName",
    "C3 Screen FileName",
    "C4 Screen FileName"
  ];

  for (i = 0; i < illustratorFrame.length; i++) {
    if (itemNumber_edit.text > 1) {
      var alpha2 = app.activeDocument.textFrames.getByName(illustratorFrame[i]);
      alpha2.contents = longName;
    } else {
      var bravo2 = app.activeDocument.textFrames.getByName(illustratorFrame[i]);
      bravo2.contents = shortName;
    }
  }
}



function originalFile() {
  var originalFile_A = app.activeDocument.textFrames.getByName("Original Art - Side A");
  originalFile_A.contents = originalArt_A_edit.text;
  var originalFile_C = app.activeDocument.textFrames.getByName("Original Art - Side C");
  originalFile_C.contents = originalArt_C_edit.text;
}
function currentDate_function() {
  var currentDate = new Date();
  var date = currentDate.toDateString();
  var date_A = date.split(" ");
  var date_B = date_A[0] + ', ' + date_A[1] + ' ' + date_A[2] + ', ' + date_A[3];
  var a = app.activeDocument.textFrames.getByName("DateBox");
  a.contents = date_B;
};
function ship_function() {
  var ship = app.activeDocument.textFrames.getByName("Ship Date");
  ship.contents = shipDate_edit.text;
};
function InHands_function() {
  var inHands = app.activeDocument.textFrames.getByName("In Hands Date");
  inHands.contents = inHandsDate_edit.text;
};
function web_function() {
  var web = app.activeDocument.textFrames.getByName("Web");
  web.contents = webPrefix.selection.text + webNumber_edit.text;
};
function JDE_function() {
  var jde = app.activeDocument.textFrames.getByName("jde number");
  jde.contents = jdeNumber_edit.text;
};
function checkBox_function() {
  var checkBox_array = [ink_A1Checkbox, ink_A2Checkbox, ink_A3Checkbox, ink_A4Checkbox, ink_C1Checkbox, ink_C2Checkbox, ink_C3Checkbox, ink_C4Checkbox];
  var checkBox_frames = [item_A1_frame, item_A2_frame, item_A3_frame, item_A4_frame, item_C1_frame, item_C2_frame, item_C3_frame, item_C4_frame];
  for (n = 0; n < checkBox_array.length; n++) {
    if (checkBox_array[n].value != true) {
      checkBox_frames[n].strokeWidth = 0.5;
    } else {
      checkBox_frames[n].strokeWidth = 1.25;
    }
  }
}
//#endregion

var customer_instructions = app.activeDocument.textFrames.getByName("Customer Instructions");
customer_instructions.contents = instructionsCustomer_text.text;

var production_instructions = app.activeDocument.textFrames.getByName("Production Instructions");
production_instructions.contents = instructionsProduction_edit.text;

var customerService_instructions = app.activeDocument.textFrames.getByName("Customer Service Instructions");
customerService_instructions.contents = instructionsCustomerService_edit.text;





//#region function calls
customerInfo_function();
vip_function();
rush_function();
po_function();
bodyColor_function();
currentDate_function();
JDE_function();
checkBox_function();
web_function();
InHands_function();
ship_function();
fileName_function();
originalFile();
//#endregion



/*   TO DO

3. If there is no JDE number, insert the web order number into the name of the file.
5. In the Illustrator file, add the Canadian proof, and have the layer deletable depending on the nationality that is selected in the UI.
*/




