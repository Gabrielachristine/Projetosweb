let ipValorDolar = document.querySelector ("#ipValorDolar");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function calcularAumento(){
    let valor1 = Number(ipValorDolar.value);

    let r0 = valor1 * 0.01;
    let r1 = valor1 + r0;

    let r2 = valor1 * 0.02;
    let r3 = valor1 + r2;

    let r4 = valor1 * 0.05;
    let r5 = valor1 + r4;

    let r6 = valor1 * 0.10;
    let r7 = valor1 + r6;

    h3Resultado.innerHTML = 
    "aumento de 1%: "+r1+ "<br>"+
    "aumento de 2%: "+r3+ "<br>"+
    "aumento de 5%: "+r5+ "<br>"+
    "aumento de 10%: "+r7;
}

btCalcular.onclick = function(){
    calcularAumento();
}
