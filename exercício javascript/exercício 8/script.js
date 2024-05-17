let ipCodigo = document.querySelector("#ipCodigo");
let btProcurar = document.querySelector("#btProcurar");

function procurarProduto(){
    let codigo = Number (ipCodigo.value);
    if(codigo == 0o1){
        alert("Parafuso");
    }
    else if(codigo == 0o2){
        alert("porca");
    }
    else if(codigo == 0o3){
        alert("prego");
    }
    else if(codigo != 0o1, 0o2, 0o3){
        alert("código invalido!")
    }
}

btProcurar.onclick = function(){
    procurarProduto();
}

