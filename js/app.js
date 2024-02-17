function comprar(){
    //recuperar elementos

    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    alert(tipo.value);
    alert(qtd);

    //conferir disponibilidade

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else {
        comprarInferior(qtd);
    }
    //baixar disponiveis
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd<= qtdPista){
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada');
    }else{
        alert('Quantidade solicitada indisponivel')
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd<= qtdSuperior){
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada');
    }else{
        alert('Quantidade solicitada indisponivel')
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd<= qtdInferior){
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada');
    }else{
        alert('Quantidade solicitada indisponivel')
    }
}