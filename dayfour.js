const numAdvinha = Math.random() * (10 - 1);

var tentativa = prompt("Bem vindo ao jogo de advinha do Tuts!\nTente adivinhar o número em que estou pensando!");
var qntTentativa = 3;

while (qntTentativa != 0) {
    
    if (tentativa == numAdvinha){
        alert(`Parabéns, Você acertou!\nO número era ${numAdvinha}`)
    } else {
        qntTentativa--
        alert(`Tente novamente, você ainda tem ${qntTentativa} chances!`)
        tentativa = prompt("Digite o número: ")
    }
}

alert(`Poxa, infelizmente suas tentativas acabaram!\nO número era ${numAdvinha}`)

