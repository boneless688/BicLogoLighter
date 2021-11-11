//#region                                                                    EXTENDSCRIPT UI
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
repNameEdit.active = true;
repNameEdit.text = "glenda vilchez";

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email");
var repEmail_Edit = customerInfo_outer.add("edittext", undefined, "");
repEmail_Edit.characters = 20;
repEmail_Edit.text = "glenda@rockstarpromos.com";

var companyGroup = customerInfo_outer.add("panel", undefined, "");
companyGroup.orientation = "row";

var company_A = companyGroup.add("statictext", undefined, "Company");
var company_A_Edit = companyGroup.add("edittext", undefined, "");
company_A_Edit.characters = 10;
company_A_Edit.text = "rock star promos";

var vipCheckbox = companyGroup.add("checkbox", undefined, "VIP");

var designerMaster = customerInfo_outer.add("panel", undefined, " ");
designerMaster.orientation = "row";

var designerLeft = designerMaster.add("panel", undefined, " ");

var designerLabel = designerLeft.add("statictext", undefined, "Designer");

var designerList = designerLeft.add("dropdownlist", undefined, [
  "MMiraglia",
  "GVisgaitis",
  "JBavitz",
]);
designerList.characters = 10;
designerList.selection = 2;
var designerRight = designerMaster.add("panel", undefined, " ");
var designerCheckbox = designerMaster.add(
  "checkbox",
  undefined,
  "Default Artist"
);

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
//jdeNumber_edit.text = "6187745";

var poNumber = orderOne.add("statictext", undefined, "PO Number");
var poNumber_edit = orderOne.add("edittext", undefined, "");
poNumber_edit.characters = 20;
poNumber_edit.text = "PO-6743";

var webPrefix = orderOne.add("dropdownlist", undefined, [
  "    ",
  "B2B",
  "D2CWEB",
  "CA2C",
]);
webPrefix.characters = 6;
webPrefix.selection = 2;

var webNumber = orderOne.add("statictext", undefined, "Web Number");
var webNumber_edit = orderOne.add("edittext", undefined, "");
webNumber_edit.characters = 10;
webNumber_edit.text = "2485";

var orderThree = topRight.add("panel", undefined, "");
orderThree.orientation = "row";
orderThree.alignment = "left";

var inHandsDate = orderThree.add("statictext", undefined, "In-hands Date");
var inHandsDate_edit = orderThree.add("edittext", undefined, "");
inHandsDate_edit.characters = 10;
inHandsDate_edit.text = "11/24/2021";

var shipDate = orderThree.add("statictext", undefined, "Ship Date");
var shipDate_edit = orderThree.add("edittext", undefined, "");
shipDate_edit.characters = 10;
shipDate_edit.text = "10/13/2022";

var rushCheckbox = orderThree.add("checkbox", undefined, "Rush order");

var spacer = orderThree.add("group");

var itemNumber = orderThree.add("statictext", undefined, "Number of Items");
var itemNumber_edit = orderThree.add("edittext", undefined, "1");
itemNumber_edit.characters = 2;


var orderFour = topRight.add("group");
orderFour.orientation = "row";
orderFour.preferredSize.height = 100;

var instructionsCustomer_title = orderFour.add( "panel", undefined, "Instructions - Customer");
var instructionsCustomer_edit = instructionsCustomer_title.add("edittext", undefined, "", { multiline: true });
instructionsCustomer_edit.minimumSize.width = 200;
instructionsCustomer_edit.minimumSize.height = 100;
instructionsCustomer_edit.text = "Instructions from the customer.";

var instructionsCustomerService_title = orderFour.add("panel", undefined, "Instructions - Customer Service"
);
var instructionsCustomerService_edit = instructionsCustomerService_title.add("edittext",  undefined, "", { multiline: true });
instructionsCustomerService_edit.minimumSize.width = 200;
instructionsCustomerService_edit.minimumSize.height = 100;
instructionsCustomerService_edit.text = "Instructions from Customer Service.";

var instructionsProduction_title = orderFour.add("panel", undefined, "Instructions - Production");
var instructionsProduction_edit = instructionsProduction_title.add("edittext", undefined, "", { multiline: true });

instructionsProduction_edit.minimumSize.width = 200;
instructionsProduction_edit.minimumSize.height = 100;
instructionsProduction_edit.text = "Instructions from Production.";

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
var doubleSidedCheckbox = bodyColor.add("checkbox", undefined, "Assortment - 2 Sided");

