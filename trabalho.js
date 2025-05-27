// Função que recebe um nome e retorna uma tag de identificação em letras maiúsculas.
function geradorDeTagsDeIdentificacao(nome){
    let nomeFormatado = nome.toUpperCase()

    const tag = {
        nome: nomeFormatado
    }

    return tag.nome
}

// Função que verifica se um pet pode ser adotado com base na idade e no porte.
function verificarSePodeSerAdotado(idade, porte) {
    if (idade >= 1 && (porte === "P" || porte === "M")) {
        return true;
    } else {
        return false;   
    }
}

// Função que calcula a quantidade diária de ração com base no peso do pet.
function calcularConsumoDeRacao(nome, idade, peso) {
    let qtdDiaria = peso * 300
    return qtdDiaria
}

// Função que decide o tipo de atividade adequada para o pet com base no porte.
function decidirTipoDeAtividadePorPorte(porte){
    
    switch (porte) {   
        case "pequeno":
            return "brincar dentro de casa";
        case "medio":
            return "caminhada no quarteirão";
        case "grande":
            return "correr no parque";
        default:
            return "porte não encontrado";
    }
}

// Função que retorna um dado de forma assíncrona.
async function buscarDadoAsync() {
    return "Pipoca";
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}