let x = 10;
x = 0b1010;
// x = 'Genival'; // Não pode 
const y = 10;
let a = 100 as const;


const pessoa = {
    nome: 'Genival',
    sobrenome: 'Dantas'
};

pessoa.sobrenome = 'Dantas de Resende'; // Pode ser alterado.


const pessoa2 = {
    nome: 'Genival', 
    sobrenome: 'Dantas' as const
}

// pessoa2.sobrenome = 'Dantas de Resende'; // Não pode ser alterado.


function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Amarelo') {
    return cor;
}

console.log(escolhaCor('Verde'));

// Module mode
export default 1;