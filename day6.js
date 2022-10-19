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
let resp = ''
let categoria = ''
let remover = ''


var lista = prompt('Bem vindo a lista de compras do Tuts\nVamos montar a sua?')

while (lista.toUpperCase() === 'sim') {
    if (listaFrutas.length === 0 && listaLaticinios.length === 0 && listaCongelados.length === 0 && listaDoces.length === 0) {
        montaLista()
        lista = prompt('---------------\nDigite:\nAdicionar - Para adicionar mais um item a lista\nRemover - Para remover um item da lista\nNão - Para finalizar a lista\n---------------')

    } else {
        lista = prompt('---------------\nDigite:\nAdicionar - Para adicionar mais um item a lista\nRemover - Para remover um item da lista\nNão - Para finalizar a lista\n---------------')
    }
        
}

function montaLista() {
    resp = prompt('Qual alimento você gostaria de adiconar?')
    categoria = prompt('---------------\nEm qual categoria o alimento se encaixa?\nDigite:\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n---------------')

    if (categoria == 1) {
        listaFrutas.push(resp)
    } else if (categoria == 2) {
        listaLaticinios.push(resp)
    } else if (categoria == 3) {
        listaCongelados.push(resp)
    } else if (categoria == 4) {
        listaDoces.push(resp)
    } else {
        alert(`${categoria} não é uma categoria válida`)
    }
    
}

alert(`Sua lista de compras:\nFrutas: ${listaFrutas}\nLaticínios: ${listaLaticinios}\nCongelados: ${listaCongelados}\nDoces: ${listaDoces}`)