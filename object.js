var brandDropdown = document.getElementById("selectBrand");
var typeDropdown = document.getElementById("carDropdown");
var carBrand = document.getElementById("selectBrand").value;
var rentals = {
	name: "Enterprise Rental",
	cars: [{
		type: "Economy",
		price: 70,
		quantity: 10,
		booked: 0,
	}, {
		type: "Midsize",
		price: 100,
		quantity: 40,
		booked: 0,
	}, {
		type: "Luxury",
		price: 250,
		quantity: 3,
		booked: 0,
	}],
	carAvail: function(i) {
		return this.cars[i].quantity - this.cars[i].booked;
	},
	bookCars: function(i) {
		this.cars[i].booked++;
	},
	carsAvail: function() {
		for (var i = 0; i < rentals.cars.length; i++) {
			document.getElementById("carType").innerHTML += (rentals.cars[i].type + ": $" + rentals.cars[i].price + "<br/>");
			document.getElementById("avail").innerHTML += (rentals.cars[i].type + ": " + rentals.cars[i].quantity + "<br/>");
		}
	},
	addRenter: function(renterName, carBrand) {
		this.renter.push({
			rName: renterName,
			brand: carBrand,
		});
	}
};
var brands = ["Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Buick", "Cadillac", "Cadillac", "Chevrolet", "Chrysler", "Citroen", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "Geely", "General Motors", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Land Rover", "Lexus", "Maserati", "Mazda", "McLaren", "Mercedes Benz", "Mini", "Mitsubishi Motors", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche", "Ram", "Renault", "Rolls Royce", "Saab", "Subaru", "Suzuki", "TATA Motors", "Tesla", "Toyota", "Volkswagen", "Volvo", ]
document.getElementById('upbutton').onclick = function() {
	document.getElementById('businessname').innerHTML = rentals.name;
	rentals.carsAvail();
};

function dropDown() {
	var selection = document.getElementById("carDropdown").value;
	if (selection === "Economy") {
		document.getElementById('carType').innerHTML = rentals.cars[0].type + " $" + rentals.cars[0].price;
	} else if (selection === "Midsize") {
		document.getElementById('carType').innerHTML = rentals.cars[1].type + " $" + rentals.cars[1].price;
	} else if (selection === "Luxury") {
		document.getElementById('carType').innerHTML = rentals.cars[2].type + " $" + rentals.cars[2].price;
	}
}
document.getElementById('rentCarB').onclick = function() {
	var selection = document.getElementById("carDropdown").value;
	var renterName = document.getElementById('rName').value;
	if (selection != "none") {
		if (selection === "Economy") {
			if (rentals.cars[0].quantity > 0) {
				rentals.cars[0].quantity--;
				document.getElementById('avail').innerHTML = rentals.cars[0].type + ": " + rentals.cars[0].quantity;
			} else {
				alert("We ran out of Economy cars!")
			}
		} else if (selection === "Midsize") {
			if (rentals.cars[1].quantity > 0) {
				rentals.cars[1].quantity--;
				document.getElementById('avail').innerHTML = rentals.cars[1].type + ": " + rentals.cars[1].quantity;
			} else {
				alert("We ran out of Midsize cars!")
			}
		} else if (selection === "Luxury") {
			if (rentals.cars[2].quantity > 0) {
				rentals.cars[2].quantity--;
				document.getElementById('avail').innerHTML = rentals.cars[2].type + ": " + rentals.cars[2].quantity;
			} else {
				alert("We ran out of Luxury cars!")
			}
		}
	} else {
		alert("Please select car Type")
	}
	if (renterName != "") {
		document.getElementById('renterNameP').innerHTML = renterName;
	} else {
		alert("Please enter renters name")
	}
};
for (var i = 0; i < brands.length; i++) {
	var sel = brands[i];
	var element = document.createElement("option");
	element.textContent = sel;
	element.value = sel;
	brandDropdown.appendChild(element);
}
for (var i = 0; i < rentals.cars.length; i++) {
	var typeSel = rentals.cars[i].type;
	var dropdown = document.createElement("option");
	dropdown.textContent = typeSel;
	dropdown.value = typeSel;
	typeDropdown.appendChild(dropdown);
}

function brandName() {
	var selection = document.getElementById("selectBrand").value;
	document.getElementById("brandNames").innerHTML = selection;
}