var idade = 20;
var status = "pago";
var nome = "Matheus";

if(idade >= 20 && status === "pago"){
	console.log("Pode entrar desacompanhado!");
} else {
	console.log("Não pode entrar!");
}

if((1 == 1 && 3 > 2) && true){
	console.log("Passou");
}

if((1 === 1 && 3 > 3) && true){
	console.log("Passou");
} else if (nome === "Matheus" && idade >= 20){
	console.log("Passou aqui!");
}