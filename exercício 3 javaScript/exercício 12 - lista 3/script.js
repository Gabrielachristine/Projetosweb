let ipNumero = document.querySelector("#ipNumero");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularNumeraçãoDecimal(){
    let numero = Number (ipNumero.value);

    let Centena = numero / 100;
    let Dezena = numero / 10;
    let Unidade = numero / 1;

    h3Resultado.innerHTML = 
    "Quantidade centenas: "+Centena+ "<br>"+
    "Quantidade dezenas: "+Dezena+ "<br>"+
    "Quantidade unidades: "+Unidade;
}

btCalcular.onclick = function(){
    calcularNumeraçãoDecimal();
}