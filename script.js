// webpage scripts
// main function
$(document).ready(function() {
    // counter mechanics
	var count = 0;
	$("#counter").html(count);
	
	$("#counterButtonSubtract").click(function() {
		if (count > 0) {
			count--;
			$("#counter").html(count);
		}
	});
	
	$("#counterButtonAdd").click(function() {
		count++;
		$("#counter").html(count);
	});
	
	$("#counterButtonReset").click(function() {
		count = 0;
		$("#counter").html(count);
	});
});