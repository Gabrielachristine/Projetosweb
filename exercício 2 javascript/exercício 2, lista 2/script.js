let ipNumeroPessoas = document.querySelector ("#ipNumeroPessoas");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function calcularOvoseQueijo(){
    let valor = Number (ipNumeroPessoas.value);

    let calcularOvos = valor * 2;
    let calcularQueijo = valor * 50;

    h3Resultado.innerHTML = 
    "quantidade de ovos: "+calcularOvos+ "<br>"+
    "Gramas de queijo: "+calcularQueijo;
}

btCalcular.onclick = function(){
    calcularOvoseQueijo();
}