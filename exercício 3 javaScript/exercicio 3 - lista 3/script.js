let ipPãesVendidos = document.querySelector("#ipPãesVendidos");
let ipBroasVendidas = document.querySelector("#ipBroasVendidas");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function dinheiroArrecadado(){
    let pães = Number (ipPãesVendidos.value);
    let broas = Number (ipBroasVendidas.value);

    let dinheiroPão = pães * 0.12;
    let dinheiroBroa = broas * 1.50;
    let dinheiroArrecadado = dinheiroPão + dinheiroBroa;
    let poupança = dinheiroArrecadado * 0.1;

    h3Resultado.innerHTML = 
    "Total de dinheiro arrecadado: "+dinheiroArrecadado+ "<br>"+
    "10% destinado à poupança: "+poupança;
}

btCalcular.onclick = function(){
    dinheiroArrecadado();
}