// import React, { useState } from 'react';
// import { Dialog, DialogContent, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import "./header.css";
// import brochure from "./img/brochure.pdf";
// import aidfLogo from "./img/aidf_logo.png";
// import axios from 'axios';
// import { useFormik } from 'formik';


// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [contactFormOpen, setContactFormOpen] = useState(false);
 
//   const [formStatus, setFormStatus] = useState({
//     submitting: false,
//     success: false,
//     error: false
//   });

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

 

 
    

//   // -------------------------------------------------------------------------------------------------

//   const myFormik=useFormik({
//     initialValues:{
//       name:"",
//       phone:"",
//       email:"",
//       service:"Skirting and Profile",
//       message:""
//     },

//     onSubmit: async (values) => {
//       try {
//         setFormStatus({ submitting: true, success: false, error: false });
//         await axios.post(`http://localhost:5588/submit-enquiry`, values);
//         setFormStatus({ submitting: false, success: true, error: false });
//         myFormik.resetForm();
//       } catch (err) {
//         console.error('Submission error:', err);
//         setFormStatus({ 
//           submitting: false, 
//           success: false, 
//           error: true,
//           errorMessage: err.response?.data || err.message 
//         });
//       }
//     }
//   })
  



//   const isActive = (path) => {
//     return window.location.pathname === path ? 'active' : '';
//   };

//   return (
//     <>
//       {/* Contact Form Dialog */}
//       <Dialog 
//         open={contactFormOpen} 
//         onClose={() => {
//           setContactFormOpen(false);
//           setFormStatus({ submitting: false, success: false, error: false });
//         }}
//         maxWidth="md"
//         className="header-cf-dialog"
//         BackdropProps={{
//           style: {
//             backgroundColor: 'rgba(0, 0, 0, 0.7)',
//             backdropFilter: 'blur(4px)'
//           }
//         }}
//       >
//         <DialogContent className="header-cf-dialog-content">
//           <IconButton 
//             aria-label="close" 
//             onClick={() => {
//               setContactFormOpen(false);
//               setFormStatus({ submitting: false, success: false, error: false });
//             }}
//             className="header-cf-close-button"
//           >
//             <CloseIcon />
//           </IconButton>

//           <div className="header-cf-form-container">
//             <div className="header-cf-form-header">
//               <h2 className="header-cf-form-title">Get in Touch</h2>
//               <p className="header-cf-form-subtitle">Fill out the form below and our team will contact you shortly</p>
//             </div>

//             {formStatus.success ? (
//               <div className="header-cf-success-message">
//                 <svg className="header-cf-success-icon" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                 </svg>
//                 <h3>Thank You!</h3>
//                 <p>Your enquiry has been submitted successfully.</p>
//                 <p>We'll get back to you within 24 hours.</p>
//               </div>
//             ) : formStatus.error ? (
//               <div className="header-cf-error-message">
//                 <svg className="header-cf-error-icon" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
//                 </svg>
//                 <h3>Submission Failed</h3>
//                 <p>There was an error submitting your form.</p>
//                 <button 
//                   className="header-cf-retry-button"
//                   onClick={() => setFormStatus({ submitting: false, success: false, error: false })}
//                 >
//                   Try Again
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={myFormik.handleSubmit} className="header-cf-contact-form">
//                 <div className="header-cf-form-grid">
//                   <div className="header-cf-form-group">
//                     <label htmlFor="header-cf-name" className="header-cf-input-label">Full Name*</label>
//                     <div className="header-cf-input-container">
//                       <input
//                         type="text"
//                         id="header-cf-name"
//                         name="name"
//                         placeholder="John Doe"
//                        value={myFormik.values.name}
//                         onChange={myFormik.handleChange}
//                         required
//                         className="header-cf-input-field"
//                       />
//                       <svg className="header-cf-input-icon" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="header-cf-form-group">
//                     <label htmlFor="header-cf-phone" className="header-cf-input-label">Phone Number*</label>
//                     <div className="header-cf-input-container">
//                       <input
//                         type="tel"
//                         id="header-cf-phone"
//                         name="phone"
//                         placeholder="Your Phone No."
//                         value={myFormik.values.phone}
//                         onChange={myFormik.handleChange}
//                         required
//                         className="header-cf-input-field"
//                       />
//                       <svg className="header-cf-input-icon" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="header-cf-form-group">
//                     <label htmlFor="header-cf-email" className="header-cf-input-label">Email Address*</label>
//                     <div className="header-cf-input-container">
//                       <input
//                         type="email"
//                         id="header-cf-email"
//                         name="email"
//                         placeholder="your.email@example.com"
//                         value={myFormik.values.email}
//                         onChange={myFormik.handleChange}
//                         required
//                         className="header-cf-input-field"
//                       />
//                       <svg className="header-cf-input-icon" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="header-cf-form-group">
//                     <label htmlFor="header-cf-service" className="header-cf-input-label">Service Interested In*</label>
//                     <div className="header-cf-input-container">
//                       <select
//                         id="header-cf-service"
//                         name="service"
//                         value={myFormik.values.service}
//                         onChange={myFormik.handleChange}
//                         required
//                         className="header-cf-input-field"
//                       >
//                         <option value="skirting&profile">Skirting&Profile</option>
//                         <option value="carpets">Carpets</option>
//                         <option value="flooring">Flooring</option>
//                         <option value="other">Other Services</option>
//                       </select>
//                       <svg className="header-cf-input-icon" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M12,16L6,10H18L12,16Z" />
//                       </svg>
//                     </div>
//                   </div>

