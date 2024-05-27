let ipValor1 = document.querySelector ("#ipValor1");
let ipValor2 = document.querySelector ("#ipValor2");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function calcular(){
    let valor1 = Number(ipValor1.value);
    let valor2 = Number(ipValor2.value);

    let adição = (valor1 + valor2);

    let subtração = (valor1 - valor2);

    let multiplicação = (valor1 * valor2);

    let divisão = (valor1 / valor2);

    h3Resultado.innerHTML = 
    "adição: "+adição+ "<br>"+
    "subtração: "+subtração+ "<br>"+
    "multiplicação: "+multiplicação+ "<br>"+
    "divisão: "+divisão;
}

btCalcular.onclick = function(){
    calcular();
}