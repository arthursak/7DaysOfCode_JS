
let listaFrutas = [] 
let listaLaticinios = []
let listaCongelados = []
let listaDoces = []
let resp = ''
let categoria = ''
let remover = ''


var lista = prompt('---------------\nBem vindo a lista de compras do Tuts\nDigite:\nAdicionar - Para adicionar um item a lista\nNão - Para finalizar a lista\n---------------')

if (lista.toUpperCase() === 'ADICIONAR') {
    if (listaFrutas.length === 0 && listaLaticinios.length === 0 && listaCongelados.length === 0 && listaDoces.length === 0) {
        montaLista()

    } else if (lista.toUpperCase() === 'REMOVER'){
        removeLista()
    }
        
}

function montaLista() {

    while (lista.toUpperCase() === 'ADICIONAR') {
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
        lista = prompt('---------------\nDigite:\nAdicionar - Para adicionar mais um item a lista\nRemover - Para remover um item da lista\nNão - Para finalizar a lista\n---------------')

    }
}

function removeLista() {
    alert('Removido')
}

alert(`Sua lista de compras:\nFrutas: ${listaFrutas}\nLaticínios: ${listaLaticinios}\nCongelados: ${listaCongelados}\nDoces: ${listaDoces}`)