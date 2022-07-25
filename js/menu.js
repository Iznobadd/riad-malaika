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
        speed: 800,
    } ).mount();
} );
