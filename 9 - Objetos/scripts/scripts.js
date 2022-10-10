var obj = {
	nome: "Matheus",
	idade: 24,
	cidade: "Ocidental",
	profissão: "Programador",
	estaTrabalhando: true
}

console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log(typeof obj.nome);

console.log("O meu nome é: " + obj.nome);

obj.nome = "Aegon"

console.log(obj);

obj.graduacao = false;

console.log(obj);