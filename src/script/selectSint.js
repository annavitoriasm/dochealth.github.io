// '---SELECIONAR OS SINTOMAS---'


// const principal = document.querySelector('.selecionados');

// function selecionar(sintoma) {
//     let myDiv = document.createElement('div');
//     myDiv.innerHTML = sintoma;
//     myDiv.classList.add('opcoes');
//     principal.appendChild(myDiv);
// }

const opcoesSintomas = document.querySelectorAll('.opcoesSintomas');
let sintomas = ['Febre', 'Dor de cabeça'];

sintomas.map((novosintoma, index) => {

    let myDiv = document.createElement('div');
    myDiv.innerHTML = novosintoma;
    myDiv.classList.add('opcoes');
    opcoesSintomas.appendChild(myDiv);

})



