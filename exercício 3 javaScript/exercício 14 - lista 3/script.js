let ipValor = document.querySelector("#ipValor");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function dividirConta(){
    let valor = Number (ipValor.value);

    let carlos = Math.trunc (valor / 3);
    let andre = Math.trunc (valor / 3);
    let felipe = valor - (carlos / andre);

    h3Resultado.innerHTML = 
    "Valor que Carlos deve pagar: " +carlos+ "<br>"+
    "Valor que André deve pagar: " +andre+ "<br>"+
    "Valor que Felipe deve pagar: " +felipe;
}

btCalcular.onclick = function (){
    dividirConta();
}