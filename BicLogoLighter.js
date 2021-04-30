//#region                 UI
var master = new Window("dialog");
master.maximumSize.height = 900;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "Bic Logo Lighter");
big.alignment = "center";

var topPart = big.add("group");
topPart.orientation = "row";
topPart.maximumSize.height = 900;
topPart.maximumSize.width = 1400;

//#region                customer info
var topLeft = topPart.add("panel", undefined, "Customer Information");
topLeft.preferredSize.height = 200;
topLeft.preferredSize.width = 200;

var customerInfo_outer = topLeft.add("group");
customerInfo_outer.orientation = "column";

var repName = customerInfo_outer.add("statictext", undefined, "Rep name");
var repName_edit = customerInfo_outer.add("edittext", undefined, "");
repName_edit.characters = 20;

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email");
var repEmail_edit = customerInfo_outer.add("edittext", undefined, "");
repEmail_edit.characters = 20;

var companyGroup = customerInfo_outer.add("panel", undefined, "");
companyGroup.orientation = "row";

var company_A = companyGroup.add("statictext", undefined, "Company");
var company_A_edit = companyGroup.add("edittext", undefined, "");
company_A_edit.characters = 10;

var vip_Checkbox = companyGroup.add("checkbox", undefined, "VIP");

var nationalityGroup = topLeft.add("panel", undefined, "Nationality");
nationalityGroup.orientation = "row";
nationalityGroup.margins = [20, 20, 20, 5];

var nationality_US_radio = nationalityGroup.add("radiobutton", undefined, "US");
nationality_US_radio.orientation = "row";
nationality_US_radio.value = true;
var nationality_Canada_radio = nationalityGroup.add(
  "radiobutton",
  undefined,
  "Canadian"
);
//#endregion

//#region                order information
var topRight = topPart.add("panel", undefined, "Order Information");
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

var webPrefix_list = orderOne.add("dropdownlist", undefined, ["B2B", "D2CWEB"]);
webPrefix_list.characters = 6;
webPrefix_list.selection = 0;

var webNumber = orderOne.add("statictext", undefined, "Web Number");
var webNumber_edit = orderOne.add("edittext", undefined, "");
webNumber_edit.characters = 10;

var orderThree = topRight.add("panel", undefined, "Dates");
orderThree.orientation = "row";
orderThree.alignment = "left";

var inHandsDate = orderThree.add("statictext", undefined, "In-hands Date");
var inHandsDate_edit = orderThree.add("edittext", undefined, "");
inHandsDate_edit.characters = 10;

var shipDate = orderThree.add("statictext", undefined, "Ship Date");
var shipDate_edit = orderThree.add("edittext", undefined, "");
shipDate_edit.characters = 10;

var rush_Checkbox = orderThree.add("checkbox", undefined, "Rush order");

var spacer = orderThree.add("group");

var itemNumber = orderThree.add("statictext", undefined, "Number of Items");
var itemNumber_edit = orderThree.add("edittext", undefined, "");

itemNumber_edit.characters = 2;
if (itemNumber_edit.text < 2 || itemNumber_edit.length === 0) {
  itemNumber_edit.value = 1;
}

var orderFour = topRight.add("group");
orderFour.orientation = "row";
orderFour.preferredSize.height = 100;
//#endregion

//#region                instructions - customer
var instructions_Customer_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Customer"
);
var instructions_Customer_edit = instructions_Customer_title.add(
  "edittext",
  undefined,
  "",
  { multiline: true }
);
instructions_Customer_edit.minimumSize.width = 200;
instructions_Customer_edit.minimumSize.height = 100;
//#endregion

//#region                instructions - customer service
var instructions_CustomerService_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Customer Service"
);
var instructions_CustomerService_edit = instructions_CustomerService_title.add(
  "edittext",
  undefined,
  "",
  { multiline: true }
);
instructions_CustomerService_edit.minimumSize.width = 200;
instructions_CustomerService_edit.minimumSize.height = 100;
//#endregion

//#region                instructions - production
var instructions_Production_title = orderFour.add(
  "panel",
  undefined,
  "Instructions - Production"
);
var instructions_Production_edit = instructions_Production_title.add(
  "edittext",
  undefined,
  "",
  { multiline: true }
);
instructions_Production_edit.minimumSize.width = 200;
instructions_Production_edit.minimumSize.height = 100;
//#endregion

