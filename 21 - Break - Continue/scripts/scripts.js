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