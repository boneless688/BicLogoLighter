var csv_file = File(
	"C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Regular_Customers.csv"
);
csv_file.open("r");
var csv = csv_file.read();
csv_file.close();

var alpha = csv.split("\n");
var bravo = alpha.toString();
var csvList = bravo.split(",");
csvList.splice(0, 6);


var customerCounter = Math.floor(csvList.length / 6);




for (i=0; i < customerCounter; i++) {
     
     function CustomerObject(firstName, lastName, email, company, nationality, vip) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.company = company;
	this.nationality = nationality;
	this.vip = vip;
}
}


var alpha = csvList.slice(0, 6);
csvList.splice(0,6);

var bravo = csvList.slice(0, 6);
csvList.splice(0,6);

alert(bravo)


