







import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Home/Footer';

function Layout() {
  const [showDialog, setShowDialog] = useState(false);
  const phoneNumber = '918447595048'; // Replace with your actual phone number (with country code)
  const message = 'Hello! I have a question about...';

  const handleWhatsAppClick = () => {
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
    <div className="layout">
      <Header />
      
      <main className="content">
        <Outlet />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <button 
        onClick={handleWhatsAppClick}
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

      {/* WhatsApp Dialog */}
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
    </div>
  );
}

export default Layout;