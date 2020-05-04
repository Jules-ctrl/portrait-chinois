//PARALLAX FUNCTION
document.addEventListener('scroll', () => {
    const top = window.pageYOffset;
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const titre = document.querySelector('.titre');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const seven = document.querySelector('.seven');
    const eight = document.querySelector('.eight');

    one.style.bottom = (-(top * 0) + 'px');
    two.style.bottom = (-(top * 0.2) + 'px');
    titre.style.bottom = (-(top * 0.2) + 'px');
    three.style.bottom = (-(top * 0.3) + 'px');
    four.style.bottom = (-(top * 0.4) + 'px');
    five.style.bottom = (-(top * 0.5) + 'px');
    six.style.bottom = (-(top * 0.6) + 'px');
    seven.style.bottom = (-(top * 0.7) + 'px');
    eight.style.bottom = (-(top * 0.8) + 'px');
});

$(document).ready(function () {
    $('#nav-icon').on("click", function () {
        $(this).toggleClass('open');
        $("div.dark").toggleClass("over");
        $("div.dark").toggleClass("none");
        $("div.liste").toggleClass("active");
        $(".zero").toggleClass("zerounder");
    });

    $('a.lien').on("click", function () {
        $('#nav-icon').toggleClass('open');
        $("div.dark").toggleClass("over");
        $("div.dark").toggleClass("none");
        $("div.liste").toggleClass("active");
    });

    $('.what').on("click", function () {
        $(".info").toggleClass("none");
    });

    $('.lien').on("click", function () {
        var target = $(this).attr("href");
        var scrollValue = $(target).offset().top;
        $("html, body").animate({
            scrollTop: scrollValue
        }, 1000);
    });

    $('.scrolltop').on("click", function () {
        var target = $(this).attr("href");
        var scrollValue = $(target).offset().top;
        $("html, body").animate({
            scrollTop: scrollValue
        }, 1000);
    });

    $('.scroll').on("click", function () {
        var target = $(this).attr("href");
        var scrollValue = $(target).offset().top;
        $("html, body").animate({
            scrollTop: scrollValue
        }, 1000);
    });

});