import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ContactFormPopup.css';

const ContactFormPopup = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'uPVC',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className="contact-form-dialog"
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Translucent black background
          backdropFilter: 'blur(4px)' // Optional blur effect
        }
      }}
    >
      <DialogContent className="contact-form-content">
        <IconButton 
          aria-label="close" 
          onClick={onClose}
          className="close-button"
        >
          <CloseIcon />
        </IconButton>

        <div className="contact-form-container">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-subtitle">We'll get back to you shortly</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                maxLength="35"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                maxLength="13"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">I'm looking for</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="uPVC">uPVC</option>
                <option value="ALU Home Interior">ALU Home Interior</option>
                <option value="Commercial partition system">Commercial partition system</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                maxLength="70"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                <path fill="none" stroke="currentColor" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"></path>
              </svg>
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormPopup;