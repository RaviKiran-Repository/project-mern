import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// ** Features Components
const Features = () => (
    <motion.section
        className="features py-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
    >
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="symptom checker.png" className="card-img-top mx-auto symptom-checker-image" alt="Symptom Checker" />
                        <div className="card-body">
                            <h5 className="card-title">Symptom Checker</h5>
                            <p className="card-text">Check your symptoms and get advice.</p>
                            <Link to="/symptom-checker" className="btn btn-secondary">Check Symptoms</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="mental health.png" className="card-img-top mx-auto mental-health-image" alt="Mental Health Support" />
                        <div className="card-body">
                            <h5 className="card-title">Mental Health Support</h5>
                            <p className="card-text">Access mental health resources.</p>
                            <Link to="/mental-health" className="btn btn-secondary">Get Support</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="family health management.png" className="card-img-top mx-auto family-health-image" alt="Family Health Management" />
                        <div className="card-body">
                            <h5 className="card-title">Family Health Management</h5>
                            <p className="card-text">Manage your family's health records.</p>
                            <Link to="/family-health" className="btn btn-secondary">Manage Family Health</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="doctor communication.png" className="card-img-top mx-auto doctor-communication-image" alt="Doctor Communication" />
                        <div className="card-body">
                            <h5 className="card-title">Doctor Communication</h5>
                            <p className="card-text">Schedule Appointments and interact with your Doctor</p>
                            <Link to="/Doctor-Communication" className="btn btn-secondary">Communicate with your Doctor</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="health statitics.png" className="card-img-top mx-auto health-statistics-image" alt="Health Statistics" />
                        <div className="card-body">
                            <h5 className="card-title">Health Statistics</h5>
                            <p className="card-text">View health statistics for your region</p>
                            <Link to="/Health-Statistics" className="btn btn-secondary">View Health Statistics</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="emergency assistence.png" className="card-img-top mx-auto emergency-assistance-image" alt="Emergency Assistance" />
                        <div className="card-body">
                            <h5 className="card-title">Emergency Assistance</h5>
                            <p className="card-text">Get emergency assistance and guidance</p>
                            <Link to="/Emergency-Assistance" className="btn btn-secondary">Get Help</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="tracking.png" className="card-img-top mx-auto tracking-image" alt="Tracking" />
                        <div className="card-body">
                            <h5 className="card-title">Tracking</h5>
                            <p className="card-text">Track your steps, calories, nutrition, and sleep</p>
                            <Link to="/Tracking" className="btn btn-secondary">Track Progress</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="educational content.jpg" className="card-img-top mx-auto educational-content-image" alt="Educational Content" />
                        <div className="card-body">
                            <h5 className="card-title">Educational Content</h5>
                            <p className="card-text">Access educational resources about health</p>
                            <Link to="/Educational-Content" className="btn btn-secondary">Educate</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="ai driven.png" className="card-img-top mx-auto ai-driven-image" alt="AI-Driven Health Advice" />
                        <div className="card-body">
                            <h5 className="card-title">AI-Driven Health Advice</h5>
                            <p className="card-text">Get personalized health advice based on your symptoms and history</p>
                            <Link to="/AI-Driven-Health-Advice" className="btn btn-secondary">AI-assistance</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="voice interaction.png" className="card-img-top mx-auto voice-interaction-image" alt="Voice Interaction" />
                        <div className="card-body">
                            <h5 className="card-title">Voice Interaction</h5>
                            <p className="card-text">Voice Chat</p>
                            <Link to="/Voice-Interaction" className="btn btn-secondary">Voice Assistance</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="hospital location.png" className="card-img-top mx-auto hospital-location-image" alt="Nearby Hospitals" />
                        <div className="card-body">
                            <h5 className="card-title">Nearby Hospitals</h5>
                            <p className="card-text">Find hospitals near you for immediate assistance.</p>
                            <Link to="/Nearby-Hospitals" className="btn btn-secondary">Hospital Assistance</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src="health remainder.png" className="card-img-top mx-auto health-reminder-image" alt="Health Reminders" />
                        <div className="card-body">
                            <h5 className="card-title">Health Reminders</h5>
                            <p className="card-text">Set reminders for medications, appointments, and more.</p>
                            <Link to="/Health-Reminders" className="btn btn-secondary">Health Assistance</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
);
export default Features;