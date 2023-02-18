import React, { useState } from 'react';

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <button onClick={togglePopup} className="early-access">Get early access</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup-inner">
            <img src="Group243.png" alt="Group 243" className='group-243'/>
           
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
