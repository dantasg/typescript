export function funcao(this: Date, argumento1: string, age: number): void {
    console.log(this);

}

funcao.call(new Date(), 'Genival', 30);
funcao.apply(new Date(), ['Genival', 30])