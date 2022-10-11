var idade = 16;
var nome = "Matheus";

if(nome === "Matheus" || idade === 16){
	console.log("Pode entrar na aula!");
}else {
	console.log("Não pode entrar!");
}

if(nome == "Matheus" && 15 > 20 || 10 == 10){
	console.log("Passou no teste");
}

if(10 == 10 || nome == "Matheus" && 15 >20 ){
	console.log("Passou no teste");
}

if((nome == "Pedro" || 15 > 20) && 10 == 10){
	console.log("Passou");
}else {
	console.log("Não passou");
}