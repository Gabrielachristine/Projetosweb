let ipBase = document.querySelector ("#ipBase");
let ipAltura = document.querySelector ("#ipAltura");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function calcularArea(){
    let valor1 = Number(ipBase.value);
    let valor2 = Number(ipAltura.value);

    let area = valor1 * valor2;

    h3Resultado.innerHTML = 
    "Area do terreno: " +area;
}

btCalcular.onclick = function(){
    calcularArea();
}