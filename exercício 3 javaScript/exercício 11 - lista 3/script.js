let ipSalario = document.querySelector("#ipSalario");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularSalario(){
    let salario = Number (ipSalario.value);

    let aumento = salario * 0.15;
    let aumento2 = salario + aumento;

    let desconto = aumento2 * 0.08;
    let desconto2 = aumento2 - desconto;
    
    h3Resultado.innerHTML = 
    "Sálario inicial: "+salario+ "<br>"+
    "Sálario com aumento de 15%: "+aumento2+ "<br>"+
    "Sálario com desconto de 8%: "+desconto2+ "<br>"+
    "Sálario total: "+desconto2;
}

btCalcular.onclick = function(){
    calcularSalario();
}