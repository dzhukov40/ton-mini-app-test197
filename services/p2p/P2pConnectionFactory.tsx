import { P2pConnection } from './P2pConnection';
import { P2pPoint } from './P2pPoint';
import { P2pPointFactory } from './P2pPointFactory';


class P2pConnectionFactory {

    static create(localId: string, remoteId: string): P2pConnection {
        let localPoint: P2pPoint = P2pPointFactory.createLocal(localId);
        let remotePoint: P2pPoint = P2pPointFactory.createRemote(remoteId);

        return new P2pConnection(localPoint, remotePoint);
    }

}

export { P2pConnectionFactory };

