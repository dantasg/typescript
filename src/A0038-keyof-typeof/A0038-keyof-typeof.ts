// type CoresObj= {
//     vermelho: string;
//     verde: string;
//     azul: string;
// };

// const coresObj: CoresObj = {
//     vermelho: 'red',
//     verde: 'green',
//     azul: 'blue',
// };

// function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: typeof coresObj) {
//     return cores[cor];
// }

// console.log(traduzirCor('vermelho', coresObj));
// console.log(traduzirCor('verde', coresObj));

// ===============================================================================

type CoresObj = typeof coresObj;
type CoresChave = keyof CoresObj;

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
    roxo: 'purple',
};
 
function traduzirCor(cor: CoresChave, cores: CoresObj) {
    return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('roxo', coresObj));