//#region item information
var bottom = big.add("group");
bottom.orientation = "column";

var itemLeft = bottom.add("group");
itemLeft.orientation = "row";

var itemTab = itemLeft.add("tabbedpanel");
itemTab.alignChildren = ["fill", "fill"];



var item_01 = itemTab.add("tab", undefined, "Item 1");
item_01.alignChildren = "fill";
var item01_panel = item_01.add("panel", undefined);
item01_panel.alignChildren = "left";

var item01_itemTopRow = itemTab.add("panel", undefined,);
item01_itemTopRow.orientation = "row";
item01_itemTopRow.preferredSize.width = 150;
item01_itemTopRow.preferredSize.height = 50;

  var item01_descriptionSide = itemTopRow.add("group");
  item01_descriptionSide.orientation = "column";itemTopRow = itemTab.add("panel", undefined,);
  item01_itemTopRow.orientation = "row";
  item01_itemTopRow.preferredSize.width = 150;
  item01_itemTopRow.preferredSize.height = 50;

  var item01_descriptionSide = item01_itemTopRow.add("group");
  item01_descriptionSide.orientation = "column";


  //#region              body colors
  var item01_bodyColor = descriptionSide.add("panel", undefined, "Body Color");
  var item01_bodyColor_list = item01_bodyColor.add("dropdownlist", undefined, [
    "Black",
    "White",
    "Green",
    "Blue",
    "Red",
    "Pink",
    "Light Blue",
    "Forest Green",
    "Orange",
    "Yellow",
    "Light Assortment",
    "Dark Assortment",
    "Sleeve",
  ]);
  item01_bodyColor_list.add("separator", undefined, 10);
  item01_bodyColor_list.add("separator", undefined, 13);
  if (item01_bodyColor_list.selection === null) {
    item01_bodyColor_list.selection = 0;
  }
  //#endregion




  //#region             description box
  var item01_descriptionBox = descriptionSide.add(
    "statictext",
    undefined,
    "Description"
  );
  var item01_descriptionBox_edit = descriptionSide.add("edittext", undefined, "");
  item01_descriptionBox_edit.characters = 20;
  //#endregion

  var item01_originalArt_A = descriptionSide.add(
    "statictext",
    undefined,
    "Original Art Name - Side A"
  );
  var item01_originalArt_A_edit = descriptionSide.add("edittext", undefined, "");
  item01_originalArt_A_edit.characters = 30;

  var item01_originalArt_C = descriptionSide.add(
    "statictext",
    undefined,
    "Original Art Name - Side C"
  );
  var item01_originalArt_C_edit = descriptionSide.add("edittext", undefined, "");
  item01_originalArt_C_edit.characters = 30;


  var item01_itemInstructions_edit = descriptionSide.add(
    "edittext",
    undefined,
    "Item Instructions",
    { multiline: true }
  );
  item01_itemInstructions_edit.minimumSize.width = 280;
  item01_itemInstructions_edit.minimumSize.height = 50;



  var item01_colors = itemTopRow.add("group");
  item01_colors.margins = [50, 0, 0, 0];

  //#region                ink colors

  var item01_inkMaster = colors.add("group");
  item01_inkMaster.orientation = "column";
  var item01_inkColors_1 = item01_inkMaster.add("group");
  var item01_inkColors_2 = item01_inkMaster.add("group");

  //#region                          side A ink colors
  var item01_inkColors_A = item01_inkColors_1.add("panel", undefined, "inkColors_A");
  item01_inkColors_A.preferredSize = [400, 100];
  item01_inkColors_A.margins = [20, 20, 20, 20];
  item01_inkColors_A.orientation = "row";

  var item01_inkBox_Master_A1 = item01_inkColors_A.add("panel", undefined, "Screen A1");
  item01_inkBox_Master_A1.orientation = "column";
  item01_inkBox_Master_A1.margins = [15, 15, 15, 15];

  var item01_ink_A1_edit = item01_inkBox_Master_A1.add("edittext", undefined, "");
  item01_ink_A1_edit.characters = 10;
  var item01_ink_A1_Checkbox = item01_inkBox_Master_A1.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_A1_Checkbox.value = false;

  var item01_inkBox_Master_A2 = item01_inkColors_A.add("panel", undefined, "Screen A2");
  item01_inkBox_Master_A2.orientation = "column";
  var item01_ink_A2_edit = item01_inkBox_Master_A2.add("edittext", undefined, "");
  item01_ink_A2_edit.characters = 10;
  var item01_ink_A2_Checkbox = item01_inkBox_Master_A2.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_A2_Checkbox.value = false;

  var item01_inkBox_Master_A3 = item01_inkColors_A.add("panel", undefined, "Screen A3");
  item01_inkBox_Master_A3.orientation = "column";
  var item01_ink_A3_edit = item01_inkBox_Master_A3.add("edittext", undefined, "");
  item01_ink_A3_edit.characters = 10;
  var item01_ink_A3_Checkbox = item01_inkBox_Master_A3.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_A3_Checkbox.value = false;

  var item01_inkBox_Master_A4 = item01_inkColors_A.add("panel", undefined, "Screen A4");
  item01_inkBox_Master_A4.orientation = "column";
  var item01_ink_A4_edit = item01_inkBox_Master_A4.add("edittext", undefined, "");
  item01_ink_A4_edit.characters = 10;
  var item01_ink_A4_Checkbox = item01_inkBox_Master_A4.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_A4_Checkbox.value = false;
  //#endregion

  //#region                          side C ink colors
  var item01_inkColors_C = item01_inkColors_2.add("panel", undefined, "inkColors_C");
  item01_inkColors_C.preferredSize = [400, 100];
  item01_inkColors_C.margins = [20, 20, 20, 20];
  item01_inkColors_C.orientation = "row";

  var item01_inkBox_Master_C1 = item01_inkColors_C.add("panel", undefined, "Screen C1");
  item01_inkBox_Master_C1.orientation = "column";
  var item01_ink_C1_edit = item01_inkBox_Master_C1.add("edittext", undefined, "");
  item01_ink_C1_edit.characters = 10;
  var item01_ink_C1_Checkbox = item01_inkBox_Master_C1.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_C1_Checkbox.value = false;

  var item01_inkBox_Master_C2 = item01_inkColors_C.add("panel", undefined, "Screen C2");
  item01_inkBox_Master_C2.orientation = "column";
  var item01_ink_C2_edit = item01_inkBox_Master_C2.add("edittext", undefined, "");
  item01_ink_C2_edit.characters = 10;
  var item01_ink_C2_Checkbox = item01_inkBox_Master_C2.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_C2_Checkbox.value = false;

  var item01_inkBox_Master_C3 = item01_inkColors_C.add("panel", undefined, "Screen C3");
  item01_inkBox_Master_C3.orientation = "column";
  var item01_ink_C3_edit = item01_inkBox_Master_C3.add("edittext", undefined, "");
  item01_ink_C3_edit.characters = 10;
  var item01_ink_C3_Checkbox = item01_inkBox_Master_C3.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_C3_Checkbox.value = false;

  var item01_inkBox_Master_C4 = item01_inkColors_C.add("panel", undefined, "Screen C4");
  item01_inkBox_Master_C4.orientation = "column";
  var item01_ink_C4_edit = item01_inkBox_Master_C4.add("edittext", undefined, "");
  item01_ink_C4_edit.characters = 10;
  var item01_ink_C4_Checkbox = item01_inkBox_Master_C4.add(
    "checkbox",
    undefined,
    "Custom ink"
  );
  item01_ink_C4_Checkbox.value = false;

