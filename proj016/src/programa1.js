/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada diasUteis que retorna um array com todos
		os dias úteis da semana:
		Segunda-feira, Terça-feira, Quarta-feira, Quinta-feira, Sexta-feira
*******************************************************************************/
function diasUteis() {
	var diasdaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
	return diasdaSemana;
}


/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada semanaCompleta, ele deve usar a função diasUteis e  adicionar mais 2 dias, Sábado e Domingo no final do Array usando o comando push. Referência:
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*******************************************************************************/
function semanaCompleta() {
	dia = diasUteis();
	dia.push('Sábado', 'Domingo');
	return dia;
}

/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada tabelaPeriodica que retorna um array de objetos com os 5 primeiros elementos, começando em 1 (hidrogênio) e terminando em 5 (boro) , 0	Cada objeto deve ter a estrutura como mostrado nesse exemplo:
		{ Sigla: 'H', nome: 'Hidrogênio', numeroAtomico: 1 }
		Tabela Periódica para consulta:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica
*******************************************************************************/
function tabelaPeriodica() {
	var elementos = [
		Hidrogênio = {
			Sigla: 'H',
			nome: 'Hidrogênio',
			numeroAtomico: 1
		},
		Hélio = {
			Sigla: 'He',
			nome: 'Hélio',
			numeroAtomico: 2
		},
		Lítio = {
			Sigla: 'Li',
			nome: 'Lítio',
			numeroAtomico: 3
		},
		Berílio = {
			Sigla: 'Be',
			nome: 'Berílio',
			numeroAtomico: 4
		},
		Boro = {
			Sigla: 'B',
			nome: 'Boro',
			numeroAtomico: 5
		}
	]
	return elementos;
}

/*******************************************************************************
	Tarefa 4:
		Crie uma função chamada numerosImpares(limite). Essa função vai receber o
		parâmetro limite conforme mostrado, que definirá até qual número deve ser
		retornado no array.
		Exemplo: numerosImpares(10) deve retornar o array [1, 3, 5, 7, 9]
*******************************************************************************/
function numerosImpares(limite) {
	var espaco = " ";
		for(i = 1; i<= limite; i++){
			espaco = espaco +  " " + i++;	
		}
		return  [espaco];
}
numerosImpares(10);