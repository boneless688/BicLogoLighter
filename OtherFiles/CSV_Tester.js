/* #region      CSV Import */

/*
The goal is to take an Excel file which holds regular customers data. 
Each row is an individual customer.
Each column is a specific type of information.
For example, a row would hold the customer Logolighter's information.
The first column in the row would hold the customer's first name, the second column would hold the customer's last name, the third column would hold the customer's email address, and so on.

There are 6 types of data for each customer, so there are 6 columns.

The 6 columns would be:
First Name, Last Name, Email, Company, Nationality, VIP Status
*/

var csv_file = File(
	"C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Regular_Customers.csv"
);
csv_file.open("r");
var csv = csv_file.read();
csv_file.close(); //  The import of the .csv data is now accessible to the javaScript code.

var alpha = csv.split("\n");
var bravo = alpha.toString();
var charlie = bravo.split(",");

/*
At this point, charlie is a single array of strings.
This single array must be broken up into separate arrays which contain six elements.
*/
/* #endregion */

/* var sampleArray = [
	"Sarah",
	"Gillen",
	"logolighters@live.com",
	"Logolighters",
	"US",
	"y",

	"Darryl",
	"Quinge",
	"darryl@pemamerica.com",
	"PEM America",
	"US",
	"n",

	"jonathan",
	"le",
	"jonathan@bugbranding.com",
	"lightning bud",
	"us",
	"y",

	"danni",
	"ashe",
	"danni@hotbox.com",
	"danni's hotbox",
	"us",
	"n",

	"will",
	"kunz",
	"orders@marcopdx.com",
	"marco pdx",
	"us",
	"n",
]; */

// There are 5 customers in the sampleArray.

charlie.splice(0, 6);
charlie.pop();

var customerCounter = charlie.length / 6; //This returns the number of customers. It is currently 8.

function CustomerObject(firstName, lastName, email, company, nationality, vip) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.company = company;
	this.nationality = nationality;
	this.vip = vip;
}

function Customer() {
	var echo = charlie.slice(0, 6);
	charlie.splice(0, 6);
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

/* #region  Variables */
var customer01;
var customer02;
var customer03;
var customer04;
var customer05;
var customer06;
var customer07;
var customer08;
var customer09;
var customer10;
var customer11;
var customer12;
var customer13;
var customer14;
var customer15;
var customer16;
var customer17;
var customer18;
var customer19;
var customer21;
var customer22;
var customer23;
var customer24;
var customer25;
var customer26;
var customer27;
var customer28;
var customer29;
var customer31;
var customer32;
var customer33;
var customer34;
var customer35;
var customer36;
var customer37;
var customer38;
var customer39;
var customer41;
var customer42;
var customer43;
var customer44;
var customer45;
var customer46;
var customer47;
var customer48;
var customer49;
var customer50;
/* #endregion */




var customerListArray = [
	customer01,
	customer02,
	customer03,
	customer04,
	customer05,
	customer06,
	customer07,
	customer08,
	customer09,
	customer10,
	customer11,
	customer12,
	customer13,
	customer14,
	customer15,
	customer16,
	customer17,
	customer18,
	customer19,
	customer21,
	customer22,
	customer23,
	customer24,
	customer25,
	customer26,
	customer27,
	customer28,
	customer29,
	customer31,
	customer32,
	customer33,
	customer34,
	customer35,
	customer36,
	customer37,
	customer38,
	customer39,
	customer41,
	customer42,
	customer43,
	customer44,
	customer45,
	customer46,
	customer47,
	customer48,
	customer49,
	customer50
];



var newArray = customerListArray.slice(0, customerCounter);

alert(newArray[0]);

/* #region   */
/* var customer01 = Customer();
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
*/
/* #endregion */