//#endregion
//#endregion
//#endregion







var item_02 = itemTab.add("tab", undefined, "Item 2");
item_02.alignChildren = "fill";
var itemTwo = item_02.add("panel", undefined);
itemTwo.alignChildren = "left";





var item_03 = itemTab.add("tab", undefined, "Item 3");
item_03.alignChildren = "fill";
var itemThree = item_03.add("panel", undefined);
itemThree.alignChildren = "left";






var item_04 = itemTab.add("tab", undefined, "Item 4");
item_04.alignChildren = "fill";
var itemFour = item_04.add("panel", undefined);
itemFour.alignChildren = "left";






var item_05 = itemTab.add("tab", undefined, "Item 5");
item_05.alignChildren = "fill";
var itemFive = item_05.add("panel", undefined);
itemFive.alignChildren = "left";






var item_06 = itemTab.add("tab", undefined, "Item 6");
item_06.alignChildren = "fill";
var itemSix = item_06.add("panel", undefined);
itemSix.alignChildren = "left";






var item_07 = itemTab.add("tab", undefined, "Item 7");
item_07.alignChildren = "fill";
var itemSeven = item_07.add("panel", undefined);
itemSeven.alignChildren = "left";





var item_08 = itemTab.add("tab", undefined, "Item 8");
item_08.alignChildren = "fill";
var itemEight = item_08.add("panel", undefined);
itemEight.alignChildren = "left";






