require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

/* ------------------------------------------------------------------------------- */
/* Función ScrollTop */
let mybutton = document.querySelector("#scroll-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 750) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

/* --------------------------------------------------------------------------------------------- */

