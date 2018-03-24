var taxCaculator = function(state){
	var tax = 0.08;
	if (state === "oregon"){
		tax = 0;
	}
	return tax;
}

$().ready(function(){
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

		$("#request-form").hide();
		$("#output").show();

		var taxRate = taxCaculator(location);
		var list = [firstname, lasttname, email, phone, location, cat, brands, message, taxRate];

		list.forEach(function (item) {
			$("#output").append("<p class='lead'>" + item + "</p>");
		});
	});
});