var item_09 = itemTab.add("tab", undefined, "Item 9");
item_09.alignChildren = "fill";
var itemNine = item_09.add("panel", undefined);
itemNine.alignChildren = "left";






var item_10 = itemTab.add("tab", undefined, "Item 10");
item_10.alignChildren = "fill";
var itemTen = item_10.add("panel", undefined);
itemTen.alignChildren = "left";










//#region   OKAY / Cancel buttons
var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
buttonGroup.add("button", undefined, "OK");
buttonGroup.add("button", undefined, "Cancel");
//#endregion

master.show();
//#endregion






































/*         These are the names of the edittext boxes used in the interface
        repName_edit;
        repEmail_edit;
        company_A_edit;
        vip_Checkbox;

        nationality_US_radio;
        nationality_Canada_radio;

        jdeNumber_edit;
        poNumber_edit;
        webPrefix_list;
        webNumber_edit;
        inHandsDate_edit;
        shipDate_edit;
        rush_Checkbox;
        itemNumber_edit;

        instructions_Customer_edit;
        instructions_CustomerService_edit;
        instructions_Production_edit;

        bodyColor_list;
        descriptionBox_edit;

        originalArt_A_edit;
        originalArt_C_edit;
        itemInstructions_edit;


        ink_A1_edit;
        ink_A1_Checkbox;
        ink_A2_edit;
        ink_A2_Checkbox;
        ink_A3_edit;
        ink_A3_Checkbox;
        ink_A4_edit;
        ink_A4_Checkbox;

        ink_C1_edit;
        ink_C1_Checkbox;
        ink_C2_edit;
        ink_C2_Checkbox;
        ink_C3_edit;
        ink_C3_Checkbox;
        ink_C4_edit;
        ink_C4_Checkbox; 
        */




function newTemplate() {
  var myAitFile = new File("C:/Users/JBavitz/OneDrive - BIC/Desktop/Proof_Template_Multi.ai");
  app.open(myAitFile);
}
        






/*          This section deals with selecting objects on specific artboards. Artboards are referred to by the name of the layers in the layers palette in Illustrator     */

var bravo = app.activeDocument.layers
  .getByName("Item 10")
  .groupItems.getByName("Info")
  .groupItems.getByName("JDE")
  .textFrames.getByName("jde number");
bravo.contents = "Item 10";

function bodyColor_function() {
  //     The code below takes the number of items that the user input and uses it to set the number of artboards/items.

  for (i = itemNumber_edit; i >= 1; i--) {
    var bodyColorArray = [
      "Item 00",
      "Item 01",
      "Item 02",
      "Item 03",
      "Item 04",
      "Item 05",
      "Item 06",
      "Item 07",
      "Item 08",
      "Item 09",
      "Item 10",
    ];

    var orangeBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Orange");
    var whiteBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("White");
    var greenBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Green");
    var lightBlueBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Light Blue");
    var yellowBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Yellow");
    var blackBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Black");
    var blueBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName(bodyColorArray[i]);
    var redBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Red");
    var pinkBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Pink");
    var forestGreenBody = app.activeDocument.layers
      .getByName(bodyColorArray[i])
      .layers.getByName("Forest Green");
    //var assortmentBody = "";
    //var sleeveBody = "";

    var bodyColorAlpha = [
      orangeBody,
      whiteBody,
      greenBody,
      lightBlueBody,
      yellowBody,
      blackBody,
      blueBody,
      redBody,
      pinkBody,
      forestGreenBody,
    ];

    for (a = 0; a < bodyColorAlpha.length; a++) {
      bodyColorAlpha[a].visible = false;
    }
    var lighterColor = app.activeDocument.layers
      .getByName("Item 01")
      .groupItems.getByName(bodyColorArray[i])
      .groupItems.getByName(bodyColorList.selection.text);
    lighterColor.visible = true;
  }
}





