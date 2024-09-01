import { P2pPoint } from './P2pPoint';



class P2pPointFactory {

    static createLocal(id?: string): P2pPoint {
        let point = new P2pPoint(id);
        point.initLocal();

        return point;
    }

    static createRemote(id: string): P2pPoint {
        let point = new P2pPoint(id);
        point.initRemote();

        return point;
    }
}

export { P2pPointFactory };

