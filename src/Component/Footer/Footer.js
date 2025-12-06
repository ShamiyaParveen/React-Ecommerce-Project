import React from 'react';
import img_logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* --- Top Section: Call to Action / Branding --- */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            {/* Logo matching your header style */}
            <div className='mb-2 footer-logo-img'>
                <Link to={'/'}>
               <img src={img_logo} alt="logo1" className="img-fluid"/>
               </Link> 
            </div>
            
            <p className="mb-4">
              Adaptive products empower you to offer highly personalized shopping experiences. 
              Find the best looks for Men, Women, and Kids at unbeatable prices.
            </p>
            {/* Social Icons */}
            <div className="footer-social-icon">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="footer-widget-heading">
              <h3>Categories</h3>
            </div>
            <ul className="footer-links">
              <li><a href="#">Men's Denim</a></li>
              <li><a href="#">Women's Handbags</a></li>
              <li><a href="#">Ethnic Wear</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Kids Wear</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane"></i> GO</button>
              </form>
            </div>
            
            <div className="mt-3">
                <p style={{fontSize: '14px', color: '#b0b0b0'}}>
                    <i className="fas fa-map-marker-alt me-2" style={{color: '#ec3875'}}></i>
                    123 Street Name, City, India
                </p>
                <p style={{fontSize: '14px', color: '#b0b0b0'}}>
                    <i className="fas fa-phone me-2" style={{color: '#2bbef9'}}></i>
                    +91 12345 67890
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Copyright Section --- */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 text-center text-lg-start">
              <div className="copyright-text">
                <p>Copyright &copy; 2024 <a href="/">Zoobiya</a>. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-end">
              <div className="footer-menu">
                {/* Placeholders for Payment Methods */}
                <span style={{color:'#fff', fontSize:'12px', marginRight:'10px'}}>We accept:</span>
                <i className="fab fa-cc-visa fa-2x" style={{color:'#fff', margin:'0 5px'}}></i>
                <i className="fab fa-cc-mastercard fa-2x" style={{color:'#fff', margin:'0 5px'}}></i>
                <i className="fab fa-cc-paypal fa-2x" style={{color:'#fff', margin:'0 5px'}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;