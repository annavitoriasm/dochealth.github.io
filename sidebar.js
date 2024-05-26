const nav = document.querySelectorAll('.navbar');
const btn = document.getElementById('open-nav');
let idk = 0;

function close() {
    nav[idk].classList.toggle('close')
};

btn.addEventListener('click', close);

