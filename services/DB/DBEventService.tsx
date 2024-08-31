import Dexie, { Table, Transaction, Version, type EntityTable } from 'dexie';


interface Event {
    code: string,
    message: string
}

interface IDBEventService {
    getTable(): Table;
    clear(): void;
}

class DBEventService implements IDBEventService {
    private dexieDB: Dexie;
    private table: Table;

    constructor (dexie: Dexie) {
        this.dexieDB = dexie;
        this.table = this.dexieDB.table("events");
    }

    getTable(): Table {
        return this.table;
    }

    addEvent(event: Event) {
        this.table.add(event);
    }

    clear(): void {
        this.table.clear();
    }
}

export { DBEventService };
export type { Event };
