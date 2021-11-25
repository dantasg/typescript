// const objetoA: Record<string, unknown> = {
//         chaveA: 'valor A', 
//         chaveB: 'Valor B'
    
//     } //Exemplo de como tipar objeto

// objetoA.chaveA = 'Outro Valor';
    
// objetoA.chaveC = 'Nova Chave';

const objetoA: {
    readonly chaveA: string; // Não pode ser alterada
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'valor A', 
    chaveB: 'Valor B'
};

// objetoA.chaveA = 'Outro Valor';

objetoA.chaveC = 'Nova Chave'; // Não se pode criar uma nova chave
objetoA.chaveD = 'Mais uma nova chave';
