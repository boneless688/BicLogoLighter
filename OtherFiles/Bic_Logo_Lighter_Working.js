
	/* #region      CSV file import */
	var csv_file = File(
		"C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Regular_Customers.csv"
	);
	csv_file.open("r");
	var csv = csv_file.read();
	csv_file.close();

	var alpha = csv.split("\n");
	var bravo = alpha.toString();
	var csvList = bravo.split(",");
	/* #endregion */

	//#region     Functions
	function totalItems_function() {
		var total = app.activeDocument.textFrames.getByName("Item Total");
		if (multiNumber.text === "Number") {
			total.contents = "1";
		} else {
			total.contents = multiNumber.text;
		}
	}

	function designer_function() {
		var designer = app.activeDocument.textFrames.getByName("Designer");
		designer.contents = designerList.selection.text;
		if (doubleSidedCheckbox.value === true) {
			var designerBack =
				app.activeDocument.textFrames.getByName("Designer_Back");
			designerBack.contents = designerList.selection.text;
		}
	}
	function vip_function() {
		var vipBox = app.activeDocument.layers
			.getByName("Masque")
			.groupItems.getByName("VIP");
		if (vipCheckbox.value === true || rep.vip === true) {
			vipBox.hidden = false;
		} else {
			vipBox.hidden = true;
		}
	}
	function rush_function() {
		var rushBox = app.activeDocument.layers
			.getByName("Masque")
			.groupItems.getByName("Rush");
		if (rushCheckbox.value === true) {
			rushBox.hidden = false;
		}
		if (rushCheckbox.value === false) {
			rushBox.hidden = true;
		} else {
			rushBox.hidden = false;
		}
	}
	function po_function() {
		var purchaseOrder = app.activeDocument.textFrames.getByName("PO");
		purchaseOrder.contents = poNumber_edit.text;

		if (poNumber_edit.text.length < 14) {
			purchaseOrder.textRange.characterAttributes.size = 10;
			purchaseOrder.textRange.characterAttributes.baselineShift = 0;
		}

		if (poNumber_edit.text.length > 14 && poNumber_edit.text.length < 22) {
			purchaseOrder.textRange.characterAttributes.size = 6;
			purchaseOrder.textRange.characterAttributes.baselineShift = -3;
		}

		if (poNumber_edit.text.length > 22) {
			purchaseOrder.textRange.characterAttributes.size = 4;
			purchaseOrder.textRange.characterAttributes.baselineShift = -4;
		}

		purchaseOrder.toUpperCase;

		purchaseOrder = purchaseOrder.trim();
	}

	function originalFile_function() {
		var originalFile = app.activeDocument.textFrames.getByName("Original Art");
		originalFile.contents = originalArt_edit.text;
	}
	function notes_function() {
		var notes = app.activeDocument.textFrames.getByName("Notes text");
		notes.contents = descriptionBox_edit.text + "    " + notes_edit.text;
	}
	function currentDate() {
		var currentDate = new Date();
		var date = currentDate.toDateString();
		var date_A = date.split(" ");
		var date_B =
			date_A[0] + ", " + date_A[1] + " " + date_A[2] + ", " + date_A[3];
		return date_B;
	}
	function proofDate() {
		var proofDate = app.activeDocument.textFrames.getByName("DateBox");
		proofDate.contents = currentDate();
	}
	function backDate() {
		if (doubleSidedCheckbox.value === true) {
			var dateBoxBack = app.activeDocument.textFrames.getByName("DateBox_Back");
			dateBoxBack.contents = currentDate();
		}
	}
	function ship_function() {
		var ship = app.activeDocument.textFrames.getByName("Ship Date");
		ship.contents = capitalizeSpaces(shipDate_edit.text);
	}

	function inHands_function() {
		var inHands = app.activeDocument.textFrames.getByName("In Hands Date");
		var beta = inHandsDate_edit.text.split(" ");

		var indii = beta.slice(2, beta.length);
		var calli = beta[0] + " / " + beta[1];
		indii = indii.join(" ");

		if (beta.length === 0) {
			inHands.contents = " ";
		}
		if (beta.length > 2) {
			inHands.contents = calli + "     " + capitalizeSpaces(indii);
		}

		if (beta.length === 2) {
			inHands.contents = calli;
		}
	}

	function JDE_function() {
		var jde = app.activeDocument.textFrames.getByName("jde number");
		jde.contents = jdeNumber_edit.text;
		if (doubleSidedCheckbox.value === true) {
			var jdeBack = app.activeDocument.textFrames.getByName("jde number_Back");
			jdeBack.contents = jdeNumber_edit.text;
		}
	}

	function repInfo() {
		if (
			bodyColorList.selection.index === 11 ||
			bodyColorList.selection.index === 12
		) {
			var repFront = app.activeDocument.textFrames.getByName("Rep");
			repFront.contents = rep.name + "     " + rep.email;

			var reducedRep = app.activeDocument.textFrames.getByName("Rep");
			if (repFront.contents.length > 50) {
				reducedRep.textRange.characterAttributes.size = 9;
				reducedRep.textRange.characterAttributes.baselineShift = -1;
			}

			if (doubleSidedCheckbox.value === true) {
				var repBack = app.activeDocument.textFrames.getByName("Rep_Back");
				repBack.contents = rep.name + "     " + rep.email;

				var POBack = app.activeDocument.textFrames.getByName("PO_Back");
				POBack.contents = poNumber_edit.text;
				if (POBack === null) {
					POBack.contents = webPrefix.selection.text + webNumber_edit.text;
				}
			}
		}
	}


     function capitalizeSpaces(n) {
	n = n.toLowerCase();
	n = n.split(" ");
	for (var i = 0; i < n.length; i++) {
		n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
	}
	return n.join(" ");
}
	function description(bodyColorLayer) {
		var bodyColorLayer = descriptionBox_edit.text;
		bodyColorLayer = bodyColorLayer.toLowerCase();
		bodyColorLayer = bodyColorLayer.split(" ");
		for (var i = 0; i < bodyColorLayer.length; i++) {
			bodyColorLayer[i] =
				bodyColorLayer[i].charAt(0).toUpperCase() + bodyColorLayer[i].slice(1);
		}
		return bodyColorLayer.join("");
	}
	function nineZeroes_Function() {
		var zeroArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
		var a = webNumber_edit.text.split("");
		var nineZeroes_alpha = zeroArray.concat(a);
		for (var i = 0; i < nineZeroes_alpha.length; i++) {
			if (nineZeroes_alpha.length > 9) {
				nineZeroes_alpha.shift();
			}
		}
		return nineZeroes_alpha.join("");
	}
	function capitalize(u) {
		u = u.toLowerCase();
		u = u.split(" ");
		for (var i = 0; i < u.length; i++) {
			u[i] = u[i].charAt(0).toUpperCase() + u[i].slice(1);
		}
		return u.join("");
	}

	function magento() {
		if (rep.nationality === "US") {
			return "USLOG" + nineZeroes_Function();
		} else {
			return "CAENLOG" + nineZeroes_Function();
		}
	}
	function prefix() {
		if (mockupCheckbox.value === true) return "MOCKUP";
		if (jdeNumber_edit.text.length > 0) {
			return jdeNumber_edit.text;
		} else {
			return magento();
		}
	}

	function filenameOutput() {
		if (bodyColorList.selection.index < 14) {
			var illustratorFrame = [
				"FileName",
				"A1 Screen FileName",
				"A2 Screen FileName",
				"A3 Screen FileName",
				"A4 Screen FileName",
				"C1 Screen FileName",
				"C2 Screen FileName",
				"C3 Screen FileName",
				"C4 Screen FileName",
			];

			for (i = 0; i < illustratorFrame.length; i++) {
				var filenameOutput_One = app.activeDocument.textFrames.getByName(
					illustratorFrame[i]
				);
				filenameOutput_One.contents = fileName_One;
			}
		}
	}

	function web_function() {
		var web = app.activeDocument.textFrames.getByName("Web");
		if (mockupCheckbox.value === true) {
			web.contents = " ";
		} else if (jdeNumber_edit.text.length < 1) {
			web.contents = magento();
		}
		if (web.contents.length > 17 && web.contents.length < 23) {
			web.textRange.characterAttributes.size = 7;
			web.textRange.characterAttributes.baselineShift = -2;
		}

		if (web.contents.length > 23) {
			web.textRange.characterAttributes.size = 4;
			web.textRange.characterAttributes.baselineShift = -3;
		}
	}

	function mockup_function() {
		if (mockupCheckbox.value === false) {
			app.activeDocument.layers.getByName("Mockup").visible = true;
			app.activeDocument.layers.getByName("Mockup").remove();
		} else {
			app.activeDocument.layers.getByName("Mockup").visible = true;
		}
	}

	function layerRemover() {
		var emptyLayers = [];
		getEmptyLayers(doc, emptyLayers);
		for (var i = 0; i < emptyLayers.length; i++) {
			emptyLayers[i].visible = true;
			emptyLayers[i].remove();
		}
	}


	function generic_function() {
		if (nationalityCanada.value === true && genericCheckbox.value === false) {
			app.activeDocument.groupItems.getByName(
				"Canada_GenericGroup"
			).visible = true;
			app.activeDocument.groupItems.getByName("Canada_GenericGroup").remove();
			app.activeDocument.groupItems.getByName("Canada_Group").hidden = false;
		}

		if (nationalityCanada.value === true && genericCheckbox.value === true) {
			app.activeDocument.groupItems.getByName("Canada_Group").visible = true;
			app.activeDocument.groupItems.getByName("Canada_Group").remove();
			app.activeDocument.groupItems.getByName(
				"Canada_GenericGroup"
			).visible = true;
		}

		if (nationalityUS.value === true && genericCheckbox.value === false) {
			app.activeDocument.groupItems.getByName(
				"USA_GenericGroup"
			).visible = true;
			app.activeDocument.groupItems.getByName("USA_GenericGroup").remove();
			app.activeDocument.groupItems.getByName("USA_Group").visible = true;
		}
	}

	//#endregion



//#region      ExtendScript UI Layout
var master = new Window("dialog");
master.maximumSize.height = 800;
master.maximumSize.width = 1400;

var big = master.add("panel", undefined, "");
big.alignment = "center";

var topPart = big.add("group");
topPart.orientation = "row";
topPart.maximumSize.width = 1400;

var topLeft = topPart.add("panel", undefined, " ");
topLeft.preferredSize.width = 200;

var customerInfo_outer = topLeft.add("group");
customerInfo_outer.orientation = "column";

var repName = customerInfo_outer.add("statictext", undefined, "Rep name");




/*
The length of the regular customer menu needs to be calculated from the number of entries in the CSV file.
The variable that stores the list is csvList.
*/




var cst01 =
	customer02.firstName.toString() +
	" " +
	customer02.lastName.toString() +
	"   -   " +
	customer02.company.toString();
cst01 = capitalizeSpaces(cst01);

var cst02 =
	customer03.firstName.toString() +
	" " +
	customer03.lastName.toString() +
	"   -   " +
	customer03.company.toString();
cst02 = capitalizeSpaces(cst02);

var cst03 =
	customer04.firstName.toString() +
	" " +
	customer04.lastName.toString() +
	"   -   " +
	customer04.company.toString();
cst03 = capitalizeSpaces(cst03);

var cst04 =
	customer05.firstName.toString() +
	" " +
	customer05.lastName.toString() +
	"   -   " +
	customer05.company.toString();
cst04 = capitalizeSpaces(cst04);

var cst05 =
	customer06.firstName.toString() +
	" " +
	customer06.lastName.toString() +
	"   -   " +
	customer06.company.toString();
cst05 = capitalizeSpaces(cst05);

var cst06 =
	customer07.firstName.toString() +
	" " +
	customer07.lastName.toString() +
	"   -   " +
	customer07.company.toString();
cst06 = capitalizeSpaces(cst06);

var cst07 =
	customer08.firstName.toString() +
	" " +
	customer08.lastName.toString() +
	"   -   " +
	customer08.company.toString();
cst07 = capitalizeSpaces(cst07);

var cst08 =
	customer09.firstName.toString() +
	" " +
	customer09.lastName.toString() +
	"   -   " +
	customer09.company.toString();
cst08 = capitalizeSpaces(cst08);

var cst09 =
	customer10.firstName.toString() +
	" " +
	customer10.lastName.toString() +
	"   -   " +
	customer10.company.toString();
cst09 = capitalizeSpaces(cst09);

var cst10 =
	customer11.firstName.toString() +
	" " +
	customer11.lastName.toString() +
	"   -   " +
	customer11.company.toString();
cst10 = capitalizeSpaces(cst10);

var cst11 =
	customer12.firstName.toString() +
	" " +
	customer12.lastName.toString() +
	"   -   " +
	customer12.company.toString();
