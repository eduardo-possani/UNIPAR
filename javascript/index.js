function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

function orderArray() {
    let arr = Array.from({length: 10}, (_, i) => i);
    return arr;
}

function meusDados() {
    let pessoa = {
        nome: 'John Doe',
        idade: 30,
        cidade: 'New York'
    };
    delete pessoa.idade;
    return pessoa;
}

function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão', 'galinha'];
    let ordemAlfabetica = animais.sort();
    let primeiro = animais[0];
    let ultimo = animais[animais.length - 1];
    let tamanhoDaLista = animais.length;

    return {
        ordemAlfabetica,
        primeiro,
        ultimo,
        tamanhoDaLista
    };
}
