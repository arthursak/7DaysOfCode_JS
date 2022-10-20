let num1
let num2
let msg
let soma
let sub
let mult
let div
let menu
let result

alert('--------------CalculaTuts--------------\n              Bem Vindo!              ')
msg = prompt('O que deseja fazer?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair')
while (msg != 5) {
    num1 = prompt('Digite o 1º número:')
    num2 = prompt('Digite o 2º número:')

    if (msg === 1) {
        somar()
        alert(result)
    }

    msg = prompt('O que deseja fazer?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair')


}
    

    function somar() {
        soma = num1 + num2
        result = (`O resultado de ${num1} + ${num2} é: `,soma)
        return result
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
    
