import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-blue-950 text-white">
      <footer className="max-w-6xl w-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        <div className="">
          <div>
            <h1>LOGO</h1>
     
          </div>
          <div className="flex gap-2 mt-2">
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link to="/careers" className="hover:text-white">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </ul>
        </div>
        <div className="">
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/help" className="hover:text-white">
              Help Center
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
