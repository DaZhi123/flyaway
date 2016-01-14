$(document).ready(function() {
    $('button').click(function() {
        $(this).addClass('bounce-in').find('span').text(function(span, text) {
            return "Success!";
        });
        $(this).find('i').addClass('flyaway').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('button').find('i').removeClass('flyaway');
            $('button').removeClass('bounce-in').find('span').text(function(span, text) {
                return "Download";
            });
        });
    });
    $('#demo').click(function() {
        $(this).removeClass('float shadow').addClass('flyaway').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('shadow float').removeClass('flyaway');;
        });
    });
});
