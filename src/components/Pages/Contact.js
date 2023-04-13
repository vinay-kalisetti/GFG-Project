import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email:</label>
        <input type="text" placeholder="Enter your email" required />
        <label>Message:</label>
        <textarea
          rows="4"
          placeholder="Enter your message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
