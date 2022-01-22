var ink_A1 = "reflex blue";
var ink_A2 = "rhodamine";
var ink_A3 = "bright red";
var ink_A4 = "black";

var ink_C1 = "white";
var ink_C2 = "process blue";
var ink_C3 = "805 pink";
var ink_C4 = "114 lemon yellow";

function inkNamer(inkInput) {
  //If any word in the input array matches one of the special PMS color array words, then the name is replaced with the preset Pantone name to all of the outputs and the function is ended.
  inkSplit = inkInput.trim();
  inkSplit = inkSplit.toLowerCase();
  inkSplit = inkSplit.split(" "); //inkSplit is an array that contains all the words of the inputted text as individual elements.

  return oddInkName(inkSplit); //function call for the odd inks function.
  return standardInkName(inkSplit); //function call if the name of the ink starts with a number.
}

function pmsNumberTest(input) {
  input = input.split("");
  input = input[0].split("");
  for (var i = 0; i < input.length; i++) {
    var digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (n = 0; n < digitArray.length; n++) {
      if (input[i] === digitArray[n]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
var inkNameFinal;

//If the first element in the input array is not a number, the oddInkName function is run.

if (pmsNumberTest === false) {
  oddInkName();
} else {
  standardInkName();
}

function oddInkName(inkSplit) {


     for (i = 0; i < inkSplit.length; i++) {
       var listedInks = [
         "bright",
         "072",
         "0821",
         "0921",
         "0521",
         "021",
         "032",
         "0331",
         "reflex",
         "process",
         "rhodamine",
         "violet",
         "rubine",
         "0631",
         "012",
         "0131",
       ];
   
       for (x = 0; x < listedInks.length; x++) {
         if (inkSplit[i] === listedInks[x]) {
           var swatchName = listedInks[x];
           if (swatchName === "bright") {
             swatchName = "Pantone Bright Red C";
           } else if (swatchName === "072") {
             swatchName = "Pantone Blue 072 C";
           } else if (swatchName === "0821") {
             swatchName = "Pantone Blue 0821 C";
           } else if (swatchName === "0921") {
             swatchName = "Pantone Green 0921 C";
           } else if (swatchName === "0521") {
             swatchName = "Pantone Magenta 0521 C";
           } else if (swatchName === "021") {
             swatchName = "Pantone Orange 021 C";
           } else if (swatchName === "032") {
             swatchName = "Pantone Red 032 C";
           } else if (swatchName === "reflex") {
             swatchName = "Pantone Reflex Blue C";
           } else if (swatchName === "process") {
             swatchName = "Pantone Process Blue C";
           } else if (swatchName === "rhodamine") {
             swatchName = "Pantone Rhodamine Red C";
           } else if (swatchName === "violet") {
             swatchName = "Pantone Violet C";
           } else if (swatchName === "rubine") {
             swatchName = "Pantone Rubine Red C";
           } else if (swatchName === "0631") {
             swatchName = "Pantone Violet 0631 C";
           } else if (swatchName === "012") {
             swatchName = "Pantone Yellow 012 C";
           } else if (swatchName === "0131") {
             swatchName = "Pantone Yellow 0131 C";
           }
           return swatchName;
         }
       }
     }
   }
   
   
   
   function white() {
     if (inkSplit[0] === "white") {
       return "White";
     }
   }
   
   function grays() {
     if (inkSplit[0] === "warm") {
       if (inkSplit[1] === "red") {
         return "Pantone Warm Red C";
       } else if (inkSplit[1] === "gray" || inkSplit[1] === "grey") {
         for (i = 0; i < 12; i++) {
           if (inkSplit[2] == i) {
             return "Pantone " + "Warm " + "Gray " + i + " C";
           }
         }
       }
     } else if (inkSplit[0] === "cool") {
       if (inkSplit[1] === "gray" || inkSplit[1] === "grey") {
         for (i = 0; i < 12; i++) {
           if (inkSplit[2] == i) {
             return "Pantone " + "Cool " + "Gray " + i + " C";
           }
         }
       }
     }
   }
   
   function blackInks() {
     if (inkSplit[0] === "black") {
       for (i = 2; i < 8; i++) {
         if (inkSplit[2] == i) {
           return "Pantone " + "Black " + i + " C";
         }
       }
     }
   }
   

//If the first word in the input array has any numbers, then it is a standard PMS color name. The standard name format is used for all of the outputs and the function is ended.

function standardInkName(inkSplit) {
  return "PANTONE" + " " + inkSplit[0] + " " + "C";
}

//#region                         FUNCTION CALLS
inkNamer(ink_A1, "A1");
inkNamer(ink_A2, "A2");
inkNamer(ink_A2, "A2");
inkNamer(ink_A2, "A2");

inkNamer(ink_C1, "C1");
inkNamer(ink_C2, "C2");
inkNamer(ink_C3, "C3");
inkNamer(ink_C4, "C4");
//#endregion

//#region                         OUTPUTS
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
//#endregion
