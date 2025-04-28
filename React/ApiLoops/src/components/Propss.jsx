import React, { useState } from 'react';

const Propss = ({ name }) => {
  const [bgColor, setBgColor] = useState('red');
  const [textColor, setTextColor] = useState('white');

  return (
    <div id='ok' style={{ backgroundColor: bgColor, color: textColor, padding: '20px', textAlign: 'center' }}>
      <h1>Hello world</h1>
      <h2>My name is <span>{name}</span></h2>
      
      {/* Violet Button - Changes both background and text color */}
      <button onClick={() => { setBgColor('#535bf2'); setTextColor('yellow'); }}>
        Violet
      </button>

      {/* Red Button - Changes both background and text color */}
      <button onClick={() => { setBgColor('red'); setTextColor('white'); }}>
        Red
      </button>

      {/* Black Button - Changes both background and text color */}
      <button onClick={() => { setBgColor('black'); setTextColor('lightgreen'); }}>
        Black
      </button>
    </div>
  );
};

export default Propss;
