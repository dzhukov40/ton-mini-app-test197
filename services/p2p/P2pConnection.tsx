import { DataConnection, Peer } from "peerjs";
import { P2pPoint } from "./P2pPoint";
import { P2pServerMessage } from "./P2pTypes";
import EventEmitter from "events";



interface IP2pConnection {


    send(data: any, chunked?: boolean): void | Promise<void>;
   // handleMessage(message: P2pServerMessage): Promise<void>;
}

type P2pReseaveHandlerFn = {
    on(message: unknown): void;
};


class P2pConnection implements IP2pConnection {
    private localPoint: P2pPoint = undefined as any;
    private remotePoint: P2pPoint = undefined as any;
    private dataConnection: DataConnection = undefined as any;
    private isConnectionOpen: boolean = false;
    private reseaveMessageHandler: P2pReseaveHandlerFn = undefined as any;

    constructor(localPoint: P2pPoint, remotePoint: P2pPoint) {
        this.localPoint = localPoint;
        this.remotePoint = remotePoint;
    }

    isOpen(): boolean {
        return this.isConnectionOpen;
    }

    openConnection(): void {
        this.dataConnection = this.localPoint.getLocalPeer()
            .connect(this.remotePoint.getId())

        this.isConnectionOpen = true;
    }

    closeConnection(): void {
        this.localPoint.getLocalPeer().disconnect();
        
        this.isConnectionOpen = false;
    }

    send(data: any, chunked?: boolean): void | Promise<void> {
        this.throwErrorIfConnectionClosed();

        return this.dataConnection.send(data);
    }

    onReceave(handleFn: P2pReseaveHandlerFn) {
        this.reseaveMessageHandler = handleFn;
        this.receaveMessageInit();
    }

    private receaveMessageInit() {
        this.dataConnection.on("data", (data) => {   
            this.reseaveMessageHandler.on(data);
        });
    }

    private throwErrorIfConnectionClosed(): void {
        if (this.isOpen() == false) {
            throw new Error(`Connection not open`);
        }
    }
}

export { P2pConnection };
export type { P2pReseaveHandlerFn };
