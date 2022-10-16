//for, while, if e else

const escolha = prompt("Você quer seguir para área de Front-End ou seguir para área de Back-End?\nDigite 1 para Front-End e 2 para Back-End!");

if (escolha == 1) {
    const escolhaFront = prompt("Você quer aprender React ou aprender Vue?\nDigite 1 para React ou 2 para Vue!");
    if (escolhaFront == 1) {
        prompt("React é bem legal! Você quer seguir se especializando na área escolhida (Front-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")
        const escolhaTec = prompt("Legal! Qual técnologia você quer aprender mais? Digite SAIR para parar de digitar")
        
        while (escolhaTec !== 'SAIR') {
            
            alert("Irado!")
        } 
    } else {
        prompt("Vue é bem legal! Você quer seguir se especializando na área escolhida (Front-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")
        const escolhaTec = prompt("Legal! Qual técnologia você quer aprender mais?\n Digite sair para parar de digitar")
        
        while (escolhaTec != "sair") {
            const linguagens = prompt("Digite a linguagem:")
            alert(linguagens);
            const mensagem = prompt("Irado!")
            break
        }
        
    }
    } else {
    const escolhaBack = prompt("Você quer aprender C# ou Java? Digite 1 para C# ou 2 para Java!");
    if (escolhaBack == 1) {
        const escolhaC = prompt("C# é bem legal! Você quer seguir se especializando na área escolhida (Back-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")
        const escolhaTec = prompt("Legal! Qual técnologia você quer aprender mais? Digite SAIR para parar de digitar")
        
        while (escolhaTec != "SAIR") {
            const linguagensFront = prompt("Digite a linguagem:")
            const mensagem = prompt("Irado!")
        } 
    } else {
        const escolhaVue = prompt("Vue é bem legal! Você quer seguir se especializando na área escolhida (Front-End) ou vai seguir se desenvolvendo para se tornar Fullstack?")
        const escolhaTec = prompt("Legal! Qual técnologia você quer aprender mais? Digite SAIR para parar de digitar")
        
        while (escolhaTec != "SAIR") {
            const linguagensFront = prompt("Digite a linguagem:")
            const mensagem = prompt("Irado!")
        }
    }

}
