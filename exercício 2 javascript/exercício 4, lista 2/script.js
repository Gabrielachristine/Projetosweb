let ipSabor = document.querySelector ("#ipSabor");
let ipRefrigerantes = document.querySelector ("#ipRefrigerantes");
let btCalcular = document.querySelector ("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function calcularValorPreço(){
    let escrita = String (ipSabor.value);
    let refrigerante = Number (ipRefrigerantes.value);

    let valorRefrigerante = refrigerante * 7;
    let sabores = escrita;
    let total = refrigerante + 48;

    h3Resultado.innerHTML = 
    "sabores escolhidos:"+sabores+"<br>"+
    "Preço refrigerante: "+refrigerante+"<br>"+
    "Valor total: "+total;
}

btCalcular.onclick = function(){
    calcularValorPreço();
}