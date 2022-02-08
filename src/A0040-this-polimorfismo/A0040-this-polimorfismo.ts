export class Calculadora {
    constructor(public numero: number) {}

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }

    mul(n: number): this {
        this.numero *= n;
        return this;
    }

}

const caculadora = new Calculadora(10);
caculadora.add(5).mul(2).div(2).sub(10);
console.log(caculadora);
