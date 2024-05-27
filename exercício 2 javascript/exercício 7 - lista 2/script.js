let ipNumero1 = document.querySelector("#ipNumero1");
let ipNumero2 = document.querySelector("#ipNumero2");
let btVerificar = document.querySelector("#btVerificar");

function verificarNumeros(){
    let numero1 = Number(ipNumero1.value);
    let numero2 = Number(ipNumero2.value);

    if(numero1 > numero2){
        alert("Primeiro número é maior.");
    }
    else if(numero1 < numero2){
        alert("Primeiro número é menor.");
    }
    else if(numero1 == numero2){
        alert("Os números são iguais.");
    }
}

btVerificar.onclick = function(){
    verificarNumeros();
}