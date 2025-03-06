import React, { useState, useEffect } from 'react';
const Tracking = () => {
    const [trackingData, setTrackingData] = useState({ steps: 0, calories: 0, sleepHours: 0 });

    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/Tracking');
                const data = await response.json();
                setTrackingData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchTrackingData();
    }, []);

    const handleUpdateTracking = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/Tracking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(trackingData)
            });
            const data = await response.json();
            setTrackingData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Tracking</h2>
            <p>Track your steps, calories, nutrition, and sleep.</p>
            {/* Add forms and charts to track health metrics */}
            <button className="btn btn-primary">Track Steps</button>
            <button className="btn btn-info">Track Calories</button>
        </div>
    );
};
export default Tracking;