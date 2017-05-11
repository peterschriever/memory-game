import React from 'react';

export default (props) => {
  return (
    <div>
      Verlopen tijd: <span id="tijd">0</span> seconden.<br />
      Gevonden kaart-paren: <span id="gevonden">0</span><br />
      Resterende toontijd: <br />
      <button id="myTime">
          <div id="timeLeft">123</div>
      </button>
    </div>
  );
}
