// Encadeamento opcional e Operador de coalescência nula
type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: ' O título',
    texto: 'O texto ..........',
    // data: new Date(),
}

console.log(documento.data?.toDateString()); // Encadeamento opcional

console.log(documento.data?.toDateString() ?? 'Ixi, não existe data.'); // Operador de coalescência nula
console.log();
