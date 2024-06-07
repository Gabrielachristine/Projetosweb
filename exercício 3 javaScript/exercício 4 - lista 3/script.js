let ptNome = document.querySelector("#ptNome");
let ptIdade = document.querySelector("#ptIdade");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularDias(){
    let nome = String (ptNome.value);
    let idade = Number (ptIdade.value);

    let escrita = nome;
    let calculoDias = idade * 365;

    if(idade * 365){
        escrita = String (ptNome.value) + calculoDias +"anos.";
    }

    h3Resultado.innerHTML =
    "Resultado: " +nome+ ", você já viveu " +calculoDias+ " dias.";
}

btCalcular.onclick = function(){
    calcularDias();
}