function A1Ink() {
  /*   This takes the text entered by the user in the edittext box, converts it to lower case, change the first letter of each word to upper case,
  then removes the spaces between the words.   */

  var india = ink_A1_edit.text;
  india = india.split(" ");
  var number1 = india[0];
  var kilo = india.slice(1);
  for (t = 0; t < kilo.length; t++) {
    kilo[t] = kilo[t].toLowerCase();
    kilo[t] = kilo[t].charAt(0).toUpperCase() + kilo[t].slice(1);
  }
  if (!/^\d+$/.test(india[0])) {
    var A1_Name = app.activeDocument.textFrames.getByName("A1_Name");
    for (p = 0; p < india.length; p++) {
      india[p] = india[p].charAt(0).toUpperCase() + india[p].slice(1);
      A1_Name.characters.removeAll();
      A1_Name.contents = "Pantone " + india.join(" ") + " C";
    }
  } else {
    var A1_Name = app.activeDocument.textFrames.getByName("A1_Name");
    A1_Name.characters.removeAll();
    A1_Name.contents = "Pantone" + " " + kilo.join(" ") + " C";
    number1 = "Pantone" + " " + number1 + " " + "C";
    A1_Name.characters.removeAll();
    A1_Name.contents = number1 + " " + kilo.join(" ");
  }





  // This part sets the width of the color box if the ink color is a custom color or not.
  var A1_frame = app.activeDocument.pathItems.getByName("A1_Frame");
  if (ink_A1_Checkbox.value === true) {
    A1_frame.strokeWidth = 02;
  } else {
    A1_frame.strokeWidth = 0.5;
  }



  // This part sets the text of the ink color in the color separation box that gets put on the gabarit.
  var A1_Screen = app.activeDocument.textFrames.getByName("A1 Screen Ink Color");
  A1_Screen.characters.removeAll();
  A1_Screen.contents = number1 + " " + kilo.join(" ");

  // This part picks the swatch color in the pantone color palette to make the big fill color box. This works as long as the swatch to be used exists in the swatches palette.
  var colorSwatch = app.activeDocument.pathItems.getByName("A1_Color");
  colorSwatch.selected = true;
  colorSwatch.fillColor = app.activeDocument.swatches.getByName(number1).color;
  var smallColorSample = app.activeDocument.pathItems.getByName("A1_chip");
  smallColorSample.selected = true;
  smallColorSample.fillColor = app.activeDocument.swatches.getByName(
    number1
  ).color;
}





