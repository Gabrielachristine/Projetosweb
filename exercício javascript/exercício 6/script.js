let ipPrimeiroNumero = document.querySelector("#ipPrimeiroNumero");
let ipSegundoNumero = document.querySelector("#ipSegundoNumero");
let ipTerceiroNumero = document.querySelector("#ipTerceiroNumero");
let ipQuartoNumero = document.querySelector("#ipQuartoNumero");
let btNumeroMenor = document.querySelector("#btNumeroMenor");

function RetornarNumerorMenor(){
    let valor1 = Number (ipPrimeiroNumero.value);
    let valor2 = Number (ipSegundoNumero.value);
    let valor3 = Number (ipTerceiroNumero.value);
    let valor4 = Number (ipQuartoNumero.value);
    if(valor1 < valor2, valor1 < valor3, valor1 < valor4) {
        alert (valor1);
    }
    else if(valor2 < valor1, valor2 < valor3, valor2 < valor4){
        alert (valor2);
    }
    else if(valor3 < valor1, valor3 < valor2, valor3 < valor4){
        alert (valor3);
    }
    else{
        alert (valor4);
    }
}

btNumeroMenor.onclick = function(){
    RetornarNumerorMenor();
}
