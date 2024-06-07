let ipPreçoGasolina = document.querySelector("#ipPreçoGasolina");
let ipPagamento = document.querySelector("#ipPagamento");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularLitros(){
    let gasolina = Number(ipPreçoGasolina.value);
    let pagamento = Number(ipPagamento.value);

    let divisão = pagamento / gasolina;

    h3Resultado.innerHTML = 
    "Total de litros: "+divisão;
}

btCalcular.onclick = function(){
    calcularLitros();
}