let ipValorVendido = document.querySelector("#ipValorVendido");
let ipMeta = document.querySelector("#ipMeta");
let ipMetaMinima = document.querySelector("#ipMetaMinima");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarMetas(){
    let valorVendido =  Number (ipValorVendido.value);
    let meta =  Number (ipMeta.value);
    let metaMinima =  Number (ipMetaMinima.value);

    if(valorVendido >= meta){
        alert("Meta atingida.");
    }else if( valorVendido >= metaMinima){
        alert("Meta mínima atingida.");
    }else if(valorVendido < meta, valorVendido < metaMinima){
        alert("Nenhuma meta atingida.");
    }

    let percentualMeta = valorVendido / meta;
    let percentualMetaMinima = valorVendido / metaMinima;

    h3Resultado.innerHTML =
    "Percentual atingimento de meta: "+percentualMeta+ "<br>"+
    "Percentual atingimento de meta mínima: "+percentualMetaMinima;
}

btCalcular.onclick = function(){
    verificarMetas();
}