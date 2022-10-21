let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let resp = "";
let categoria = "";
let remover = "";
let posicao = "";

var lista = prompt(
  "---------------\nBem vindo a lista de compras!\nDigite:\nAdicionar - Para adicionar um item a lista\nNão - Para finalizar a lista\n---------------"
);

if (lista.toUpperCase() === "ADICIONAR") {
  montaLista();
}

function montaLista() {
  while (lista.toUpperCase() === "ADICIONAR") {
    resp = prompt("Qual alimento você gostaria de adiconar?");
    categoria = prompt(
      "---------------\nEm qual categoria o alimento se encaixa?\nDigite:\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n---------------"
    );

    if (categoria == 1) {
      listaFrutas.push(resp);
    } else if (categoria == 2) {
      listaLaticinios.push(resp);
    } else if (categoria == 3) {
      listaCongelados.push(resp);
    } else if (categoria == 4) {
      listaDoces.push(resp);
    } else {
      alert(`${categoria} não é uma categoria válida`);
    }

    lista = prompt(
      "---------------\nDigite:\nAdicionar - Para adicionar mais um item a lista\nRemover - Para remover um item da lista\nVer - Para ver a lista\nNão - Para finalizar a lista\n---------------"
    );

    while (lista.toUpperCase() === "VER") {
        verLista()
        lista = prompt(
            "---------------\nDigite:\nAdicionar - Para adicionar mais um item a lista\nRemover - Para remover um item da lista\nNão - Para finalizar a lista\n---------------"
          );
    }

    while (lista.toUpperCase() === "REMOVER") {
      removeLista();
    }
  }
}

function verLista() {
    alert(
        `Sua lista de compras:\nFrutas: ${listaFrutas}\nLaticínios: ${listaLaticinios}\nCongelados: ${listaCongelados}\nDoces: ${listaDoces}`
      );
      
}

function removeLista() {
  categoria = prompt(
    "Em qual categoria está o alimento que você quer remover?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces"
  );

  if (categoria == 1) {
    remover = prompt("Qual alimento você quer remover?");

    if (listaFrutas.includes(remover)) {
      posicao = listaFrutas.indexOf(remover);
      listaFrutas.splice(posicao, 1);
    } else {
      alert("Não foi possivel localizar o alimento!");
      alert("Voltando ao menu...");
    }
  } else if (categoria == 2) {
    remover = prompt("Qual alimento você quer remover?");

    if (listaLaticinios.includes(remover)) {
      posicao = listaLaticinios.indexOf(remover);
      listaLaticinios.splice(posicao, 1);
    } else {
      alert("Não foi possivel localizar o alimento");
      alert("Voltando ao menu...");
    }
    alert("Voltando ao menu...");
  } else if (categoria == 3) {
    remover = prompt("Qual alimento você quer remover?");

    if (listaCongelados.includes(remover)) {
      posicao = listaCongelados.indexOf(remover);
      listaCongelados.splice(posicao, 1);
    } else {
      alert("Não foi possivel localizar o alimento");
      alert("Voltando ao menu...");
    }
  } else if (categoria == 4) {
    remover = prompt("Qual alimento você quer remover?");

    if (listaDoces.includes(remover)) {
      posicao = listaDoces.indexOf(remover);
      listaDoces.splice(posicao, 1);
    } else {
      alert("Não foi possivel localizar o alimento");
      alert("Voltando ao menu...");
    }
  } else {
    alert(`${categoria} não é uma categoria válida`);
  }
  lista = prompt(
    "---------------\nDigite:\nAdicionar - Para adicionar mais um item a lista\nRemover - Para remover um item da lista\nNão - Para finalizar a lista\n---------------"
  );
}

verLista()
