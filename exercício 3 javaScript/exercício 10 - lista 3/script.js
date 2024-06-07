let idTempo = document.querySelector ("#idTempo");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function tempoSemAcidentes(){
    let tempo = Number (idTempo.value);

    let anos = tempo / 365;
    let meses = tempo / 30;
    let dias = tempo;

    h3Resultado.innerHTML = 
    "Tempo em anos: "+anos+ "<br>"+
    "tempo em meses: "+meses+ "<br>"+
    "Tempo em dias: "+dias;
}

btCalcular.onclick = function(){
    tempoSemAcidentes();
}