// identifique o erro e corrija o código a baixo

function verificarMaiorIdade(idade) {
    //antes estava < que 18 é maior o correto pode ser >= ou inverter as strings
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';

}


//// complete o códigoFaça com que a variável arra tenha uma lista ordenada de de 10 posições de 0 a 9

function orderArray() {
    let arr = [1, 2, 3, 6, 7, 9]
    arr.sort((a, b) => a - b)
    return arr
}

let result = orderArray()

/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo
function meusDados() {
    let pessoa = {
        nome: 'John Doe',
        idade: '30',
        cidade: 'New York'
    };

    return pessoa;
}

let dados = meusDados();


// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short... 
function manipulaArray() {
    let animais = ['cacohrro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];

    animais.sort(); // Ordena o array em ordem alfabética

    return {
        ordemAlfabetica: animais.join(', '), // Transforma o array em uma string separada por vírgulas
        primeiro: animais[0], // Retorna o primeiro elemento do array
        ultimo: animais[animais.length - 1], // Retorna o último elemento do array
        tamanhoDaLista: animais.length // Retorna o tamanho do array
    };
}

let resultado = manipulaArray();

