// Calculadora 
const nome = "Bob"
let pesodod = 10
let estoque = 10000

console.log(`Quantidade de ração para o ${nome} que tem ${pesodod} Kg`)

let qtdDiaria = pesodod * 30
console.log(`Quantidade diaria: ${qtdDiaria} Gramas`)

let qtdEstoqueDias = Math.round(estoque / qtdDiaria)
console.log(`Quantidade de dias que o estoque vai durar: ${qtdEstoqueDias} dias`)