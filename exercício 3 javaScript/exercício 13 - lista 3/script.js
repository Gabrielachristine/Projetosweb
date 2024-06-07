let ipRaio = document.querySelector("#ipRaio");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularArea(){
    let raio = Number (ipRaio.value);

    let calculoRaio = raio * raio;
    let multiplicação = calculoRaio * 3.14;

    h3Resultado.innerHTML = 
    "Area da pizza="+multiplicação;
}

btCalcular.onclick = function(){
    calcularArea();
}