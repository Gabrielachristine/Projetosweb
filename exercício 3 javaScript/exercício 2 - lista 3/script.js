let ipQuantidadeCavalos = document.querySelector ("#ipQuantidadeCavalos");
let btMultiplicar = document.querySelector ("#btMultiplicar");
let h3Resultado = document.querySelector ("#h3Resultado");

function multiplicarCavalos(){
    let cavalos = Number (ipQuantidadeCavalos.value);
    
    let multiplicar = cavalos * 4;

    h3Resultado.innerHTML = 
    "Quantidade de ferraduras necessárias: " +multiplicar;
}

btMultiplicar.onclick = function(){
    multiplicarCavalos();
}
