export abstract class Personagem{
    protected abstract emoji: string;
    
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagem: Personagem): void {
        console.log(`${this.nome} está atacando...`);
        personagem.perderVida(this.ataque);
        this.bordao();
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`);
    }

    abstract bordao(): void;
}

export class Guerreira extends Personagem{
    protected emoji = '\u{1F9DD}';

    bordao(): void {
        console.log(this.emoji + ' - Guerreira ao ataque!')
    }
}
export class Monstro extends Personagem{
    protected emoji = '\u{1F9DF}';

    bordao(): void {
        console.log(this.emoji + ' - Monsto ao ataque!');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
console.log("");
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
