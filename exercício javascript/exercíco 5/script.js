let ipPrimeiroNumeroInformado = document.querySelector("#ipPrimeiroNumeroInformado");
let ipSegundoNumeroInformado = document.querySelector("#ipSegundoNumeroInformado");
let btNumeroMaior = document.querySelector("#btNumeroMaior");

function RetornarValorMaior(){
    let valor1 = Number(ipPrimeiroNumeroInformado.value);
    let valor2 = Number(ipSegundoNumeroInformado.value);
    if(valor1 > valor2) {
        alert (valor1);
    }
    else{
        alert (valor2);
    }
}

btNumeroMaior.onclick = function(){
    RetornarValorMaior();
}