var descriptionBox = descriptionSide.add("statictext", undefined, "Description");
var descriptionBox_edit = descriptionSide.add("edittext", undefined, "");
descriptionBox_edit.characters = 20;
descriptionBox_edit.text = "the only thing";

var spacerBox = descriptionSide.add("statictext", undefined, "");
spacerBox.margins = 20;

var originalArt = descriptionSide.add("statictext", undefined, "Original Art");
var originalArt_edit = descriptionSide.add("edittext", undefined, "");
originalArt_edit.characters = 20;
originalArt_edit.text = "Original art file name.";

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
var ink_A1 = inkBox_Master_A1.add("edittext", undefined, "");
ink_A1.characters = 10;
ink_A1.text = "cool gray 1";

var inkBox_Master_A2 = inkColors_A.add("panel", undefined, "Screen A2");
inkBox_Master_A2.orientation = "column";
var ink_A2 = inkBox_Master_A2.add("edittext", undefined, "");
ink_A2.characters = 10;
ink_A2.text = "reflex blue";

var inkBox_Master_A3 = inkColors_A.add("panel", undefined, "Screen A3");
inkBox_Master_A3.orientation = "column";
var ink_A3 = inkBox_Master_A3.add("edittext", undefined, "");
ink_A3.characters = 10;
ink_A3.text = "186 red";

var inkBox_Master_A4 = inkColors_A.add("panel", undefined, "Screen A4");
inkBox_Master_A4.orientation = "column";
var ink_A4 = inkBox_Master_A4.add("edittext", undefined, "");
ink_A4.characters = 10;
ink_A4.text = "142 yellow";

var inkColors_C = inkColors_2.add("panel", undefined, "inkColors_C");
inkColors_C.preferredSize = [400, 100];
inkColors_C.margins = [20, 20, 20, 20];
inkColors_C.orientation = "row";

var inkBox_Master_C1 = inkColors_C.add("panel", undefined, "Screen C1");
inkBox_Master_C1.orientation = "column";
var ink_C1 = inkBox_Master_C1.add("edittext", undefined, "");
ink_C1.characters = 10;
ink_C1.text = "black";

var inkBox_Master_C2 = inkColors_C.add("panel", undefined, "Screen C2");
inkBox_Master_C2.orientation = "column";
var ink_C2 = inkBox_Master_C2.add("edittext", undefined, "");
ink_C2.characters = 10;
ink_C2.text = "211 pink";

var inkBox_Master_C3 = inkColors_C.add("panel", undefined, "Screen C3");
inkBox_Master_C3.orientation = "column";
var ink_C3 = inkBox_Master_C3.add("edittext", undefined, "");
ink_C3.characters = 10;
ink_C3.text = "877 metallic silver";

var inkBox_Master_C4 = inkColors_C.add("panel", undefined, "Screen C4");
inkBox_Master_C4.orientation = "column";
var ink_C4 = inkBox_Master_C4.add("edittext", undefined, "");
ink_C4.characters = 10;
ink_C4.text = "116 athletic gold";

//#region                                                                   OKAY CANCEL BUTTONS
var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
buttonGroup.add("button", undefined, "OK");
buttonGroup.add("button", undefined, "Cancel");
//#endregion                                                                   END OF OKAY CANCEL BUTTONS

master.show();
//#endregion                                                                   END OF EXTENDSCRIPT UI


//#region                                                                    GLOBAL FUNCTIONS
function currentDate_function() {
     var currentDate = new Date();
     var date = currentDate.toDateString();
     var date_A = date.split(" ");
     var date_B = date_A[0] + ", " + date_A[1] + " " + date_A[2] + ", " + date_A[3];
     var a = app.activeDocument.textFrames.getByName("DateBox");
     a.contents = date_B;
   
     if (doubleSidedCheckbox.value === true) {
       var dateBoxBack = app.activeDocument.textFrames.getByName("DateBox_Back");
       dateBoxBack.contents = date_B;
     }
   }
   
   
   function capitalize_function(u) {
     u = u.toLowerCase();
     u = u.split(" ");
     for (var i = 0; i < u.length; i++) {
       u[i] = u[i].charAt(0).toUpperCase() + u[i].slice(1);
     }
     return u.join(" ");
   }


