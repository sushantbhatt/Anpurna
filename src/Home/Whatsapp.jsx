import React, { useState } from 'react';
import './Whatsapp.css';

const Whatsapp = () => {
  const [showDialog, setShowDialog] = useState(false);
  const phoneNumber = 'YOUR_PHONE_NUMBER';
  const message = 'Hello! I have a question about...';

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleConfirm = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp logo"
          width="40"
          height="40"
        />
      </button>

      {showDialog && (
        <div className="whatsapp-dialog">
          <div className="dialog-content">
            <p>Continue to chat on WhatsApp?</p>
            <div className="dialog-buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleConfirm}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Whatsapp;