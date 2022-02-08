export class CarrinhoDeCompras {
    // private readonly produtos: Array < Produto > = []; forma que eu fiz, também funciona
    private readonly produtos: Produto[] = []; 

    // inserirProduto(produto: Produto): void {
    //     this.produtos.push(produto);
    // }

    inserirProduto(...produtos: Produto[]) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidade(): number {
        const quantidade: number = this.produtos.length;
        return quantidade;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(
        private _nome: string, 
        private _preco: number
    ){}

    get nome(): string {
        return this._nome;
    }

    get preco(): number {
        return this._preco;
    }
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProduto(produto1, produto2, produto3);

console.log(carrinho);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidade());
