
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

		// listValue.forEach(function (item, index) {
		// 	if (item) {
		// 		var p = "<p class='lead'>" + listKey[index] + ": " + item + "</p>";
		// 		$("#output").append(p);
		// 	} else {
		// 		// var p = "<p class='lead'>" + " Please enter all blanks." + "</p>";
		// 		$("#output").html("<p>Please fill in all blanks.</p>");
		// 		break
		// 	}
		// });
		for (var index = 0; index < listValue.length; index++){
			if(listValue[index]){
				var p = "<p class='lead'>" + listKey[index] + ": " + listValue[index] + "</p>";
				$("#output").append(p);
			}else{
				$("#output").html("<p class='lead'>Please fill in all blanks.</p>");
				break;
			}
		}
	});
});