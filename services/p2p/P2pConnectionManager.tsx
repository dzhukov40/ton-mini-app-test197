import { P2pConnection, P2pReseaveHandlerFn } from './P2pConnection';
import { P2pPoint } from './P2pPoint';
import { P2pPointFactory } from './P2pPointFactory';
import { P2pConnectionFactory } from './P2pConnectionFactory';
import { v4 as uuid } from 'uuid';




class P2pConnectionEntity {
    private id: string;
    private connection: P2pConnection;
    // private onReceave: string; // fix

    constructor(id: string, connection: P2pConnection) {
        this.id = id;
        this.connection = connection;
    }

    getId(): string {
        return this.id;
    }

    getConnection(): P2pConnection {
        return this.connection;
    }
}


type P2pMessageHandlerFn = {
    on(message: string): void;
};



class P2pConnectionManager {
    private addedConnections = new Map<string, P2pConnectionEntity>();
    private opendConnections = new Map<string, P2pConnectionEntity>();
    private reseaveMessageHandler: P2pMessageHandlerFn = undefined as any;

    add(localId: string, remoteId: string): string {
        let key = uuid();
        let connection = P2pConnectionFactory.create(localId, remoteId);
        let value = new P2pConnectionEntity(key, connection);
        this.addedConnections.set(key, value);
        
        return key;
    }

    delete(id: string): void {
        this.addedConnections.delete(id);
    }

    deleteAll(): void {
        this.addedConnections.clear();
    }

    open(id: string): void {
        this.throwErrorIfAddedConnectionNotExist(id);

        if (this.opendConnections.has(id) == false) {
          let connection = this.opendConnections.get(id);
          connection?.getConnection().openConnection();  
        }
    }

    openAll(): void {
        this.addedConnections.forEach((value, key) => {
            this.open(key);
        });
    }

    send(id: string, data: any): void {
        this.throwErrorIfAddedConnectionNotExist(id);
        this.throwErrorIfOpendConnectionNotExist(id);

        this.opendConnections.get(id)?.getConnection().send(data);
    }

    sendAll(data: any) {
        this.opendConnections.forEach((value, key) => {
            value.getConnection().send(data);
          });
    }

    onReceave(handleFn: P2pMessageHandlerFn) {
        this.reseaveMessageHandler = handleFn;
    }
    
    
    
    //TODO: get from ALL (add wrapper for identification connection)
    // make one point of getting messages from all connections !!!

    private localReceaveHandler(): void {

    }


    private throwErrorIfAddedConnectionNotExist(id: string): void {
        if (this.addedConnections.has(id) == false) {
            throw new Error(`Connection not exist`);
        }
    }

    private throwErrorIfOpendConnectionNotExist(id: string): void {
        if (this.opendConnections.has(id) == false) {
            throw new Error(`Connection not open`);
        }
    }
}

export { P2pConnectionManager };

