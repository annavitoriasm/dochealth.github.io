const nav = document.querySelectorAll('.navbar');
const btn = document.getElementById('open-nav');
let idk = 0;

function open() {
    nav[idk].classList.add('open')
};
function close() {
    nav.forEach(element => element.classList.remove('open'))
};

btn.addEventListener('click', open);
// btn.addEventListener('click', close);
