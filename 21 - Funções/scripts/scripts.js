function primeiraFuncao(){

	console.log("Helo World das funções.");
}

primeiraFuncao();

function dizerNome(nome){

	console.log("O nome é: " + nome);
}

dizerNome("Matheus");

var nomeDoBdd = "Registro de dados";

function informaDado(nomeDado){

	console.log(nomeDado);
}

informaDado(nomeDoBdd);

function somaValores(valor1, valor2){

	var soma = valor1 + valor2;

	return soma;
}

var soma1 = somaValores(1, 2);
var soma2 = somaValores(9999999999, 1);

console.log(soma1);
console.log(soma2);


function nomeAnimal(nomeAnimal){

	console.log(nomeAnimal);
}

nomeAnimal("Cavalo");


function cantorEmusica(cantor, musica){

	var ncantor = cantor;
	var nmusica = musica;

	var frase = "O meu cantor preferido é " + ncantor + ". E a minha música preferida é " + nmusica + ".";

	return frase;
}

frase1 = cantorEmusica("Paul McCartney", "BlackBird");

console.log(frase1);

console.log(cantorEmusica("Bob Marley", "Three Little Birds"));