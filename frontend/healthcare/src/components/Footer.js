import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-light py-3 mt-auto text-center">
            <div className="container">
                <p className="footer-note">
                    © 2025 Smart Healthcare - [Your Name/Group Name]
                </p>
                <div>
                    <Link to="/privacy-policy" className="footer-link">
                        Privacy Policy
                    </Link>{" "}
                    |{" "}
                    <Link to="/terms-of-service" className="footer-link">
                        Terms of Service
                    </Link>
                </div>
                <p>Contact: support@example.com</p>
            </div>
        </footer>
    );
  };
  export default Footer;