function inkColor(
  inkColor_edit,
  inkLayerName,
  inkColor_frame,
  inkCheckbox,
  inkColorChip
) {






  /* This section tries to use the A1Ink section as a function to do the inks for the other screens.
      inkColor_edit.text = ink_A1_edit.text
            This takes the text entered by the user in the edittext box, converts it to lower case, change the first letter of each word to upper case, then removes the spaces between the words.   */
  var india = inkColor_edit.text;
  india = india.split(" ");
  var number1 = india[0];
  var kilo = india.slice(1);
  for (t = 0; t < kilo.length; t++) {
    kilo[t] = kilo[t].toLowerCase();
    kilo[t] = kilo[t].charAt(0).toUpperCase() + kilo[t].slice(1);
  }





  // The RegEx below checks each element of the array india to see if it contains any numbers.
  if (!/^\d+$/.test(india[0])) {
    /*  inkLayerName = A1_Name
    The code below adds the word Pantone to the ink color number.     */

    var screenName = app.activeDocument.textFrames.getByName(inkLayerName);
    for (p = 0; p < india.length; p++) {
      india[p] = india[p].charAt(0).toUpperCase() + india[p].slice(1);
      screenName.characters.removeAll();
      screenName.contents = "Pantone " + india.join(" ") + " C";
    }
  } else {
    var screenName = app.activeDocument.textFrames.getByName(inkLayerName);
    screenName.characters.removeAll();
    screenName.contents = "Pantone" + " " + kilo.join(" ") + " C";
    number1 = "Pantone" + " " + number1 + " " + "C";
    screenName.characters.removeAll();
    screenName.contents = number1 + " " + kilo.join(" ");
  }





  /*    inkColor_frame = A1_frame.
          This part sets the width of the color box to be thicker than normal if the ink color is a custom color.     */
  var frame = app.activeDocument.pathItems.getByName(inkColor_frame);
  if (inkCheckbox.value === true) {
    frame.strokeWidth = 02;
  } else {
    frame.strokeWidth = 0.5;
  }





  /*     Big and small color swatch fill color.
  
  This part picks the swatch color in the pantone color palette 
          to make the big fill color box at the top and the small color chips in the screens. 
          This works as long as the swatch to be used exists in the swatches palette.     */
  var colorSwatch = app.activeDocument.pathItems.getByName(inkColor_frame);
  colorSwatch.selected = true;
  colorSwatch.fillColor = app.activeDocument.swatches.getByName(number1).color;

  var smallColorSample = app.activeDocument.pathItems.getByName(inkColorChip);
  smallColorSample.selected = true;
  smallColorSample.fillColor = app.activeDocument.swatches.getByName(
    number1
  ).color;
} // This is the end of the inkColor function.






function customerInfo_function() {
  var rep_Name = app.activeDocument.textFrames.getByName("RepName");
  rep_Name.contents = capitalizeWithSpaces_function(repName_edit.text);

  var rep_Name_approved = app.activeDocument.textFrames.getByName("RepName_2");
  rep_Name_approved.contents = repName_edit.text;
  rep_Name_approved.contents = capitalizeWithSpaces_function(
    rep_Name_approved.contents
  );

  var repNameSignature = app.activeDocument.textFrames.getByName(
    "RepName_Signature"
  );
  repNameSignature.contents = repName_edit.text;
  repNameSignature.contents = capitalizeWithSpaces_function(
    repNameSignature.contents
  );

  var email = app.activeDocument.textFrames.getByName("RepEmail");
  email.contents = repEmail_edit.text;
  email.contents = email.contents.toLowerCase();

  var emailApproved = app.activeDocument.textFrames.getByName("RepEmail_2");
  emailApproved.contents = repEmail_edit.text;
  emailApproved.contents = capitalizeWithSpaces_function(
    emailApproved.contents
  );

  var companyName = app.activeDocument.textFrames.getByName("Company");
  companyName.contents = company_A_edit.text;
  companyName.contents = capitalizeWithSpaces_function(companyName.contents);
}




function vip_function() {
  var vipBox = app.activeDocument.layers
    .getByName("Masque")
    .groupItems.getByName("VIP");
  if (vip_Checkbox.value == true) {
    vip_Checkbox.hidden = false;
  }
  if (vip_Checkbox.value == false) {
    vipBox.hidden = true;
  }

  if (vip_Checkbox.value == true) {
    var vipOutline_blank = app.activeDocument.pathItems.getByName(
      "Signature Box - Blank"
    );
    newCMYKColor = new CMYKColor();
    newCMYKColor.black = 0;
    newCMYKColor.cyan = 100;
    newCMYKColor.magenta = 75;
    newCMYKColor.yellow = 0;
    vipOutline_blank.strokeColor = newCMYKColor;

    var vipOutline = app.activeDocument.pathItems.getByName("Signature Box");
    newCMYKColor = new CMYKColor();
    newCMYKColor.black = 0;
    newCMYKColor.cyan = 100;
    newCMYKColor.magenta = 75;
    newCMYKColor.yellow = 0;
    vipOutline_blank.strokeColor = newCMYKColor;
  }
}




