function tableGenerator() {
	var input = $('#inputString').val();
	var cars = $.parseJSON(input);

	$.each(cars, function(key, value){
        var $tr = $('<tr>').append(
            $('<td>').text(value.manufacturer),
            $('<td>').text(value.model),
            $('<td>').text(value.year),
            $('<td>').text(value.price),
            $('<td>').text(value.class))
            .appendTo('table');
    });
};