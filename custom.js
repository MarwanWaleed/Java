// change background color
function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('colorChanger').style.backgroundColor = '#' + jscolor;
}
function updatecolor(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementsByClassName('fullfixed')[0].style.color = "#" + jscolor;
}

(function ($) {

// resize columns
    $('.expand').click(function (event) {
        event.preventDefault();
        $('.col-switch').removeClass('col-md-6');
        $('.col-switch').addClass('col-md-12');
    });
    $('.collaps').click(function (event) {
        event.preventDefault();
        $('.col-switch').removeClass('col-md-12');
        $('.col-switch').addClass('col-md-6');
    });
    $('.switcher').click(function (a) {
        a.preventDefault();
        $('.switcher.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.fullscreen').click(function (a) {
        a.preventDefault();
        $('.tafseer-wrapper').addClass('fullfixed');
        $('#close').removeClass('hidden');
        $('#tools').removeClass('hidden');

    });
    $('#close').click(function (a) {
        a.preventDefault();
        $('.tafseer-wrapper').removeClass('fullfixed');
        $('#close').addClass('hidden');
        $('#tools').addClass('hidden');

    });
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) {
            $('.tafseer-wrapper').removeClass('fullfixed');
            $('#close').addClass('hidden');
            $('#tools').addClass('hidden');

        }
    });

//tooltip init
    jQuery('[data-toggle="tooltip"]').tooltip({trigger: "hover"});
    $('[data-toggle="popover"]').popover({trigger: "hover"});

// initialize mixitup
    var containerEl = document.querySelector('#Container');

    if (containerEl) {
        var mixer = mixitup('[data-ref~="mixcontainer"]', {
            selectors: {
                target: '[data-ref~="mix"]',
                control: '[data-mixitup-control]'
            }
        });
    }


    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    });
    // animate href
    $("a[href=#full]").click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });
     // Javascript to enable link to tab
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }

// Change hash for page-reload
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    })


    function applyWhenElementExists(selector, myFunction, intervalTime) {
        var interval = setInterval(function () {
            if (jQuery('#Tafseer').length > 0) {
                myFunction();
                clearInterval(interval);
            }
        }, intervalTime);
    }

    applyWhenElementExists("#Tafseer", function () {
        $('.fullscreen').removeClass('hidden');
        $('.switcher').removeClass('hidden');

    }, 50);


    // change font size
    $(".font-button").bind("click", function () {
        var size = parseInt($('.tafseer-text').css("font-size"));
        if ($(this).hasClass("plus")) {
            size = size + 2;
        } else {
            size = size - 2;
            if (size <= 10) {
                size = 10;
            }
        }
        $('.tafseer-text').css("font-size", size);
    });

})(jQuery);


