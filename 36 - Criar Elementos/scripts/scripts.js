//createElement

var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

//createTextNode

var conteudo = document.createTextNode("Texto do parágrafo");

//appendChild()

novoParagrafo.appendChild(conteudo);

console.log(novoParagrafo);


var body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrafo);

//inserindo dentro do ID

var el = document.createElement('span');

var container = document.getElementById("container");

el.appendChild(document.createTextNode("Texto do Span"));

container.appendChild(el);