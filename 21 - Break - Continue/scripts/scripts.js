for(var i = 10; i > 0; i--){

	console.log(i);

	if(i === 5){
		break;
	}
}

console.log("Deu break");

x = 10;

while(x < 100){

	x += 10;

	if(x === 90 || x === 60){

		console.log("Pulou");
		continue;
	}

	console.log("Testando " + x);


}


for(var kakaroto = 8000; kakaroto > 0; kakaroto--){

	console.log(kakaroto);

	if(kakaroto === 7900){

		break;
	}
}

console.log("Deu break");

for(var idade = 30; idade > 0; idade--)
{
	console.log(idade);

	if(idade === 24){

		break;
	}
}

console.log("Deu break");


var ano = 10;

while(ano < 100){

	ano += 10;

	if(ano === 90 || ano === 60){

		console.log("Pulou");

		continue;

	}

	console.log("Testando " + ano);
}