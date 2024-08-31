import { DBEventService, Event } from './DBEventService';
import { DBCreationService, IStoreSchema } from './DBCreationService';


interface IDBGameService {
    addEvent(event: Event): void;
}

const storeSchema: IStoreSchema = {
    permission: '++id, name, status, describe, type',
    events: '++id, code, message',
    properties: '++id, name',
    functions: '++id, name',
    tags: '++id, name',
};

class DBGameService implements IDBGameService {
    private dataBaseService: DBCreationService;
    private dBEventService: DBEventService;

    constructor (name: string) {
        this.dataBaseService = new DBCreationService();
        this.dataBaseService.create(name, storeSchema);
        this.dBEventService = new DBEventService(this.dataBaseService.get());
    }

    addEvent(event: Event): void {
        this.dBEventService.addEvent(event);
    }
}

export { DBGameService };
