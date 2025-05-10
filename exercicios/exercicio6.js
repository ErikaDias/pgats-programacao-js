
// nome = "Gamora"
// porte = "pequeno"
// tempoAtividade = 16

// let atividade
// switch (porte) {   
//     case "pequeno":
//         atividade = "brincar dentro de casa"
//         break; 
//     case "médio":
//         atividade = "caminhada no quarteirão"
//         break;
//     case "grande":
//         atividade = "correr no parque"
//         break;
//     default:
//         console.log("porte não encontrado")
//         break;
// }

// if (tempoAtividade < 15){
//     console.log(`atividade rapída: ${atividade}`)
// } else if (tempoAtividade <= 30){
//     console.log(`tempo ideal: ${atividade}`)
// } else if (tempoAtividade > 30){
//     console.log(`hora da diversão: ${atividade}`)
// }

function exibirAtidade(nome, porte, tempoAtividade){
    let atividade
    switch (porte) {   
        case "pequeno":
            atividade = "brincar dentro de casa"
            break; 
        case "medio":
            atividade = "caminhada no quarteirão"
            break;
        case "grande":
            atividade = "correr no parque"
            break;
        default:
            console.log("porte não encontrado")
            break;
    }
   
    if (tempoAtividade < 15){
        console.log(`${nome}, atividade rapída: ${atividade}`)
    } else if (tempoAtividade <= 30){
        console.log(`${nome}, tempo ideal: ${atividade}`)
    } else if (tempoAtividade > 30){
        console.log(`${nome}, hora da diversão: ${atividade}`)
    }
}

exibirAtidade("Gamora", "medio", 30)