cst11 = capitalizeSpaces(cst11);

var cst12 =
	customer13.firstName.toString() +
	" " +
	customer13.lastName.toString() +
	"   -   " +
	customer13.company.toString();
cst12 = capitalizeSpaces(cst12);

var cst13 =
	customer14.firstName.toString() +
	" " +
	customer14.lastName.toString() +
	"   -   " +
	customer14.company.toString();
cst13 = capitalizeSpaces(cst13);

var cst14 =
	customer15.firstName.toString() +
	" " +
	customer15.lastName.toString() +
	"   -   " +
	customer15.company.toString();
cst14 = capitalizeSpaces(cst14);

var cst15 =
	customer16.firstName.toString() +
	" " +
	customer16.lastName.toString() +
	"   -   " +
	customer16.company.toString();
cst15 = capitalizeSpaces(cst15);

var cst16 =
	customer17.firstName.toString() +
	" " +
	customer17.lastName.toString() +
	"   -   " +
	customer17.company.toString();
cst16 = capitalizeSpaces(cst16);

var cst17 =
	customer18.firstName.toString() +
	" " +
	customer18.lastName.toString() +
	"   -   " +
	customer18.company.toString();
cst17 = capitalizeSpaces(cst17);

var cst18 =
	customer19.firstName.toString() +
	" " +
	customer19.lastName.toString() +
	"   -   " +
	customer19.company.toString();
cst18 = capitalizeSpaces(cst18);

var cst19 =
	customer20.firstName.toString() +
	" " +
	customer20.lastName.toString() +
	"   -   " +
	customer20.company.toString();
cst19 = capitalizeSpaces(cst19);

var cst20 =
	customer21.firstName.toString() +
	" " +
	customer21.lastName.toString() +
	"   -   " +
	customer21.company.toString();
cst20 = capitalizeSpaces(cst20);

var cst21 =
	customer22.firstName.toString() +
	" " +
	customer22.lastName.toString() +
	"   -   " +
	customer22.company.toString();
cst21 = capitalizeSpaces(cst21);

var cst22 =
	customer23.firstName.toString() +
	" " +
	customer23.lastName.toString() +
	"   -   " +
	customer23.company.toString();
cst22 = capitalizeSpaces(cst22);

var cst23 =
	customer24.firstName.toString() +
	" " +
	customer24.lastName.toString() +
	"   -   " +
	customer24.company.toString();
cst23 = capitalizeSpaces(cst23);

var cst24 =
	customer25.firstName.toString() +
	" " +
	customer25.lastName.toString() +
	"   -   " +
	customer25.company.toString();
cst24 = capitalizeSpaces(cst24);

var cst25 =
	customer26.firstName.toString() +
	" " +
	customer26.lastName.toString() +
	"   -   " +
	customer26.company.toString();
cst25 = capitalizeSpaces(cst25);

var cst26 =
	customer27.firstName.toString() +
	" " +
	customer27.lastName.toString() +
	"   -   " +
	customer27.company.toString();
cst26 = capitalizeSpaces(cst26);

var cst27 =
	customer28.firstName.toString() +
	" " +
	customer28.lastName.toString() +
	"   -   " +
	customer28.company.toString();
cst27 = capitalizeSpaces(cst27);

var cst28 =
	customer29.firstName.toString() +
	" " +
	customer29.lastName.toString() +
	"   -   " +
	customer29.company.toString();
cst28 = capitalizeSpaces(cst28);

var cst29 =
	customer30.firstName.toString() +
	" " +
	customer30.lastName.toString() +
	"   -   " +
	customer30.company.toString();
cst29 = capitalizeSpaces(cst29);

var cst30 =
	customer31.firstName.toString() +
	" " +
	customer31.lastName.toString() +
	"   -   " +
	customer31.company.toString();
cst30 = capitalizeSpaces(cst30);

var cst31 =
	customer32.firstName.toString() +
	" " +
	customer32.lastName.toString() +
	"   -   " +
	customer32.company.toString();
cst31 = capitalizeSpaces(cst31);

var cst32 =
	customer33.firstName.toString() +
	" " +
	customer33.lastName.toString() +
	"   -   " +
	customer33.company.toString();
cst32 = capitalizeSpaces(cst32);

var cst33 =
	customer34.firstName.toString() +
	" " +
	customer34.lastName.toString() +
	"   -   " +
	customer34.company.toString();
cst33 = capitalizeSpaces(cst33);

var cst34 =
	customer35.firstName.toString() +
	" " +
	customer35.lastName.toString() +
	"   -   " +
	customer35.company.toString();
cst34 = capitalizeSpaces(cst34);

var cst35 =
	customer36.firstName.toString() +
	" " +
	customer36.lastName.toString() +
	"   -   " +
	customer36.company.toString();
cst35 = capitalizeSpaces(cst35);

var cst36 =
	customer37.firstName.toString() +
	" " +
	customer37.lastName.toString() +
	"   -   " +
	customer37.company.toString();
cst36 = capitalizeSpaces(cst36);

var cst37 =
	customer38.firstName.toString() +
	" " +
	customer38.lastName.toString() +
	"   -   " +
	customer38.company.toString();
cst37 = capitalizeSpaces(cst37);

var cst38 =
	customer39.firstName.toString() +
	" " +
	customer39.lastName.toString() +
	"   -   " +
	customer39.company.toString();
cst38 = capitalizeSpaces(cst38);

var cst39 =
	customer40.firstName.toString() +
	" " +
	customer40.lastName.toString() +
	"   -   " +
	customer40.company.toString();
cst39 = capitalizeSpaces(cst39);

var cst40 =
	customer41.firstName.toString() +
	" " +
	customer41.lastName.toString() +
	"   -   " +
	customer41.company.toString();
cst40 = capitalizeSpaces(cst40);

var cst41 =
	customer42.firstName.toString() +
	" " +
	customer42.lastName.toString() +
	"   -   " +
	customer42.company.toString();
cst41 = capitalizeSpaces(cst41);

var cst42 =
	customer43.firstName.toString() +
	" " +
	customer43.lastName.toString() +
	"   -   " +
	customer43.company.toString();
cst42 = capitalizeSpaces(cst42);

var cst43 =
	customer44.firstName.toString() +
	" " +
	customer44.lastName.toString() +
	"   -   " +
	customer44.company.toString();
cst43 = capitalizeSpaces(cst43);

var cst44 =
	customer45.firstName.toString() +
	" " +
	customer45.lastName.toString() +
	"   -   " +
	customer45.company.toString();
cst44 = capitalizeSpaces(cst44);

var cst45 =
	customer46.firstName.toString() +
	" " +
	customer46.lastName.toString() +
	"   -   " +
	customer46.company.toString();
cst45 = capitalizeSpaces(cst45);

var cst46 =
	customer47.firstName.toString() +
	" " +
	customer47.lastName.toString() +
	"   -   " +
	customer47.company.toString();
cst46 = capitalizeSpaces(cst46);

var cst47 =
	customer48.firstName.toString() +
	" " +
	customer48.lastName.toString() +
	"   -   " +
	customer48.company.toString();
cst47 = capitalizeSpaces(cst47);

var cst48 =
	customer49.firstName.toString() +
	" " +
	customer49.lastName.toString() +
	"   -   " +
	customer49.company.toString();
cst48 = capitalizeSpaces(cst48);

var cst49 =
	customer50.firstName.toString() +
	" " +
	customer50.lastName.toString() +
	"   -   " +
	customer50.company.toString();
cst49 = capitalizeSpaces(cst49);

var regulars = customerInfo_outer.add("dropdownlist", undefined, [
	"Regulars",
	cst01,
	cst02,
	cst03,
	cst04,
	cst05,
	cst06,
	cst07,
	cst08,
	cst09,
	cst10,
	cst11,
	cst12,
	cst13,
	cst14,
	cst15,
	cst16,
	cst17,
	cst18,
	cst19,
	cst20,
	cst21,
	cst22,
	cst23,
	cst24,
	cst25,
	cst26,
	cst27,
	cst28,
	cst29,
	cst30,
	cst31,
	cst32,
	cst33,
	cst34,
	cst35,
	cst36,
	cst37,
	cst38,
	cst39,
	cst30,
	cst31,
	cst32,
	cst33,
	cst34,
	cst35,
	cst36,
	cst37,
	cst38,
	cst39,
	cst40,
	cst31,
	cst32,
	cst33,
	cst34,
	cst35,
	cst36,
	cst37,
	cst38,
	cst39,
	cst40,
	cst41,
	cst42,
	cst43,
	cst44,
	cst45,
	cst46,
	cst47,
	cst48,
	cst49,
	cst50,
]);

regulars.selection = 0;

var repNameCustom = customerInfo_outer.add("statictext", undefined, "Rep name");
var repNameEdit = customerInfo_outer.add("edittext", undefined, "");
repNameEdit.characters = 20;
repNameEdit.active = true;
//repNameEdit.text = "Custom name"

var repEmail = customerInfo_outer.add("statictext", undefined, "Rep Email");
var repEmail_Edit = customerInfo_outer.add("edittext", undefined, "");
repEmail_Edit.characters = 20;
//repEmail_Edit.text = "custom email"

var companyGroup = customerInfo_outer.add("panel", undefined, "");
companyGroup.orientation = "row";

var company_A = companyGroup.add("statictext", undefined, "Company");
var company_A_Edit = companyGroup.add("edittext", undefined, "");
company_A_Edit.characters = 10;
//company_A_Edit.text = "custom company"

var vipCheckbox = companyGroup.add("checkbox", undefined, "VIP");

var designerLeft = topLeft.add("panel", undefined, " ");
designerLeft.orientation = "row";

var designerLabel = designerLeft.add("statictext", undefined, "Designer");
var designerList = designerLeft.add("dropdownlist", undefined, [
	"MMiraglia",
	"GVisgaitis",
	"JBavitz",
]);
designerList.characters = 10;
designerList.selection = 2;

var topRight = topPart.add("panel", undefined, "");
topRight.orientation = "column";
topRight.preferredSize.height = 200;

var orderOne = topRight.add("group");
orderOne.orientation = "row";

var nationalityGroup = orderOne.add("panel", undefined, "");
nationalityGroup.orientation = "column";

var nationalityUS = nationalityGroup.add("radiobutton", undefined, "US");
nationalityUS.orientation = "column";
nationalityUS.value = false;
var nationalityCanada = nationalityGroup.add(
	"radiobutton",
	undefined,
	"Canadian"
);

var jdeNumber = orderOne.add("statictext", undefined, "JDE Number");
var jdeNumber_edit = orderOne.add("edittext", undefined, "");
jdeNumber_edit.characters = 7;
//jdeNumber_edit.text = "6187745";

var poNumber = orderOne.add("statictext", undefined, "PO Number");
var poNumber_edit = orderOne.add("edittext", undefined, "");
poNumber_edit.characters = 10;
poNumber_edit.text = "m e b 21125-8 a b c";

var webSpacer = orderOne.add("panel", undefined, " ");

var webArea = orderOne.add("panel", undefined, "Web Number");
webArea.orientation = "row";

var webNumber_edit = webArea.add("edittext", undefined, "");
webNumber_edit.characters = 10;
//webNumber_edit.text = "85"

var orderThree = topRight.add("panel", undefined, "");
orderThree.orientation = "row";
orderThree.alignment = "left";

var inHandsDate = orderThree.add("statictext", undefined, "In-hands Date");
var inHandsDate_edit = orderThree.add("edittext", undefined, "");
inHandsDate_edit.characters = 10;
//inHandsDate_edit.text = "11 24 firm"

var shipDate = orderThree.add("statictext", undefined, "Ship Date");
var shipDate_edit = orderThree.add("edittext", undefined, "");
shipDate_edit.characters = 10;
//shipDate_edit.text = "10/13"

var rushCheckbox = orderThree.add("checkbox", undefined, "Rush order");

var spacer = orderThree.add("group");

var multiPanel = orderThree.add("panel", undefined, "");
var multi = multiPanel.add("checkbox", undefined, "Multiple Items");
var multiNumber = multiPanel.add("edittext", undefined, "Number");
var multiSub = multiPanel.add("panel", undefined, "");
multiSub.orientation = "row";
multiSub.alignChildren = "left";
var multi_itemNumber = multiSub.add("radiobutton", undefined, "_01");
multi_itemNumber.value = true;
var multi_bodyColor = multiSub.add("radiobutton", undefined, "Body Color");

var orderFour = topRight.add("group");
orderFour.orientation = "row";

var instructionsCustomer_title = orderFour.add(
	"panel",
	undefined,
	"Instructions - Customer"
);
var instructionsCustomer_edit = instructionsCustomer_title.add(
	"edittext",
	undefined,
	"",
	{
		multiline: true,
	}
);
instructionsCustomer_edit.minimumSize.width = 200;
instructionsCustomer_edit.minimumSize.height = 50;
//instructionsCustomer_edit.text = "Instructions from the customer.";

