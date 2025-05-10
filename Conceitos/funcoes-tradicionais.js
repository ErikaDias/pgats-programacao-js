// const saudacao = (nome) => {
//     return `Olá ${nome}, tudo bem?`
// }

// console.log(saudacao("Lucas"))
// console.log(saudacao("Ana"))    
// console.log(saudacao("João"))
// console.log(saudacao("Maria"))      

function exibirMensagem(mensagem) {
    console.log(mensagem);
}

function exibirSaudacaoFermatado(nome){
    return nome
}

function obterObjetoDog(){
    return {
        nome: "Rex",
        idade: 5,
        raca: "Labrador",
        cor: "Preto",
        peso: 30,
        vacinado: true,
        dono: {
            nome: "Lucas",
            idade: 25,
            profissao: "Desenvolvedor"
        }
    }
}


console.log(exibirSaudacaoFermatado("Lucas"))
console.log(obterObjetoDog())