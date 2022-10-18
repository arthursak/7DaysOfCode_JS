/*
Usar o programa da lista de compras do dia 5
Criar opção de remover algum item da lista 
A opção deve aparecer junto a msg de "Deseja adicionar algum alimento a lista?"
Caso a pessoa queira remover, exibir lista e questionar qual dos alimentos a pessoa quer remover
Após o cliente remover, exibir a lista novamente com a confirmação do item removido
Caso o item não exista na lista, exibir erro
*/

let listaFrutas = []
let listaLaticinios = []
let listaCongelados = []
let listaDoces = []
let msg = ""
let categoria = ""


var lista = prompt("Bem vindo a lista de compras do Tuts\nGostaria de montar a sua?")

while (lista.toUpperCase() != "NÃO") {
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