import React, { useState, useEffect } from 'react';

const MentalHealth = () => {
    const [resources, setResources] = useState([]); 
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/mental-health');
                const data = await response.json();
                setResources(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };


        fetchResources();
    }, []);
    return (
        <div className="container mt-5">
            <h2>Mental Health Support</h2>
            <p>Access resources and support for your mental well-being.</p>
            <ul className="list-group">
                <li className="list-group-item">
                    <a href="https://www.mhanational.org/" target="_blank" rel="noopener noreferrer">
                        Mental Health America
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">
                        SAMHSA
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MentalHealth;