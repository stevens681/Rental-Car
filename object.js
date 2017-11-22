var rentals = {
	name: "Enterprise Rental",
	econCars: 10,
	ebooked: 0,
	econType: "Economy",
	midCars: 10,
	mbooked: 0,
	midType: "Midsize",
	renter: [{
		rName: "",
		brand: ""
	}],
	ebook: function() {
		this.ebooked++;
		if (this.econCars > 0) {
			this.econCars--;
			rentals.carsAvail();
		} else {
			alert("We ran out of Economy Cars")
		}
	},
	mbook: function() {
		this.mbooked++;
		if (this.midCars > 0) {
			this.midCars--;
			rentals.carsAvail();
		} else {
			alert("We ran out of Mid size Cars")
		}
	},
	carsAvail: function() {
		document.getElementById("ecarAvail").innerHTML = rentals.econCars;
		document.getElementById('mcarAvail').innerHTML = rentals.midCars;
	},
	addRenter: function(renterName, carBrand) {
		this.renter.push({
			rName: renterName,
			brand: carBrand,
		});
	}
};
var brands = ["Acura","Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Buick", "Cadillac", "Cadillac", "Chevrolet", "Chrysler", "Citroen", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "Geely", "General Motors", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Land Rover", "Lexus", "Maserati", "Mazda", "McLaren", "Mercedes Benz", "Mini", "Mitsubishi Motors", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche", "Ram", "Renault", "Rolls Royce", "Saab", "Subaru", "Suzuki", "TATA Motors", "Tesla", "Toyota", "Volkswagen", "Volvo",
]
var select = document.getElementById("selectBrand");
document.getElementById('upbutton').onclick = function() {
	document.getElementById('businessname').innerHTML = rentals.name;
	rentals.carsAvail();
};

function dropDown() {
	var selection = document.getElementById("carDropdown").value;
	if (selection === "econbutton") {
		document.getElementById('economycar').innerHTML = rentals.econType;
	} else if (selection === "midbutton") {
		document.getElementById('midcar').innerHTML = rentals.midType;
	}
}

function rentCar() {
	var rent = document.getElementById("carDropdown").value;
	var name = document.getElementById("rName").value;
	var brand = document.getElementById("carBrand").value;
	if (name != "") {
		if (rent === "econbutton") {
			rentals.ebook();
			rentals.addRenter(name, brand);
			document.getElementById('economycar').innerHTML = rentals.econType;
			document.getElementById('renterName').innerHTML = name;
		} else if (rent === "midbutton") {
			rentals.mbook();
			rentals.addRenter(name, brand);
			document.getElementById('midcar').innerHTML = rentals.midType;
			document.getElementById('renterName').innerHTML = name;
		}
	} else {
		alert("Please enter the customer name");
	}
}
for (var i = 0; i < brands.length; i++) {
	var sel = brands[i];
	var element = document.createElement("option");
	element.textContent = sel;
	element.value = sel;
	select.appendChild(element);
}
function brandName(){
    var selection = document.getElementById("selectBrand").value;
    document.getElementById("brandNames").innerHTML = selection;
}