function rush_function() {
  var rushBox = app.activeDocument.layers
    .getByName("Masque")
    .groupItems.getByName("Rush");
  if (rush_Checkbox.value == true) {
    rushBox.hidden = false;
  }
  if (rush_Checkbox.value == false) {
    rushBox.hidden = true;
  } else {
    rushBox.hidden = false;
  }
}




function po_function() {
  var purchaseOrder = app.activeDocument.textFrames.getByName("PO");
  purchaseOrder.contents = poNumber_edit.text;
  alert(purchaseOrder.contents);
  if (purchaseOrder.length === 0) {
    purchaseOrder.contents =
      webPrefix_list.selection.text + webNumber_edit.text;
  }
}




function deleteArtboards_function() {
  var n = app.activeDocument.artboards.length;

  for (i = n; i > itemNumber_edit.text - 1; i--) {
    if (i < n) {
      app.activeDocument.artboards.remove(i);
      app.activeDocument.layers[i].remove();
    }
  }
  alert(app.activeDocument.artboards.length);
}

try {
  if (itemNumber_edit.text > 10 || itemNumber_edit.text < 1) throw "The number of items must be between 1 and 10.";
}

catch(err) {
alert()
}




// #region     Instruction boxes

function production_instructions_function() {
  var production_instructions = app.activeDocument.textFrames.getByName(
    "Production Instructions"
  );
  production_instructions.contents = instructions_Production_edit.text;
}
function customerService_instructions_function() {
  var customerService_instructions = app.activeDocument.textFrames.getByName(
    "Customer Service Instructions"
  );
  customerService_instructions.contents =
    instructions_CustomerService_edit.text;
}
function customer_instructions_function() {
  var customer_instructions = app.activeDocument.textFrames.getByName(
    "Customer Instructions"
  );
  customer_instructions.contents = instructions_Customer_edit.text;
}
// #endregion



function capitalize_function(alpha) {
  alpha = alpha.toLowerCase();
  alpha = alpha.split(" ");
  for (var i = 0; i < alpha.length; i++) {
    alpha[i] = alpha[i].charAt(0).toUpperCase() + alpha[i].slice(1);
  }
  return alpha.join("");
}




function capitalizeWithSpaces_function(beta) {
  var beta = beta.toLowerCase();
  beta = beta.split(" ");
  for (i = 0; i < beta.length; i++) {
    beta[i] = beta[i].charAt(0).toUpperCase() + beta[i].slice(1);
  }
  return (beta = beta.join(" "));
}




if (webPrefix_list.selection.text === "B2B") {
  var webShortName = "B2B" + webNumber_edit.text +  "_" + capitalize_function(descriptionBox_edit.text) +  "_A";
  if (poNumber_edit.length === 0) {
    poNumber_edit.text = "B2B " + webNumber_edit.text;
  }
} else {
  var webShortName = "D2CWeb" + webNumber_edit.text + "_" + capitalize_function(descriptionBox_edit.text) + "_A";
  if (poNumber_edit.length === 0) {
    poNumber_edit.text = "D2CWeb " + webNumber_edit.text;
  }
}

if (webPrefix_list.selection.text === "B2B") {
  var webLongName = "B2B" + webNumber_edit.text + "_" + capitalize_function(descriptionBox_edit.text) + capitalize_function(bodyColor_list.selection.text) + "_A";
}
if (poNumber_edit.length === 0) {
  poNumber_edit.contents = "B2B " + webNumber_edit.text;
} else {
  var webLongName =
    "D2CWeb" +
    webNumber_edit.text +
    "_" +
    capitalize_function(descriptionBox_edit.text) +
    "_" +
    capitalize_function(bodyColor_list.selection.text) +
    "_A";
  if (poNumber_edit.length === 0) {
    poNumber_edit.contents = "D2CWeb " + webNumber_edit.text;
  }
}

var shortName = jdeNumber_edit.text + "_" + capitalize_function(descriptionBox_edit.text) + "_A";

var longName = jdeNumber_edit.text + "_" + capitalize_function(descriptionBox_edit.text) + "_" + capitalize_function(bodyColor_list.selection.text) +  "_A";

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
    if (jdeNumber_edit.value === undefined) {
      illo.contents = webShortName;
    } else {
      illo.contents = shortName;
    }
  } else {
    var fox = illustratorFrame[i];
    var illo_2 = app.activeDocument.textFrames.getByName(fox);
    if (jdeNumber_edit.value === undefined) {
      illo_2.contents = webLongName;
    } else {
      illo_2.contents = longName;
    }
  }
}


