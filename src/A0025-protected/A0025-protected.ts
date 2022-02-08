export class Empresa {
    public readonly nome: string; // public não necessário
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    // Se não colocar que é public, ele é automáticamente public
    mostrarColaboradores(): void {
        for (let colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }

};

export class ChickenF extends Empresa{
    constructor() {
        super('Chicken food', '11.111.111/0001-11');
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string
    ) {}
};
    
const empresa1 = new ChickenF();
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
const colab = empresa1.popColaborador();
console.log(colab);

console.log(empresa1);

console.log(empresa1.nome);

empresa1.mostrarColaboradores();
