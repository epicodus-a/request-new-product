//check every element in an array is true
var allTrue = function (aArray, bArray) {
	aArray.forEach(function (value) {
		if(value in bArray){
			return false;
		}
	});
	return true;
};

// caculate tax rate
var taxCaculator = function (state) {
	var tax = 0.08;
	if (state === "oregon") {
		tax = 0;
	}
	return tax;
};

$().ready(function () {
	$("#request-form").submit(function (e) {
		e.preventDefault();

		var location = $("input:radio[name=location]:checked").val();
		var cat = $("input:radio[name=cat]:checked").val();
		var brands = $("#brands").val();
		var message = $("#message").val();
		var firstname = $("#firstname").val();
		var lasttname = $("#lastname").val();
		var email = $("#email").val();
		var phone = $("#phone").val();

		var taxRate = taxCaculator(location);
		var listValue = [firstname, lasttname, email, phone, location, cat, brands, message, taxRate];
		var listKey = ["First Name", "Last Name", "Email", "Phone", "Location", "Category", "Brands", "Message", "Tax Rate"];

		$("#request-form").hide();
		$("#output").show();

		var emptyValue = [0, "null", undefined, "0","", " "];
		if (allTrue(listValue, emptyValue)) {
			listValue.forEach(function (item, index) {
				var p = "<p class='lead'>" + listKey[index] + ": " + item + "</p>";
				$("#output").append(p);
			});
		} else {
			var p = "<p class='lead'>" + " Please enter all blanks." + "</p>";
			$("#output").append(p);
		}
	});
});