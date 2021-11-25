function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Genival',
    sobrenome: 'Dantas',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};

pessoa.exibirNome();

semRetorno('Genival', 'Dantas');

export { pessoa };