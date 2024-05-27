let ptPrimeiroNome = document.querySelector ("#ptPrimeiroNome");
let ptPrimeiraData = document.querySelector ("#ptPrimeiraData");
let ptSegundoNome = document.querySelector ("#ptSegundoNome");
let ptSegundaData = document.querySelector ("#ptSegundaData");
let ptTerceiroNome = document.querySelector ("#ptTerceiroNome");
let ptTerceiraData = document.querySelector ("#ptTerceiraData");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function identificarPessoaMaisVelha(){
    let nome1 = String (ptPrimeiroNome.value);
    let nome2 = String (ptSegundoNome.value);
    let nome3 = String (ptTerceiroNome.value);
    let ano1 = Number (ptPrimeiraData.value);
    let ano2 = Number (ptSegundaData.value);
    let ano3 = Number (ptTerceiraData.value);

    let idade1 = 2024 - ano1;
    let idade2 = 2024 - ano2;
    let idade3 = 2024 - ano3;

    let escrita1 = nome1;
    let escrita2 = nome2;
    let escrita3 = nome3;

    if(idade2 > idade2, idade1 > idade3){
        alert("Primeira pessoa é mais velha");
    }
    else if(idade2 > idade1, idade2 > idade3){
        alert("Segunda pessoa é mais velha");
    }
    else if(idade3 > idade1, idade3 > idade2){
        alert("Terceira pessoa é mais velha");
    }

    h3Resultado.innerHTML = 
    "nome primeira pessoa:" +escrita1+ " idade:" +idade1+"<br>"+
    "nome segunda pessoa:" +escrita2+ " idade:" +idade2+"<br>"+
    "nome terceira pessoa:" +escrita3+ " idade:" +idade3;

}

btCalcular.onclick = function(){
    identificarPessoaMaisVelha();
}

        