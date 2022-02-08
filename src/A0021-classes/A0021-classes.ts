export class Empresa {
    public readonly nome: string; // public não necessário
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (let colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
};

export class Colaborador {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string
    ) {}
};
    
const empresa1 = new Empresa('Chicken food', '11.111.111/0001-11');
// empresa1.nome = 'Udemy'; Não pode alterar o nome, por conta do readonly;
const colaborador1 = new Colaborador('Genival', 'Dantas');
const colaborador2 = new Colaborador('Clara', 'Dantas');
const colaborador3 = new Colaborador('Vinicius', 'Dantas');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
    nome: 'Eloi',
    sobrenome: 'Dantas'
});

console.log(empresa1);

console.log(empresa1.nome);

empresa1.mostrarColaboradores();
