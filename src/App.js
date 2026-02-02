import React, { useState } from 'react';
import './App.css';

function App() {
  const [noButtonPos, setNoButtonPos] = useState({ top: '55%', left: '60%' });
  const [isAccepted, setIsAccepted] = useState(false);

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 60 + 20) + '%';
    const randomLeft = Math.floor(Math.random() * 60 + 20) + '%';
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  if (isAccepted) {
    return (
      <div className="App">
        <h1>Yay! I love you! ❤️</h1>
        <p className="love-message">
          I love you so much my love. To many more valentines together. 
          I hope I make you happy. I know life is tough right now but 
          you are so much stronger than you know and I am so proud of you. 
          You make me the happiest person in the world. I LOVE YOU FOREVER.
        </p>
        <img src="/yes.gif" alt="Celebration" className="gif" />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Will you be my Valentine? 💌💘💝</h1>

      <div className="button-group">
        <button className="btn-yes" onClick={() => setIsAccepted(true)}>
          Yes
        </button>

        <button 
          className="btn-no"
          onMouseEnter={moveButton}
          style={{ 
            position: 'absolute', 
            top: noButtonPos.top, 
            left: noButtonPos.left 
          }}
        >
          No
        </button>
      </div>

      <img src="/happy.gif" alt="Waiting" className="gif" />
    </div>
  );
}

export default App;