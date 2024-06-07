let ipInicio = document.querySelector("#ipInicio");
let ipFim = document.querySelector("#ipFim");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularDias(){
    let inicio = new Date (ipInicio.value);
    let fim = new Date (ipFim.value);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let calculoDias = fim.getTime() - inicio.getTime();
    let divisão = Math.floor (calculoDias / day);

    h3Resultado.textContent = divisão + "dias";
}

btCalcular.onclick = function(){
    calcularDias();
}