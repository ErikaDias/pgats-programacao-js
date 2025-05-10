//const nome = "Gamora"
// let peso = 10

function verificaPorte(nome, peso) {
    peso <= 10 ? console.log(`Nome: ${nome}\nPeso: ${peso} anos\nPorte: Pequeno`) 
    : peso <= 20 ? console.log(`Nome: ${nome}\nPeso: ${peso} anos\nPorte: Medio`) 
    : console.log(`Nome: ${nome}\nPeso: ${peso} anos\nPorte: Grande`)
}

verificaPorte("Gamora", 10)