export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
};

export class Aluno extends Pessoa{
    getNomeCompleto(): string {
        return `Aluno: ${this.nome} ${this.sobrenome}`;
    }
};
export class Cliente extends Pessoa{
    getNomeCompleto(): string {
        return `Cliente: ${this.nome} ${this.sobrenome}`;
    }
};

const aluno = new Aluno('Genival', 'Dantas', 21, '000.000.000-00');
const cliente = new Cliente('Genival', 'Dantas', 21, '000.000.000-00');
const pessoa = new Pessoa('Genival', 'Dantas', 21, '000.000.000-00');

console.log(aluno);
console.log(cliente);
console.log(pessoa);

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
