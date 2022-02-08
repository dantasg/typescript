interface TipoNome {
    nome: string;
};

interface TipoSobrenome {
    sobrenome: string;
};

interface TipoNomeCompleto {
    nomeCompleto: () => string;
};

type Numero = number | string;

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
    constructor (public nome: string, public sobrenome: string) {}

    nomeCompleto(): string{
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Pessoa2 implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string){}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Luis', 'Miranda');
console.log(pessoa.nomeCompleto());

const pessoa2 = new Pessoa2('Genival', 'Dantas');
console.log(pessoa.nomeCompleto());

const pessoaObj: TipoPessoa2 = {
    nome: 'Genival',
    sobrenome: 'Dantas',
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}