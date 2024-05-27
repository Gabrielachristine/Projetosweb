let ipNota = document.querySelector("#ipNota");
let btVerificar = document.querySelector("#btVerificar");

function verificarNota(){
    let nota = Number(ipNota.value);
    if(nota >= 6.0){
        alert("Aluno Aprovado.");
    }
    else if(nota <=6.0, nota >= 4.0){
        alert("Precisa fazer prova substutiva.");
    }else{
        alert("Aluno reprovado.");
    }

}

btVerificar.onclick = function(){
    verificarNota();
}