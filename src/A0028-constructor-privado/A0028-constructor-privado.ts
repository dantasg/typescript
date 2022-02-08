export class DataBase{

    private static database: DataBase;

    private constructor(
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(
        host: string, 
        user: string,
        password: string
    ): DataBase {
        if (DataBase.database){
            console.log('Retornando instância já criada.');
            return DataBase.database;
        }
        console.log('Criando instância.');
        DataBase.database = new DataBase(host, user, password);
        return DataBase.database
    }
}


const db1 = DataBase.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = DataBase.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = DataBase.getDatabase('localhost', 'root', '123456');
db2.connect();

const db4 = DataBase.getDatabase('localhost', 'root', '123456');
db2.connect();
