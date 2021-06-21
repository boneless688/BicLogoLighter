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

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email");
var repEmail_Edit = customerInfo_outer.add("edittext", undefined, "");
repEmail_Edit.characters = 20;

var companyGroup = customerInfo_outer.add("panel", undefined, "");
companyGroup.orientation = "row";

var company_A = companyGroup.add("statictext", undefined, "Company");
var company_A_Edit = companyGroup.add("edittext", undefined, "");
company_A_Edit.characters = 10;

var vipCheckbox = companyGroup.add("checkbox", undefined, "VIP");

var nationalityGroup = topLeft.add("panel", undefined, "");
nationalityGroup.orientation = "row";
nationalityGroup.margins = [20, 20, 20, 5];

var nationalityUS = nationalityGroup.add("radiobutton", undefined, "US");
nationalityUS.orientation = "row";
nationalityUS.value = true;
var nationalityCanada = nationalityGroup.add(
  "radiobutton",
  undefined,
  "Canadian"
);

var topRight = topPart.add("panel", undefined, "");
topRight.orientation = "column";
topRight.preferredSize.height = 265;

var orderOne = topRight.add("group");
orderOne.orientation = "row";

var jdeNumber = orderOne.add("statictext", undefined, "JDE Number");
var jdeNumber_edit = orderOne.add("edittext", undefined, "");
jdeNumber_edit.characters = 7;

var poNumber = orderOne.add("statictext", undefined, "PO Number");
var poNumber_edit = orderOne.add("edittext", undefined, "");
poNumber_edit.characters = 20;

var webPrefix = orderOne.add("dropdownlist", undefined, ["None", "B2B", "D2CWEB", "CA2C"]);
webPrefix.characters = 6;
webPrefix.selection = 0;

var webNumber = orderOne.add("statictext", undefined, "Web Number");
var webNumber_edit = orderOne.add("edittext", undefined, "");
webNumber_edit.characters = 10;

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
if (itemNumber_edit.text < 2 || itemNumber_edit.length = 0) {
  itemNumber_edit.value = 1;
} 

var orderFour = topRight.add("group");
orderFour.orientation = "row";
orderFour.preferredSize.height = 100;

var instructionsCustomer_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Customer"
);
var instructionsCustomer_text = instructionsCustomer_title.add(
  "edittext",
  undefined,
  "",
  { multiline: true }
);
instructionsCustomer_text.minimumSize.width = 200;
instructionsCustomer_text.minimumSize.height = 100;

var instructionsCustomerService_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Customer Service"
);
var instructionsCustomerService_edit = instructionsCustomerService_title.add(
  "edittext",
  undefined,
  "",
  { multiline: true }
);
instructionsCustomerService_edit.minimumSize.width = 200;
instructionsCustomerService_edit.minimumSize.height = 100;

var instructionsProduction_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Production"
);
var instructionsProduction_edit = instructionsProduction_title.add(
  "edittext",
  undefined,
  "",
  { multiline: true }
);
instructionsProduction_edit.minimumSize.width = 200;
instructionsProduction_edit.minimumSize.height = 100;

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
  "Green 375",
  "Blue 287",
  "Red 186",
  "Pink",
  "Light Blue 2985",
  "Forest Green 335",
  "Orange 1585",
  "Yellow",
  "Dark Assortment",
  "Light Assortment",
  "Sleeve",
]);

var descriptionBox = descriptionSide.add("statictext", undefined, "Description");
var descriptionBox_edit = descriptionSide.add("edittext", undefined, "");
descriptionBox_edit.characters = 20;

var spacerBox = descriptionSide.add("statictext", undefined, "");
spacerBox.margins = 20;

var originalArt_A = descriptionSide.add("statictext", undefined, "Original Art-Side A");
var originalArt_A_edit = descriptionSide.add("edittext", undefined, "");
originalArt_A_edit.characters = 20;


var originalArt_C = descriptionSide.add("statictext", undefined, "Original Art-Side C");
var originalArt_C_edit = descriptionSide.add("edittext", undefined, "");
originalArt_C_edit.characters = 20;


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
inkBox_Master_A1.margins = [15, 15, 15, 15];
var ink_A1Text = inkBox_Master_A1.add("edittext", undefined, "");
ink_A1Text.characters = 10;
var ink_A1Checkbox = inkBox_Master_A1.add("checkbox", undefined, "Custom ink");
ink_A1Checkbox.value = false;

