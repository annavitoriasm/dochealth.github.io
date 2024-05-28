// '---ABRIR LISTA DE SINTOMAS---'
const button = document.getElementById('icon-op');
const listSintomas = document.querySelectorAll('.opcoesSintomas');

let n = 0;

function opList() {
    listSintomas[n].classList.toggle('op')
};

button.addEventListener('click', opList);

