$(document).ready(function () {

    $(function () {
        $(document).on("click", ".mobile_menu_container .parent", function (e) {
            e.preventDefault();
            $(this).siblings("ul").addClass("loaded");
        });
        $(document).on("click", ".mobile_menu_container .back", function (e) {
            e.preventDefault();
            $(this).parent().parent().removeClass("loaded");
        });
        $(document).on("click", ".sandwich", function (e) {
            e.preventDefault();
            $(".mobile_menu_container").addClass("loaded");
            $(".mobile_menu_overlay").fadeIn();
        });
        $(document).on("click", ".mobile_menu_overlay", function (e) {
            $(".mobile_menu_container").removeClass("loaded");
            $(this).fadeOut();
        });
    })

    $(".navbar").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({
            scrollTop: top
        }, 500);
    });


    $(window).scroll(function () {
        var $sections = $('section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('.div.active').removeClass('active');
                $('.div[href="#' + id + '"]').addClass('active');
                $('a[href="#' + id + '"]').addClass('active');
            }
        })
        if ($(this).scrollTop() > '500') {
            $('.navbar').addClass('fixed');
        } else if ($(this).scrollTop() < 500) {
            $('.navbar').removeClass('fixed');
        }
    });

    var btn = $('.top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToShow: 1,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="static/images/content/arrow-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="static/images/content/arrow-right.svg" alt="arrow-right"></img>',
        draggable: true
    })

    // Modal
    $('[data-modal=buy]').on('click', function () {
        $('.overlay, #buy').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #buy').fadeOut('slow');
        $('form').trigger('reset');
    });


    screensCarousel: function () {
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.js-filter-all').on('click', function () {
            $('.filtering').slickUnfilter();
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-one').on('click', function () {
            $('.filtering').slickFilter('.one');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-two').on('click', function () {
            $('.filtering').slickFilter('.two');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-three').on('click', function () {
            $('.filtering').slickFilter('.three');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

    }

});

$(document).on('opening', '.remodal', function () {
    console.log('opening');
});

$(document).on('opened', '.remodal', function () {
    console.log('opened');
});

$(document).on('closing', '.remodal', function (e) {
    console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('closed', '.remodal', function (e) {
    console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('confirmation', '.remodal', function () {
    console.log('confirmation');
});

$(document).on('cancellation', '.remodal', function () {
    console.log('cancellation');
});

//  Usage:
//  $(function() {
//
//    // In this case the initialization function returns the already created instance
//    var inst = $('[data-remodal-id=modal]').remodal();
//
//    inst.open();
//    inst.close();
//    inst.getState();
//    inst.destroy();
//  });

//  The second way to initialize:
$('[data-remodal-id=modal2]').remodal({
    modifier: 'with-red-theme'
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}



screensCarousel: function () {
    // Screens Carousel
    $('.filtering').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.js-filter-all').on('click', function () {
        $('.filtering').slickUnfilter();
        $('.filter a').removeClass('active');
        $(this).addClass('active');
    });

    $('.js-filter-one').on('click', function () {
        $('.filtering').slickFilter('.one');
        $('.filter a').removeClass('active');
        $(this).addClass('active');
    });

    $('.js-filter-two').on('click', function () {
        $('.filtering').slickFilter('.two');
        $('.filter a').removeClass('active');
        $(this).addClass('active');
    });

    $('.js-filter-three').on('click', function () {
        $('.filtering').slickFilter('.three');
        $('.filter a').removeClass('active');
        $(this).addClass('active');
    });

},