var instructionsCustomerService_title = orderFour.add(
	"panel",
	undefined,
	"Instructions - Customer Service"
);
var instructionsCustomerService_edit = instructionsCustomerService_title.add(
	"edittext",
	undefined,
	"",
	{
		multiline: true,
	}
);
instructionsCustomerService_edit.minimumSize.width = 200;
instructionsCustomerService_edit.minimumSize.height = 50;
//instructionsCustomerService_edit.text = "Instructions from Customer Service.";

var instructionsProduction_title = orderFour.add(
	"panel",
	undefined,
	"Instructions - Production"
);
var instructionsProduction_edit = instructionsProduction_title.add(
	"edittext",
	undefined,
	"",
	{
		multiline: true,
	}
);
instructionsProduction_edit.minimumSize.width = 200;
//instructionsProduction_edit.text = "Instructions from Production.";

var bottom = big.add("group");
bottom.orientation = "column";

var itemLeft = bottom.add("group");
itemLeft.orientation = "row";

var itemTopRow = itemLeft.add("panel", undefined, "");
itemTopRow.orientation = "row";

var descriptionSide = itemTopRow.add("group");
descriptionSide.orientation = "column";

var colors = itemTopRow.add("group");
colors.margins = [40, 0, 0, 0];

var bodyColor = descriptionSide.add("panel", undefined, "Body Color");
bodyColor.orientation = "row";

var bodyColorList = bodyColor.add("dropdownlist", undefined, [
	"Black", //0
	"White", //1
	"Green", //2
	"Blue", //3
	"Red", //4
	"Pink", //5
	"LightBlue", //6
	"ForestGreen", //7
	"Orange", //8
	"Yellow", //9
	"-", //10
	"DarkAssort", //11
	"LightAssort", //12
	"-", //13
	"Sleeve", //14
	"-", //15
	"360", //16
]);

bodyColorList.selection = 3;

var mockup = bodyColor.add("panel", undefined);
var mockupCheckbox = bodyColor.add("checkbox", undefined, "Mockup");
var genericCheckbox = bodyColor.add("checkbox", undefined, "Generic");

mockupCheckbox.value = false;
genericCheckbox.value = false;

var doubleSided = bodyColor.add("panel", undefined);
var doubleSidedCheckbox = bodyColor.add(
	"checkbox",
	undefined,
	"2 Sided Assortment"
);

doubleSidedCheckbox.value = false;

var descriptionBox = descriptionSide.add(
	"statictext",
	undefined,
	"Description"
);
var descriptionBox_edit = descriptionSide.add("edittext", undefined, "");
descriptionBox_edit.characters = 20;
descriptionBox_edit.text = "the only thing";

var autoSave = descriptionSide.add("checkbox", undefined, "Save the PDF?");
autoSave.value = false;

var spacerBox = descriptionSide.add("statictext", undefined, "");

var originalArt = descriptionSide.add("statictext", undefined, "Original Art");
var originalArt_edit = descriptionSide.add("edittext", undefined, "");
originalArt_edit.characters = 20;
originalArt_edit.text = "original art";

var notes = descriptionSide.add("statictext", undefined, "Notes");
var notes_edit = descriptionSide.add("edittext", undefined, "");
notes_edit.characters = 20;
notes_edit.text = "These are the notes.";

var inkMaster = colors.add("group");
inkMaster.orientation = "column";
var inkColors_1 = inkMaster.add("group");
var inkColors_2 = inkMaster.add("group");

var inkColors_A = inkColors_1.add("panel", undefined, "");
inkColors_A.preferredSize = [400, 100];
inkColors_A.orientation = "row";

var inkBox_Master_A1 = inkColors_A.add("panel", undefined, "Screen A1");
inkBox_Master_A1.orientation = "column";
inkBox_Master_A1.margins = [10, 10, 5, 10];
var ink_A1 = inkBox_Master_A1.add("edittext", undefined, "");
ink_A1.characters = 10;
ink_A1.text = "white";
var ink_A1_Double = inkBox_Master_A1.add("checkbox", undefined, "Double hit");

var inkBox_Master_A2 = inkColors_A.add("panel", undefined, "Screen A2");
inkBox_Master_A2.orientation = "column";
var ink_A2 = inkBox_Master_A2.add("edittext", undefined, "");
ink_A2.characters = 10;
ink_A2.text = "reflex blue";
var ink_A2_Double = inkBox_Master_A2.add("checkbox", undefined, "Double hit");

var inkBox_Master_A3 = inkColors_A.add("panel", undefined, "Screen A3");
inkBox_Master_A3.orientation = "column";
var ink_A3 = inkBox_Master_A3.add("edittext", undefined, "");
ink_A3.characters = 10;
//ink_A3.text = "black"
var ink_A3_Double = inkBox_Master_A3.add("checkbox", undefined, "Double hit");

var inkBox_Master_A4 = inkColors_A.add("panel", undefined, "Screen A4");
inkBox_Master_A4.orientation = "column";
var ink_A4 = inkBox_Master_A4.add("edittext", undefined, "");
ink_A4.characters = 10;
//ink_A4.text = "white"
var ink_A4_Double = inkBox_Master_A4.add("checkbox", undefined, "Double hit");

var inkColors_C = inkColors_2.add("panel", undefined, "");
inkColors_C.preferredSize = [400, 100];
inkColors_C.orientation = "row";

var inkBox_Master_C1 = inkColors_C.add("panel", undefined, "Screen C1");
inkBox_Master_C1.orientation = "column";
var ink_C1 = inkBox_Master_C1.add("edittext", undefined, "");
ink_C1.characters = 10;
//ink_C1.text = "process blue"
var ink_C1_Double = inkBox_Master_C1.add("checkbox", undefined, "Double hit");

var inkBox_Master_C2 = inkColors_C.add("panel", undefined, "Screen C2");
inkBox_Master_C2.orientation = "column";
var ink_C2 = inkBox_Master_C2.add("edittext", undefined, "");
ink_C2.characters = 10;
//ink_C2.text = "211 pink"
var ink_C2_Double = inkBox_Master_C2.add("checkbox", undefined, "Double hit");

var inkBox_Master_C3 = inkColors_C.add("panel", undefined, "Screen C3");
inkBox_Master_C3.orientation = "column";
var ink_C3 = inkBox_Master_C3.add("edittext", undefined, "");
ink_C3.characters = 10;
//ink_C3.text = "213 red"
var ink_C3_Double = inkBox_Master_C3.add("checkbox", undefined, "Double hit");

var inkBox_Master_C4 = inkColors_C.add("panel", undefined, "Screen C4");
inkBox_Master_C4.orientation = "column";
var ink_C4 = inkBox_Master_C4.add("edittext", undefined, "");
ink_C4.characters = 10;
//ink_C4.text = "571 teal"
var ink_C4_Double = inkBox_Master_C4.add("checkbox", undefined, "Double hit");

/*/* #region  OKAY / Cancel buttons */
var buttonGroup = master.add("panel");
buttonGroup.orientation = "row";
var okButton = buttonGroup.add("button", undefined, "OK");
var cancelButton = buttonGroup.add("button", undefined, "Cancel");

/* #endregion */

master.show();

//#endregion

