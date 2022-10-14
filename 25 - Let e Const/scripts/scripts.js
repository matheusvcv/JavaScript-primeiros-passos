let x = 5;

x = 12;

console.log(x);

	if(1 === 1){

		let x = 35;

		console.log(x);
	}

	console.log(x);


const y = 24;

console.log(y);

//y = 23; => Isso geraria um erro. Não podemos alterar o valor de variáveis declaradas com const.

if(1 === 1){

	const y = 32; //Nesse caso daria certo, pois estamos declara no escopo local do if. Não no escolo global do código.

	console.log(y);
}

for(let x = 0; x <= 10; x++){

	console.log(x);
}