//#region                                                                    OPEN TEMPLATE FILE WITH RELATIVE FILEPATHS
/*
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
    app.open(File(_path + "/Proof_Template_Assorted_1Side.ait"));
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
    app.open(File(_path + "/Proof_Template_Assorted_2Side.ait"));
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
  app.open(File(_path + "/Proof_Template_Sleeve.ait"));
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
  app.open(File(_path + "/Proof_Template_Standard.ait"));
}
*/
//#endregion                                                                    END OF OPEN TEMPLATE FILE WITH RELATIVE FILEPATHS

//#region                                                                    CREATE .TRIM PROTOTYPE
String.prototype.trim = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};
//#endregion                                                                    END OF CREATE .TRIM PROTOTYPE
//#endregion                                                                    END OF GLOBAL FUNCTIONS


//#region                                                                     US OR CANADA
if (nationalityCanada.value === true) {
  app.activeDocument.layers.getByName("USA").visible = true;
  app.activeDocument.layers.getByName("USA").remove();
  app.activeDocument.layers.getByName("Canada").visible = true;
} else {
  app.activeDocument.layers.getByName("Canada").visible = true;
  app.activeDocument.layers.getByName("Canada").remove();
  app.activeDocument.layers.getByName("USA").visible = true;
}
//#endregion                                                                     END OF US OR CANADA


//#region                                                                    CUSTOMER INFO AREA
function customerInfo_function() {
  var rep = app.activeDocument.textFrames.getByName("Rep");
  rep.contents = capitalize_function(repNameEdit.text) + "     " + repEmail_Edit.text.toLowerCase();  //THIS PART ADDS THE REP'S EMAIL ADDRESS TO THEIR NAME.
  
  var repNameSignature = app.activeDocument.textFrames.getByName("RepName_Signature");
  repNameSignature.contents = repNameEdit.text;
  repNameSignature.contents = capitalize_function(repNameSignature.contents);

  var companyName = app.activeDocument.textFrames.getByName("Company");
  companyName.contents = company_A_Edit.text;
  companyName.contents = capitalize_function(companyName.contents);

  var vipBox = app.activeDocument.groupItems.getByName("VIP");
  if (vipCheckbox.value === true) {
    vipBox.hidden = false;

  } else {
    vipBox.hidden = true;
  }

  var designer = app.activeDocument.textFrames.getByName("Designer");
  designer.contents = designerList.selection.text;
}
//#endregion                                                                   END OF CUSTOMER INFO AREA


//#region                                                                    ORDER INFO AREA
var jde = app.activeDocument.textFrames.getByName("jde number");
jde.contents = jdeNumber_edit.text;

var purchaseOrder = app.activeDocument.textFrames.getByName("PO");
purchaseOrder.contents = poNumber_edit.text;
  if (purchaseOrder === null) {
    purchaseOrder.contents = webPrefix.selection.text + webNumber_edit.text;
}

var web = app.activeDocument.textFrames.getByName("Web");
  web.contents = webPrefix.selection.text + webNumber_edit.text;
}

function InHands_function() {
  var inHands = app.activeDocument.textFrames.getByName("In Hands Date");
  inHands.contents = capitalize_function(inHandsDate_edit.text);
}

function ship_function() {
  var ship = app.activeDocument.textFrames.getByName("Ship Date");
  ship.contents = capitalize_function(shipDate_edit.text);
}

function rush_function() {
  var rushBox = app.activeDocument.groupItems.getByName("Rush");
  if (rushCheckbox.value === true) {
    rushBox.hidden = false;
  }
  if (rushCheckbox.value === false) {
    rushBox.hidden = true;
  } else {
    rushBox.hidden = false;
  }
}


//#region                                                                    INSTRUCTION BOXES
var customer_instructions = app.activeDocument.textFrames.getByName("Customer Instructions");
customer_instructions.contents = instructionsCustomer_edit.text;
if (instructionsCustomer_edit.length < 0) {
  var instructionsCustomerGroup = app.activeDocument.groupItems.getByName("Customer Instructions Group");
  instructionsCustomerGroup.remove();
}
var customerService_instructions = app.activeDocument.textFrames.getByName("Customer Service Instructions");
customerService_instructions.contents = instructionsCustomerService_edit.text;
if (instructionsCustomerService_edit.text.length < 1) {
  var instructionsCustomerServiceGroup = app.activeDocument.groupItems.getByName("Customer Service Instructions Group");
  instructionsCustomerServiceGroup.remove();
}
var production_instructions = app.activeDocument.textFrames.getByName("Production Instructions");
production_instructions.contents = instructionsProduction_edit.text;

