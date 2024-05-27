let ipNumero = document.querySelector("#ipNumero");
let btVerificar = document.querySelector("#btVerificar");

function verificarNumero(){
    let valor = Number (ipNumero.value);
    if(valor % 2 == 0){
        alert("este valor é par!");
    }else{
        alert("este valor é ímpar");
    }
}

btVerificar.onclick = function(){
    verificarNumero();
}