var inkBox_Master_A2 = inkColors_A.add("panel", undefined, "Screen A2");
inkBox_Master_A2.orientation = "column";
var ink_A2Text = inkBox_Master_A2.add("edittext", undefined, "");
ink_A2Text.characters = 10;
var ink_A2Checkbox = inkBox_Master_A2.add("checkbox", undefined, "Custom ink");
ink_A2Checkbox.value = false;

var inkBox_Master_A3 = inkColors_A.add("panel", undefined, "Screen A3");
inkBox_Master_A3.orientation = "column";
var ink_A3Text = inkBox_Master_A3.add("edittext", undefined, "");
ink_A3Text.characters = 10;
var ink_A3Checkbox = inkBox_Master_A3.add("checkbox", undefined, "Custom ink");
ink_A3Checkbox.value = false;

var inkBox_Master_A4 = inkColors_A.add("panel", undefined, "Screen A4");
inkBox_Master_A4.orientation = "column";
var ink_A4Text = inkBox_Master_A4.add("edittext", undefined, "");
ink_A4Text.characters = 10;
var ink_A4Checkbox = inkBox_Master_A4.add("checkbox", undefined, "Custom ink");
ink_A4Checkbox.value = false;

var inkColors_C = inkColors_2.add("panel", undefined, "inkColors_C");
inkColors_C.preferredSize = [400, 100];
inkColors_C.margins = [20, 20, 20, 20];
inkColors_C.orientation = "row";

var inkBox_Master_C1 = inkColors_C.add("panel", undefined, "Screen C1");
inkBox_Master_C1.orientation = "column";
var ink_C1Text = inkBox_Master_C1.add("edittext", undefined, "");
ink_C1Text.characters = 10;
var ink_C1Checkbox = inkBox_Master_C1.add("checkbox", undefined, "Custom ink");
ink_C1Checkbox.value = false;

var inkBox_Master_C2 = inkColors_C.add("panel", undefined, "Screen C2");
inkBox_Master_C2.orientation = "column";
var ink_C2Text = inkBox_Master_C2.add("edittext", undefined, "");
ink_C2Text.characters = 10;
var ink_C2Checkbox = inkBox_Master_C2.add("checkbox", undefined, "Custom ink");
ink_C2Checkbox.value = false;

var inkBox_Master_C3 = inkColors_C.add("panel", undefined, "Screen C3");
inkBox_Master_C3.orientation = "column";
var ink_C3Text = inkBox_Master_C3.add("edittext", undefined, "");
ink_C3Text.characters = 10;
var ink_C3Checkbox = inkBox_Master_C3.add("checkbox", undefined, "Custom ink");
ink_C3Checkbox.value = false;

var inkBox_Master_C4 = inkColors_C.add("panel", undefined, "Screen C4");
inkBox_Master_C4.orientation = "column";
var ink_C4Text = inkBox_Master_C4.add("edittext", undefined, "");
ink_C4Text.characters = 10;
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


//#region function calls
customerInfo_function();
vip_function();
rush_function();
po_function();
//bodyColor_function();
currentDate_function();
JDE_function();
web_function();
InHands_function();
ship_function();
fileName_function();
//swatch_A1();
//#endregion


