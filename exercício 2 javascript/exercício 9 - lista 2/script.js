let ipNumeroAlunos = document.querySelector("#ipNumeroAlunos");
let ipNumeroSalas = document.querySelector("#ipNumeroSalas");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function dividirAlunosporSalas(){
    let alunos = Number (ipNumeroAlunos.value);
    let salas = Number (ipNumeroSalas.value);

    let dividir = (alunos/salas);

    h3Resultado.innerHTML = 
    "quantidade de alunos por sala: "+dividir;
}

btCalcular.onclick = function(){
    dividirAlunosporSalas();
}
