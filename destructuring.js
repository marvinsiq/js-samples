

// Concatenando arrays

let a1 = [1, 2, 3];
console.log("a1: ", a1); // [ 1, 2, 3 ]

let a2 = [4, 5, 6];
console.log("a2: ", a2); // [ 4, 5, 6 ]

let a3 = [...a1, ...a2];
console.log("Concatena a1 e a2: ", a3); // [ 1, 2, 3, 4, 5, 6 ]

console.log("--------------");

// Extraindo valores de um objeto

movie = {
    id: 1,
    title: "Toy Story (1995)",
    genres: "Adventure"
}
// Extrai somente o nome do filme
let { title } = movie;
console.log(title);