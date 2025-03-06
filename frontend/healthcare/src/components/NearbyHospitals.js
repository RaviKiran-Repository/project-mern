import React, { useState, useEffect } from 'react';
const NearbyHospitals = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        const fetchNearbyHospitals = async () => {
            try {
                // Get the user's current location
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;

                        // Call an API to fetch nearby hospitals based on the user's location
                        const response = await fetch(`http://localhost:5000/api/nearby-hospitals?latitude=${latitude}&longitude=${longitude}`);
                        const data = await response.json();
                        setHospitals(data);
                    },
                    (error) => {
                        console.error("Error getting location:", error);
                        alert("Could not get your location. Please try again.");
                    }
                );
            } catch (error) {
                console.error("Error fetching nearby hospitals:", error);
                alert("Failed to fetch nearby hospitals.");
            }
        };

        fetchNearbyHospitals();
    }, []);
    
    return (
        <div className="container mt-5">
            <h2>Nearby Hospitals</h2>
            <p>Find hospitals near you for immediate assistance.</p>
            {/* Integrate with Google Maps API to display nearby hospitals */}
            <iframe
                title="Nearby Hospitals"
                width="100%"
                height="400"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120971.63497217721!2d-74.07555947149308!3d40.7590403499748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1hospitals!5e0!3m2!1sen!2sus!4v1625747682951!5m2!1sen!2sus"
            ></iframe>
        </div>
    );
};
export default NearbyHospitals;