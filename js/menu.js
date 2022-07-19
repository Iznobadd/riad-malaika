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

var counter = 1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4)
    {
        counter = 1;
    }
}, 5000);

