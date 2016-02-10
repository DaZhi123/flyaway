function animate(x) {
    $('#demo').removeClass('float shadow').addClass('flyaway ' + x).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#demo').addClass('shadow float').removeClass('flyaway ' + x);
    });
};

$(document).ready(function() {
    $('.download').click(function() {
        $(this).addClass('bounce-in').find('span').text(function(span, text) {
            return "Success!";
        });
        $(this).find('i').addClass('flyaway pushOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.download').find('i').removeClass('flyaway pushOut');
            $('.download').removeClass('bounce-in').find('span').text(function(span, text) {
                return "Download";
            });
        });
    });
    $('.animate').click(function(e) {
        e.preventDefault();
        var anim = $('.select').val();
        animate(anim);
    });
});
