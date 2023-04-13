import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
      Welcome to our healthcare application, a comprehensive solution for all 
      your health needs. Our aim is to provide high-quality healthcare services 
      in a convenient and efficient manner. Our application offers a range of services, 
      including specialist consultation, laboratory services, pharmacy services, and 
      health insurance. We strive to deliver exceptional care and ensure the best possible 
      experience for our users.
      </p>
      <h3 className="section-heading">Our Services</h3>
        <p className="description">Welcome to our healthcare application, a comprehensive solution for all your health needs. Our aim is to provide high-quality healthcare services in a convenient and efficient manner. Our application offers the following services:</p>
        <ul className="services-list">
          <li>Specialist Consultation: Book appointments with expert doctors across various specializations for professional medical advice and guidance.</li>
          <li>Laboratory Services: Get accurate and timely lab test results to aid in diagnosis and treatment, with advanced lab facilities and experienced technicians.</li>
          <li>Pharmacy Services: Conveniently order medicines online and have them delivered to your doorstep, with a wide range of authentic and quality medications.</li>
          <li>Health Insurance: Explore our range of health insurance plans to safeguard yourself and your loved ones, with comprehensive coverage and reliable support.</li>
        </ul>
        <h3 className="section-heading">Our Features</h3>
        <p className="description">Our healthcare application also offers the following features:</p>
        <ul className="features-list">
          <li>Easy-to-Use: Our user-friendly interface makes it simple to navigate and access various services, ensuring a seamless experience for users of all ages.</li>
          <li>24/7 Access: Our services are available 24/7, allowing users to book appointments, order medicines, and avail of our services anytime, anywhere, according to their convenience.</li>
          <li>Expert Care: We connect users with experienced healthcare professionals for quality medical care, ensuring the best possible outcomes for their health needs.</li>
          <li>Secure and Confidential: We prioritize user privacy and data security, ensuring that all personal information and data shared on our platform are protected and kept confidential.</li>
        </ul>
      <p className="about-description">
        With our comprehensive services, user-friendly interface, and commitment to 
        quality care and privacy, our healthcare application is dedicated to providing 
        the best healthcare experience to our users.
      </p>
    </div>
  );
}

export default About;
