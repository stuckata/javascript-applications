function switchBackgroundColor() {
	var elementClass = $('#classInput').val();
	var backgroundColor = $('#colorInput').val();

	$('li[class="' + elementClass + '"]').css('background-color', backgroundColor);
};