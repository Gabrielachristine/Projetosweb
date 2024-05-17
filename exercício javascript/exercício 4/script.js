let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
    let vlr3 = Number(ipValor3.value);

    //Calcular a média aritmética
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;
    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos;

    //Soma das médias
    let somaMedias = mediaAritmetica + mediaPonderada;

    //Média das médias
    let mediaMedias = somaMedias / 2;

    h3Resultado.textContent = "Media Aritmetica: "+mediaAritmetica+
    "Media Ponderada: "+mediaPonderada+ 
    "Soma das Medias: "+somaMedias+
    "Media das Medias: "+somaMedias; 
}

btCalcular.onclick = function(){
    calcular();
}