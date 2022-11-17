//length

var nome = "Matheus";

console.log(nome.length);

var penal =  "Para os efeitos penais, consideram-se como extensão do território nacional as embarcações e aeronaves brasileiras, de natureza pública ou a serviço do governo brasileiro onde quer que se encontrem, bem como as aeronaves e as embarcações brasileiras, mercantes ou de propriedade privada, que se achem, respectivamente, no espaço aéreo correspondente ou em alto-mar. (Redação dada pela Lei nº 7.209, de 1984)";

console.log(penal.length);

console.log("Matheus".length);

//indexOf

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de Roma";

console.log(frase.indexOf("roeu"));

//slice

var removeRoeu = frase.slice(7, 11);
console.log(removeRoeu);

//replace

var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);
