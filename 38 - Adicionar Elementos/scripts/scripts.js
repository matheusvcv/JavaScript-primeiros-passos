var el = document.createElement('div');

el.classList = "classe-criada";

console.log(el);

container.appendChild(el);

var el2 =  document.createElement('div');
el2.classList = "insert-before";

var divCriada = document.querySelector('#container .classe-criada');

console.log(divCriada);

container.insertBefore(el2, divCriada);