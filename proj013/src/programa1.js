/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada termostato. Essa função deve receber um número no
		parâmetro temperatura. Se a temperatura for menor que zero, a função retorna
		a mensagem "Temperatura negativa". Se for maior que zero, retorna a mensagem
		"Temperatura positiva"
*******************************************************************************/
function termostato(temperatura) {
	if (temperatura < 0) {
		return "Temperatura negativa";
	}else {
		return "Temperatura positiva";
	}
}
/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada boletimEscolar. Essa função deve receber um número
		no parâmetro nota. As notas válidas são de 0 a 10. Se o usuário digitar uma
		nota inválida a função deve retornar "Nota inválida". Depois de receber uma
		nota válida, a função deve retornar "Aprovado" ou "Reprovado". A média para
		aprovação é 60%.
*******************************************************************************/
function boletimEscolar(nota){
	if(nota < 0 || nota > 10){
		console.log("Nota inválida")	;
	}else{
		if (nota < 6){
			console.log("Aluno REPROVADO");
		} else {
			console.log("Aluno APROVADO");
		}
	}
}
boletimEscolar(-2);


/*******************************************************************************
// 	Tarefa 3:
// 		Crie uma função chamada calcularFrete que recebe a sigla do estado como
// 		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo
// 		com a seguinte tabela de preços:
// 		- MG     -> 12,50
// 		- SP     -> 23,90
// 		- RJ     -> 18,20
// 		- Outros -> 35,90
// *******************************************************************************/
var estados = {MG: "12,50",SP: "23,90",RJ: "18,20",Outros: "35,90"}
function calcularFrete(estado){
	if(estado == "MG"){
		console.log(estados.MG);
	}
}
calcularFrete("MG");

// /*******************************************************************************
// 	Tarefa 4:
// 		Crie uma função com o nome calcularAltura. Essa função deve receber um
// 		parâmetro altura e retornar uma mensagem de acordo com a tabela:
// 		- menos que 1,60 -> "baixinho"
// 		- de 1,60 a 1,85 -> "altura normal"
// 		- mais de um 1,85 -> "joga basquete?"
// *******************************************************************************/
function calcularAltura(altura){
	if(altura < 1.6){
		return "baixinho";
	}
	else if(altura >= 1.60 & altura <= 1.85){
		return "altura normal";
	}
	else{
		return "joga basquete?";
	}
}
calcularAltura(1.9)
// /*******************************************************************************
// 	Tarefa 5:
// 		Crie uma função chamada validarSenha. Se a senha for "123456", a função
// 		retorna a mensagem "Login efetuado com sucesso", senão, retorna a mensagem
// 		"Senha inválida".
// *******************************************************************************/
function validarSenha(senha){
	if(senha === "123456"){
		return "Login efetuado com sucesso";
	}
	else{
		return "Senha inválida";
	}
}
validarSenha(123456);
