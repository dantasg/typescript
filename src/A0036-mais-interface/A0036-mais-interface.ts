// Error
// type Pessoa = {
//     nome: string;
// }

interface Pessoa {
    // readonly não influencia
    readonly nome: string;
};

interface Pessoa {
    sobrenome: string;
};

interface Pessoa {
    readonly enderecos: readonly string[];
};

interface Pessoa {
    readonly idade?: number; // Opcional
};

export const pessoa: Pessoa = {
    nome: 'Genival',
    sobrenome: 'Dantas',
    enderecos: ['Av. Brasil']
};