var nome = prompt("Digite seu nome:")
var idade = prompt("Digite sua idade:")
var ling = prompt("Digite a linguagem que você está aprendendo");

alert("Olá "+nome+" você tem "+idade+" anos e está aprendendo "+ling+"!");

var decisao = prompt("Você gosta de estudar "+ling+"?\n Digite 1 para SIM e 2 para NÃO")

if (decisao == 1) {
	alert("Muito bom! Continue estudando e você terá muito sucesso")
} else {
	alert("Ahh que pena... Já tentou aprender outras linguagens?")
}