/* 
The goal is to test an array of words to see if a certain combination of words, in any order, are in the array.
 */

//#region           Odd Inks list
var oddInks = [
	"Black 0961",
	"Black 2",
	"Black 3",
	"Black 4",
	"Black 5",
	"Black 6",
	"Black 7",
	"Black",
	"Blue 072",
	"Blue 0821",
	"Bright Red",
	"Dark Blue",
	"Green 0921",
	"Green",
	"Magenta 0521",
	"Medium Purple",
	"Orange 021",
	"Pink",
	"Purple",
	"Red 032",
	"Red 0331",
	"Reflex Blue",
	"Rhodamine Red",
	"Rubine Red",
	"Violet 0631",
	"Violet",
	"Warm Red",
	"Yellow 012",
	"Yellow 0131",
	"Yellow",
	"Cool Gray 1",
	"Cool Gray 2",
	"Cool Gray 3",
	"Cool Gray 4",
	"Cool Gray 5",
	"Cool Gray 6",
	"Cool Gray 7",
	"Cool Gray 8",
	"Cool Gray 9",
	"Cool Gray 10",
	"Cool Gray 11",
	"Warm Gray 1",
	"Warm Gray 2",
	"Warm Gray 3",
	"Warm Gray 4",
	"Warm Gray 5",
	"Warm Gray 6",
	"Warm Gray 7",
	"Warm Gray 8",
	"Warm Gray 9",
	"Warm Gray 10",
	"Warm Gray 11"
];
//#endregion

//#region           Multiple Terms list
var multipleTerms = [
	"bright",
	"medium",
	"purple",
	"orange",
	"green",
	"red",
	"violet",
	"purple",
	"warm",
	"cool",
	"black",
	"gray",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11"
];

//#endregion

//#region           Specific Terms list
var specificTerms = [
	"bright",
	"dark",
	"magenta",
	"pink",
	"reflex",
	"rhodamine",
	"rubine",
	"0961",
	"072",
	"0821",
	"0921",
	"0521",
	"021",
	"032",
	"0331"
];
//#endregion

//#region     ink color names to test.
var ink_A1 = "0521";
var ink_A2 = "186 red";
var ink_A3 = "dark blue";
var ink_A4 = "medium blue";

var ink_C1 = "green";
var ink_C2 = "black 7";
var ink_C3 = "warm gray 8";
var ink_C4 = "cool gray 7";
//#endregion

var inkcolor = ink_C4;
inkcolor = inkcolor.split(" ");

var finalInk =  null;



/*
To filter out if the ink color is has a standard pantone name, the standard pantone name's array's first element is a number.
Test the input array to see if the first element is a number. 
If it is, run the standard ink color code. 
If it isn't, run the odd ink color code.
*/



if (inkcolor.length > 1) {
     for (d = 0; d < inkcolor.length; d++) {
       var digitArrayInkcolor = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
       for (e = 0; e < digitArrayInkcolor.length; e++) {
         if (inkcolor[0] === digitArrayInkcolor[d]) {
           standardPantoneInkCode(inkcolor) //This is the standard pantone ink color code.
         } else {
           oddInkCode(inkcolor) //This is the odd ink color code.
         }
       }
     }
   }




//#region     FUNCTION CALLS


function oddInkCode(inkcolor){
     for (t = 0; t < inkcolor.length; t++) {


          if (inkcolor[t] === "gray") {
            finalInk = grayInk();
          }
        
          if (inkcolor[t] === "black") {
            finalInk = blackInk();
          }
        
          if (inkcolor[t] === "medium") {
            finalInk = medium(inkcolor);
          }
        
          if (inkcolor[t] === "green") {
            finalInk = green(inkcolor)
          }
        
          if (inkcolor[t] === "orange") {
            finalInk = orange(inkcolor)
          }
        
          if (inkcolor[t] === "purple") {
            finalInk = purple(inkcolor)
          }
        
          if (inkcolor[t] === "violet") {
            finalInk = violet(inkcolor)
          }
          
          if (finalInk === null) [
               finalInk = singleWord(inkcolor)
          ]
        }



        item_A1_name.contents = "PANTONE " + finalInk;
        item_A1_screenName.contents =  finalInk;
        item_A1_color.fillColor = app.activeDocument.swatches.getByName("PANTONE "  + finalInk + " C").color;
        item_A1_chip.fillColor = app.activeDocument.swatches.getByName( "PANTONE " + finalInk + " C").color;


}














