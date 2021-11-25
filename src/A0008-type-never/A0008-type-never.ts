export function criaErro(): never {
    throw new Error ('Um erro qualquer');
};

criaErro();