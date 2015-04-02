function addElement(){
    var radioButtonValue = $('input[name="selectPosition"]:checked').val();
    var element = $('input[name="inputElement"]').val();
    var $liElement = $('<li>').text(element);

    if(radioButtonValue === 'before'){
        addElementBefore($liElement);
    } else {
        addElementAfter($liElement);
    }
};

function addElementBefore($liElement){
    $('ul').prepend($liElement);
};

function addElementAfter($liElement){
    $('ul').append($liElement);
};


