$(document).ready(function() {

	// Event listener for code buttons
	$(".code-btn").click(function() {
		// Get the ID of the code snippet
		var snippet = $(this).data("snippet");
		// Get the code from the snippet and set it in the modal
		$("#codeModalLabel").html($(snippet).attr("id"));
		$("#codeModal pre code").html($(snippet).html());
	});

});
