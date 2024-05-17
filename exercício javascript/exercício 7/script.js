let ipValor = document.querySelector("#ipValor");
let btVerificar = document.querySelector("#btVerificar");

function verificarNumero(){
    let valor = Number (ipValor.value);
    if(valor % 2 == 0){
        alert("este valor é par!");
    }else{
        alert("este valor é ímpar");
    }
}

btVerificar.onclick = function(){
    verificarNumero();
}
