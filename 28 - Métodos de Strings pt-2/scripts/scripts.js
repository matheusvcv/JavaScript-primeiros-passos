//toUpperCase e toLowerCase

var frase = "Essa É A Frase Que Iremos Manipular."

console.log(frase);

var fraseMaiuscula = frase.toUpperCase();
var fraseMinuscula = frase.toLowerCase();

console.log(fraseMaiuscula);
console.log(fraseMinuscula);

//trim

var nome = "           Matheus Vinicius          ";

console.log(nome);

var nomeTrim = nome.trim();

console.log(nomeTrim);

//split

frase1 = "Por mínimo que seja o que um homem possua, sempre descobre que pode contentar-se ainda com menos.";

console.log(frase1);

var novaFrase = frase1.split(" ");

console.log(novaFrase);

//lastIndexOf

var frase2 = "Eu quero a ultima palavra teste, desta frase de teste";

console.log(frase2.lastIndexOf('teste'));

console.log(frase2.indexOf('teste'));