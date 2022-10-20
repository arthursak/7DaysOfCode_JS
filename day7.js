let num1
let num2
let msg
let soma
let sub
let mult
let div


alert('--------------CalculaTuts--------------\n              Bem Vindo!              ')
msg = prompt('Qual operação você gostaria de realizar?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair da calculadora')

while (msg != 5) {
    num1 = prompt('Digite o 1º número')
    num2 = prompt('Digite o 2º número')

    switch (msg) {
        case 1:
            somar();
            break;
        case 2:
            subt();
            break;
        case 3:
            multi();
            break;
        case 4:
            divi();
            break;
        case 5:
            alert('Até mais!')

    }
    msg = prompt('Qual outra operação você gostaria de realizar?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair da calculadora')

}

function somar() {
    soma = num1 + num2
    console.log(soma)
}

function subt() {
    sub = num1 - num2
    alert(sub)
}

function multi() {
    mult = num1 * num2
    alert(mult)
}

function divi() {
    div = num1 / num2
    alert(div)
}