if (instructionsProduction_edit.text.length < 1) {
  var instructionsProductionGroup = app.activeDocument.groupItems.getByName("Production Instructions Group");
  instructionsProductionGroup.remove();
}

                         //  if there is no information in all 3 boxes, delete artboard 2 and everything on it.
if (instructionsCustomer_edit.text.length < 1 && instructionsProduction_edit.text.length < 1 && instructionsCustomerService_edit.text.length < 1) {
  if (bodyColorList.selection < 11) {
    var artboardLogo = app.activeDocument.groupItems.getByName("Bic Logo Group");
    artboardLogo.remove();
    app.activeDocument.artboards.getByName("Back").remove();
  }

                         // 11 is the dark assortment. 12 is the light assortment.
  if (bodyColorList.selection.index === 11 || bodyColorList.selection.index === 12) {
    if (doubleSidedCheckbox.value === false) {
      var artboardLogo = app.activeDocument.groupItems.getByName("Bic Logo Group");
      artboardLogo.remove();
      app.activeDocument.artboards.getByName("Back").remove();
    }
    if (doubleSidedCheckbox.value === true) {
      var SILayer = app.activeDocument.layers.getByName("Special Instructions");
      SILayer.visible = true;
      SILayer.remove();
    }
  }
}
//#endregion                                                                    END OF INSTRUCTION BOXES
//#endregion                                                                    END OF ORDER INFO


//#region                                                                    ITEM INFO AREA
function originalFile() {
  var originalFile = app.activeDocument.textFrames.getByName("Original Art");
  originalFile.contents = originalArt_edit.text;
}
if (itemNumber_edit.length === 0) {
     itemNumber_edit.text = 1;
   }
function description() {
  var descriptionText = descriptionBox_edit.text;
  descriptionText = descriptionText.toLowerCase();
  descriptionText = descriptionText.split(" ");
  for (var i = 0; i < descriptionText.length; i++) {
    descriptionText[i] = descriptionText[i].charAt(0).toUpperCase() + descriptionText[i].slice(1);
  }
  return descriptionText.join("");
}
//#endregion                                                                    END OF ITEM INFO AREA


//#region                                                                    FILENAME OBJECT CREATION
var fileName = {

     standard: {
       web: {
         single: webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "A",
         multi: webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + bodyColorList.selection.text + "_" + "A"
       },
   
       jde: {
         single: jdeNumber_edit.text + "_" + description() + "_" + "A",
         multi: jdeNumber_edit.text + "_" + description() + "_" + bodyColorList.selection.text + "_" + "A"
       }
     },
   
     darkAssort: {
       web: {
         single: webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "DarkAssort" + "_" + "A",
         multi: webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "DarkAssort" + "Item01" + "_" + "A"
       },
   
       jde: {
         single: jdeNumber_edit.text + "_" + description() + "_" + "DarkAssort" + "_" + "A",
         multi: jdeNumber_edit.text + "_" + description() + "_" + bodyColorList.selection.text + "_" + "DarkAssort" + "Item01" + "_" + "A"
       }
     },
   
     lightAssort: {
       web: {
         single: webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "LightAssort" + "_" + "A",
         multi: webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "LightAssort" + "Item01" + "_" + "A"
       },
   
       jde: {
         single: jdeNumber_edit.text + "_" + description() + "_" + "LightAssort" + "_" + "A",
         multi: jdeNumber_edit.text + "_" + description() + "_" + bodyColorList.selection.text + "_" + "LightAssort" + "Item01" + "_" + "A"
       }
     },
   
     sleeve: {
       web: {
         single: "SLEEVE" + "_" + webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "A",
         multi: "SLEEVE" + "_" + webPrefix.selection.text + webNumber_edit.text + "_" + description() + "_" + "Item01" + "_" + "A"
       },
   
       jde: {
         single: "SLEEVE" + "_" + jdeNumber_edit.text + "_" + description() + "_" + "A",
         multi: "SLEEVE" + "_" + jdeNumber_edit.text + "_" + description() + "_" + "Item01" + "_" + "A"
       }
     }
   }
