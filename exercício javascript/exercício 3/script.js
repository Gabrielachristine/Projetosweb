let ipReajuste = document.querySelector("#ipReajuste");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularReajuste() {
    let valorReajuste = Number (ipReajuste.value);
    let calculo = valorReajuste * 1.01;
    resultado.textContent = calculo;
}

btCalcular.onclick = function(){
    calcularReajuste()
}