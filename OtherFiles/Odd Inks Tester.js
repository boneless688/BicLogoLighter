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

var ink_A1 = "0521";
var ink_A2 = "rhodamine red";
var ink_A3 = "blue 0821";
var ink_A4 = "medium yellow";

var ink_C1 = "pink";
var ink_C2 = "black 4";
var ink_C3 = "warm gray 8";
var ink_C4 = "cool gray 7";

var inkColor = ink_C2;
inkColor = inkColor.split(" ");

var inkColor_Final = 0;

if (inkColor_Final === 0) {
	inkColor_Final = singleWord(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Bright(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Medium(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Violet(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Purple(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Orange(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Green(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Grays(inkColor);
}

if (inkColor_Final === 0) {
	inkColor_Final = Blacks(inkColor);
}

function singleWord(n) {
	for (i = 0; i < n.length; i++) {
		switch (n[i]) {
			case "dark":
				return "PANTONE Dark Blue C";
				break;

			case "magenta":
				return "PANTONE Magenta 0521 C";
				break;

			case "pink":
				return "PANTONE Pink C";
				break;

			case "reflex":
				return "PANTONE Reflex Blue C";
				break;

			case "rhodamine":
				return "PANTONE Rhodamine Red C";
				break;

			case "rubine":
				return "PANTONE Rubine Red C";
				break;

			case "0961":
				return "PANTONE Black 0961 C";
				break;

			case "072":
				return "PANTONE Blue 072 C";
				break;

			case "0821":
				return "PANTONE Blue 0821 C";
				break;

			case "0921":
				return "PANTONE Green 0921 C";
				break;

			case "0521":
				return "PANTONE Magenta 0521 C";
				break;

			case "032":
				return "PANTONE Red 032 C";
				break;

			case "021":
				return "PANTONE Red C";
				break;

			case "0331":
				return "PANTONE Red 0331 C";
				break;

			default:
				return 0;
		}
	}
}

function Grays(n) {
	for (t = 0; t < n.length; t++) {
		if (n[t] === "gray" || n[t] === "grey") {
			for (r = 0; r < n.length; r++) {
				if (n[r] === "warm") {
					var hotel = "Warm Gray ";
				}

				if (n[r] === "cool") {
					var hotel = "Cool Gray ";
				}
			}
			var grayNumbers = [
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
			for (s = 0; s < grayNumbers.length; s++) {
				if (n[r] === grayNumbers[s]) {
					alert(hotel);
					return "PANTONE " + hotel + grayNumbers[s] + " C"; // Warm Gray 8
				}
			}
		}
	}
}

function Blacks(n) {
	for (i = 0; i < n.length; i++) {
		if (n[i] === "black") {
			for (y = 0; y < n.length; y++) {
				switch (n[y]) {
					case "0961":
						return "PANTONE Black 0961 C";
						break;

					case "neutral":
						return "PANTONE Neutral Black C";
						break;

					case "2":
						return "PANTONE Black 2 C";
						break;

					case "3":
						return "PANTONE Black 3 C";
						break;

					case "4":
						return "PANTONE Black 4 C";
						break;

					case "5":
						return "PANTONE Black 5 C";
						break;

					case "6":
						return "PANTONE Black 6 C";
						break;

					case "7":
						return "PANTONE Black 7 C";
						break;

					default:
						return "PANTONE Black C";
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
				switch (n[y]) {
					case "yellow":
						return "PANTONE Medium Yellow C";
						break;

					case "purple":
						return "PANTONE Medium Purple C";
						break;

					case "blue":
						return "PANTONE Medium Blue C";
						break;

					default:
						return 0;
				}
			}
		}
	}
}

function Bright(n) {
	for (i = 0; i < n.length; i++) {
		//null is not an object
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
						return 0;
				}
			}
		}
	}
}

alert(inkColor_Final);