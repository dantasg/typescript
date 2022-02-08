export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string){}

    get nome(): string {
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null{
        return this._ferramenta;
    }

    escrever(): void {
        if (this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    abstract escrever(): void;

    get nome(): string {
        return this._nome;
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log('Estou usando a caneta!');
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log('Estou digitando!');
    }
}

const escritor = new Escritor('Genival');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('Máquina');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.escrever();

escritor.ferramenta = caneta;

escritor.escrever();

escritor.ferramenta = maquina;

escritor.escrever();

escritor.ferramenta = null;

escritor.escrever();
