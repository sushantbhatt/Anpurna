





// import { Outlet } from 'react-router-dom';  // Outlet renders the matched child route component
// import './Layout.css';                      // Import layout-specific CSS for overall page structure
// import Header from '../Header/Header';       // Import the site-wide header/navigation component
// import Footer from '../Home/Footer';         // Import the site-wide footer component

// // Layout component wraps all pages with a header, footer, and dynamic content area
// function Layout() {
//   return (
//     // Wrapper div for the entire page layout (header + content + footer)
//     <div className="layout">
      
//       {/* Site-wide header/navigation bar */}
//       <Header />

//       {/* Main content area where nested routes will render */}
//       <main className="content">
//         {/* Outlet acts as a placeholder for the current route’s component */}
//         <Outlet />
//       </main>

//       {/* Site-wide footer displayed at the bottom of every page */}
//       <Footer />
//     </div>
//   );
// }

// export default Layout;  // Export the Layout component for use in routing setup









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