import { DBEventService, Event } from './DBEventService';
import { DBCreationService } from './DBCreationService';


interface IDBGameService {
    addEvent(event: Event): void;
}

class DBGameService implements IDBGameService {
    private dataBaseService: DBCreationService;
    private dBEventService: DBEventService;

    constructor (name: string) {
        this.dataBaseService = new DBCreationService();
        this.dataBaseService.create(name);
        this.dBEventService = new DBEventService(this.dataBaseService.get());
    }

    addEvent(event: Event): void {
        this.dBEventService.addEvent(event);
    }
}

export { DBGameService };
