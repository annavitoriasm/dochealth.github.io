const principal = document.querySelector('.selecionados');
let sintomas = ['Febre'];

function selecionar() {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = 'teste';
    myDiv.classList.add('opcoes');
    principal.appendChild(myDiv);
}