var item = {
  bodyColor: bodyColorList.selection.text,
  sideA: {
    ink: {
      a1: {
        stroke: app.activeDocument.pathItems.getByName("A1_Frame"),
        text: app.activeDocument.textFrames.getByName("A1_Name"),
        color: ink_A1Text.contents,
      },
      a2: {
        stroke: app.activeDocument.pathItems.getByName("A2_Frame"),
        text: app.activeDocument.textFrames.getByName("A2_Name"),
        color: ink_A2Text.contents,
      },
      a3: {
        stroke: app.activeDocument.pathItems.getByName("A3_Frame"),
        text: app.activeDocument.textFrames.getByName("A3_Name"),
        color: ink_A3Text.contents,
      },
      a4: {
        stroke: app.activeDocument.pathItems.getByName("A4_Frame"),
        text: app.activeDocument.textFrames.getByName("A4_Name"),
        color: ink_A4Text.contents,
      },



      /* 
      a2: {
        stroke: 'custom color stroke A2',
        text: 'color text A2',
        color: 'color swatch A2',
      },
      a3: {
        stroke: 'custom color stroke A3',
        text: 'color text A3',
        color: 'color swatch A3',
      },
      a4: {
        stroke: 'custom color stroke A4',
        text: 'color text A4',
        color: 'color swatch A4',
      },
      */
      

    },
    originalFile: 'Original Art File Name - Side A'
  },

  sideC: {
    ink: {
      C1: {
        stroke: app.activeDocument.pathItems.getByName("C1_Frame"),
        text: app.activeDocument.textFrames.getByName("C1_Name"),
        color: ink_C1Text.contents,
      },
      C2: {
        stroke: app.activeDocument.pathItems.getByName("C2_Frame"),
        text: app.activeDocument.textFrames.getByName("C2_Name"),
        color: ink_C2Text.contents,
      },
      C3: {
        stroke: app.activeDocument.pathItems.getByName("C3_Frame"),
        text: app.activeDocument.textFrames.getByName("C3_Name"),
        color: ink_C3Text.contents,
      },
      C4: {
        stroke: app.activeDocument.pathItems.getByName("C4_Frame"),
        text: app.activeDocument.textFrames.getByName("C4_Name"),
        color: ink_C4Text.contents,
      },



          /* 
          c1: {
              stroke: 'custom color stroke C1',
              text: 'color text C1',
              color: 'color swatch C1',
      },
      c2: {
        stroke: 'custom color stroke C2',
        text: 'color text C2',
        color: 'color swatch C2',
      },
      c3: {
        stroke: 'custom color stroke C3',
        text: 'color text C3',
        color: 'color swatch C3',
      },
      c4: {
        stroke: 'custom color stroke C4',
        text: 'color text C4',
        color: 'color swatch C4',
      },
      */
        
        
    },
    originalFile: 'Original Art File Name - Side C'
  },
}





//#region  This section hides all the body color layers in illustrator and then unhides the body color layer specified in the UI.


//#region  This section works on formatting the ink color swatch boxes. It formats the text to be inserted into the text box, it finds the PMS swatch according to the number that is entered in the UI and fills the color box with it, and then it thickens the stroke around the box if the ink color is a custom color or not.

// this function takes the string of the pms name, breaks it into an array of words, and uses the first element as the PMS number. The idea is to have the first word entered the pms number, and then the name when the user enters it in the form.


const xxx = function () {
    var bravo = ink_A1Text.text;
    var charlie = bravo.split(" ");
    return charlie[0];
  };

  

var pmsNamexx = ink_A1Text.text;
var pmsNameTrimmed = pmsNamexx.split(" ");
alert(pmsNameTrimmed);





  // this part inserts the name of the swatch into the text box in illustrator
  //item.sideA.ink.a1.text.text = 'pantone ' + pmsNumber() + ' C' + pmsName();

  //swatchA1_text.contents = 'pantone ' + ink_A1Text.text;
  //item.sideA.ink.a1.text.text = capitalize_function(item.sideA.ink.a1.text.text);

  // this part makes the stroke of the swatch box thicker if the custom color box is checked
  if (ink_A1Checkbox.value === true) {
    item.sideA.ink.a1.stroke.strokeWidth = 02;
  }

// this part assigns the fill color of the swatch box the to the PMS number swatch
var alpha = app.activeDocument.pathItems.getByName('A1_Color');
alpha.selected = true;
alpha.fillColor = app.activeDocument.swatches.getByName('Pantone 7420 C').color;
//This works as long as the swatch to be used exists in the swatches palette.



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
    "C1 Screen FileName",
    "A2 Screen FileName",
    "C2 Screen FileName",
    "A3 Screen FileName",
    "C3 Screen FileName",
    "A4 Screen FileName",
    "C4 Screen FileName",
  ];


  for (i = 0; i < illustratorFrame.length; i++) {
    if (itemNumber_edit.text < 2) {
      var echo = illustratorFrame[i];
      var illo = app.activeDocument.textFrames.getByName(echo);
      illo.contents = shortName;
    } else {
      var fox = illustratorFrame[i];
      var illo_2 = app.activeDocument.textFrames.getByName(fox);
      illo_2.contents = longName;
    }
  }
};

function currentDate_function() {
  var currentDate = new Date();
  var date = currentDate.toDateString();
  var a = app.activeDocument.textFrames.getByName("DateBox");
  a.contents = date;
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
//#endregion

  var customer_instructions = app.activeDocument.textFrames.getByName("Customer Instructions");
customer_instructions.contents = instructionsCustomer_text.text;

var production_instructions = app.activeDocument.textFrames.getByName("Production Instructions");
production_instructions.contents = instructionsProduction_edit.text;

var customerService_instructions = app.activeDocument.textFrames.getByName("Customer Service Instructions");
customerService_instructions.contents = instructionsCustomerService_edit.text;