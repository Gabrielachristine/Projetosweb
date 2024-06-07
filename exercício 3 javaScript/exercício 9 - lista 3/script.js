let ipX1 = document.querySelector("#ipX1");
let ipY1 = document.querySelector("#ipY1");
let ipX2 = document.querySelector("#ipX2");
let ipY2 = document.querySelector("#ipY2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularDistancia(){
    let X1 = Number (ipX1.value);
    let Y1 = Number (ipY1.value);
    let X2 = Number (ipX2.value);
    let Y2 = Number (ipY2.value);

    let subtraçãoX = X2 - X1;
    let subtraçãoY = Y2 - Y1;

    let quadradoX = subtraçãoX * subtraçãoX;
    let quadradoY = subtraçãoY * subtraçãoY;

    let soma = quadradoX + quadradoY;

    let raiz = Math.sqrt(soma);

    h3Resultado.innerHTML = 
    "A distancia entre os dois pontos é: "+raiz;
}

btCalcular.onclick = function(){
    calcularDistancia();
}