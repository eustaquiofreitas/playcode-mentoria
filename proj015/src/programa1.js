/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada numerosAte20 que deve retornar todos os números
		de 0 a 20 devidamente separados por espaço.
		Exemplo: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
	
*******************************************************************************/
function numerosAte20() {
	var numero = " ";
	var i;
	for (i = 0; i<= 20; i++){
		numero = numero + " "  +i;
	}
	return numero;
}
console.log("Tarefa: 1>>" +numerosAte20());

/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada numerosImpares, que recebe um parâmetro chamado
		limite. Essa função deve retornar todos os números ímpares devidamente sepa-
		rados por espaço até o limite definido pelo valor passado no parâmetro.
		Exemplo: numerosImpares(9) deve retornar 1 3 5 7 9
*******************************************************************************/
function numerosImpares(limite) {
	var espaco = " ";
		for(i = 1; i<= limite; i++){
			espaco = espaco+ " " + i++;	
		}
		return limite = [espaco];
}
numerosImpares(50);

/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada contagemRegressiva. Essa função vai retornar todos
		os números em ordem regressiva de 100 a 0, devidamente separados por espaço.
		Exemplo: 100 99 98 97 96 95 94 93 92 91 90 89 .. 7 6 5 4 3 2 1 0
*******************************************************************************/
function contagemRegressiva() {
	var numero = " ";
	var i;
	for (i = 100; i >= 0; i--) {
		numero = numero + " "  +i;
	}
	return numero;
}
console.log("Tarefa: 3>>" +contagemRegressiva());

// atividades exercicio 1933