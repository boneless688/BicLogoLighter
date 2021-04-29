var master = new Window("dialog");
master.maximumSize.height = 900;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "Bic Logo Lighter");
big.alignment = "center";


var bottom = big.add("group");
bottom.orientation = "column";

var itemLeft = bottom.add("group");
itemLeft.orientation = "row";

var itemTab = itemLeft.add("tabbedpanel");
itemTab.alignChildren = ["fill", "fill"];




var item_02 = itemTab.add("tab", undefined, "Item 2");
item_02.alignChildren = "fill";
var itemTwo = item_02.add("panel", undefined);
itemTwo.alignChildren = "left";
var t = 'Item02';
var fox = trilla (t);




    var bodyColor = descriptionSide.add("panel", undefined, "Body Color");

    function trilla (t, p) {
        var name = t + p;
        eval(name);
        return name;
        }

    var bodyColor_list = bodyColor.add("dropdownlist", undefined, [
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
    bodyColor_list.add("separator", undefined, 10);
    bodyColor_list.add("separator", undefined, 13);
    if (bodyColor_list.selection === null) {
      bodyColor_list.selection = 0;
    }

//#region   OKAY / Cancel buttons
var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
buttonGroup.add("button", undefined, "OK");
buttonGroup.add("button", undefined, "Cancel");
//#endregion

master.show();
//#endregion



