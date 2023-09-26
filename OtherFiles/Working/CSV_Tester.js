
var csv_file = File(
	"C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Working/Regular_Customers.csv"
);
csv_file.open("r");
var csv = csv_file.read();
csv_file.close();
var alpha = csv.split("\n");



var sampleList = [
	"sarah,gillen,logolighters@live.com,logolighters llc,us,y",
     "jonathan,le,jonathan@bugbranding.com,lightning bug branding,us,y",
     "danni,ashe,danni@hotbox.com,danni's hot box,us,n"
];


var lima = [];

for (i = 0; i < alpha.length; i++) {
     var indiArray = alpha[i].split(',');
     lima[i] = ListObject();
}





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










