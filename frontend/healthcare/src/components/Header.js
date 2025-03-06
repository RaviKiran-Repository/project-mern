import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaClinicMedical, FaPills } from "react-icons/fa";

// ** Header Component
const Header = () => {
    const [isPharmacyOpen, setIsPharmacyOpen] = useState(false);

    return (
        <header className="header bg-primary text-white py-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand">
                        <FaHeartbeat className="logo-icon" /> Smart Healthcare
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
<li className="nav-item">
    <Link to="/diagnostics" className="nav-link">
        <FaClinicMedical className="nav-icon" /> Diagnostics
    </Link>
</li>
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown"
                                    onClick={() => setIsPharmacyOpen(!isPharmacyOpen)}
                                >
                                    <FaPills className="nav-icon" /> Pharmacy <FaCaretDown />
                                </button> 
                                <div className={`dropdown-menu ${isPharmacyOpen ? 'show' : ''}`}>
                                    <a className="dropdown-item" href="https://www.1mg.com" target="_blank" rel="noopener noreferrer">Tata 1mg</a>
                                    <a className="dropdown-item" href="https://www.pharmeasy.in" target="_blank" rel="noopener noreferrer">PharmEasy</a>
                                    <a className="dropdown-item" href="https://www.netmeds.com" target="_blank" rel="noopener noreferrer">Netmeds</a>
                                    <a className="dropdown-item" href="https://www.apollo247.com" target="_blank" rel="noopener noreferrer">Apollo 24|7</a>
                                    <a className="dropdown-item" href="https://www.medplusmart.com" target="_blank" rel="noopener noreferrer">MedPlus Mart</a>
                                    <a className="dropdown-item" href="https://www.practo.com" target="_blank" rel="noopener noreferrer">Practo</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/login-signup" className="nav-link">Login/Signup</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;