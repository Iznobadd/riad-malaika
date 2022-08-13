// ---------------- MENU ----------------

window.onscroll = function () {stickyMenu()};

var navbar = document.getElementById('menu');

var sticky = navbar.offsetTop;

function stickyMenu()
{
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


// ---------------- SLIDER ----------------

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
        cover      : true,
        height: '100vh',
        autoplay: true,
        pauseOnHover: false,
        direction: 'ttb',
        rewind: true,
        arrows: false,
        speed: 3600,
        drag: false,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-restaurant', {
        height: '70vh',
        width: '120vh',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-patio', {
        height: '70vh',
        width: '120vh',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-salons', {
        height: '70vh',
        width: '120vh',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-terrasse', {
        height: '70vh',
        width: '120vh',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#chambres1-slider', {
        height: '346px',
        width: '519px',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#chambres2-slider', {
        height: '346px',
        width: '519px',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#chambres3-slider', {
        height: '346px',
        width: '519px',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#chambres4-slider', {
        height: '346px',
        width: '519px',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#chambres5-slider', {
        height: '346px',
        width: '519px',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#chambres6-slider', {
        height: '346px',
        width: '519px',
        arrows: false,
        cover: true,
        autoplay: true,
        type: 'fade',
        pagination: false,
        speed: 1500,
        rewind: true,
    } ).mount();
} );

jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) {
                $('#scrollUp').css('display', 'block');
            }
            else
            {
                $('#scrollUp').css('display', 'none');
            }

        });
    });
});