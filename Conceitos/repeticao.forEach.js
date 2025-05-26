const listaDeAlunos = [
    {
        nome: 'Lucas',
        nota: 7
    },
    {
        nome: 'João',
        nota: 8
    },
    {
        nome: 'Maria',
        nota: 9
    },
    {
        nome: 'Ana',
        nota: 10
    },
    {
        nome: 'Pedro',
        nota: 6
    }
];

listaDeAlunos.push({
    nome: 'Carlos',
    nota: 5
});

listaDeAlunos.forEach((aluno, index) => {
    console.log(`Id:${index} Nome: ${aluno.nome} Nota: ${aluno.nota}`);
})