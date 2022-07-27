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
