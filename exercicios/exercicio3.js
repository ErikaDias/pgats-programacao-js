const dog = {
    nome: "Gamora",
    idade: 2,
    porte: "pequeno"
  };

  if (dog.idade >= 2 || dog.porte === "pequeno") {
    console.log(`Nome: ${dog.nome}\nIdade: ${dog.idade}\nPermitido Adoção: "Sim"`)
  } else {
    console.log(`Nome: ${dog.nome}\nIdade: ${dog.idade}\nPermitido Adoção: "Não"`)
  }