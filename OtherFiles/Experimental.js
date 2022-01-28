var ink_A1 = "reflex blue";
var ink_A2 = "rhodamine red";
var ink_A3 = "bright red";
var ink_A4 = "black";

var ink_C1 = "white";
var ink_C2 = "process blue";
var ink_C3 = "805 pink";
var ink_C4 = "114 lemon yellow";

var inkSplit = ink_A2.trim();
inkSplit = inkSplit.toLowerCase();
inkSplit = inkSplit.split(" ");
if (oddInk !== null) {
  finalName = oddInk(inkSplit);
} else {
  finalName = standardInkName(inkSplit);         
}

var inputArray = inkSplit;




var finalName;

if (oddInk() !== null) {
  finalName = oddInk()
} else {
  finalName = standardInkName()
}

console.log(finalName)

function oddInk(input) {
  var oddList = [
    "bright",
    "dark",
    "reflex",
    "process",
    "rhodamine",
    "violet",
    "medium",
    "rubine",
    "warm",
    "green",
    "pink",
    "yellow",
    "purple",
    "0631",
    "012",
    "0131",
    "0961",
    "072",
    "0821",
    "0921",
    "0521",
    "021",
    "032",
    "0331",
  ];
  for (o = 0; o < oddList.length; o++) {
    for (i = 0; i < input.length; i++) {
      if (input[i] === oddList[o]) {
        var swatchName = input[i];
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
        } else if (swatchName === "0331") {
          swatchName = "Pantone Red 0331 C";
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

function standardInkName(inkSplit) {
  return "PANTONE" + " " + inkSplit[0] + " " + "C";
}

function bravo(inkInput) {
  var inkScreenArray = ["_Frame", "_Name", "_Color", "_Chip"];
  for (g = 0; g < inkScreenArray.length; g++) {}
}