var filenameDescription = descriptionBox_edit.text;
capitalize_function(filenameDescription);

if (filenameDescription.length > 35) {
  var fnd = app.activeDocument.textFrames.getByName("FileName");
  fnd.textRange.characterAttributes.size = 7;
  fnd.textRange.characterAttributes.baselineShift = -02;
}




function currentDate_function() {
  var currentDate = new Date();
  var date = currentDate.toDateString();
  var a = app.activeDocument.textFrames.getByName("DateBox");
  a.contents = date;
}




function ship_function() {
  var ship = app.activeDocument.textFrames.getByName("Ship Date");
  ship.contents = shipDate_edit.text;
}




function InHands_function() {
  var inHands = app.activeDocument.textFrames.getByName("In Hands Date");
  inHands.contents = inHandsDate_edit.text;
}




function web_function() {
  var web = app.activeDocument.textFrames.getByName("Web");
  web.contents = webPrefix_list.selection.text + webNumber_edit.text;
}




function JDE_function() {
  var jde = app.activeDocument.textFrames.getByName("jde number");
  jde.contents = jdeNumber_edit.text;
}




function originalArt() {
  var originalA = app.activeDocument.textFrames.getByName(
    "Original Art - Side A"
  );
  originalA.contents = originalArt_A_edit.text;

  var originalC = app.activeDocument.textFrames.getByName(
    "original Art - Side C"
  );
  originalC.contents = originalArt_C_edit.text;
}




//#region    This section is going to save the currently open, but unsaved, file to the '3 - Art Proof sent' folder as a PDF with no dialog boxes.
function saveFileToPDF(webShortName, webLongName, shortName, longName) {
  var doc = app.activeDocument;
  var nameArray = [webShortName, webLongName, shortName, longName];
  for (i = 0; i < 4; i++) {
    if (nameArray[i].length > 0) {
      var saveName = new File(nameArray[i]);
      saveOpts = new PDFSaveOptions();
      saveOpts.compatibility = PDFCompatibility.ACROBAT5;
      saveOpts.generateThumbnails = true;
      saveOpts.preserveEditability = true;
      doc.saveAs(saveName, saveOpts);
    }
  }
}

//#endregion










//#region              Function calls

newTemplate()
deleteArtboards_function([1, 2, 3]);
customerInfo_function();
vip_function();
rush_function();
po_function();
currentDate_function();
JDE_function();
web_function();
InHands_function();
ship_function();
customer_instructions_function();
production_instructions_function();
customerService_instructions_function();
bodyColor_function();
originalArt();
inkColor(
  ink_A1_edit,
  "A1 Screen Ink Color",
  "A1_Color",
  ink_A1_Checkbox,
  "A1_Chip"
);
inkColor(
  ink_A2_edit,
  "A2 Screen Ink Color",
  "A2_Color",
  ink_A2_Checkbox,
  "A2_Chip"
);
inkColor(
  ink_A3_edit,
  "A3 Screen Ink Color",
  "A3_Color",
  ink_A3_Checkbox,
  "A3_Chip"
);
inkColor(
  ink_A4_edit,
  "A4 Screen Ink Color",
  "A4_Color",
  ink_A4_Checkbox,
  "A4_Chip"
);

inkColor(
  ink_C1_edit,
  "C1 Screen Ink Color",
  "C1_Color",
  ink_C1_Checkbox,
  "C1_Chip"
);
inkColor(
  ink_C2_edit,
  "C2 Screen Ink Color",
  "C2_Color",
  ink_C2_Checkbox,
  "C2_Chip"
);
inkColor(
  ink_C3_edit,
  "C3 Screen Ink Color",
  "C3_Color",
  ink_C3_Checkbox,
  "C3_Chip"
);
inkColor(
  ink_C4_edit,
  "C4 Screen Ink Color",
  "C4_Color",
  ink_C4_Checkbox,
  "C4_Chip"
);

saveFileToPDF();

//#endregion