//#endregion                                                                    END OF FILENAME OBJECT CREATION
   

//#region                                                                    FILENAME - STANDARD TEMPLATE 
var fName_main = app.activeDocument.textFrames.getByName('FileName')

function fileNameStandardFunction(alpha) {
     var fName_A1 = app.activeDocument.textFrames.getByName('A1 Screen FileName')
     var fName_A2 = app.activeDocument.textFrames.getByName('A2 Screen FileName')
     var fName_A3 = app.activeDocument.textFrames.getByName('A3 Screen FileName')
     var fName_A4 = app.activeDocument.textFrames.getByName('A4 Screen FileName')
   
     var fName_C1 = app.activeDocument.textFrames.getByName('C1 Screen FileName')
     var fName_C2 = app.activeDocument.textFrames.getByName('C2 Screen FileName')
     var fName_C3 = app.activeDocument.textFrames.getByName('C3 Screen FileName')
     var fName_C4 = app.activeDocument.textFrames.getByName('C4 Screen FileName')
     
     fName_A1.contents = alpha;
     fName_A2.contents = alpha;
     fName_A3.contents = alpha;
     fName_A4.contents = alpha;
     fName_C1.contents = alpha;
     fName_C2.contents = alpha;
     fName_C3.contents = alpha;
     fName_C4.contents = alpha
   }
   


   if (bodyColorList.selection < 10) { //This block runs if the body color selected is one of the standard colors. It doesn't run for assorted or sleeves.
     if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text == 1) {
       fileNameStandardFunction(fileName.standard.jde.single)
     } else if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text > 1) {
       fileNameStandardFunction(fileName.standard.jde.multi)
     }
   
     if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text == 1) {
       fileNameStandardFunction(fileName.standard.web.single)
     } else if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text > 1) {
       fileNameStandardFunction(fileName.standard.web.multi)
     }
   }






//#region                                                                    INK COLORS STANDARD TEMPLATE
//#endregion                                                                    END OF INK COLORS STANDARD TEMPLATE


//#endregion                                                                    END OF FILENAME - STANDARD TEMPLATE


//#region                                                                    FILENAME SLEEVE
if (bodyColorList.selection.index === 14) {
     if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text == 1) {
       fName_main.contents = fileName.sleeve.jde.single
     } else if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text > 1) {
       fName_main.contents = fileName.sleeve.jde.multi
     }
   
     if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text == 1) {
       fName_main.contents = fileName.sleeve.web.single
     } else if (jdeNumber_edit.text.length === 0 && itemnumber_edit.text > 1) {
       fName_main.contents = fileName.sleeve.web.multi
     }
   }
   
//#endregion                                                                   END OF FILENAME SLEEVE


//#region                                                                    DARK ASSORTED TEMPLATE
if (bodyColorList.selection == 11) { //This block runs if the DARK ASSORTMENT is selected
  if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text == 1) {
    fName_main.contents = fileName.darkAssort.jde.single
  } else if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text > 1) {
    fName_main.contents = fileName.darkAssort.jde.multi
  }

  if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text == 1) {
    fName_main.contents = fileName.darkAssort.web.single
  } else if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text > 1) {
    fName_main.contents = fileName.darkAssort.web.multi
  }
}

//#endregion                                                                    END OF DARK ASSORTED TEMPLATE


//#region                                                                    LIGHT ASSORTED TEMPLATE
if(bodyColorList.selection == 12) {     //This block runs if the LIGHT ASSORTMENT is selected
     if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text == 1) {
          fName_main.contents = fileName.lightAssort.jde.single
     } else if (jdeNumber_edit.text.length > 0 && itemNumber_edit.text > 1){
          fName_main.contents = fileName.lightAssort.jde.multi
     }
     
     if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text == 1) {
          fName_main.contents = fileName.lightAssort.web.single
     } else if (jdeNumber_edit.text.length === 0 && itemNumber_edit.text > 1){
          fName_main.contents = fileName.lightAssort.web.multi
     }
}
//#endregion                                                                    END OF LIGHT ASSORTED TEMPLATE


//#region                                                                    ASSORTED 2 SIDED TEMPLATE
//#endregion                                                                    END OF ASSORTED 2 SIDED TEMPLATE


//#region                                                                    SLEEVE TEMPLATE
//#endregion                                                                    END OF SLEEVE TEMPLATE
