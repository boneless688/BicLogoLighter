var csv_file = File(
	"C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Regular_Customers.csv"
)
csv_file.open("r")
var csv = csv_file.read()
csv_file.close()

/*
The contents of the Excel file is 6 columns:

First Name, Last Name, Email, Company, Nationality, VIP

Sarah, Gillen, logolighters@live.com, Logolighters LLC, US, Y

Jonathan, Le, jonathan@bugbranding.com, Lightning Bug Branding, US, Y


*/




var alpha = csv.split("\n");

var bravo = alpha.toString();

var charlie = bravo.split(",");



var golf = charlie.length;
for (i=0; golf; i+6) {
     var foxtrot = charlie.slice(i, i+6);
     alert(foxtrot)
}


/* 
var delta = charlie.slice(6, 12);
var echo = charlie.slice(12, 18); */

alert(charlie.length);









/* function regCustomer(firstName, lastName, email, company, nationality, vip) {
	return {
		firstName: firstName,
		lastName: lastName,
          fullName: firstName + " " + lastName,
		email: email,
		company: company,
		nationality: nationality,
		vip: vip
	}
} */







/* var person1 = regCustomer("sarah", "gillen", "logolighters@live.com", "LogoLighters, LLC", "US", "yes")

alert (person1.fullName)
alert (person1.company)
alert (person1.email) */