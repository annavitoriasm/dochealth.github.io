// '---SELECIONAR OS SINTOMAS---'


const principal = document.querySelector('.selecionados');

function selecionar(sintoma) {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = sintoma;
    myDiv.classList.add('opcoes');
    principal.appendChild(myDiv);

    myDiv.addEventListener('click', function () {
        console.log('teste');
    })
}

let opcoesSintomas = document.getElementById('listagem');
let sintomas = ['Febre', 'Dor de cabeça', 'Tosse', 'Gripe'];

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







