let soma
let num1 
let num2
let multi
let div
let sub
let opr
    
opr = prompt('Que tipo de operação você deseja fazer?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Sair')
while (opr != 0) {
    num1 = prompt('Digite o 1º Número: ')
    num2 = prompt('Digite o 2º Número: ')

    switch (opr){
        case '1':
            somar()
            break
        case '2':
            subtracao()
            break
        case '3':
            multiplica()
            break
        case '4':
            divisao()
            break
        default:
            break
    }
    
    opr = prompt('Quer fazer mais alguma operação?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Sair')

}

sair()


function somar() {
    soma = parseInt(num1) + parseInt(num2)
    alert(`A soma de ${num1} e ${num2} é: `+ soma)
}

function subtracao() {
    sub = num1 - num2
    alert(`A subtração de ${num1} e ${num2} é: `+ sub)
}

function multiplica() {
    multi = num1 * num2
    alert(`A multiplicação de ${num1} e ${num2} é: `+ multi)
}

function divisao() {
    div = num1 / num2
    alert(`A divisão de ${num1} e ${num2} é: `+ div)
}

function sair() {
    alert('...Saindo...\nAté mais!!')
}
