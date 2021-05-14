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
1. Layers   "Item 01", "Item 02", "Item 03", "Item 04", "Item 05", "Item 06", "Item 07", "Item 08", "Item 09", "Item 10", "Assortment", "Sleeve"

layer - textFrames.getByName
layer - pathItems.getByName



body colors
layer - toggle group visibilty to hide all, then make the body color entered in the UI to visible.






ink colors
Use the same function for a single screen box group.


var item = ["Item 01", "Item 02", "Item 03", "Item 04", "Item 05", "Item 06", "Item 07", "Item 08", "Item 09", "Item 10", "Assortment", "Sleeve"];

for (n = 0; n < item.length; n++) { // This loops through the item numbers.

  var screen = ['A1', 'A2', 'A3', 'A4', 'C1', 'C2', 'C3', 'C4']  // This loops through the screens
  for (i = 0; i < screen.length; i++) {
    var screen_name = `${screen[i]}_Name`;
    var screen_frame = `${screen[i]}_Frame`;
    var screen_color = `${screen[i]}_Color`;

    var item_path_A = `app.activeDocument.layers.getByName(${item[n]}).pathItems.getByName(${screen_name})`;
    var item_path_B = `app.activeDocument.layers.getByName(${item[n]}).pathItems.getByName(${screen_frame})`;
    var item_path_C = `app.activeDocument.layers.getByName(${item[n]}).pathItems.getByName(${screen_color})`;
    console.log(item_path_A);
    console.log(item_path_B);
    console.log(item_path_C);
  }
}





  


2. textFrames.getByName("") or pathItems.getByName("")

3. 




app.activeDocument.layers.getByName("").textFrames.getByName("")
app.activeDocument.layers.getByName("").pathItems.getByName("")

