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