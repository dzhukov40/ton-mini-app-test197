import Dexie, { Transaction, Version, type EntityTable } from 'dexie';


interface IDBCreationService {
    create(name: string, schema: IStoreSchema): void;
    isExist(): boolean;
    get(): Dexie;
}

interface IStoreSchema {
    [tableName: string]: string | null;
}

class DBCreationService implements IDBCreationService {
    private dexieDB: Dexie = undefined as any;

    create(name: string, schema: IStoreSchema): void {
        this.dexieDB = new Dexie(name);
        this.dexieDB.version(1).stores(schema);
    }

    isExist(): boolean {
        return this.dexieDB != undefined;
    }

    get(): Dexie {
        return this.dexieDB;
    }
}

export { DBCreationService };
export type { IStoreSchema };
