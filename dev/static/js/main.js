$(document).ready(function () {

    

//Readmore

$('.more').readmore({
    speed: 100,
    moreLink: '<a href="#" class="more-btn">Продолжить...</a>',
    lessLink: '<a href="#" class="more-btn">Закрыть</a>',
    collapsedHeight: 120,
    maxHeight: 500,
    heightMargin: 16
  });

    //Мобильное меню

    $(function () {
        $(document).on("click", ".mobile_menu_container .parent", function (e) {
            e.preventDefault();
            $(this)
                .siblings("ul")
                .addClass("loaded");
        });
        $(document).on("click", ".mobile_menu_container .back", function (e) {
            e.preventDefault();
            $(this)
                .parent()
                .parent()
                .removeClass("loaded");
        });
        $(document).on("click", ".sandwich", function (e) {
            e.preventDefault();
            $(".mobile_menu_container").addClass("loaded");
            $(".mobile_menu_overlay").fadeIn();
        });
        $(document).on("click", ".mobile_menu_overlay, .mobile_menu_container ul li a", function (e) {
            $(".mobile_menu_container").removeClass("loaded");
            $(".mobile_menu_overlay").fadeOut();
        });
    });
    //-------------------------------------------------------------------------

    //Плавная прокрутка к якорю, выделение активного пункта меню и фиксированная шапка

    $(".navbar").on("click", "a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id = $(this).attr("href"),
            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $("body,html").animate({
                scrollTop: top
            },
            500
        );
    });

    $(window).scroll(function () {
        var $sections = $("section");
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr("id");
            if (scroll > top && scroll < bottom) {
                $("a.active").removeClass("active");
                $(".div.active").removeClass("active");
                $('.div[href="#' + id + '"]').addClass("active");
                $('a[href="#' + id + '"]').addClass("active");
            }
        });
        if ($(this).scrollTop() > "500") {
            $(".navbar").addClass("fixed");
        } else if ($(this).scrollTop() < 500) {
            $(".navbar").removeClass("fixed");
        }
    });

    //--------------------------------------------------------------------------

    //кнопка наверх
    var btn = $(".top");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });

    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
                scrollTop: 0
            },
            "300"
        );
    });
    //---------------------------------------------------------------------------

    //slick слайдер
    $(".header__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToShow: 1,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="static/images/content/arrow-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="static/images/content/arrow-right.svg" alt="arrow-right"></img>',
        draggable: true
    });
    //-------------------------------------------------------------------------------

    //Каталог с фильтрацией по категориям
    var $grid = $(".catalog__content").isotope({
        itemSelector: ".catalog-item",
        layoutMode: "fitRows"
    });
    var filterFns = {
        // show if name ends with -ium
        ium: function () {
            var name = $(this)
                .find(".name")
                .text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $(".filters-button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
        });
    });

    $('.header').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });
});
//-------------------------------------------------------------------------

// Magnific Popup

//Галерея
$(".image-link").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    gallery: {
        enabled: true
    }
});
// Диалоговое окно
$(".popup-with-form").magnificPopup({
    type: "inline",
    focus: "#name"
});
$(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});
//---------------------------------------------------------------------------


//  Faqs Accordion
$(".accordion_tab").click(function () {
    $(".accordion_tab").each(function () {
        $(this).parent().removeClass("active");
        $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");

});



// Полифилы

// forEach IE 11
if ("NodeList" in window && !NodeList.prototype.forEach) {
    console.info("polyfill for IE11");
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
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        "use strict";
        return [].slice.call(object);
    };
}
new WOW().init();

$(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
    
  });

  
