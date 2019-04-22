/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE)
		Crie uma função chamada calcularFrete que recebe a sigla do estado como parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/
function calcularFrete(estado) {

	switch(estado){
		case "MG":
			return "O valor do frete para Minas Gerais é 12,50";
			break;
		case "SP":
			return "O valor do frete para São Paulo é 23,90";
			break;
		case "RJ":
			return "O valor do frete para Rio de Janeiro é 18,20";
			break;
		default:
			return "O valor do frete para outros estados é 35,90";
	}

}
calcularFrete("MG");


/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/

function nomeMes(mes) {
	switch (mes) {
		case 1:
			return "Janeiro";
			break;
		case 2:
			return "Fevereiro";
			break;
		case 3:
			return "Março";
			break;
		case 4:
			return "Abril";
			break;
		case 5:
			return "Maio";
			break;
		case 6:
			return "Junho";
			break;
		case 7:
			return "Julho";
			break;
		case 8:
			return "Agosto";
			break;
		case 9:
			return "Setembro";
			break;
		case 10:
			return "Outubro";
			break;
		case 11:
			return "Novembro";
			break;
		case 12:
			return "Dezembro";
			break;
		default:
			return "Mês inválido";
	}
}
nomeMes(1);

/***************************
	Tarefa 3: (USE SWITCH CASE)
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar,
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica
*******************************************************************************/

function tabelaPeriodica(elemento){
	switch(elemento){
		case "Rh":
		return "Ródio";
		break;

		case "Si":
		return "Sílicio";
		break;

		case "Ba":
		return "Bário";
		break;

		case "Pb":
		return "Chumbo";
		break;

		case "P":
		return "Fósforo";
		break;

		case "Mg":
		return "Magnésio"
		break;

		case "Fr":
		return "Frâncio";
		break;
	}
}

tabelaPeriodica("Mg");
