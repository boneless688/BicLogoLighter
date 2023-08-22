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
	"Warm Gray 11",
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
	"11",
];

//#endregion






//#region           Specific Terms list
var specificTerms = [
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
	"0331",
];
//#endregion







var ink_A1 = "0521"; //This color works.
var ink_A2 = "medium red"; //This color works.
var ink_A3 = "dark blue"; //This color works.
var ink_A4 = "medium yellow"; //This color works.

var ink_C1 = "pink"; //This color works.
var ink_C2 = "black 0961"; //This color works.
var ink_C3 = "warm gray 8"; //This returns undefined.
var ink_C4 = "cool gray 7"; //This returns undefined.

var inkColor = ink_A2;
inkColor = inkColor.split(" ");


var inkColor_final = null;




if (inkColor_final === null) {
	inkColor_final = singleWord(inkColor);
} else {
	inkColor_final = null;
}








/* if (inkColor_final === null) {
	inkColor_final = Bright(inkColor);
} */
 









if (inkColor_final === null) {
	inkColor_final = Medium(inkColor);
} else {
	inkColor_final = null;
}

if (inkColor_final === null) {
	inkColor_final = Violet(inkColor);
} else {
	inkColor_final = null;
}

if (inkColor_final === null) {
	inkColor_final = Purple(inkColor);
} else {
	inkColor_final = null;
}

if (inkColor_final === null) {
	inkColor_final = Orange(inkColor);
} else {
	inkColor_final = null;
}

if (inkColor_final === null) {
	inkColor_final = Green(inkColor);
} else {
	inkColor_final = null;
}

if (inkColor_final === null) {
	inkColor_final = Grays(inkColor);
} else {
	inkColor_final = null;
}

if (inkColor_final === null) {
	inkColor_final = Blacks(inkColor);
} else {
	inkColor_final = null;
}




alert(inkColor_final)











function Grays(n) {
	//inkColor is an array of strings:    ["warm", "gray", "8"]

	var hotel;
	var grayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

	for (t = 0; t < n.length; t++) {
		//This sets up the first loop to look for the word 'gray'.
		if (n[t] === "gray" || n[t] === "grey") {
			for (r = 0; r < n.length; r++) {
				//This sets up the second loop to look for the words 'warm' or 'cool'.
				if (n[r] === "warm") {
					hotel = "Warm Gray ";
				} else if (n[r] === "cool") {
					hotel = "Cool Gray ";
				}

				for (s = 0; s < grayNumbers.length; s++) {
					if (n[r] === grayNumbers[s]) {
						return "PANTONE " + hotel + grayNumbers[s] + " C"; // Warm Gray 8
					}
				}
			}
		}
	}
}
function singleWord(n) {
	// n is an array of strings. ["blue", "0821"]
	for (i = 0; i < n.length; i++) {
		if (n[i] === "dark") {
			return "PANTONE Dark Blue C";
		} else if (n[i] === "magenta") {
			return "PANTONE Magenta 0521 C";
		} else if (n[i] === "pink") {
			return "PANTONE Pink C";
		} else if (n[i] === "reflex") {
			return "PANTONE Reflex Blue C";
		} else if (n[i] === "rhodamine") {
			return "PANTONE Rhodamine Red C";
		} else if (n[i] === "rubine") {
			return "PANTONE Rubine Red C";
		} else if (n[i] === "0961") {
			return "PANTONE Black 0961 C";
		} else if (n[i] === "072") {
			return "PANTONE Blue 072 C";
		} else if (n[i] === "0821") {
			return "PANTONE Blue 0821 C";
		} else if (n[i] === "0921") {
			return "PANTONE Green 0921 C";
		} else if (n[i] === "0521") {
			return "PANTONE Magenta 0521 C";
		} else if (n[i] === "032") {
			return "PANTONE Red 032 C";
		} else if (n[i] === "021") {
			return "PANTONE Red C";
		} else if (n[i] === "0331") {
			return "PANTONE Red 0331 C";
		}
	}
}

function Blacks(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "black") {
			for (y = 0; y < n.length; y++) {
				if (n[y] === "0961") {
					return "PANTONE Black 0961 C";
				}

				if (n[y] === "neutral") {
					return "PANTONE Neutral Black C";
				}

				if (n[y] === "2") {
					return "PANTONE Black 2 C";
				}

				if (n[y] === "3") {
					return "PANTONE Black 3 C";
				}

				if (n[y] === "4") {
					return "PANTONE Black 4 C";
				}

				if (n[y] === "5") {
					return "PANTONE Black 5 C";
				}

				if (n[y] === "6") {
					return "PANTONE Black 6 C";
				}

				if (n[y] === "7") {
					return "PANTONE Black 7 C";
				}
			}
		}
	}
}

function Green(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "green") {
			for (index = 0; index < n.length; index++) {
				if (n.length < 2) {
					return "PANTONE Green C";
				}

				if (n[index] === "0921") {
					return "PANTONE Green 0921 C";
				}
			}
		}
	}
}

function Orange(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "orange") {
			for (index = 0; index < n.length; index++) {
				if (n[index] === "021" || n[index] === "21") {
					return "PANTONE Orange 021 C";
				}
			}
		}
	}
}

function Purple(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "purple") {
			for (index = 0; index < n.length; index++) {
				if (n.length < 2) {
					return "PANTONE Purple C";
				}
			}
		}
	}
}

function Violet(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "violet") {
			for (index = 0; index < n.length; index++) {
				if (n.length < 2) {
					return "PANTONE Violet C";
				} else {
					return "PANTONE Violet 0631 C";
				}
			}
		}
	}
}

function Medium(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "medium") {
			for (y = 0; y < n.length; y++) {
				if (n[y] === "yellow") {
					return "PANTONE Medium Yellow C";
				}

				if (n[y] === "purple") {
					return "PANTONE Medium Purple C";
				}

				if (n[y] === "blue") {
					return "PANTONE Medium Blue C";
				}
			}
		}
	}
}

function Bright(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "bright") {
			for (index = 0; index < n.length; index++) {
				switch (n[i]) {
					case "red":
						return "PANTONE Bright Red C";
						break;

					case "orange":
						return "PANTONE Bright Orange C";
						break;

					case "green":
						return "PANTONE Bright Green C";
						break;

					default:
						return null;
				}
			}
		}
	}
}
