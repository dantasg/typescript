enum Cores {
    VERMELHO = 10, // 0
    AZUL = 20, // 1
    AMARELO = 30, // 2
    ROXO = 'ROXO',
    VERDE = 40, // Ele não consegue continuar, porque não sabe como por causa da string no indice anterior, então precisamo colocar o tipo.
    ROSA, // Ele já consegue continuar, por conta do tipo "int = 40" colocado no intem anterior.
};

// // console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[0]); // undefined
// console.log(Cores[10]);

export function escolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
};

// escolhaACor(Cores.ROXO);
escolhaACor(123456); // Não gera erro