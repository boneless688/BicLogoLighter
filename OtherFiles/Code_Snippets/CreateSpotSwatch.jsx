/**********************************************************

ADOBE SYSTEMS INCORPORATED 
Copyright 2005-2010 Adobe Systems Incorporated 
All Rights Reserved 

NOTICE:  Adobe permits you to use, modify, and 
distribute this file in accordance with the terms
of the Adobe license agreement accompanying it.  
If you have received this file from a source 
other than Adobe, then your use, modification,
or distribution of it requires the prior 
written permission of Adobe. 

*********************************************************/

/**********************************************************
 
CreateSpotSwatch.jsx

DESCRIPTION

Create a new spot color swatch in the general swatch group
and apply a tint of the new spot swatch to a new path item.
 
**********************************************************/

var docRef = app.documents.add(DocumentColorSpace.CMYK);

var spotName = "CreateSpotSwatch";

// Create CMYKColor
var cmykColor = new CMYKColor();
var c = prompt("Enter the Cyan percentage.");
var m = prompt("Enter the Magenta percentage.");
var y = prompt("Enter the Yellow percentage.");
var k = prompt("Enter the Black percentage.");
cmykColor.cyan = c;
cmykColor.magenta = m;
cmykColor.yellow = y;
cmykColor.black = k;

// Create Spot
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = spotName;

// Create new SpotColor using Spot created above and apply a 50% tint
var spotColor = new SpotColor();
spotColor.tint = 100; // 50% tint
spotColor.spot = spot;

// Apply the tinted spot swatch to a new path item
var pathRef = docRef.pathItems.rectangle (400, 200, 200, 100, false);
pathRef.filled = true;
pathRef.fillColor = spotColor;
pathRef.stroked = true;