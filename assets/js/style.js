/* ======= Index ======= 

    1. Active class header start
    2. Menu fixed on scroll start
    3. Progress Bar Start 

======= Index ======= */

// /* ======= 1. JS Start ======= */


/* ======= 1. Active class header start ======= */

$(document).ready(function () {
    $(".tabActive a").click(function () {
        $(".tabActive a").removeClass("active");
        $(this).addClass("active");
    });
});

/* ======= 1. Active class header End ======= */

/* ======= 2. Menu fixed on scroll start ======= */

$(document).ready(function () {
    headerFixed();
});
$(document).on('scroll', function () {
    headerFixed();
});
function headerFixed() {
    if ($(window).scrollTop() >= 100) {
        $('.stickyMenu').addClass('fixed-menu');
    } else {
        $('.stickyMenu').removeClass('fixed-menu');
    }
    if ($(window).scrollTop() >= 200) {
        $('.stickyMenu').addClass('active');
    } else {
        $('.stickyMenu').removeClass('active');
    }
}

$("body").on("click", ".navbar-toggler", function () {
    if (window.innerWidth <= 1199) {
        $('.stickyMenu').addClass('fixed-menu');
        $('.fixed-menu').addClass('active');
    }
});

$("body").on("click", ".navbar-nav a:not(.dropdown-toggle)", function () {
    $('.offcanvas').offcanvas('hide');
    $('.offcanvas-backdrop').remove();
});
$(window).on('resize', function () {
    $('.offcanvas').offcanvas('hide');
});

/* ======= 2. Menu fixed on scroll End ======= */

/* ======= 3. Progress Bar Start ======= */
$(document).ready(function () {
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        let $progressBar = $('.progress-bar'); // Cache the element
        if ($progressBar.length > 0) { // Check if .progress-bar exists
            let oTop = $progressBar.offset().top - window.innerHeight;
            if (scroll > oTop) {
                $progressBar.addClass("progressbar-active");
            } else {
                $progressBar.removeClass("progressbar-active");
            }
        }
    });
});
/* ======= 3. Progress Bar End ======= */