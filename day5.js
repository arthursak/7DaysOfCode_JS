let listaFrutas = []
let listaLaticinios = []
let listaCongelados = []
let listaDoces = []
let msg = ""
let categoria = ""


var lista = confirm("Bem vindo a lista de compras do Tuts\nGostaria de montar a sua?")

while (lista != false) {
    msg = prompt("Qual comida você gostaria de adicionar?")
    categoria = prompt("Em qual categoria esse alimento se encaixa?\nDigite 1 para Frutas, 2 para laticínios, 3 para congelados e 4 para doces!")
    
    if (categoria == 1) {
        listaFrutas.push(msg)
    } else if (categoria == 2) {
        listaLaticinios.push(msg)
    } else if (categoria == 3) {
        listaCongelados.push(msg)
    } else if (categoria == 4) {
        listaDoces.push(msg)
    } else {
        alert(`A categoria ${categoria} não é valida, escolha novamente`)

    }

    lista = confirm("Gostaria de adicionar mais algum alimento a sua lista?")

}

alert(`Sua lista de compras:\nFrutas: ${listaFrutas}\nLaticínios: ${listaLaticinios}\nCongelados: ${listaCongelados}\nDoces: ${listaDoces}`)