if (
	jdeNumber_edit.text.length > 0 ||
	webNumber_edit.text.length > 0 ||
	mockupCheckbox.value === true
) {
	//#region     OPEN TEMPLATE FILE
	// OPEN TEMPLATES WITH RELATIVE PATHS

	if (mockupCheckbox.value == true) {
		webNumber_edit.text = "0";
	}
	if (
		bodyColorList.selection.index === 11 ||
		bodyColorList.selection.index === 12
	) {
		if (doubleSidedCheckbox.value === false) {
			var _scriptPath = $.fileName;
			var _separater = "";

			//Code to get separater based on OS
			if ($.os.toLowerCase().indexOf("mac") != -1) {
				_separater = "/";
			} else if ($.os.toLowerCase().indexOf("window") != -1) {
				_separater = "\\";
			}
			var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
			app.open(File(_path + "/Templates/Proof_Template_Assorted_1Side.ait"));
		} else {
			var _scriptPath = $.fileName;
			var _separater = "";

			//Code to get separater based on OS
			if ($.os.toLowerCase().indexOf("mac") != -1) {
				_separater = "/";
			} else if ($.os.toLowerCase().indexOf("window") != -1) {
				_separater = "\\";
			}
			var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
			app.open(File(_path + "/Templates/Proof_Template_Assorted_2Side.ait"));
		}
	} else if (bodyColorList.selection.index === 14) {
		var _scriptPath = $.fileName;
		var _separater = "";

		//Code to get separater based on OS
		if ($.os.toLowerCase().indexOf("mac") != -1) {
			_separater = "/";
		} else if ($.os.toLowerCase().indexOf("window") != -1) {
			_separater = "\\";
		}
		var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
		app.open(File(_path + "/Templates/Proof_Template_Sleeve.ait"));
	} else {
		var _scriptPath = $.fileName;
		var _separater = "";
		//Code to get separater based on OS
		if ($.os.toLowerCase().indexOf("mac") != -1) {
			_separater = "/";
		} else if ($.os.toLowerCase().indexOf("window") != -1) {
			_separater = "\\";
		}
		var _path = _scriptPath.substring(0, _scriptPath.lastIndexOf(_separater));
		app.open(File(_path + "/Templates/Proof_Template_Standard.ait"));
	}

	//#endregion

	//#region     THIS CREATES THE   .TRIM   FUNCTION
	String.prototype.trim = function () {
		return this.replace(/^\s+/, "").replace(/\s+$/, "");
	};
	//#endregion

	//#region     This section sets the double sided checkbox to off if the body color selection is not an assortment.
	if (bodyColorList.selection.index < 10 || bodyColorList.selection == 14) {
		doubleSidedCheckbox.value = false;
	}
	//#endregion

	//#region     CUSTOMER INFO
	var repName = app.activeDocument.textFrames.getByName("Rep");
	var repNameSignature =
		app.activeDocument.textFrames.getByName("RepName_Signature");
	var companyName = app.activeDocument.textFrames.getByName("Company");




alert(csvList)




	/* #region       Create the customer object with 6 properties. */
	function Customer() {
		var echo = csvList.slice(0, 6);
		csvList.splice(0, 6);
		echo = new CustomerObject(
			echo[0],
			echo[1],
			echo[2],
			echo[3],
			echo[4],
			echo[5]
		);
		return echo;
	}

	function CustomerObject(
		firstName,
		lastName,
		email,
		company,
		nationality,
		vip
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.company = company;
		this.nationality = nationality;
		this.vip = vip;
	}
	/* #endregion */

	var customer01 = Customer();
	var customer02 = Customer();
	var customer03 = Customer();
	var customer04 = Customer();
	var customer05 = Customer();
	var customer06 = Customer();
	var customer07 = Customer();
	var customer08 = Customer();
	var customer09 = Customer();
	var customer10 = Customer();
	var customer11 = Customer();
	var customer12 = Customer();
	var customer13 = Customer();
	var customer14 = Customer();
	var customer15 = Customer();
	var customer16 = Customer();
	var customer17 = Customer();
	var customer18 = Customer();
	var customer19 = Customer();
	var customer21 = Customer();
	var customer22 = Customer();
	var customer23 = Customer();
	var customer24 = Customer();
	var customer25 = Customer();
	var customer26 = Customer();
	var customer27 = Customer();
	var customer28 = Customer();
	var customer29 = Customer();
	var customer31 = Customer();
	var customer32 = Customer();
	var customer33 = Customer();
	var customer34 = Customer();
	var customer35 = Customer();
	var customer36 = Customer();
	var customer37 = Customer();
	var customer38 = Customer();
	var customer39 = Customer();
	var customer41 = Customer();
	var customer42 = Customer();
	var customer43 = Customer();
	var customer44 = Customer();
	var customer45 = Customer();
	var customer46 = Customer();
	var customer47 = Customer();
	var customer48 = Customer();
	var customer49 = Customer();
	var customer50 = Customer();

	if (nationalityCanada.value === true) {
		rep.nationality = "Canada";
	}

	if (nationalityUS.value === true) {
		rep.nationality = "US";
	}

	if (nationalityCanada.value === true) {
		rep.nationality = "Canada";
	}

	repName.contents = rep.name;
	repNameSignature = rep.name;
	companyName = rep.company;

	var repEmail = app.activeDocument.textFrames.getByName("Email");
	repEmail.contents = rep.email;

	if (repEmail.contents.length > 30 && repEmail_Edit.characters.length < 45) {
		var emailBox = app.activeDocument.textFrames.getByName("Email");

		emailBox.textRange.characterAttributes.size = 7;
		emailBox.textRange.characterAttributes.baselineShift = 0;
	}

	if (repEmail.contents.length > 45) {
		emailBox.textRange.characterAttributes.size = 5;
		emailBox.textRange.characterAttributes.baselineShift = 0;
	}

	var repNameOutput = app.activeDocument.textFrames.getByName("Rep");
	repNameOutput.contents = rep.name;

	var repNameSignature =
		app.activeDocument.textFrames.getByName("RepName_Signature");
	repNameSignature.contents = rep.name;

	var companyName = app.activeDocument.textFrames.getByName("Company");
	companyName.contents = rep.company;

	//#endregion

	//#region     NATIONALITY

	if (nationalityCanada.value === true || rep.nationality === "Canada") {
		nationalityCanada.value = true;
		nationalityUS.value = false;
	}

	if (nationalityUS.value === true || rep.nationality === "US") {
		nationalityCanada.value = false;
		nationalityUS.value = true;
		nationalityCanada.value = false;
	}

	if (nationalityUS.value === false && nationalityCanada.value === false) {
		app.activeDocument.layers.getByName("Canada").visible = true;
		app.activeDocument.layers.getByName("Canada").remove();
		app.activeDocument.layers.getByName("USA").visible = true;
	}

	if (nationalityCanada.value === true) {
		app.activeDocument.layers.getByName("USA").visible = true;
		app.activeDocument.layers.getByName("USA").remove();
		app.activeDocument.layers.getByName("Canada").visible = true;
	}

	if (nationalityUS.value === true) {
		app.activeDocument.layers.getByName("Canada").visible = true;
		app.activeDocument.layers.getByName("Canada").remove();
		app.activeDocument.layers.getByName("USA").visible = true;
	}
	//#endregion

	//#region     INK COLORS
	//#region    If the order uses the standard template, then the body and ink color code is run. If it isn't, then the code is bypassed.

	function neonInk(inkString, bravo) {
		//The group name in Illustrator is A1_Warning, etc.
		var neonInks = ["801", "802", "803", "804", "805", "806", "807"];
		var fileName_One = inkString.search(" ");
		var numberOnly = inkString.substring(0, fileName_One);
		for (i = 0; i < neonInks.length; i++) {
			if (numberOnly === neonInks[i]) {
				var neon = app.activeDocument.groupItems.getByName(bravo);
				neon.hidden = false;
			}
		}
	}

	if (bodyColorList.selection.index < 14) {
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

		var newWhite = new CMYKColor();
		newWhite.black = 2;
		newWhite.cyan = 2;
		newWhite.magenta = 2;
		newWhite.yellow = 2;

		var spotWhite = app.activeDocument.spots.add();
		spotWhite.colorType = ColorModel.SPOT;
		spotWhite.name = "Spot White";
		spotWhite.color = newWhite;
		var newSpotColor = new SpotColor();
		newSpotColor.spot = spotWhite;

		var newBlack = new CMYKColor();
		newBlack.black = 100;
		newBlack.cyan = 1;
		newBlack.magenta = 1;
		newBlack.yellow = 1;

		var spotBlack = app.activeDocument.spots.add();
		spotBlack.colorType = ColorModel.SPOT;
		spotBlack.name = "Spot Black";
		spotBlack.color = newBlack;
		var newSpotBlack = new SpotColor();
		newSpotBlack.spot = spotBlack;

		var standardInkNumber = [
			"114",
			"116",
			"1345",
			"1545",
			"172",
			"186",
			"202",
			"205",
			"208",
			"211",
			"316",
			"327",
			"341",
			"355",
			"281",
			"293",
			"2587",
			"424",
			"872",
			"877",
		];

		//#region   Screen counter array
		var digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		var screenCounter_A = [];
		var screenCounter_C = [];
		//#endregion

		//#region                                REMOVES THE WHITE SPACES FROM INK NAMES FROM BEFORE AND AFTER THE TEXT
		ink_A1.text = ink_A1.text.trim();
		ink_A1.text = ink_A1.text.toLowerCase();
		ink_A2.text = ink_A2.text.trim();
		ink_A2.text = ink_A2.text.toLowerCase();
		ink_A3.text = ink_A3.text.trim();
		ink_A3.text = ink_A3.text.toLowerCase();
		ink_A4.text = ink_A4.text.trim();
		ink_A4.text = ink_A4.text.toLowerCase();
		ink_C1.text = ink_C1.text.trim();
		ink_C1.text = ink_C1.text.toLowerCase();
		ink_C2.text = ink_C2.text.trim();
		ink_C2.text = ink_C2.text.toLowerCase();
		ink_C3.text = ink_C3.text.trim();
		ink_C3.text = ink_C3.text.toLowerCase();
		ink_C4.text = ink_C4.text.trim();
		ink_C4.text = ink_C4.text.toLowerCase();

		//#endregion

		//#endregion

		/* THESE ARE ALL THE PMS INK COLORS WHOSE NAMES DO NOT BEGIN WITH A NUMBER. 
Actual names:
'PANTONE Black 0961 C', 'PANTONE Black 2 C', 'Pantone Black 3 C', 'Pantone Black 4 C', 'Pantone Black 5 C', 'Pantone Black 6 C', 'Pantone Black 7 C', 'Pantone Black C', 'Pantone Blue 072 C', Pantone Blue 0821 C', 'Pantone Bright Red C', 'Pantone Dark Blue C', 'Pantone Green 0921 C', 'Pantone Green C', 'Pantone Magenta 0521 C', 'Pantone Medium Purple C', 'Pantone Orange 021 C', 'Pantone Pink C', 'Pantone Purple C', 'Pantone Red 032 C', 'Pantone Red 0331 C', 'Pantone Reflex Blue', 'Pantone Rhodamine Red C', 'Pantone Rubine Red C', 'Pantone Violet 0631 C', 'Pantone Violet C', 'Pantone Warm Red C', 'Pantone Yellow 012 C', Pantone Yellow 0131 C', 'Pantone Yellow C', 'Pantone Cool Gray 1 C', 'Pantone Cool Gray 2 C', 'Pantone Cool Gray 3 C', 'Pantone Cool Gray 4 C', 'Pantone Cool Gray 5 C', 'Pantone Cool Gray 6 C', 'Pantone Cool Gray 7 C', 'Pantone Cool Gray 8 C', 'Pantone Cool Gray 9 C', 'Pantone Cool Gray 10 C', 'Pantone Cool Gray 11 C', 'Pantone Warm Gray 1 C', 'Pantone Warm Gray 2 C', 'Pantone Warm Gray 3 C', 'Pantone Warm Gray 4 C', 'Pantone Warm Gray 5 C', 'Pantone Warm Gray 6 C', 'Pantone Warm Gray 7 C', 'Pantone Warm Gray 8 C', 'Pantone Warm Gray 9 C', 'Pantone Warm Gray 10 C', 'Pantone Cool Gray 11 C']


['Black 0961', 'Black 2', 'Black 3', 'Black 4', 'Black 5', 'Black 6', 'Black 7', 'Black', 'Blue 072', 'Blue 0821', 'Bright Red', 'Dark Blue', 'Green 0921', 'Green', 'Magenta 0521', 'Medium Purple', 'Orange 021', 'Pink', 'Purple', 'Red 032', 'Red 0331', 'Reflex Blue', 'Rhodamine Red', 'Rubine Red', 'Violet 0631', 'Violet', 'Warm Red', 'Yellow 012', 'Yellow 0131', 'Yellow', 'Cool Gray 1', 'Cool Gray 2', 'Cool Gray 3', 'Cool Gray 4', 'Cool Gray 5', 'Cool Gray 6', 'Cool Gray 7', 'Cool Gray 8', 'Cool Gray 9', 'Cool Gray 10', 'Cool Gray 11', 'Warm Gray 1', 'Warm Gray 2', 'Warm Gray 3', 'Warm Gray 4', 'Warm Gray 5', 'Warm Gray 6', 'Warm Gray 7', 'Warm Gray 8', 'Warm Gray 9', 'Warm Gray 10', 'Cool Gray 11']
*/

		var inksNamedArray = [
			"blue 072",
			"magenta 0521",
			"orange 021",
			"red 032",
			"red 0331",
		];
		for (i = 0; i < inksNamedArray.length; i++) {
			if (ink_A1.text === inksNamedArray[i]) {
				item_A1_name.contents =
					"PANTONE" + capitalizeSpaces(inksNamedArray[i]) + " " + "C";
				break;
			} else {
				if (ink_A1.text.length > 0) {
					var pmsTest_A1 = false;
					for (var index = 0; index < ink_A1.text.length; index++) {
						for (x = 0; x < digitArray.length; x++) {
							if (ink_A1.text[index] === digitArray[x]) {
								pmsTest_A1 = true;
								break;
							}
						}
					}
				}
			}
		}

		//#region     A1
		if (ink_A1.text.length > 0) {
			var CMYK_White = new CMYKColor();
			CMYK_White.black = 0;
			CMYK_White.cyan = 0;
			CMYK_White.magenta = 0;
			CMYK_White.yellow = 0;

			item_A1_frame.fillColor = CMYK_White;

			var pmsTest_A1 = false;
			for (var index = 0; index < ink_A1.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_A1.text[index] === digitArray[i]) {
						pmsTest_A1 = true;
						break;
					}

					if (ink_A1.text[index] === "0821") {
						item_A1_name.contents = "PANTONE Blue 0821 C";
						item_A1_screenName.contents = "PANTONE Blue 0821 C";
						item_A1_color.fillColor = "PANTONE Blue 0821 C";
						item_A1_chip.fillColor = "PANTONE Blue 0821 C";
						item_A1_frame.strokeWidth = 1;
					} else {
					}
				}
			}

			if (pmsTest_A1 === true) {
				var gray = capitalizeSpaces(ink_A1.text);
				var grayArray = gray.split(" ");
				if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
					var grayName =
						"PANTONE " +
						grayArray[0] +
						" " +
						grayArray[1] +
						" " +
						grayArray[2] +
						" C";

					item_A1_name.contents = grayName;
					item_A1_screenName.contents = grayName;
					item_A1_color.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
					item_A1_chip.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
				} else {
					var kilo = ink_A1.text.search(" ");
					var pmsNumber_alpha = ink_A1.text.substring(0, kilo);
					var mike = ink_A1.text.substring(kilo);
					pmsNumber_alpha = pmsNumber_alpha.replace(/,/g, "");
					item_A1_name.contents =
						"PANTONE" +
						" " +
						pmsNumber_alpha +
						" " +
						"C" +
						"  " +
						capitalizeSpaces(mike);
					item_A1_screenName.contents =
						pmsNumber_alpha + " " + capitalizeSpaces(mike);
					item_A1_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumber_alpha + " " + "C"
					).color;
					item_A1_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumber_alpha + " " + "C"
					).color;
				}
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_A1 === false) {
			if (ink_A1.text === "white") {
				item_A1_name.contents = "White";
				item_A1_screenName.contents = "White";
				item_A1_color.fillColor = newSpotColor;
				item_A1_chip.fillColor = newSpotColor;
				item_A1_frame.strokeWidth = 1;
				item_A1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else if (ink_A1.text === "black") {
				item_A1_name.contents = "Black";
				item_A1_screenName.contents = "Black";
				item_A1_color.fillColor = newSpotBlack;
				item_A1_chip.fillColor = newSpotBlack;
				item_A1_frame.strokeWidth = 1;
				item_A1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else if (ink_A1.text === "Yellow") {
				item_A1_name.contents = "PANTONE Yellow C";
				item_A1_screenName.contents = "PANTONE Yellow C";
				item_A1_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A1_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A1_frame.strokeWidth = 1;
				item_A1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else {
				item_A1_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C";
				item_A1_screenName.contents = capitalizeSpaces(ink_A1.text);
				item_A1_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
				).color;
				item_A1_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A1.text) + " " + "C"
				).color;
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_A1.text = capitalizeSpaces(ink_A1.text);
		if (ink_A1.text === "Reflex Blue" || ink_A1.text === "Process Blue") {
			item_A1_frame.strokeWidth = 1;
			item_A1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumber_alpha === standardInkNumber[i]) {
				item_A1_frame.strokeWidth = 1;
				item_A1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}
		}

		neonInk(ink_A1.text, "A1_Warning");

		if (ink_A1.text.length > 0) {
			screenCounter_A.push("One");
			item_A1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_A1_Double.value === true) {
			var A1_DoubleBox = app.activeDocument.groupItems.getByName("Double_A1");
			A1_DoubleBox.hidden = false;
		}

		//#endregion

		//#region     A2
		if (ink_A2.text.length > 0) {
			item_A2_frame.fillColor = CMYK_White;

			var pmsTest_A2 = false;
			for (var index = 0; index < ink_A2.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_A2.text[index] === digitArray[i]) {
						pmsTest_A2 = true;
						break;
					}
				}
			}
		}

		if (pmsTest_A2 === true) {
			var gray = capitalizeSpaces(ink_A2.text);
			var grayArray = gray.split(" ");
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C";
				item_A2_name.contents = grayName;
				item_A2_screenName.contents = grayName;
				item_A2_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color;
				item_A2_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color;
			} else {
				var kilo = ink_A2.text.search(" ");
				var pmsNumber_A2 = ink_A2.text.substring(0, kilo);
				var mike = ink_A2.text.substring(kilo);
				pmsNumber_A2 = pmsNumber_A2.replace(/,/g, "");
				item_A2_name.contents =
					"PANTONE" +
					" " +
					pmsNumber_A2 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike);
				item_A2_screenName.contents =
					pmsNumber_A2 + " " + capitalizeSpaces(mike);
				item_A2_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumber_A2 + " " + "C"
				).color;
				item_A2_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumber_A2 + " " + "C"
				).color;
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_A2 === false) {
			if (ink_A2.text === "white") {
				item_A2_name.contents = "White";
				item_A2_screenName.contents = "White";
				item_A2_color.fillColor = newSpotColor;
				item_A2_chip.fillColor = newSpotColor;
				item_A2_frame.strokeWidth = 1;
			} else if (ink_A2.text === "black") {
				item_A2_name.contents = "Black";
				item_A2_screenName.contents = "Black";
				item_A2_color.fillColor = newSpotBlack;
				item_A2_chip.fillColor = newSpotBlack;
				item_A2_frame.strokeWidth = 1;
			} else if (ink_A2.text === "Yellow") {
				item_A2_name.contents = "PANTONE Yellow C";
				item_A2_screenName.contents = "PANTONE Yellow C";
				item_A2_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A2_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A2_frame.strokeWidth = 1;
			} else {
				item_A2_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C";
				item_A2_screenName.contents = capitalizeSpaces(ink_A2.text);
				item_A2_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
				).color;
				item_A2_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A2.text) + " " + "C"
				).color;
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_A2.text = capitalizeSpaces(ink_A2.text);
		if (ink_A2.text === "Reflex Blue" || ink_A2.text === "Process Blue") {
			item_A2_frame.strokeWidth = 1;
			item_A2_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		neonInk(ink_A2.text, "A2_Warning");

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumber_A2 === standardInkNumber[i]) {
				item_A2_frame.strokeWidth = 1;
				item_A2_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}
		}
		if (ink_A2.text.length > 0) {
			screenCounter_A.push("Two");
			item_A2_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_A2_Double.value === true) {
			var A2_DoubleBox = app.activeDocument.groupItems.getByName("Double_A2");
			A2_DoubleBox.hidden = false;
		}
		//#endregion

		//#region     A3
		if (ink_A3.text.length > 0) {
			item_A3_frame.fillColor = CMYK_White;

			var pmsTest_A3 = false;
			for (var index = 0; index < ink_A3.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_A3.text[index] === digitArray[i]) {
						pmsTest_A3 = true;
						break;
					}
				}
			}
		}

		if (pmsTest_A3 === true) {
			var gray = capitalizeSpaces(ink_A3.text);
			var grayArray = gray.split(" ");
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C";
				item_A3_name.contents = grayName;
				item_A3_screenName.contents = grayName;
				item_A3_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color;
				item_A3_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color;
			} else {
				var kilo = ink_A3.text.search(" ");
				var pmsNumberA3 = ink_A3.text.substring(0, kilo);
				var mike = ink_A3.text.substring(kilo);
				pmsNumberA3 = pmsNumberA3.replace(/,/g, "");
				item_A3_name.contents =
					"PANTONE" +
					" " +
					pmsNumberA3 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike);
				item_A3_screenName.contents =
					pmsNumberA3 + " " + capitalizeSpaces(mike);
				item_A3_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberA3 + " " + "C"
				).color;
				item_A3_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberA3 + " " + "C"
				).color;
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_A3 === false) {
			if (ink_A3.text === "white") {
				item_A3_name.contents = "White";
				item_A3_screenName.contents = "White";
				item_A3_color.fillColor = newSpotColor;
				item_A3_chip.fillColor = newSpotColor;
				item_A3_frame.strokeWidth = 1;
			} else if (ink_A3.text === "black") {
				item_A3_name.contents = "Black";
				item_A3_screenName.contents = "Black";
				item_A3_color.fillColor = newSpotBlack;
				item_A3_chip.fillColor = newSpotBlack;
				item_A3_frame.strokeWidth = 1;
				item_A3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else if (ink_A3.text === "Yellow") {
				item_A3_name.contents = "PANTONE Yellow C";
				item_A3_screenName.contents = "PANTONE Yellow C";
				item_A3_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A3_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A3_frame.strokeWidth = 1;
				item_A3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else {
				item_A3_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C";
				item_A3_screenName.contents = capitalizeSpaces(ink_A3.text);
				item_A3_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
				).color;
				item_A3_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A3.text) + " " + "C"
				).color;
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_A3.text = capitalizeSpaces(ink_A3.text);
		if (ink_A3.text === "Reflex Blue" || ink_A3.text === "Process Blue") {
			item_A3_frame.strokeWidth = 1;
			item_A3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		neonInk(ink_A3.text, "A3_Warning");

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumberA3 === standardInkNumber[i]) {
				item_A3_frame.strokeWidth = 1;
				item_A3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}
		}
		if (ink_A3.text.length > 0) {
			screenCounter_A.push("Three");
			item_A3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_A3_Double.value === true) {
			var A3_DoubleBox = app.activeDocument.groupItems.getByName("Double_A3");
			A3_DoubleBox.hidden = false;
		}
		//#endregion

		//#region     A4
		if (ink_A4.text.length > 0) {
			item_A4_frame.fillColor = CMYK_White;

			var pmsTest_A4 = false;
			for (var index = 0; index < ink_A4.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_A4.text[index] === digitArray[i]) {
						pmsTest_A4 = true;
						break;
					}
				}
			}
		}

		if (pmsTest_A4 === true) {
			var gray = capitalizeSpaces(ink_A4.text);
			var grayArray = gray.split(" ");
			if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
				var grayName =
					"PANTONE" +
					" " +
					grayArray[0] +
					" " +
					grayArray[1] +
					" " +
					grayArray[2] +
					" " +
					"C";
				item_A4_name.contents = grayName;
				item_A4_screenName.contents = grayName;
				item_A4_color.fillColor =
					app.activeDocument.swatches.getByName(grayName).color;
				item_A4_chip.fillColor =
					app.activeDocument.swatches.getByName(grayName).color;
			} else {
				var kilo = ink_A4.text.search(" ");
				var pmsNumberA4 = ink_A4.text.substring(0, kilo);
				var mike = ink_A4.text.substring(kilo);
				pmsNumberA4 = pmsNumberA4.replace(/,/g, "");
				item_A4_name.contents =
					"PANTONE" +
					" " +
					pmsNumberA4 +
					" " +
					"C" +
					"  " +
					capitalizeSpaces(mike);
				item_A4_screenName.contents =
					pmsNumberA4 + " " + capitalizeSpaces(mike);
				item_A4_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberA4 + " " + "C"
				).color;
				item_A4_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + pmsNumberA4 + " " + "C"
				).color;
			}
		}

		// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
		if (pmsTest_A4 === false) {
			if (ink_A4.text === "white") {
				item_A4_name.contents = "White";
				item_A4_screenName.contents = "White";
				item_A4_color.fillColor = newSpotColor;
				item_A4_chip.fillColor = newSpotColor;
				item_A4_frame.strokeWidth = 1;
			} else if (ink_A4.text === "black") {
				item_A4_name.contents = "Black";
				item_A4_screenName.contents = "Black";
				item_A4_color.fillColor = newSpotBlack;
				item_A4_chip.fillColor = newSpotBlack;
				item_A4_frame.strokeWidth = 1;
				item_A4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else if (ink_A4.text === "Yellow") {
				item_A4_name.contents = "PANTONE Yellow C";
				item_A4_screenName.contents = "PANTONE Yellow C";
				item_A4_color.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A4_chip.fillColor =
					app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
				item_A4_frame.strokeWidth = 1;
				item_A4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			} else {
				item_A4_name.contents =
					"PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C";
				item_A4_screenName.contents = capitalizeSpaces(ink_A4.text);
				item_A4_color.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
				).color;
				item_A4_chip.fillColor = app.activeDocument.swatches.getByName(
					"PANTONE" + " " + capitalizeSpaces(ink_A4.text) + " " + "C"
				).color;
			}
		}

		// This block makes the stroke of the box thicker if the ink is a standard color.
		ink_A4.text = capitalizeSpaces(ink_A4.text);
		if (ink_A4.text === "Reflex Blue" || ink_A4.text === "Process Blue") {
			item_A4_frame.strokeWidth = 1;
			item_A4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		neonInk(ink_A4.text, "A4_Warning");

		for (i = 0; i < standardInkNumber.length; i++) {
			if (pmsNumberA4 === standardInkNumber[i]) {
				item_A4_frame.strokeWidth = 1;
				item_A4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}
		}
		if (ink_A4.text.length > 0) {
			screenCounter_A.push("Four");
			item_A4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_A4_Double.value === true) {
			var A4_DoubleBox = app.activeDocument.groupItems.getByName("Double_A4");
			A4_DoubleBox.hidden = false;
		}
		//#endregion

		//#region     C1
		if (ink_C1.text.length > 0) {
			item_C1_frame.fillColor = CMYK_White;

			var pmsTest_C1 = false;
			for (var index = 0; index < ink_C1.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_C1.text[index] === digitArray[i]) {
						pmsTest_C1 = true;
						break;
					}
				}
			}

			if (pmsTest_C1 === true) {
				var gray = capitalizeSpaces(ink_C1.text);
				var grayArray = gray.split(" ");
				if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
					var grayName =
						"PANTONE" +
						" " +
						grayArray[0] +
						" " +
						grayArray[1] +
						" " +
						grayArray[2] +
						" " +
						"C";
					item_C1_name.contents = grayName;
					item_C1_screenName.contents = grayName;
					item_C1_color.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
					item_C1_chip.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
				} else {
					var kilo = ink_C1.text.search(" ");
					var pmsNumberC1 = ink_C1.text.substring(0, kilo);
					var mike = ink_C1.text.substring(kilo);
					pmsNumberC1 = pmsNumberC1.replace(/,/g, "");
					item_C1_name.contents =
						"PANTONE" +
						" " +
						pmsNumberC1 +
						" " +
						"C" +
						"  " +
						capitalizeSpaces(mike);
					item_C1_screenName.contents =
						pmsNumberC1 + " " + capitalizeSpaces(mike);
					item_C1_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC1 + " " + "C"
					).color;
					item_C1_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC1 + " " + "C"
					).color;
				}
			}

			// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
			if (pmsTest_C1 === false) {
				if (ink_C1.text === "white") {
					item_C1_name.contents = "White";
					item_C1_screenName.contents = "White";
					item_C1_color.fillColor = newSpotColor;
					item_C1_chip.fillColor = newSpotColor;
					item_C1_frame.strokeWidth = 1;
				} else if (ink_C1.text === "black") {
					item_C1_name.contents = "Black";
					item_C1_screenName.contents = "Black";
					item_C1_color.fillColor = newSpotBlack;
					item_C1_chip.fillColor = newSpotBlack;
					item_C1_frame.strokeWidth = 1;
					item_C1_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else if (ink_C1.text === "Yellow") {
					item_C1_name.contents = "PANTONE Yellow C";
					item_C1_screenName.contents = "PANTONE Yellow C";
					item_C1_color.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C1_chip.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C1_frame.strokeWidth = 1;
					item_C1_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else {
					item_C1_name.contents =
						"PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C";
					item_C1_screenName.contents = capitalizeSpaces(ink_C1.text);
					item_C1_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
					).color;
					item_C1_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C1.text) + " " + "C"
					).color;
				}
			}

			// This block makes the stroke of the box thicker if the ink is a standard color.
			ink_C1.text = capitalizeSpaces(ink_C1.text);
			if (ink_C1.text === "Reflex Blue" || ink_C1.text === "Process Blue") {
				item_C1_frame.strokeWidth = 1;
				item_C1_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}

			neonInk(ink_C1.text, "C1_Warning");

			for (i = 0; i < standardInkNumber.length; i++) {
				if (pmsNumberC1 === standardInkNumber[i]) {
					item_C1_frame.strokeWidth = 1;
					item_C1_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				}
			}
		}

		if (ink_C1.text.length < 1) {
			app.activeDocument.layers.getByName("Art - C").remove();
		}
		if (ink_C1.text.length > 0) {
			screenCounter_C.push(1);
			item_C1_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_C1_Double.value === true) {
			var C1_DoubleBox = app.activeDocument.groupItems.getByName("Double_C1");
			C1_DoubleBox.hidden = false;
		}
		//#endregion

		//#region     C2
		if (ink_C2.text.length > 0) {
			item_C2_frame.fillColor = CMYK_White;

			var pmsTest_C2 = false;
			for (var index = 0; index < ink_C2.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_C2.text[index] === digitArray[i]) {
						pmsTest_C2 = true;
						break;
					}
				}
			}

			if (pmsTest_C2 === true) {
				var gray = capitalizeSpaces(ink_C2.text);
				var grayArray = gray.split(" ");
				if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
					var grayName =
						"PANTONE" +
						" " +
						grayArray[0] +
						" " +
						grayArray[1] +
						" " +
						grayArray[2] +
						" " +
						"C";
					item_C2_name.contents = grayName;
					item_C2_screenName.contents = grayName;
					item_C2_color.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
					item_C2_chip.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
				} else {
					var kilo = ink_C2.text.search(" ");
					var pmsNumberC2 = ink_C2.text.substring(0, kilo);
					var mike = ink_C2.text.substring(kilo);
					pmsNumberC2 = pmsNumberC2.replace(/,/g, "");
					item_C2_name.contents =
						"PANTONE" +
						" " +
						pmsNumberC2 +
						" " +
						"C" +
						"  " +
						capitalizeSpaces(mike);
					item_C2_screenName.contents =
						pmsNumberC2 + " " + capitalizeSpaces(mike);
					item_C2_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC2 + " " + "C"
					).color;
					item_C2_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC2 + " " + "C"
					).color;
				}
			}

			// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
			if (pmsTest_C2 === false) {
				if (ink_C2.text === "white") {
					item_C2_name.contents = "White";
					item_C2_screenName.contents = "White";
					item_C2_color.fillColor = newSpotColor;
					item_C2_chip.fillColor = newSpotColor;
					item_C2_frame.strokeWidth = 1;
					item_C2_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else if (ink_C2.text === "black") {
					item_C2_name.contents = "Black";
					item_C2_screenName.contents = "Black";
					item_C2_color.fillColor = newSpotBlack;
					item_C2_chip.fillColor = newSpotBlack;
					item_C2_frame.strokeWidth = 1;
				} else if (ink_C2.text === "Yellow") {
					item_C2_name.contents = "PANTONE Yellow C";
					item_C2_screenName.contents = "PANTONE Yellow C";
					item_C2_color.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C2_chip.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C2_frame.strokeWidth = 1;
					item_C2_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else {
					item_C2_name.contents =
						"PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C";
					item_C2_screenName.contents = capitalizeSpaces(ink_C2.text);
					item_C2_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
					).color;
					item_C2_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C2.text) + " " + "C"
					).color;
				}
			}

			// This block makes the stroke of the box thicker if the ink is a standard color.
			ink_C2.text = capitalizeSpaces(ink_C2.text);
			if (ink_C2.text === "Reflex Blue" || ink_C2.text === "Process Blue") {
				item_C2_frame.strokeWidth = 1;
				item_C2_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}

			neonInk(ink_C2.text, "C2_Warning");

			for (i = 0; i < standardInkNumber.length; i++) {
				if (pmsNumberC2 === standardInkNumber[i]) {
					item_C2_frame.strokeWidth = 1;
					item_C2_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				}
			}
		}
		if (ink_C2.text.length > 0) {
			screenCounter_C.push(1);
			item_C2_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_C2_Double.value === true) {
			var C2_DoubleBox = app.activeDocument.groupItems.getByName("Double_C2");
			C2_DoubleBox.hidden = false;
		}
		//#endregion

		//#region     C3
		if (ink_C3.text.length > 0) {
			item_C3_frame.fillColor = CMYK_White;

			var pmsTest_C3 = false;
			for (var index = 0; index < ink_C3.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_C3.text[index] === digitArray[i]) {
						pmsTest_C3 = true;
						break;
					}
				}
			}

			if (pmsTest_C3 === true) {
				var gray = capitalizeSpaces(ink_C1.text);
				var grayArray = gray.split(" ");
				if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
					var grayName =
						"PANTONE" +
						" " +
						grayArray[0] +
						" " +
						grayArray[1] +
						" " +
						grayArray[2] +
						" " +
						"C";
					item_C3_name.contents = grayName;
					item_C3_screenName.contents = grayName;
					item_C3_color.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
					item_C3_chip.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
				} else {
					var kilo = ink_C3.text.search(" ");
					var pmsNumberC3 = ink_C3.text.substring(0, kilo);
					var mike = ink_C3.text.substring(kilo);
					pmsNumberC3 = pmsNumberC3.replace(/,/g, "");
					item_C3_name.contents =
						"PANTONE" +
						" " +
						pmsNumberC3 +
						" " +
						"C" +
						"  " +
						capitalizeSpaces(mike);
					item_C3_screenName.contents =
						pmsNumberC3 + " " + capitalizeSpaces(mike);
					item_C3_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC3 + " " + "C"
					).color;
					item_C3_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC3 + " " + "C"
					).color;
				}
			}

			// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
			if (pmsTest_C3 === false) {
				if (ink_C3.text === "white") {
					item_C3_name.contents = "White";
					item_C3_screenName.contents = "White";
					item_C3_color.fillColor = newSpotColor;
					item_C3_chip.fillColor = newSpotColor;
					item_C3_frame.strokeWidth = 1;
					item_C3_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else if (ink_C3.text === "black") {
					item_C3_name.contents = "Black";
					item_C3_screenName.contents = "Black";
					item_C3_color.fillColor = newSpotBlack;
					item_C3_chip.fillColor = newSpotBlack;
					item_C3_frame.strokeWidth = 1;
					item_C3_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else if (ink_C3.text === "Yellow") {
					item_C3_name.contents = "PANTONE Yellow C";
					item_C3_screenName.contents = "PANTONE Yellow C";
					item_C3_color.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C3_chip.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C3_frame.strokeWidth = 1;
					item_C3_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else {
					item_C3_name.contents =
						"PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C";
					item_C3_screenName.contents = capitalizeSpaces(ink_C3.text);
					item_C3_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
					).color;
					item_C3_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C3.text) + " " + "C"
					).color;
				}
			}

			// This block makes the stroke of the box thicker if the ink is a standard color.
			ink_C3.text = capitalizeSpaces(ink_C3.text);
			if (ink_C3.text === "Reflex Blue" || ink_C3.text === "Process Blue") {
				item_C3_frame.strokeWidth = 1;
				item_C3_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}

			neonInk(ink_C3.text, "C3_Warning");

			for (i = 0; i < standardInkNumber.length; i++) {
				if (pmsNumberC3 === standardInkNumber[i]) {
					item_C3_frame.strokeWidth = 1;
					item_C3_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				}
			}
		}
		if (ink_C3.text.length > 0) {
			screenCounter_C.push(1);
			item_C3_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (ink_C3_Double.value === true) {
			var C3_DoubleBox = app.activeDocument.groupItems.getByName("Double_C3");
			C3_DoubleBox.hidden = false;
		}
		//#endregion

		//#region     C4
		function bodyColor_function() {
			var bodyColorAlpha = app.activeDocument.layers
				.getByName("Body Colors")
				.layers.getByName(bodyColorList.selection.text);
			bodyColorAlpha.visible = true;
		}
		if (ink_C4.text.length > 0) {
			item_C4_frame.fillColor = CMYK_White;

			var pmsTest_C4 = false;
			for (var index = 0; index < ink_C4.text.length; index++) {
				for (i = 0; i < digitArray.length; i++) {
					if (ink_C4.text[index] === digitArray[i]) {
						pmsTest_C4 = true;
						break;
					}
				}
			}

			if (pmsTest_C4 === true) {
				var gray = capitalizeSpaces(ink_C4.text);
				var grayArray = gray.split(" ");
				if (grayArray[0] === "Cool" || grayArray[0] === "Warm") {
					var grayName =
						"PANTONE" +
						" " +
						grayArray[0] +
						" " +
						grayArray[1] +
						" " +
						grayArray[2] +
						" " +
						"C";
					item_C4_name.contents = grayName;
					item_C4_screenName.contents = grayName;
					item_C4_color.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
					item_C4_chip.fillColor =
						app.activeDocument.swatches.getByName(grayName).color;
				} else {
					var kilo = ink_C4.text.search(" ");
					var pmsNumberC4 = ink_C4.text.substring(0, kilo);
					var mike = ink_C4.text.substring(kilo);
					pmsNumberC4 = pmsNumberC4.replace(/,/g, "");
					item_C4_name.contents =
						"PANTONE" +
						" " +
						pmsNumberC4 +
						" " +
						"C" +
						"  " +
						capitalizeSpaces(mike);
					item_C4_screenName.contents =
						pmsNumberC4 + " " + capitalizeSpaces(mike);
					item_C4_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC4 + " " + "C"
					).color;
					item_C4_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + pmsNumberC4 + " " + "C"
					).color;
				}
			}

			// If the first word is a WORD, then this block will run. This inserts text into the illustrator swatch box and the screen box and adds the fill color to both the big and small color boxes.
			if (pmsTest_C4 === false) {
				if (ink_C4.text === "white") {
					item_C4_name.contents = "White";
					item_C4_screenName.contents = "White";
					item_C4_color.fillColor = newSpotColor;
					item_C4_chip.fillColor = newSpotColor;
					item_C4_frame.strokeWidth = 1;
					item_C4_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else if (ink_C4.text === "black") {
					item_C4_name.contents = "Black";
					item_C4_screenName.contents = "Black";
					item_C4_color.fillColor = newSpotBlack;
					item_C4_chip.fillColor = newSpotBlack;
					item_C4_frame.strokeWidth = 1;
					item_C4_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else if (ink_C4.text === "Yellow") {
					item_C4_name.contents = "PANTONE Yellow C";
					item_C4_screenName.contents = "PANTONE Yellow C";
					item_C4_color.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C4_chip.fillColor =
						app.activeDocument.swatches.getByName("PANTONE Yellow C").color;
					item_C4_frame.strokeWidth = 1;
					item_C4_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				} else {
					item_C4_name.contents =
						"PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C";
					item_C4_screenName.contents = capitalizeSpaces(ink_C4.text);
					item_C4_color.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
					).color;
					item_C4_chip.fillColor = app.activeDocument.swatches.getByName(
						"PANTONE" + " " + capitalizeSpaces(ink_C4.text) + " " + "C"
					).color;
				}
			}

			// This block makes the stroke of the box thicker if the ink is a standard color.
			ink_C4.text = capitalizeSpaces(ink_C4.text);
			if (ink_C4.text === "Reflex Blue" || ink_C4.text === "Process Blue") {
				item_C4_frame.strokeWidth = 1;
				item_C4_frame.strokeColor =
					app.activeDocument.swatches.getByName("Black").color;
			}

			neonInk(ink_C4.text, "C4_Warning");

			for (i = 0; i < standardInkNumber.length; i++) {
				if (pmsNumberC4 === standardInkNumber[i]) {
					item_C4_frame.strokeWidth = 1;
					item_C4_frame.strokeColor =
						app.activeDocument.swatches.getByName("Black").color;
				}
			}
		}
		if (ink_C4.text.length > 0) {
			screenCounter_C.push(1);
			item_C4_frame.strokeColor =
				app.activeDocument.swatches.getByName("Black").color;
		}

		if (bodyColorList.selection.index < 11) {
			bodyColor_function();
		}

		if (ink_C4_Double.value === true) {
			var C4_DoubleBox = app.activeDocument.groupItems.getByName("Double_C4");
			C4_DoubleBox.hidden = false;
		}
		//#endregion
	}
	//#endregion                      END   INK COLORS

	//#region     ORIGINAL ART
	var item_OriginalArt_A = "original art side A";
	var item_originalArt_C = "original art side C";
	//#endregion



	//#region     FILENAME

	var fileName_One;

	if (bodyColorList.selection < 10) {
		fileName_One = prefix() + "_" + capitalize(descriptionBox_edit.text) + "_A";
		if (multi.value === true && multi_bodyColor.value === true) {
			fileName_One =
				prefix() +
				"_" +
				capitalize(descriptionBox_edit.text) +
				"_" +
				bodyColorList.selection.text +
				"_01_A";
		}
		if (multi.value === true && multi_itemNumber.value === true) {
			fileName_One =
				prefix() + "_" + capitalize(descriptionBox_edit.text) + "_01_A";
		}
	}

	if (bodyColorList.selection == 11) {
		if (multi.value === false) {
			fileName_One =
				prefix() + "_" + capitalize(descriptionBox_edit.text) + "_DarkAssort_A";
		} else {
			fileName_One =
				prefix() +
				"_" +
				capitalize(descriptionBox_edit.text) +
				"_DarkAssort_01_A";

			var reducedSize = app.activeDocument.textFrames.getByName("FileName");
			reducedSize.textRange.characterAttributes.size = 6;
			reducedSize.textRange.characterAttributes.baselineShift = -3;
		}
	}

	if (bodyColorList.selection == 12) {
		//Light Assort
		if (multi.value === false) {
			fileName_One =
				prefix() +
				"_" +
				capitalize(descriptionBox_edit.text) +
				"_LightAssort_01_A";
		} else {
			fileName_One =
				prefix() +
				"_" +
				capitalize(descriptionBox_edit.text) +
				"_LightAssort_01_A";
			var reducedSize = app.activeDocument.textFrames.getByName("FileName");
			reducedSize.textRange.characterAttributes.size = 6;
			reducedSize.textRange.characterAttributes.baselineShift = -3;
		}
	}

	if (bodyColorList.selection == 14) {
		// Sleeve
		if (multi.value === true) {
			fileName_One =
				"SLEEVE_" +
				prefix() +
				"_" +
				capitalize(descriptionBox_edit.text) +
				"_01_A";
		} else {
			fileName_One =
				"SLEEVE_" +
				prefix() +
				"_" +
				capitalize(descriptionBox_edit.text) +
				"_A";
		}
	} else if (bodyColorList.selection == 14 && multi.value === true) {
		fileName_One =
			"SLEEVE_" +
			prefix() +
			"_" +
			capitalize(descriptionBox_edit.text) +
			"_01_A";
	}

	//#endregion

	//#region     FUNCTION CALLS
	repInfo();
	totalItems_function();
	generic_function();
	mockup_function();
	vip_function();
	rush_function();
	po_function();
	JDE_function();
	web_function();
	inHands_function();
	ship_function();
	originalFile_function();
	notes_function();
	designer_function();
	proofDate();
	backDate();
	filenameOutput();

	//#endregion

	//#region     DARK ASSORTMENT DEFAULT INK COLOR
	//If no color is entered in the A1 ink color field and a dark assortment is selected from the body color list, the ink color is set to white ink.
	if (
		bodyColorList.selection.index === 11 &&
		doubleSidedCheckbox.value === false
	) {
		if (ink_A1.text.length < 1) {
			var lightAssortInk = app.activeDocument.textFrames.getByName(
				"A1 Screen Ink Color"
			);
			lightAssortInk.contents = "White";
			item_A1_name.contents = "White";
			item_A1_screenName.contents = "White";
			item_A1_color.fillColor = newSpotColor;
			item_A1_chip.fillColor = newSpotColor;
			item_A1_frame.strokeWidth = 1;
			item_A1_frame.strokeColor = "Spot Black";
		}
	}
	//#endregion

	//#region     LIGHT ASSORTMENT DEFAULT INK COLOR
	//If no color is entered in the A1 ink color field and a light assortment is selected from the body color list, the ink color is set to black ink.

	if (
		bodyColorList.selection.index === 12 &&
		doubleSidedCheckbox.value === false
	)
		if (ink_A1.text.length < 1) {
			var lightAssortInk = app.activeDocument.textFrames.getByName(
				"A1 Screen Ink Color"
			);
			lightAssortInk.contents = "Black";
			item_A1_name.contents = "Black";
			item_A1_screenName.contents = "Black";
			item_A1_color.fillColor = newBlack;
			item_A1_chip.fillColor = newBlack;
			item_A1_frame.strokeWidth = 1;

			if (ink_A2.text.length < 1) {
				app.activeDocument.groupItems.getByName("Screen2").remove();
			}
			if (ink_A3.text.length < 1) {
				app.activeDocument.groupItems.getByName("Screen3").remove();
			}
			if (ink_A4.text.length < 1) {
				app.activeDocument.groupItems.getByName("Screen4").remove();
			}
		}

	//#endregion

	//#region     DOUBLE SIDED ASSORTMENTS

	if (doubleSidedCheckbox.value == true) {
		//If the Double Sided checkbox is checked, this block runs.
		var A1_Name_Back = app.activeDocument.textFrames.getByName("A1_Name_Back");
		var A2_Name_Back = app.activeDocument.textFrames.getByName("A2_Name_Back");
		var A3_Name_Back = app.activeDocument.textFrames.getByName("A3_Name_Back");
		var A4_Name_Back = app.activeDocument.textFrames.getByName("A4_Name_Back");

		var C1_Name_Back = app.activeDocument.textFrames.getByName("C1_Name_Back");
		var C2_Name_Back = app.activeDocument.textFrames.getByName("C2_Name_Back");
		var C3_Name_Back = app.activeDocument.textFrames.getByName("C3_Name_Back");
		var C4_Name_Back = app.activeDocument.textFrames.getByName("C4_Name_Back");

		var A1_Color_Back = app.activeDocument.pathItems.getByName("A1_Color_Back");
		var A2_Color_Back = app.activeDocument.pathItems.getByName("A2_Color_Back");
		var A3_Color_Back = app.activeDocument.pathItems.getByName("A3_Color_Back");
		var A4_Color_Back = app.activeDocument.pathItems.getByName("A4_Color_Back");

		var C1_Color_Back = app.activeDocument.pathItems.getByName("C1_Color_Back");
		var C2_Color_Back = app.activeDocument.pathItems.getByName("C2_Color_Back");
		var C3_Color_Back = app.activeDocument.pathItems.getByName("C3_Color_Back");
		var C4_Color_Back = app.activeDocument.pathItems.getByName("C4_Color_Back");

		var A1_Frame_Back = app.activeDocument.pathItems.getByName("A1_Frame_Back");
		var A2_Frame_Back = app.activeDocument.pathItems.getByName("A2_Frame_Back");
		var A3_Frame_Back = app.activeDocument.pathItems.getByName("A3_Frame_Back");
		var A4_Frame_Back = app.activeDocument.pathItems.getByName("A4_Frame_Back");

		var C1_Frame_Back = app.activeDocument.pathItems.getByName("C1_Frame_Back");
		var C2_Frame_Back = app.activeDocument.pathItems.getByName("C2_Frame_Back");
		var C3_Frame_Back = app.activeDocument.pathItems.getByName("C3_Frame_Back");
		var C4_Frame_Back = app.activeDocument.pathItems.getByName("C4_Frame_Back");

		A1_Name_Back.contents = ink_A1.text;
		A2_Name_Back.contents = ink_A2.text;
		A3_Name_Back.contents = ink_A3.text;
		A4_Name_Back.contents = ink_A4.text;

		C1_Name_Back.contents = ink_C1.text;
		C2_Name_Back.contents = ink_C2.text;
		C3_Name_Back.contents = ink_C3.text;
		C4_Name_Back.contents = ink_C4.text;

		A1_Color_Back.fillColor = item_A1_color.fillColor;
		A2_Color_Back.fillColor = item_A2_color.fillColor;
		A3_Color_Back.fillColor = item_A3_color.fillColor;
		A4_Color_Back.fillColor = item_A4_color.fillColor;

		C1_Color_Back.fillColor = item_C1_color.fillColor;
		C2_Color_Back.fillColor = item_C2_color.fillColor;
		C3_Color_Back.fillColor = item_C3_color.fillColor;
		C4_Color_Back.fillColor = item_C4_color.fillColor;

		A1_Frame_Back.strokeWidth = item_A1_frame.strokeWidth;
		A2_Frame_Back.strokeWidth = item_A2_frame.strokeWidth;
		A3_Frame_Back.strokeWidth = item_A3_frame.strokeWidth;
		A4_Frame_Back.strokeWidth = item_A4_frame.strokeWidth;

		A1_Frame_Back.strokeColor = item_A1_frame.strokeColor;
		A2_Frame_Back.strokeColor = item_A2_frame.strokeColor;
		A3_Frame_Back.strokeColor = item_A3_frame.strokeColor;
		A4_Frame_Back.strokeColor = item_A4_frame.strokeColor;

		C1_Frame_Back.strokeWidth = item_C1_frame.strokeWidth;
		C2_Frame_Back.strokeWidth = item_C2_frame.strokeWidth;
		C3_Frame_Back.strokeWidth = item_C3_frame.strokeWidth;
		C4_Frame_Back.strokeWidth = item_C4_frame.strokeWidth;

		C1_Frame_Back.strokeColor = item_C1_frame.strokeColor;
		C2_Frame_Back.strokeColor = item_C2_frame.strokeColor;
		C3_Frame_Back.strokeColor = item_C3_frame.strokeColor;
		C4_Frame_Back.strokeColor = item_C4_frame.strokeColor;

		app.activeDocument.textFrames.getByName("FileName_Back").contents =
			fileName_One;
		app.activeDocument.textFrames.getByName("jde number_Back").contents =
			jdeNumber_edit.text;
		app.activeDocument.textFrames.getByName("PO_Back").contents =
			poNumber_edit.text;
		app.activeDocument.textFrames.getByName("Web_Back").contents =
			webNumber_edit.text;

		var repBack = app.activeDocument.textFrames.getByName("Rep_Back");
		repBack.contents = rep.name + "     " + rep.email;

		var companyBack = app.activeDocument.textFrames.getByName("Company_Back");
		companyBack.contents = rep.company;

		var repSignatureBack = app.activeDocument.textFrames.getByName(
			"RepName_Signature_Back"
		);
		repSignatureBack.contents = rep.name;

		var shipDateBack =
			app.activeDocument.textFrames.getByName("Ship Date_Back");
		shipDateBack.contents = shipDate_edit.text;

		var inHandsDateBack =
			app.activeDocument.textFrames.getByName("In Hands Date_Back");
		inHandsDateBack.contents = inHandsDate_edit.text;

		var repEmail_Back = app.activeDocument.textFrames.getByName("Email_Back");
		repEmail.contents = rep.email;
		repEmail_Back.contents = rep.email;
	}
	//#endregion

	//#region     SLEEVE

	if (bodyColorList.selection.index === 14) {
		var alphaFileName = app.activeDocument.textFrames.getByName("FileName");
		alphaFileName.contents = fileName_One;
	}

	//#endregion

	//#region     SPECIAL INSTRUCTIONS
	var instructionsArrow = app.activeDocument.groupItems.getByName(
		"Special Instructions Arrow"
	);
	instructionsArrow.hidden = true;

	var customer_instructions = app.activeDocument.textFrames.getByName(
		"Customer Instructions"
	);
	var customerService_instructions = app.activeDocument.textFrames.getByName(
		"Customer Service Instructions"
	);
	var production_instructions = app.activeDocument.textFrames.getByName(
		"Production Instructions"
	);

	if (doubleSidedCheckbox.value === true) {
		if (
			//none of the boxes have text.
			instructionsCustomer_edit.text.length < 1 &&
			instructionsProduction_edit.text.length < 1 &&
			instructionsCustomerService_edit.text.length < 1
		) {
			var SILayer = app.activeDocument.layers.getByName("Special Instructions");
			SILayer.visible = true;
			SILayer.remove();
			instructionsArrow.remove();
		}

		if (
			//  if all 3 of the boxes have text.
			instructionsCustomer_edit.text.length > 0 &&
			instructionsProduction_edit.text.length > 0 &&
			instructionsCustomerService_edit.text.length > 0
		) {
			app.activeDocument.groupItems.getByName("Special Instructions").remove();
			app.activeDocument.groupItems
				.getByName("Customer Service - Production")
				.remove();
			app.activeDocument.groupItems
				.getByName("Customer - Customer Service")
				.remove();
			app.activeDocument.groupItems.getByName("Customer - Production").remove();
			app.activeDocument.textFrames.getByName(
				"Customer Instructions"
			).contents = instructionsCustomer_edit.text;
			app.activeDocument.textFrames.getByName(
				"Customer Instructions"
			).contents = instructionsCustomer_edit.text;
			app.activeDocument.textFrames.getByName(
				"Production Instructions"
			).contents = instructionsProduction_edit.text;
			app.activeDocument.textFrames.getByName(
				"Customer Service Instructions"
			).contents = instructionsCustomerService_edit.text;
		}

		if (
			//  if only the CUSTOMER box has text.
			instructionsCustomer_edit.text.length > 0 &&
			instructionsProduction_edit.text.length < 1 &&
			instructionsCustomerService_edit.text.length < 1
		) {
			app.activeDocument.groupItems
				.getByName("Customer Service - Production")
				.remove();
			app.activeDocument.groupItems
				.getByName("Customer - Customer Service")
				.remove();
			app.activeDocument.groupItems.getByName("Customer - Production").remove();
			app.activeDocument.groupItems
				.getByName("Customer - Production - Customer Service")
				.remove();
			app.activeDocument.textFrames.getByName("Special Instructions").contents =
				instructionsCustomer_edit.text;
		}

		if (
			//  if the CUSTOMER and PRODUCTION boxes have text.
			instructionsCustomer_edit.text.length > 0 &&
			instructionsCustomerService_edit.text.length < 1 &&
			instructionsProduction_edit.text.length > 0
		) {
			app.activeDocument.groupItems
				.getByName("Customer Service - Production")
				.remove();
			app.activeDocument.groupItems.getByName("Special Instructions").remove();
			app.activeDocument.groupItems
				.getByName("Customer - Customer Service")
				.remove();
			app.activeDocument.groupItems
				.getByName("Customer - Production - Customer Service")
				.remove();

			app.activeDocument.textFrames.getByName(
				"Customer Instructions"
			).contents = instructionsCustomer_edit.text;
			app.activeDocument.textFrames.getByName(
				"Production Instructions"
			).contents = instructionsProduction_edit.text;
		}

		if (
			//  if only the CUSTOMER SERVICE box has text.
			instructionsCustomer_edit.text.length < 1 &&
			instructionsProduction_edit.text.length < 1 &&
			instructionsCustomerService_edit.text.length > 0
		) {
			app.activeDocument.groupItems
				.getByName("Customer Service - Production")
				.remove();
			app.activeDocument.groupItems
				.getByName("Customer - Customer Service")
				.remove();
			app.activeDocument.groupItems.getByName("Customer - Production").remove();
			app.activeDocument.groupItems
				.getByName("Customer - Production - Customer Service")
				.remove();

			app.activeDocument.textFrames.getByName("Special Instructions").contents =
				instructionsCustomerService_edit.text;
		}

		if (
			//  if the CUSTOMER SERVICE and PRODUCTION boxes have text.
			instructionsCustomer_edit.text.length < 1 &&
			instructionsProduction_edit.text.length > 0 &&
			instructionsCustomerService_edit.text.length > 0
		) {
			app.activeDocument.groupItems.getByName("Special Instructions").remove();

			app.activeDocument.groupItems
				.getByName("Customer - Customer Service")
				.remove();
			app.activeDocument.groupItems.getByName("Customer - Production").remove();
			app.activeDocument.groupItems
				.getByName("Customer - Production - Customer Service")
				.remove();

			app.activeDocument.textFrames.getByName(
				"Customer Service Instructions"
			).contents = instructionsCustomerService_edit.text;
			app.activeDocument.textFrames.getByName(
				"Production Instructions"
			).contents = instructionsProduction_edit.text;
		}

		if (
			//  if the CUSTOMER and the CUSTOMER SERVICE boxes have text.
			instructionsCustomer_edit.text.length > 0 &&
			instructionsProduction_edit.text.length < 1 &&
			instructionsCustomerService_edit.text.length > 0
		) {
			app.activeDocument.groupItems.getByName("Special Instructions").remove();
			app.activeDocument.groupItems
				.getByName("Customer Service - Production")
				.remove();

			app.activeDocument.groupItems.getByName("Customer - Production").remove();
			app.activeDocument.groupItems
				.getByName("Customer - Production - Customer Service")
				.remove();

			app.activeDocument.textFrames.getByName(
				"Customer Instructions"
			).contents = instructionsCustomer_edit.text;
			app.activeDocument.textFrames.getByName(
				"Customer Service Instructions"
			).contents = instructionsCustomerService_edit.text;
		}

		if (
			//  if only the PRODUCTION box has text.
			instructionsCustomer_edit.text.length < 1 &&
			instructionsProduction_edit.text.length > 0 &&
			instructionsCustomerService_edit.text.length < 1
		) {
			app.activeDocument.groupItems
				.getByName("Customer Service - Production")
				.remove();
			app.activeDocument.groupItems
				.getByName("Customer - Customer Service")
				.remove();
			app.activeDocument.groupItems.getByName("Customer - Production").remove();
			app.activeDocument.groupItems
				.getByName("Customer - Production - Customer Service")
				.remove();

			app.activeDocument.textFrames.getByName("Special Instructions").contents =
				instructionsProduction_edit.text;
		}
	} else {
		if (instructionsCustomer_edit.text.length > 0) {
			instructionsArrow.hidden = false;
			app.activeDocument.textFrames.getByName(
				"Customer Instructions"
			).contents = instructionsCustomer_edit.text;
		}

		if (instructionsCustomerService_edit.text.length > 0) {
			instructionsArrow.hidden = false;
			app.activeDocument.textFrames.getByName(
				"Customer Service Instructions"
			).contents = instructionsCustomerService_edit.text;
		}

		if (instructionsProduction_edit.text.length > 0) {
			instructionsArrow.hidden = false;
			app.activeDocument.textFrames.getByName(
				"Production Instructions"
			).contents = instructionsProduction_edit.text;
		}

		if (instructionsCustomer_edit.text.length < 1) {
			app.activeDocument.groupItems
				.getByName("Customer Instructions Group")
				.remove();
		}

		if (instructionsCustomerService_edit.text.length < 1) {
			app.activeDocument.groupItems
				.getByName("Customer Service Instructions Group")
				.remove();
		}

		if (instructionsProduction_edit.text.length < 1) {
			app.activeDocument.groupItems
				.getByName("Production Instructions Group")
				.remove();
		}

		if (bodyColorList.selection.index < 14) {
			if (
				instructionsCustomer_edit.text.length < 1 &&
				instructionsCustomerService_edit.text.length < 1 &&
				instructionsProduction_edit.text.length < 1
			) {
				app.activeDocument.groupItems.getByName("Bic Logo Group").remove();
				app.activeDocument.artboards.getByName("Back").remove();
			}
		}
	}

	//#endregion

	//#region     ASSORTMENT VISIBILITY
	if (bodyColorList.selection.index === 11) {
		app.activeDocument.layers.getByName("LIGHT ASSORTMENT").visible = false;
		app.activeDocument.layers.getByName("DARK ASSORTMENT").visible = true;
	}

	if (bodyColorList.selection.index === 12) {
		app.activeDocument.layers.getByName("DARK ASSORTMENT").visible = false;
		app.activeDocument.layers.getByName("LIGHT ASSORTMENT").visible = true;
	}
	//#endregion

	//#region     SCREENCOUNTER
	if (bodyColorList.selection.index < 13 && mockupCheckbox.value === false) {
		var screenTotal = screenCounter_A.length + screenCounter_C.length;

		var screenNumberLast_1 =
			app.activeDocument.textFrames.getByName("A1 Screen Number");
		screenNumberLast_1.contents = screenTotal;

		var screenNumberLast_2 =
			app.activeDocument.textFrames.getByName("A2 Screen Number");
		screenNumberLast_2.contents = screenTotal;

		var screenNumberLast_3 =
			app.activeDocument.textFrames.getByName("A3 Screen Number");
		screenNumberLast_3.contents = screenTotal;

		var screenNumberLast_4 =
			app.activeDocument.textFrames.getByName("A4 Screen Number");
		screenNumberLast_4.contents = screenTotal;

		var screenNumberFirst_5 =
			app.activeDocument.textFrames.getByName("InkNumber_5");
		screenNumberFirst_5.contents = screenCounter_A.length + 1;

		var screenNumberLast_5 =
			app.activeDocument.textFrames.getByName("C1 Screen Number");
		screenNumberLast_5.contents = screenTotal;

		var screenNumberFirst_6 =
			app.activeDocument.textFrames.getByName("InkNumber_6");
		screenNumberFirst_6.contents = screenCounter_A.length + 2;
		var screenNumberLast_6 =
			app.activeDocument.textFrames.getByName("C2 Screen Number");
		screenNumberLast_6.contents = screenTotal;

		var screenNumberFirst_7 =
			app.activeDocument.textFrames.getByName("InkNumber_7");
		screenNumberFirst_7.contents = screenCounter_A.length + 3;
		var screenNumberLast_7 =
			app.activeDocument.textFrames.getByName("C3 Screen Number");
		screenNumberLast_7.contents = screenTotal;

		var screenNumberFirst_8 =
			app.activeDocument.textFrames.getByName("InkNumber_8");
		screenNumberFirst_8.contents = screenCounter_A.length + 4;
		var screenNumberLast_8 =
			app.activeDocument.textFrames.getByName("C4 Screen Number");
		screenNumberLast_8.contents = screenTotal;
	}

	if (fileName_One.length > 35) {
		var fileName_box = app.activeDocument.textFrames.getByName("FileName");

		fileName_box.textRange.characterAttributes.size = 8;
		fileName_box.textRange.characterAttributes.baselineShift = -1;
	}

	var reducedOriginalArt =
		app.activeDocument.textFrames.getByName("Original Art");
	if (originalArt_edit.text.length > 50) {
		reducedOriginalArt.textRange.characterAttributes.size = 4;
		reducedOriginalArt.textRange.characterAttributes.baselineShift = -1;
	}

	var reducedPO = app.activeDocument.textFrames.getByName("PO");
	if (poNumber_edit.text.length > 11) {
		reducedPO.textRange.characterAttributes.size = 6;
		reducedPO.textRange.characterAttributes.baselineShift = -3;
	}

	//#region      This section deletes any unused screen info groups.

	if (bodyColorList.selection.index < 14) {
		if (mockupCheckbox.value === true) {
			app.activeDocument.groupItems.getByName("Screen8").remove();
			app.activeDocument.groupItems.getByName("Screen7").remove();
			app.activeDocument.groupItems.getByName("Screen6").remove();
			app.activeDocument.groupItems.getByName("Screen5").remove();
			app.activeDocument.groupItems.getByName("Screen4").remove(); //light assortment  this produces an error
			app.activeDocument.groupItems.getByName("Screen3").remove();
			app.activeDocument.groupItems.getByName("Screen2").remove();
			app.activeDocument.groupItems.getByName("Screen1").remove();
		} else {
			if (screenCounter_A.length === 3) {
				app.activeDocument.groupItems.getByName("Screen4").remove();
			} else if (screenCounter_A.length === 2) {
				app.activeDocument.groupItems.getByName("Screen4").remove();
				app.activeDocument.groupItems.getByName("Screen3").remove();
			} else if (screenCounter_A.length === 1) {
				app.activeDocument.groupItems.getByName("Screen4").remove();
				app.activeDocument.groupItems.getByName("Screen3").remove();
				app.activeDocument.groupItems.getByName("Screen2").remove();
			}

			if (screenCounter_C.length === 3) {
				app.activeDocument.groupItems.getByName("Screen8").remove();
			} else if (screenCounter_C.length === 2) {
				app.activeDocument.groupItems.getByName("Screen8").remove();
				app.activeDocument.groupItems.getByName("Screen7").remove();
			} else if (screenCounter_C.length === 1) {
				app.activeDocument.groupItems.getByName("Screen8").remove();
				app.activeDocument.groupItems.getByName("Screen7").remove();
				app.activeDocument.groupItems.getByName("Screen6").remove();
			} else if (screenCounter_C.length === 0) {
				app.activeDocument.groupItems.getByName("Screen8").remove();
				app.activeDocument.groupItems.getByName("Screen7").remove();
				app.activeDocument.groupItems.getByName("Screen6").remove();
				app.activeDocument.groupItems.getByName("Screen5").remove();
			}
		}
	}
	//#endregion
	//#endregion

	//#region     AUTOSAVE

	if (autoSave.value === true) {
		var doc = app.activeDocument;
		var docPath =
			"/c/Users/JBavitz/BIC/BIC logo lighter Customer Service - General/Graphic Design/3 - Art Proof sent";
		var sleevePath =
			"/c/Users/JBavitz/BIC/BIC logo lighter Customer Service - General/Graphic Design/5 - Sleeves/Sleeve_ Proof_Sent";
		var opts = new PDFSaveOptions();
		opts.PDFPreset = "Illustrator Default";

		if (bodyColorList.selection.index < 14) {
			doc.saveAs(File(docPath + "/" + fileName_One + ".pdf"), opts);
		}

		if (bodyColorList.selection.index === 14) {
			doc.saveAs(File(sleevePath + "/" + fileName_One + ".pdf"), opts);
		}

		if (bodyColorList.selection.index === 16) {
			doc.saveAs(File(docPath + "/" + fileName_One + ".pdf"), opts);
		}
	}
	//#endregion
} else {
	alert("A JDE number or web order number is required.");
}

/*      BUG LIST

The single side dark assortment that uses the single default ink color doesn't delete the unused screen info groups. 
The problem is with the default color for the assortments code.

line 2520  - No such element    var A1_Name_Back = app.activeDocument.textFrames.getByName("A1_Name_Back")

*/
