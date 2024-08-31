'use client';

import { DBGameService } from '@/services/DBGaneService';
import { useState } from 'react';


export default function Home() {
    const [inputText, setInputText] = useState('');
    const db: DBGameService = new DBGameService("db-test");

    const handleAddEvent = () => {
        db.addEvent({code: "TEST", message: inputText});
        console.log(inputText);
    };


  return (
      <div>
          <h3>Log</h3>
          <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                id = "log" 
                rows={4}
                cols={50}
            />

          <button id="addEvend" onClick={handleAddEvent}>Add Event to BD</button>
          <button id="printAllEvents">Print All Events</button>
      </div>
  );
}
