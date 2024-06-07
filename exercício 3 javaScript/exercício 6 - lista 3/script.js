let ipQuilo = document.querySelector("#ipQuilo");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularPreço(){
    let quilo = Number (ipQuilo.value);

    let multiplicação = quilo * 12;

    h3Resultado.innerHTML = 
    "Preço total: "+multiplicação;
}

btCalcular.onclick = function(){
    calcularPreço();
}