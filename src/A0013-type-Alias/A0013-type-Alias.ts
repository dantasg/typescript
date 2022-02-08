type Idade = number;

type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida ?: string;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    nome: 'Genival',
    idade: 20,
    salario: 200_000 // 200.000,00
};


export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Preto')); /// Não muda o OBJ original;