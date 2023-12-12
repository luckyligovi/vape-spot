import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function About() {
  const whatsappNumber = "+254721475143";
  return (
    <footer className="footer">
      

      <div className="social-media">
        <a
          href="https://www.instagram.com/vapespot.ke/reels/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <WhatsAppIcon fontSize="large" />
        </a>
      </div>

      <div className="about-section">
        <div>
          <h1>Contact</h1>
          <p>Contact us at +254721475143</p>
        </div>
        <div className="footer-item">
          <h1>Address</h1>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Endogawa Apartments Kenya</p>
        </div>
        <div className="footer-item">
          <h1>WORKING HOURS</h1>
          <p>Working Hours: Mon-Sun, 9:00 AM - 5:00 PM</p>
        </div>
      </div>
    </footer>
  );
}

export default About;
