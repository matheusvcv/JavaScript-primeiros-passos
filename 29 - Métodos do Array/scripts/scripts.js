var arr = [1, 2, 3, 4, 5];

//lenght

console.log(arr.length);

//push

arr.push(6);

console.log(arr);

//pop

arr.pop();

console.log(arr);

//unshift

arr.unshift(0);

console.log(arr);

arr.unshift("Coelho");

console.log(arr);

//shift

arr.shift();

console.log(arr);


//acessando o último elemento do array

console.log(arr[arr.length - 1]);

//isArray

console.log(Array.isArray(arr));
console.log(Array.isArray(5));