import Dexie, { Transaction, Version, type EntityTable } from 'dexie';


interface IDBCreationService {
    create(name: string): void;
    isExist(): boolean;
    get(): Dexie;
}

interface IStoreSchema {
    [tableName: string]: string | null;
}

//
const storeSchema: IStoreSchema = {
    permission: '++id, name, status, describe, type',
    events: '++id, code, message',
    properties: '++id, name',
    functions: '++id, name',
    tags: '++id, name',
};

class DBCreationService implements IDBCreationService {
    private dexieDB: Dexie = undefined as any;

    create(name: string): void {
        this.dexieDB = new Dexie(name);
        this.dexieDB.version(1).stores(storeSchema);
    }

    isExist(): boolean {
        return this.dexieDB != undefined;
    }

    get(): Dexie {
        return this.dexieDB;
    }
}

export { DBCreationService };