//                   <div className="header-cf-form-group header-cf-full-width">
//                     <label htmlFor="header-cf-message" className="header-cf-input-label">Your Message</label>
//                     <div className="header-cf-input-container">
//                       <textarea
//                         id="header-cf-message"
//                         name="message"
//                         placeholder="Tell us about your requirements..."
//                         value={myFormik.values.message}
//                         onChange={myFormik.handleChange}
//                         rows="4"
//                         className="header-cf-textarea-field"
//                       ></textarea>
//                       <svg className="header-cf-textarea-icon" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M18.5,2L19.66,4.65L22.5,5.5L19.66,6.36L18.5,9L17.34,6.36L14.5,5.5L17.34,4.65L18.5,2M10.61,8.93L7.5,7.63L4.39,8.93L5.07,12L4.39,15.07L7.5,16.37L10.61,15.07L9.93,12L10.61,8.93M18.5,15L19.66,17.65L22.5,18.5L19.66,19.36L18.5,22L17.34,19.36L14.5,18.5L17.34,17.65L18.5,15Z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="header-cf-submit-button"
//                   disabled={formStatus.submitting}
//                 >
//                   {formStatus.submitting ? (
//                     <>
//                       <svg className="header-cf-spinner" viewBox="0 0 50 50">
//                         <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5"></circle>
//                       </svg>
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       Submit Enquiry
//                       <svg className="header-cf-arrow-icon" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
//                       </svg>
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </DialogContent>
//       </Dialog>


//       {/* Desktop Header */}
//       <div className="outer_desktop_header">
//         <div className="inner_desktop_header">
//           {/* Top Action Bar */}
//           <div className="header_top_section">
//             <div className="header_top_container">
//               <div className="header_button_container">
//                 <button className="header_button" onClick={() => window.open(brochure, '_blank')}>
//                   <span className="button-icon">📄</span>
//                   <span>Brochure</span>
//                 </button>
//                 <button className="header_button" onClick={() => setContactFormOpen(true)}>
//                   <span className="button-icon">✉️</span>
//                   <span>Enquire</span>
//                 </button>
//                 <button
//                         className="header_button phone"
//                         onClick={() => {
//                           window.location.href = 'tel:+918744036000';
//                         }}
//                       >
//                         <span className="button-icon">📞</span>
//                         <span>+91-87440-36000</span>
//                       </button>

//               </div>
//             </div>
//           </div>

//           {/* Main Navigation Bar */}
//           <div className="header_bottom_section">
//             <div className="header_bottom_container">
//               {/* Logo Section */}
//               <div className="header_logo_container">
//                 <a href="/" className="logo-link">
//                   <img src={aidfLogo} alt="AIDF Logo" className="aidf_logo" />
//                 </a>
//               </div>

//               {/* Search Bar */}
//               <div className="header_search_container">
//                 <div className="search_bar">
//                   <input type="text" placeholder="Search products..." />
//                   <button className="search_button">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
//                       <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Main Navigation */}
//               <nav className="main_navigation">
//                 <ul className="nav-list">
//                   <li className="nav-item">
//                     <a href="/" className={`nav-link ${isActive('/')}`}>Home</a>
//                   </li>
                  
