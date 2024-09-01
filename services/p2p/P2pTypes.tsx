





export enum P2pServerMessageType {
    Heartbeat = "HEARTBEAT",
    Candidate = "CANDIDATE",
    Offer = "OFFER",
    Answer = "ANSWER",
    Open = "OPEN",// The connection to the server is open.
    Error = "ERROR",// Server error.
    IdTaken = "ID-TAKEN",// The selected ID is taken.
    InvalidKey = "INVALID-KEY",// The given API key cannot be found.
    Leave = "LEAVE",// Another peer has closed its connection to this peer.
    Expire = "EXPIRE"
}


export declare class P2pServerMessage {
    type: P2pServerMessageType;
    payload: any;
    src: string;
}


