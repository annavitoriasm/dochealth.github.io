// '---SELECIONAR OS SINTOMAS---'
const principal = document.querySelector('.selecionados');

function selecionar(sintoma) {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = sintoma;
    myDiv.classList.add('opcoes');
    principal.appendChild(myDiv);
}


let sintomas = ['Febre', 'Dor de cabeça'];

sintomas.map((novosintoma, index) => )



