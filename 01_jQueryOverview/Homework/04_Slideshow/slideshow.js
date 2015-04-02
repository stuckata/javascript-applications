$(function () {

    var CHANGE_IMAGE_TIME = 5000; 
    var TRANSITION_SPEED = 100;

    var simple_slideshow = $("#slideShow");
    var images = simple_slideshow.children('li');
    var listLength = images.length;
    var i = 0;

        changeList = function () {

            images.eq(i).fadeOut(TRANSITION_SPEED, function () {
                i += 1;
                if (i === listLength) {
                    i = 0;
                }
                images.eq(i).fadeIn(TRANSITION_SPEED);
            });
        };

    images.not(':first').hide();
    setInterval(changeList, CHANGE_IMAGE_TIME);
});