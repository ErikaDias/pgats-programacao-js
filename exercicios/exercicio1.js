const nome = 'Gamora', raca = 'gato'
let idade = 2, peso = 2, adotado = true;

// Crie um objeto chamado tag com as propriedades nome, idade, peso, raca e adotado

let nomeUpperCase = nome.toUpperCase()
let racaFistLetter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase() 
// Pega o g e colocar em maisculo e o resto em minusculo

const tag = {
    nome: nomeUpperCase,
    idade: idade,
    peso: peso,
    raca: racaFistLetter,
}

console.table(tag)
let teste1 = 'JavaScript'
let teste2 = teste1.charAt(4)

console.log(teste2) // 'S'