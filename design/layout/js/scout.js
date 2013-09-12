$(document).ready(function() {

	(function() {

		var hiding = true;

		$('#showPassword').on('click', function() {

			var linkText = hiding ? 'Hide password' : 'Show password',
				inputType = hiding ? 'text' : 'password';

			$('#showPassword').text(linkText);
			$('.passwordInput').attr('type', inputType);

			hiding = !hiding;
		});

	}());

	$('#meButton').popover({
		placement: 'bottom',
		html: true,
		content: function() {
			return $('#mePopover').html();
		}
	});

	$('#meButton').on('show.bs.popover', function () {
		$('#overlay').toggle();
	});

	$('#meButton').on('hidden.bs.popover', function () {
		$('#overlay').toggle();
	});

	$('#meButton').on('shown.bs.popover', function () {
		$('.subtitle').dotdotdot({
			watch: true
		});
	});
});