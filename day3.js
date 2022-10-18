//for, while, if e else

const escolha = prompt("Você quer seguir para área de Front-End ou seguir para área de Back-End?\nDigite 1 para Front-End e 2 para Back-End!");

if (escolha == 1) {
    const escolhaFront = prompt("Você quer aprender React ou aprender Vue?\nDigite 1 para React ou 2 para Vue!");
    if (escolhaFront == 1) {
        prompt("React é bem legal! Você quer seguir se especializando na área escolhida (Front-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")        
        
    } else if (escolhaFront == 2){
        prompt("Vue é bem legal! Você quer seguir se especializando na área escolhida (Front-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")        
        
    } else {
        alert("Opção invalida")
    }
} else {
    const escolhaBack = prompt("Você quer aprender C# ou Java?\nDigite 1 para C# ou 2 para Java")

    if (escolhaBack == 1) {
        prompt("C# é bem legal! Você quer seguir se especializando na área escolhida (Back-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")        

    } else if (escolhaBack == 2) {
        prompt("Java é bem legal! Você quer seguir se especializando na área escolhida (Back-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")        

    } else {
        alert("Opção invalida")
    }
}

alert("Tem alguma outra linguagem que você quer aprender?\nDigite SAIR para sair!")

let msg
while (msg !== "SAIR") {
    prompt("Digite uma linguagem:")
    alert("Irado!")
    msg = prompt("Alguma outra linguagem?")

}

alert("Saindo!\nTenho certeza que você se dará muito bem com essas técnologias")