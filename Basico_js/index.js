// Console de API
console.log('Aula testando');
console.error('Aula testando erro');
console.warn('Aula testando aviso');
console.info('Aula testando info');
console.debug('Aula testando debug');
console.trace('Aula testando trace');
console.assert(1 === 2, 'Aula testando assert');
console.clear('Aula testando clear');
console.time('Aula testando time');
console.timeEnd('Aula testando time');

console.table([
    { name: 'Aula testando', age: 20 }, 
    { name: 'Aula testando', age: 30 }], 
    ['name', 'age']);

console.group('Aula testando group');

// Constantes e Variáveis
// Informações que não mudam
const nome = 'Gamora';
const raca = 'Gato';
const cor = 'Branco e Cinza';
const dataDeNascimento = '';

// Informações que mudam
let idade = 5;
let peso = 2;
let vacinado = false;
let cadastrado = false;
let tamanho = "M";


// hoisting  -> içamento ou elevação de variáveis

// O conceito de hoisting em JavaScript refere-se ao comportamento padrão 
// do interpretador de mover declarações de variáveis e funções para o topo 
// de seu escopo (script ou função) durante a fase de compilação. 
// Isso significa que você pode usar variáveis ou funções antes mesmo de 
// declará-las no código.

// No entanto, é importante entender que apenas as declarações são içadas, 
// não as inicializações. Para variáveis declaradas com var, o valor será 
// undefined até que a inicialização seja encontrada no código. 
// Já as variáveis declaradas com let e const são içadas, mas entram em 
// um estado chamado "zona morta temporal" (temporal dead zone), o que 
// significa que não podem ser acessadas antes de sua declaração.

// Tipos de dados

// String -> Cadeia de caracteres
// Number -> Números inteiros e decimais
// Boolean -> Verdadeiro ou falso   
// Array -> Array ou vetor
// Undefined -> Indefinido
// Bigint -> Números inteiros grandes
// undefined -> Indefinido
// null -> Nulo ou vazio


let letras = "42"; // String
const numero = Number(5); // Number
console.log(Number("5")); // Number
console.log("5"); // String
console.log("5" + 1); // String

// Strings 
// 'Teste' // String simples  
// "Teste" // String dupla
// `Teste` // Template String ou Template Literal	

// Concatenação de strings

const turma = "Turma 2";

console.log("Olá, " + turma + "!"); // Olá, Turma 2!   
// Interpolação de strings
// `${variável}` -> Interpolação de strings
console.log(`Olá, ${turma}!`); // Olá, Turma 2!

// length // Tamanho da string
console.log(turma.length); // 7
// split // Dividir a string em um array
console.log(turma.split(" ")); // [ 'Turma', '2' ], separando por espaço
// slice // Cortar a string em partes
console.log(turma.slice(0, 5)); // Turm, do índice 0 ao 4

console.log(turma.toLowerCase()); // turma 2, transforma em minúsculo
console.log(turma.toUpperCase()); // TURMA 2, transforma em maiúsculo

console.log(turma.includes("2")); // true, verifica se contém o número 2

console.log(turma.replaceAll("2", "3")); // Turma 3, substitui o número 2 por 3

const conceitosLogica = "           Lógica de Programação";
console.log(conceitosLogica.trim()); // Remove os espaços em branco no início e no final da string

console.log(turma.slice(0, 5)); // Retorna os caracteres do índice 0 ao 4

console.log(conceitosLogica.substring(12, 0)); // Retorna os caracteres do índice