//                   <li className="nav-item dropdown" 
//                       onMouseEnter={() => toggleDropdown('about')}
//                       onMouseLeave={() => toggleDropdown(null)}>
//                     <a href="/about-us" className={`nav-link ${isActive('/about-us')}`}>
//                       About Us
//                       <span className="dropdown-arrow">▼</span>
//                     </a>
//                     <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
//                       <a  style={{ color: 'black', textDecoration: 'none' }} href="/about-us/#chairman-section">Chairman's Message</a>
//                       <a style={{ color: 'black', textDecoration: 'none' }} href="/about-us/#ourstory">Our Story</a>
//                       <a style={{ color: 'black', textDecoration: 'none' }} href="/about-us/#vision">Vision & Mission</a>
//                     </div>
//                   </li>
                  
//                   <li className="nav-item dropdown"
//                       onMouseEnter={() => toggleDropdown('products')}
//                       onMouseLeave={() => toggleDropdown(null)}>
//                     <a href="/productPage" className={`nav-link ${isActive('/productPage')}`}>
//                       Products
//                       <span className="dropdown-arrow">▼</span>
//                     </a>
//                     <div className={`dropdown-menu ${activeDropdown === 'products' ? 'show' : ''}`}>
//                       <a style={{ color: 'black', textDecoration: 'none' }} href="/skirting">Skirting & Profile</a>
//                       <a style={{ color: 'black', textDecoration: 'none' }} href="/carpet">Carpets</a>
//                       <a style={{ color: 'black', textDecoration: 'none' }} href="/flooring">Flooring</a>
//                       <a style={{ color: 'black', textDecoration: 'none' }} href="/Aluminium_glass">Aluminium Modular Glass Partition</a>
//                     </div>
//                   </li>
                  
                 
                  
//                   <li className="nav-item">
//                     <a href="/static-blog" className={`nav-link ${isActive('/static-blog')}`}>Blogs</a>
//                   </li>
                  
//                   <li className="nav-item">
//                     <a href="/locateUs" className={`nav-link ${isActive('/locateUs')}`}>Locate Us</a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Header */}
//       <div className="outer_mobile_header">
//         <header className="mobile_header">
//           <div className="mobile_header_container">
//             <a href="/" className="mobile_logo_link">
//               <img src={aidfLogo} alt="Company Logo" className="mobile_logo" />
//             </a>
            
//             <div className="mobile_menu_icons">
//               <button className="mobile_search_button">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
//                 </svg>
//               </button>
              
//               <button className="mobile_menu_button" onClick={toggleMobileMenu}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
          
//           {/* Mobile Menu */}
//           <div className={`mobile_menu ${mobileMenuOpen ? 'open' : ''}`}>
//             <div className="mobile_menu_content">
//               <ul className="mobile_nav_list">
//                 <li className="mobile_nav_item">
//                   <a href="/" className="mobile_nav_link">Home</a>
//                 </li>
                
//                 <li className="mobile_nav_item">
//                   <div className="mobile_nav_link" onClick={() => toggleDropdown('mobile-about')}>
//                     About Us
//                     <span className={`mobile_dropdown_arrow ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>▼</span>
//                   </div>
//                   <div className={`mobile_dropdown_menu ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>
//                     <a href="/about-us/#chairman-section">Chairman's Message</a>
//                     <a href="/about-us/#ourstory">Our Story</a>
//                     <a href="/about-us/#vision">Vision & Mission</a>
//                   </div>
//                 </li>
                
//                 <li className="mobile_nav_item">
//                   <div className="mobile_nav_link" onClick={() => toggleDropdown('mobile-products')}>
//                     Products
//                     <span className={`mobile_dropdown_arrow ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>▼</span>
//                   </div>
//                   <div className={`mobile_dropdown_menu ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>
//                     <a href="/skirting">Skirting & Profile</a>
//                     <a href="/carpet">Carpets</a>
//                     <a href="/flooring">Flooring</a>
//                   </div>
//                 </li>
                
//                 <li className="mobile_nav_item">
//                   <a href="/certificates" className="mobile_nav_link">Certifications</a>
//                 </li>
                
//                 <li className="mobile_nav_item">
//                   <a href="/static-blog" className="mobile_nav_link">Blogs</a>
//                 </li>
                
//                 <li className="mobile_nav_item">
//                   <a href="/locateUs" className="mobile_nav_link">Locate Us</a>
//                 </li>
//               </ul>
              
