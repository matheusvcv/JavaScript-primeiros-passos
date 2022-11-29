let pessoa = {
	
	nome: "Matheus",
	idade: 29,
	falar: function (){
		console.log("Olá, tudo bem?");
	},
	somar: function(a, b){

		return a + b;

	}

};

console.log(pessoa.nome);

pessoa.falar();

soma = pessoa.somar(10, 5);

console.log(soma);