var xlsxFile = require("read-excel-file/node");

/* xlsxFile("C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Regular_Customers.xlsx").then((rows) => {
	rows.forEach((row) => {
		row.forEach((cell) => {
			alert(cell);
		});
	});
}); */



newFunction();
function newFunction() {
     xlsxFile("C:/Users/JBavitz/OneDrive - BIC/Desktop/Stuff/BicLogoLighter/OtherFiles/Regular_Customers.xlsx").then(rows); {
          rows.forEach(row); {
               row.forEach(cell); {
                    alert(cell);
               };
          };
     };
}