//               <div className="mobile_action_buttons">
//                 <button className="mobile_action_button" onClick={() => window.open(brochure, '_blank')}>
//                   <span className="button-icon">📄</span>
//                   Brochure
//                 </button>
//                 <button className="mobile_action_button" onClick={() => setContactFormOpen(true)}>
//                   <span className="button-icon">✉️</span>
//                   Enquire
//                 </button>
//                 <button className="mobile_action_button phone" onClick={() => window.location.href = 'tel:9002690068'}>
//                   <span className="button-icon">📞</span>
//                   Call Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Header;



















import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";
import brochure from "./img/brochure.pdf";
import aidfLogo from "./img/logo.PNG";
import axios from 'axios';
import { useFormik } from 'formik';
import { useSearch } from './SearchContext';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });
  
  const { searchQuery, setSearchQuery, searchResults, setSearchResults, showResults, setShowResults } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  // Define your searchable sections
  const sections = [
    { id: 'hero-section', title: 'Hero Section', keywords: ['home', 'main', 'hero', 'banner'] },
    { id: 'about-section', title: 'About Us', keywords: ['about', 'company', 'story', 'who we are'] },
    { id: 'services-section', title: 'Our Services', keywords: ['services', 'what we do', 'offerings'] },
    { id: 'projects-section', title: 'Recent Projects', keywords: ['projects', 'work', 'portfolio', 'showcase'] },
    { id: 'testimonials-section', title: 'Testimonials', keywords: ['reviews', 'feedback', 'clients', 'testimonials'] },
    { id: 'blog-section', title: 'Blogs', keywords: ['articles', 'news', 'updates', 'blog'] }
  ];

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchChange = (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  if (query.length > 0) {
    const results = sections
      .filter(section =>
        section.title.toLowerCase().includes(query.toLowerCase()) ||
        section.keywords.some(keyword =>
          keyword.toLowerCase().includes(query.toLowerCase())
        )
      )
      .map(section => ({ id: section.id, title: section.title }));

    setSearchResults(results);
    setShowResults(true);
  } else {
    setSearchResults([]);
    setShowResults(false);
  }
};


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0 && searchQuery) {
      navigateToSection(searchResults[0].id);
    }
  };

  const navigateToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      service: "Skirting and Profile",
      message: ""
    },
    onSubmit: async (values) => {
      try {
        setFormStatus({ submitting: true, success: false, error: false });
        await axios.post(`http://localhost:5588/submit-enquiry`, values);
        setFormStatus({ submitting: false, success: true, error: false });
        myFormik.resetForm();
      } catch (err) {
        console.error('Submission error:', err);
        setFormStatus({ 
          submitting: false, 
          success: false, 
          error: true,
          errorMessage: err.response?.data || err.message 
        });
      }
    }
  });

  const isActive = (path) => {
    return window.location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Contact Form Dialog */}
      <Dialog 
        open={contactFormOpen} 
        onClose={() => {
          setContactFormOpen(false);
          setFormStatus({ submitting: false, success: false, error: false });
        }}
        maxWidth="md"
        className="header-cf-dialog"
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)'
          }
        }}
      >
        <DialogContent className="header-cf-dialog-content">
          <IconButton 
            aria-label="close" 
            onClick={() => {
              setContactFormOpen(false);
              setFormStatus({ submitting: false, success: false, error: false });
            }}
            className="header-cf-close-button"
          >
            <CloseIcon />
          </IconButton>

          <div className="header-cf-form-container">
            <div className="header-cf-form-header">
              <h2 className="header-cf-form-title">Get in Touch</h2>
              <p className="header-cf-form-subtitle">Fill out the form below and our team will contact you shortly</p>
            </div>

            {formStatus.success ? (
              <div className="header-cf-success-message">
                <svg className="header-cf-success-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <h3>Thank You!</h3>
                <p>Your enquiry has been submitted successfully.</p>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : formStatus.error ? (
              <div className="header-cf-error-message">
                <svg className="header-cf-error-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
                <h3>Submission Failed</h3>
                <p>There was an error submitting your form.</p>
                <button 
                  className="header-cf-retry-button"
                  onClick={() => setFormStatus({ submitting: false, success: false, error: false })}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={myFormik.handleSubmit} className="header-cf-contact-form">
                <div className="header-cf-form-grid">
                  <div className="header-cf-form-group">
                    <label htmlFor="header-cf-name" className="header-cf-input-label">Full Name*</label>
                    <div className="header-cf-input-container">
                      <input
                        type="text"
                        id="header-cf-name"
                        name="name"
                        placeholder="John Doe"
                       value={myFormik.values.name}
                        onChange={myFormik.handleChange}
                        required
                        className="header-cf-input-field"
                      />
                      <svg className="header-cf-input-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="header-cf-form-group">
                    <label htmlFor="header-cf-phone" className="header-cf-input-label">Phone Number*</label>
                    <div className="header-cf-input-container">
                      <input
                        type="tel"
                        id="header-cf-phone"
                        name="phone"
                        placeholder="Your Phone No."
                        value={myFormik.values.phone}
                        onChange={myFormik.handleChange}
                        required
                        className="header-cf-input-field"
                      />
                      <svg className="header-cf-input-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="header-cf-form-group">
                    <label htmlFor="header-cf-email" className="header-cf-input-label">Email Address*</label>
                    <div className="header-cf-input-container">
                      <input
                        type="email"
                        id="header-cf-email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={myFormik.values.email}
                        onChange={myFormik.handleChange}
                        required
                        className="header-cf-input-field"
                      />
                      <svg className="header-cf-input-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="header-cf-form-group">
                    <label htmlFor="header-cf-service" className="header-cf-input-label">Service Interested In*</label>
                    <div className="header-cf-input-container">
                      <select
                        id="header-cf-service"
                        name="service"
                        value={myFormik.values.service}
                        onChange={myFormik.handleChange}
                        required
                        className="header-cf-input-field"
                      >
                        <option value="skirting&profile">Aluminum Profile and Skirtings</option>
                        <option value="carpets">Carpets</option>
                        <option value="flooring">Flooring</option>
                        <option value="other">Other Services</option>
                      </select>
                      <svg className="header-cf-input-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,16L6,10H18L12,16Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="header-cf-form-group header-cf-full-width">
                    <label htmlFor="header-cf-message" className="header-cf-input-label">Your Message</label>
                    <div className="header-cf-input-container">
                      <textarea
                        id="header-cf-message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        value={myFormik.values.message}
                        onChange={myFormik.handleChange}
                        rows="4"
                        className="header-cf-textarea-field"
                      ></textarea>
                      <svg className="header-cf-textarea-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18.5,2L19.66,4.65L22.5,5.5L19.66,6.36L18.5,9L17.34,6.36L14.5,5.5L17.34,4.65L18.5,2M10.61,8.93L7.5,7.63L4.39,8.93L5.07,12L4.39,15.07L7.5,16.37L10.61,15.07L9.93,12L10.61,8.93M18.5,15L19.66,17.65L22.5,18.5L19.66,19.36L18.5,22L17.34,19.36L14.5,18.5L17.34,17.65L18.5,15Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="header-cf-submit-button"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="header-cf-spinner" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5"></circle>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <svg className="header-cf-arrow-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>


      {/* Desktop Header */}
       <div className="outer_desktop_header">
        <div className="inner_desktop_header">
          {/* Top Action Bar */}
          <div className="header_top_section">
            <div className="header_top_container">
              <div className="header_button_container">
                <button className="header_button" onClick={() => window.open(brochure, '_blank')}>
                  <span className="button-icon">📄</span>
                  <span>Brochure</span>
                </button>
                <button className="header_button" onClick={() => setContactFormOpen(true)}>
                  <span className="button-icon">✉️</span>
                  <span>Enquire</span>
                </button>
                <button
                        className="header_button phone"
                        onClick={() => {
                          window.location.href = 'tel:+918744036000';
                        }}
                      >
                        <span className="button-icon">📞</span>
                        <span>+91-87440-36000</span>
                      </button>

              </div>
            </div>
          </div>

          {/* Main Navigation Bar */}
          <div className="header_bottom_section">
            <div className="header_bottom_container">
              {/* Logo Section */}
              <div className="header_logo_container">
                <a href="/" className="logo-link">
                  <img src={aidfLogo} alt="AIDF Logo" className="aidf_logo" />
                </a>
              </div>

              {/* Search Bar */}
               <div className="header_search_container">
                <form onSubmit={handleSearchSubmit} className="search_bar">
                  <input 
                    type="text" 
                    placeholder="Search sections..." 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => searchQuery.length > 0 && setShowResults(true)}
                    onBlur={() => setTimeout(() => setShowResults(false), 200)}
                  />
                  <button type="submit" className="search_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
                    </svg>
                  </button>
                </form>
                {showResults && searchResults.length > 0 && (
                  <div className="search-results-dropdown">
                    {searchResults.map((result) => (
                      <div 
                        key={result.id} 
                        className="search-result-item"
                        onMouseDown={() => navigateToSection(result.id)}
                      >
                        {result.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Navigation */}
              <nav className="main_navigation">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="/" className={`nav-link ${isActive('/')}`}>Home</a>
                  </li>
                  
                  <li className="nav-item dropdown" 
                      onMouseEnter={() => toggleDropdown('about')}
                      onMouseLeave={() => toggleDropdown(null)}>
                    <a href="/about-us" className={`nav-link ${isActive('/about-us')}`}>
                      About Us
                      <span className="dropdown-arrow">▼</span>
                    </a>
                    <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
                      <a  style={{ color: 'black', textDecoration: 'none' }} href="/about-us/#chairman-section">Chairman's Message</a>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/about-us/#ourstory">Our Story</a>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/about-us/#vision">Vision & Mission</a>
                    </div>
                  </li>
                  
                  <li className="nav-item dropdown"
                      onMouseEnter={() => toggleDropdown('products')}
                      onMouseLeave={() => toggleDropdown(null)}>
                    <a href="/products" className={`nav-link ${isActive('/products')}`}>
                      Products
                      <span className="dropdown-arrow">▼</span>
                    </a>
                    <div className={`dropdown-menu ${activeDropdown === 'products' ? 'show' : ''}`}>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/aluminum-profile-skirtings">Aluminum Profile and Skirtings</a>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/carpets">Carpets</a>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/flooring">Flooring</a>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/Aluminium_Glass_Partitions">Aluminium  Glass Partition</a>
                      <a style={{ color: 'black', textDecoration: 'none' }} href="/Moreproducts">More..</a>

                    </div>
                  </li>
                  
                 
                  
                  <li className="nav-item">
                    <a href="/blogs" className={`nav-link ${isActive('/blogs')}`}>Blogs</a>
                  </li>
                  
                  <li className="nav-item">
                    <a href="/locate-us" className={`nav-link ${isActive('/locate-us')}`}>Locate Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="outer_mobile_header">
        <header className="mobile_header">
          <div className="mobile_header_container">
            <a href="/" className="mobile_logo_link">
              <img src={aidfLogo} alt="Company Logo" className="mobile_logo" />
            </a>
            
            <div className="mobile_menu_icons">
              <button className="mobile_search_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
                </svg>
              </button>
              
              <button className="mobile_menu_button" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile_menu ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile_menu_content">
              <ul className="mobile_nav_list">
                <li className="mobile_nav_item">
                  <a href="/" className="mobile_nav_link">Home</a>
                </li>
                
                <li className="mobile_nav_item">
                  <div className="mobile_nav_link" onClick={() => toggleDropdown('mobile-about')}>
                    About Us
                    <span className={`mobile_dropdown_arrow ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile_dropdown_menu ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>
                    <a href="/about-us/#chairman-section">Chairman's Message</a>
                    <a href="/about-us/#ourstory">Our Story</a>
                    <a href="/about-us/#vision">Vision & Mission</a>
                  </div>
                </li>
                
                <li className="mobile_nav_item">
                  <div className="mobile_nav_link" onClick={() => toggleDropdown('mobile-products')}>
                    Products
                    <span className={`mobile_dropdown_arrow ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile_dropdown_menu ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>
                    <a href="/aluminum-profile-skirtings">Aluminum Profile and Skirtings</a>
                    <a href="/carpets">Carpets</a>
                    <a href="/flooring">Flooring</a>
                      <a href="/Aluminium_Glass_Partitions">Aluminium Glass Partition</a>
                   <a href="/Moreproducts">More</a>

                  </div>
                </li>
                
                
                <li className="mobile_nav_item">
                  <a href="/static-blog" className="mobile_nav_link">Blogs</a>
                </li>
                
                <li className="mobile_nav_item">
                  <a href="/locateUs" className="mobile_nav_link">Locate Us</a>
                </li>
              </ul>
              
              <div className="mobile_action_buttons">
                <button className="mobile_action_button" onClick={() => window.open(brochure, '_blank')}>
                  <span className="button-icon">📄</span>
                  Brochure
                </button>
                <button className="mobile_action_button" onClick={() => setContactFormOpen(true)}>
                  <span className="button-icon">✉️</span>
                  Enquire
                </button>
                <button className="mobile_action_button phone" onClick={() => window.location.href = 'tel:9002690068'}>
                  <span className="button-icon">📞</span>
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
