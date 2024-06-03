// '---ENVIO DOS SINTOMAS PARA A ABA SELECIONADOS---'

const principal = document.querySelector('.selecionados');

function selecionar(sintoma) {
    
    let myDiv = document.createElement('div');
    myDiv.innerHTML = sintoma;
    myDiv.classList.add('campo-tags');
    principal.appendChild(myDiv);

    myDiv.addEventListener('click', function () {
    })
}

// '---LISTA DE SINTOMAS---'

let opcoesSintomas = document.getElementById('listagem');
let sintomas = ['Febre', 'Dor de cabeça', 'Tosse', 'Fadiga', 'Falta de ar', 'Náusea', 'Enjoo'];

window.onload = function () {
    sintomas.map((novosintoma) => {

        let myDiv = document.createElement('div');

        myDiv.innerHTML = novosintoma;
        myDiv.classList.add('opcoes');
        opcoesSintomas.appendChild(myDiv);

        myDiv.addEventListener('click', function () {
            selecionar(novosintoma);
        })
    })
}







