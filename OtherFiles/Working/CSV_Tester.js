/*
What I want to do is to take each row of the imported csv data and create an object from the row of data. Each element of the row would be a property of the object.
*/

var csv_file = File(
	"C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Working/Regular_Customers.csv"
);
csv_file.open("r");
var csv = csv_file.read();
csv_file.close();
var alpha = csv.split("\n");

/*
Split by lines.Each element of the array alpha is an object of each customer and their information as a single string.
alpha.length is 4. It is the number of customers in the list.

alpha[0] is 'sarah,gillen,logolighters@live.com,logolighters llc,us,y'
alpha[1] is 'jonathan,le,jonathan@bugbranding.com,lightning bug branding,us,y'
alpha[2] is 'danni,ashe,danni@hotbox.com,danni's hot box,us,n'
alpha[3] is blank.
*/


var lima = [];

for (i = 0; i < alpha.length; i++) {
     var indiArray = alpha[i].split(',');
     lima[i] = ListObject();
}


alert(lima[1].firstName);
alert(lima[1].lastName);
alert(lima[1].fullName);
alert(lima[1].email);
alert(lima[1].company);
alert(lima[1].nationality);
alert(lima[1].vip);



function CustomerObject(fName, lName, eml, comp, nation, vp) {
	this.firstName = fName;
     this.lastName = lName;
     this.fullName = fName + ' ' + lName;
	this.email = eml;
	this.company = comp;
	this.nationality = nation;
	this.vip = vp;
}

function ListObject() {
	var victor = new CustomerObject(
		indiArray[0],
		indiArray[1],
		indiArray[2],
		indiArray[3],
		indiArray[4],
		indiArray[5]
	);
	return victor;
}


















/* var array1 = ["a,b,c", "a1,b1,c1", "a2,b2,c2", "a3,b3,c3"];
var array2 = [];
for (var i = 1; i < array1.length; i++) {
	var temp1 = array1[0].split(",");
	var temp2 = array1[i].split(",");
	var o = {};
	for (var j = 0; j < temp2.length; j++) {
		o[temp1[j]] = temp2[j];
	}
	array2.push(o);
}

alert(array2[0].a);

// array2 = [
//     {
//         a: "a1",
//         b: "b1",
//         c: "c1"
//     },
//     {
//         a: "a2",
//         b: "b2",
//         c: "c2"
//     },
//     {
//         a: "a2",
//         b: "b2",
//         c: "c2"
//     }
// ] */






/* 
 * Parse CSV text into 2-dimensional
 * array of rows and columns.
 * @author Andy VanWagoner
 * @url https://stackoverflow.com/questions/1293147/example-javascript-code-to-parse-csv-data
 * example reviver:
 * function (r, c, v) { return v.replace(/[\r\n]/g, ''); };
 * @param {String} csv - the raw comma-separated text
 * @param {Function} [reviver] - function that may modify the parsed value (default: revive the raw value).
 * @returns {Array<Array<Number>>} - [[cell,cell,cell],[cell,cell,cell]], access by [rowIndex] [columnIndex]
 


function parseCSV(csv, reviver) {
	reviver =
		reviver ||
		function (r, c, v) {
			return v;
		};
	var chars = csv.split(""),
		c = 0,
		cc = chars.length,
		start,
		end,
		table = [],
		row;
	while (c < cc) {
		table.push((row = []));
		while (c < cc && "\r" !== chars[c] && "\n" !== chars[c]) {
			start = end = c;
			if ('"' === chars[c]) {
				start = end = ++c;
				while (c < cc) {
					if ('"' === chars[c]) {
						if ('"' !== chars[c + 1]) {
							break;
						} else {
							chars[++c] = ""; // unescape ""
						}
					}
					end = ++c;
				}
				if ('"' === chars[c]) {
					++c;
				}
				while (
					c < cc &&
					"\r" !== chars[c] &&
					"\n" !== chars[c] &&
					"," !== chars[c]
				) {
					++c;
				}
			} else {
				while (
					c < cc &&
					"\r" !== chars[c] &&
					"\n" !== chars[c] &&
					"," !== chars[c]
				) {
					end = ++c;
				}
			}
			row.push(
				reviver(table.length - 1, row.length, chars.slice(start, end).join(""))
			);
			if ("," === chars[c]) {
				++c;
			}
		}
		if (end === c - 1) {
			// row.push(reviver(table.length - 1, row.length, ''));
		}
		if ("\r" === chars[c]) {
			++c;
		}
		if ("\n" === chars[c]) {
			++c;
		}
	}

	return table;
}






 * Removes LF, CR and leading/trailing whitespace
 * @param {Number} r - row index
 * @param {Number} c - column index
 * @param {String} v - cell value
 * @returns {String}
 */
/*function trimSpaceRemoveLineFeedsReviver(r, c, v) {
	return v.replace(/(^\s*|\s*$|\r|\n)/g, "");
}
*/