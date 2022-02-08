// export abstract class TipoPessoa {
//     protected abstract nome: string;
//     protected abstract sobreNome: string;
//     protected abstract nomeCompleto(): string;
// }

type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
};

// export class Pessoa extends TipoPessoa {
export class Pessoa implements TipoPessoa {
    constructor(public nome:string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Genival', 'Dantas');
console.log(pessoa.nomeCompleto());
