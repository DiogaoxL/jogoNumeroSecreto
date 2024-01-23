let listaDeNumeroSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function mostrarNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}

exibirMensagemInicial()

function exibirMensagemInicial() {
  mostrarNaTela('h1', 'Jogo de adivinhar número')
  mostrarNaTela('p', `escolha um numero de 1 a ${numeroLimite}`)
}

function verificarChute() {
  let chute = document.querySelector('input').value

  if (chute == numeroSecreto) {
    mostrarNaTela('h1', 'Acertou!')

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`

    mostrarNaTela('p', mensagemTentativas)

    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (chute > numeroSecreto) {
      mostrarNaTela('p', 'o numero secreto é menor')
    } else {
      mostrarNaTela('p', 'o numero secreto é maior')
    }
  }
  tentativas++
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
  let quantidadeDeNumerosDaLista = listaDeNumeroSorteados.length

  if (quantidadeDeNumerosDaLista == numeroLimite) {
    listaDeNumeroSorteados = []
  }

  if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    listaDeNumeroSorteados.push(numeroEscolhido)
    console.log(listaDeNumeroSorteados)
    return numeroEscolhido
  }
}

function limparCampo() {
  chute = document.querySelector('input')
  chute.value = ''
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  limparCampo()
  tentativas = 1
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true)
}