function standardPantoneInkCode(inkcolor) {
     var standard_A = ink_A1.text.search(" ");
     var standard_B = ink_A1.text.substring(0, standard_A);
     var standard_C = ink_A1.text.substring(standard_A);
     standard_B = standard_B.replace(/,/g, "");
     item_A1_name.contents = "PANTONE " + standard_B + capitalizeSpaces(standard_C);
     item_A1_screenName.contents =  standard_B + " " + capitalizeSpaces(standard_C);
     item_A1_color.fillColor = app.activeDocument.swatches.getByName("PANTONE "  + standard_B + " C").color;
     item_A1_chip.fillColor = app.activeDocument.swatches.getByName( "PANTONE " + standard_B + " C").color;
}
//#endregion




//#region     FUNCTIONS
function grayInk() {
	var grayArray = [];
	for (i = 0; i < inkcolor.length; i++) {
		if (inkcolor[i] === "warm") {
			grayArray.push("Warm");
		}

		if (inkcolor[i] === "cool") {
			grayArray.push("Cool");
		}
	}

	for (a = 0; a < inkcolor.length; a++) {
		if (inkcolor[a] === "gray") {
			grayArray.push("Gray");
		}
	}

	for (b = 0; b < inkcolor.length; b++) {
		var digitArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
		for (c = 0; c < digitArray.length; c++) {
			if (inkcolor[b] === digitArray[c]) {
				grayArray.push(inkcolor[b]);
			}
		}
	}

	return grayArray.join(" ");
}

function blackInk() {
	var blackArray = [];

	for (a = 0; a < inkcolor.length; a++) {
		if (inkcolor[a] === "black") {
			blackArray.push("Black");
		}

		if (inkcolor[a] === "0961") {
			return "Black 0961";
			break;
		}
	}

	for (b = 0; b < inkcolor.length; b++) {
		var digitArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
		for (c = 0; c < digitArray.length; c++) {
			if (inkcolor[b] === digitArray[c]) {
				blackArray.push(inkcolor[b]);
			}
		}
	}

	return blackArray.join(" ");
}

function singleWord(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "bright") {
			return "Bright Red";
		} else if (n[i] === "dark") {
			return "Dark Blue";
		} else if (n[i] === "magenta") {
			return "Magenta 0521";
		} else if (n[i] === "pink") {
			return "Pink";
		} else if (n[i] === "reflex") {
			return "Reflex Blue";
		} else if (n[i] === "rhodamine") {
			return "Rhodamine Red";
		} else if (n[i] === "rubine") {
			return "Rubine Red";
		} else if (n[i] === "0961") {
			return "Black 0961";
		} else if (n[i] === "072") {
			return "Blue 072";
		} else if (n[i] === "0821") {
			return "Blue 0821";
		} else if (n[i] === "0921") {
			return "Green 0921";
		} else if (n[i] === "0521") {
			return "Magenta 0521";
		} else if (n[i] === "032") {
			return "Red 032";
		} else if (n[i] === "021") {
			return "Red";
		} else if (n[i] === "0331") {
			return "Red 0331";
		}
	}
}

function green(n) {
     for (i = 0; i < n.length; i++) {
       if (n[i] === "green") {
         return "Green";
       }
     }
   }
	

function orange(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "orange") {
			for (index = 0; index < n.length; index++) {
				if (n[index] === "021" || n[index] === "21") {
					return "Orange 021";
				}
			}
		}
	}
}

function purple(n) {
     if (n.length === 1) {
       return "Purple";
     }
   }


function violet(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "violet") {
			for (index = 0; index < n.length; index++) {
				if (n.length < 2) {
					return "Violet";
				} else {
					return "Violet 0631";
				}
			}
		}
	}
}

function medium(n) {
     for (i = 0; i < n.length; i++) {
       if (n[i] === "yellow") {
         return "Medium Yellow";
       }
   
       if (n[i] === "purple") {
         return "Medium Purple";
       }
   
       if (n[i] === "blue") {
         return "Medium Blue";
       }
     }
   }
//#endregion



