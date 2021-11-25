const dadosCliente1: [number, string] = [1, 'Genival'];
const dadosCliente2: [number, string, string] = [1, 'Genival', 'Dantas'];
const dadosCliente3: [number, string, string?] = [1, 'Genival']; // Terceiro item é opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Genival']; // Quantos intem a mais quiserem, porém todos tem que ser string
const dadosCliente5: readonly [number, string] = [1, 'Genival']; // Nâo pode ser mudado


dadosCliente1[0] = 100;
dadosCliente1[1] = 'Genival Dantas';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly
const array1: readonly string[] = ['Genival', 'Dantas'];
const array2: ReadonlyArray<string> = ['Genival', 'Dantas'];

console.log(array1);
console.log(array2);
