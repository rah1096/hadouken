$(document).ready(function() {
    $('.sf-logo').fadeIn(3500,function() {
        $(this).fadeOut(1000, function() {
            $('.brought-by').fadeIn(1500, function() {
                $(this).fadeOut(1000, function() {
                    $('.jquery-logo').fadeIn(1500, function() {
                        $(this).fadeOut(1500, function() {
                            $('.how-to').fadeIn(1000);
                        })
                    })
                })
            })
        })
    });

    playTheme();

    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
        .animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            }
        );
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});

$(document).on('keydown', function(e) {
    if (e.keyCode==88) {
        if ($('.ryu').is(':hover')) {
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        } else {
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        };
    };
})
.on('keyup', function(e) {
    if (e.keyCode==88) {
        $('.ryu-cool').hide();
        if ($('.ryu').is(':hover')) {
            $('.ryu-ready').show();
        } else {
            $('.ryu-still').show();
        };
    };
});

function playTheme() {
    $('#theme')[0].volume = 0.5;
    $('#theme')[0].load();
    $('#theme')[0].play();
};

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
};

