let ipCamisaP = document.querySelector("#ipCamisaP");
let ipCamisaM = document.querySelector("#ipCamisaM");
let ipCamisaG = document.querySelector("#ipCamisaG");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularPreço(){
    let camisaP = Number (ipCamisaP.value);
    let camisaM = Number (ipCamisaM.value);
    let camisaG = Number (ipCamisaG.value);

    let multiplicaçãoP = camisaP * 10;
    let multiplicaçãoM = camisaM * 12;
    let multiplicaçãoG = camisaG * 15;
    let total = multiplicaçãoP + multiplicaçãoM + multiplicaçãoG;

    h3Resultado.innerHTML = 
    "Valor total arrecadado: "+total;
}

btCalcular.onclick = function(){
    calcularPreço();
}