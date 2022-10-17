let listaFrutas = []
let listaLaticinios = []
let listaCongelados = []
let listaDoces = []
let msg = ""


alert("Monte sua lista de compras!\nCaso a lista esteja completa, digite sair!")

while (msg !== "sair") {
    msg = prompt("Quais produtos você quer inserir na lista de compras?")

    if (msg === "Laranja"){
        listaFrutas.push(msg)

    } else if (msg === "Mortadela"){
        listaCongelados.push(msg)

    }
}

alert(`Sua lista de compras:\nFrutas: ${listaFrutas}\nCongelados: ${listaCongelados}`)