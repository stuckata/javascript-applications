$(function () {

    var CHANGE_IMAGE_TIME = 5000; 
    var TRANSITION_SPEED = 10;

    var simple_slideshow = $("#slideShow");
    var images = simple_slideshow.children('li');
    var listLength = images.length;
    var i = 0;

    autoChangeList = function () {
       changeImage(1);
    };

    images.not(':first').hide();
    setInterval(autoChangeList, CHANGE_IMAGE_TIME);

    $("#previousButton").click(function(event) {
        changeImage(-1);
    });

    $("#nextButton").click(function(event) {
        changeImage(1);
    });

    function changeImage(modifier){
        images.eq(i).fadeOut(TRANSITION_SPEED, function () {
            i += modifier;
            if (i === listLength) {
                i = 0;
            }
            if (i === -1) {
                i = listLength - 1;
            }
            images.eq(i).fadeIn(TRANSITION_SPEED);
        });
    };
});