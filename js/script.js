const navbar = document.querySelector('.navbar');
const navbar_open = document.querySelector('.bars-navbar');
const navbar_close = document.querySelector('.x-navbar-none');

navbar_open.addEventListener('click', show);
navbar_close.addEventListener('click', close);

function show() {
    navbar.className = "navbar navbar-open";
    navbar_open.className = "display-none";
    navbar_close.className = "x-navbar";
}

function close() {
    navbar.className = "navbar";
    navbar_open.className = "bars-navbar";
    navbar_close.className = "display-none";
}