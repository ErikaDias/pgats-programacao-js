const exibirMansagem = (mensagem) => {
    console.log(mensagem);
}

const exibirNovaMansagem = (mensagem = "Teste") => { return mensagem}
const exibirSaudacaoFermatado = (nome)=> {
    return nome
}

const obterObjetoDog = () => {
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

const dobrar = (numero) => numero * 2

console.log(exibirSaudacaoFermatado("Olá, Lucas"))
console.log(exibirNovaMansagem())
console.log(obterObjetoDog())
console.log(dobrar(5))