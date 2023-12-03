let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = NumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function ExibirMensagemInicial() {
    ExibirTextoNaTela('h1', 'Jogo do numero secreto');
    ExibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

ExibirMensagemInicial();

function verificarChute() {
    let campo = document.querySelector('input').value;

    if (campo == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
        ExibirTextoNaTela('h1', 'Acertou!');
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (campo > numeroSecreto) {
                ExibirTextoNaTela('p', 'O número secreto é menor');
        } else {
                ExibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
}
}

function NumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return NumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = NumeroAleatorio();
    limparCampo();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById('reinicar').setAttribute('disable', true);
}