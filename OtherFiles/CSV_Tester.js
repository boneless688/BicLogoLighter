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

/* #endregion */

charlie.splice(0, 6);
charlie.pop();

var customerCounter = charlie.length / 6; //This returns the number of customers. It is currently 8.

// #region     This creates customer objects, and assigns the different array elements to different properties of the object.
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
 	var victor = new CustomerObject(
		echo[0],
		echo[1],
		echo[2],
		echo[3],
		echo[4],
		echo[5]
	); 
	return victor;
}
// #endregion

// #region    This creates a maximum number of customer variables of 50.
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
// #endregion

// #region     This creates an array of all 50 of the customer variables.
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
// #endregion

customerListArray.length = customerCounter + 1;

for (i=0; i < customerCounter; i++) {
     customerListArray[i] = Customer();
}


