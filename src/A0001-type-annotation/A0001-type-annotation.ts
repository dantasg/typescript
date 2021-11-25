/* eslint-disable */
let nome: string = 'Genival'; // Qualquer tipoded strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true, false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint
let nulo: null = null; // nulo

// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['a', 'b'];
let arrayDeString2: string[] = ['a', 'b'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Genival',
    idade: 20,
};

// Funções

function soma(x: number, y: number) {
    return x + y;
}

// const result = soma(2, 2);

const soma2: (x: number, y:number) => number = (x, y) => x + y;

