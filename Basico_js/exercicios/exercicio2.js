// const nome = "gamora @$1221"
// console.log(nome) // 'gamora'

// let nomeSemCaracteresEspeciais = nome.replace(/[^a-zA-Z]/g, "")
// console.log(nomeSemCaracteresEspeciais) // 'gamora'

// let nomeUpperCase = nomeSemCaracteresEspeciais.toUpperCase()
// console.log(nomeUpperCase) // 'GAMORA'

const nomedog = "gamora @$1221maria"

let nomeFormatado = removeCaracteresEspeciais(nomedog) 

nomeFormatado = nomeFormatado.toUpperCase()

console.log(nomedog)
console.log(nomeFormatado)

function removeCaracteresEspeciais(nome) {
  return nome.replace(/[^a-zA-Z\s]/g, "")
}


