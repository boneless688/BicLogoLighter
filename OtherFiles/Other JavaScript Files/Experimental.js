var ink_A1 = "116 athletic gold"
var ink_A2 = "black 6"

function splitArray(input) {
	var inkSplit = input.trim()
	inkSplit = inkSplit.toLowerCase()
	return inkSplit.split(" ")
}

var user = splitArray(ink_A2)

var finalName

function odd(input) {
	var oddList = [
		"white",
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
	]
	for (o = 0; o < oddList.length; o++) {
		for (i = 0; i < input.length; i++) {
			if (input[i] === oddList[o]) {
				var swatchName = input[i]
				if (swatchName === "bright") {
					swatchName = "Pantone Bright Red C"
				} else if (swatchName === "072") {
					swatchName = "Pantone Blue 072 C"
				} else if (swatchName === "0821") {
					swatchName = "Pantone Blue 0821 C"
				} else if (swatchName === "0921") {
					swatchName = "Pantone Green 0921 C"
				} else if (swatchName === "0521") {
					swatchName = "Pantone Magenta 0521 C"
				} else if (swatchName === "021") {
					swatchName = "Pantone Orange 021 C"
				} else if (swatchName === "032") {
					swatchName = "Pantone Red 032 C"
				} else if (swatchName === "012") {
					swatchName = "Pantone Yellow 012 C"
				} else if (swatchName === "0131") {
					swatchName = "Pantone Yellow 0131 C"
				} else if (swatchName === "0331") {
					swatchName = "Pantone Red 0331 C"
				} else if (swatchName === "0631") {
					swatchName = "Pantone Violet 0631 C"
				} else if (swatchName === "reflex") {
					swatchName = "Pantone Reflex Blue C"
				} else if (swatchName === "process") {
					swatchName = "Pantone Process Blue C"
				} else if (swatchName === "rhodamine") {
					swatchName = "Pantone Rhodamine Red C"
				} else if (swatchName === "violet") {
					swatchName = "Pantone Violet C"
				} else if (swatchName === "rubine") {
					swatchName = "Pantone Rubine Red C"
				} else if (swatchName === "green") {
					swatchName = "Pantone Green C"
				} else if (swatchName === "Pink") {
					swatchName = "Pantone Pink C"
				} else if (swatchName === "Yellow") {
					swatchName = "Pantone Yellow C"
				} else if (swatchName === "purple") {
					swatchName = "Pantone Purple C"
				} else if (swatchName === "white") {
					swatchName = "White"
				}
				return swatchName
			}
		}
	}
}

function black(input) {
	for (a = 0; a < input.length; a++) {
		if (input[a] === "black") {
			return "Black"
		}
	}
}






function gray(input) {
     var foxtrot
     for (i = 0; i < input.length; i++) {
       if (input[i] === "cool") {
         var foxtrot = "Pantone Cool Gray "
       }
   
       if (input[i] === "warm") {
         foxtrot = "Pantone Warm Gray "
       }
     }
   
     for (n = 0; n < 12; n++) {
       for (x = 0; x < input.length; x++) {
         if (input[x] == n) {
           return foxtrot + n
         }
       }
     }
   }






function standard(input) {
     var india = []
     for (i=0; i<input.length; i++) {
          if (input [i] != isNaN) {
india = india.push(input[i])
          }
          india = india.push(input[i])
          return india
     }
}








if (odd(user) != null) {
	finalName = odd(user)
} else {
	if (black(user) != null) {
		finalName = black(user)
	} else {
		if (gray(user) != null) {
			finalName = gray(user)
		} else {
			finalName = "Pantone " + 
		}
	}
}

console.log(finalName)
