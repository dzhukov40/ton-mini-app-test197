'use client';

import { P2pConnectionManager } from '@/services/p2p/P2pConnectionManager';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';



export default function Home() {
    const [localUUID, setLocalUUID] = useState('');
    const [remoteUUID, setRemoteUUID] = useState('');
    const [inputText, setInputText] = useState('');
    //--
    const [localConnectUUID, setLocalConnectUUID] = useState('');
    const [remoteCOnnectUUID, setRemoteConnectUUID] = useState('');
    const connectionManager: P2pConnectionManager = new P2pConnectionManager();


    const generateEvent = () => {
        setLocalUUID(uuid());
        setRemoteUUID(uuid());
    };

    const connectEvent = () => {
        let key = connectionManager.add(localConnectUUID, remoteCOnnectUUID);
        connectionManager.open(key);
    };

 
  return (
      <div>
          <h1>We need unic UUIDs for connection</h1>
          <div>
            <div>
                <button id="addEvend" onClick={generateEvent}>Generate</button>
                <div>
                  <label>Your Peer ID:</label>
                  <input type="text" id="localUUID" value={localUUID} size={40} readOnly/>
                </div>
                <div>
                  <label>Remote Peer ID:</label>
                  <input type="text" id="remoteUUID" value={remoteUUID} size={40} readOnly/>
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <h1>Try connect</h1>
          <div>
            <div>
                <button id="addEvend" onClick={connectEvent}>Connect</button>
                <div>
                  <label>Your Peer ID:</label>
                  <input type="text" 
                         value={localConnectUUID} 
                         size={40} 
                         onChange={(event) => setLocalConnectUUID(event.target.value)}/>
                </div>
                <div>
                  <label>Remote Peer ID:</label>
                  <input type="text" 
                         value={remoteCOnnectUUID} 
                         size={40}
                         onChange={(event) => setRemoteConnectUUID(event.target.value)}/>
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                id = "log" 
                rows={4}
                cols={50}
            />

          {/* <button id="addEvend" onClick={handleAddEvent}>Add Event to BD</button> */}
          <button id="printAllEvents">Print All Events</button>
      </div>
  );
}
