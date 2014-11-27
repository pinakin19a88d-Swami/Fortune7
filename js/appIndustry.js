$(function() {

	// Get the form.
	var form = $('#ajax-industry');

	// Get the messages div.
	var formMessages = $('#form-messages_industry');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error fadeInUp');
			$(formMessages).addClass('success fadeInUp');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#compName').val('');
			$('#designation').val('');
			$('#rEmail').val('');
			$('#pAddress').val('');
			$('#city').val('');
			$('#country').val('');
			$('#mob').val('');
			$('#requirement').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success fadeInUp');
			$(formMessages).addClass('error fadeInUp');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).html(data.responseText);
			} else {
				$(formMessages).html('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
