try {
    console.log(`Tentando alimentar o Pet...`)
    throw new Error("Falha ao alimentar o Pet")
} catch (excecao) {
    //console.log("Erro: " + excecao.message);
    console.log(excecao.name);
    console.log(excecao.message);
} finally {
    console.log("Sempre será executado.");
}