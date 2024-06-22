import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-4">About Us</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at eros sed libero mattis efficitur eu vel turpis.</p>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">Our Story</a></li>
              <li><a href="#" className="text-white">Vision & Mission</a></li>
              <li><a href="#" className="text-white">Customer Reviews</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-4">Shop</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">Men's Clothing</a></li>
              <li><a href="#" className="text-white">Women's Clothing</a></li>
              <li><a href="#" className="text-white">Accessories</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Support</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">FAQs</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">Shipping Information</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Connect with Us</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white"><FaFacebook className="me-2" />Facebook</a></li>
              <li><a href="#" className="text-white"><FaTwitter className="me-2" />Twitter</a></li>
              <li><a href="#" className="text-white"><FaInstagram className="me-2" />Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <p className="mb-0">© 2024 Men's Ecommerce. All rights reserved.</p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
              <li className="list-inline-item">•</li>
              <li className="list-inline-item"><a href="#" className="text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
