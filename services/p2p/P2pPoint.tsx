import { Peer } from "peerjs";
import { v4 as uuid } from 'uuid';


interface IP2pPoint {
    isInitialised(): boolean;
    isLocal(): boolean
    initLocal(): void;
    initRemote(): void;
    getId(): string;
    getLocalPeer(): Peer;
}

class P2pPoint implements IP2pPoint {
    private id: string = undefined as any;
    private peer: Peer = undefined as any;
    private isLocalFlag: boolean = false;
    private isInitialisedFlag: boolean = false;

    constructor (id?: string) {
        if (id == null) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }

    isInitialised(): boolean {
        return this.isInitialisedFlag;
    }

    isLocal(): boolean {
        return this.isLocalFlag;
    }

    initLocal(): void {
        this.throwErrorIfPointNotInitialised();

        this.peer = new Peer(this.id);
        this.isLocalFlag = true;
        this.isInitialisedFlag = true;
    }

    initRemote(): void {
        this.throwErrorIfPointNotInitialised();

        this.isLocalFlag = false;
        this.isInitialisedFlag = true;
    }

    getId(): string {
        return this.id;
    }

    getLocalPeer(): Peer {
        this.throwErrorIfPointNotInitialised();
        this.throwErrorIfPointNotLocal();

        return this.peer;
    }

    private throwErrorIfPointNotInitialised(): void {
        if (this.isInitialised()) {
            throw new Error(`Point already initialised`);
           }
    }

    private throwErrorIfPointNotLocal(): void {
        if (this.isInitialised()) {
            throw new Error(`Point is not local`);
           }
    }
}


export { P2pPoint };
