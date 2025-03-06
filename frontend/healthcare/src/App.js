// import React from "react";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeartbeat, FaClinicMedical, FaPills } from "react-icons/fa";
// import { FaCaretDown } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"; //Import app.css

// function App() {
//     return (
//         <Router>
//             <div>
//                 {/* Header */}
//                 <Header />

//                 {/* Routes */}
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/features" element={<Features />} />
//                     <Route path="/login-signup" element={<Auth />} />
//                     {/* Define routes for all the features mentioned */}
//                     <Route path="/symptom-checker" element={<SymptomChecker />} />
//                     <Route path="/mental-health" element={<MentalHealth />} />
//                     <Route path="/family-health" element={<FamilyHealth />} />
//                     <Route path="/Doctor-Communication" element={<DoctorCommunication />} />
//                     <Route path="/Health-Statistics" element={<HealthStatistics />} />
//                     <Route path="/Emergency-Assistance" element={<EmergencyAssistance />} />
//                     <Route path="/Tracking" element={<Tracking />} />
//                     <Route path="/Educational-Content" element={<EducationalContent />} />
//                     <Route path="/AI-Driven-Health-Advice" element={<AIDrivenHealthAdvice />} />
//                     <Route path="/Voice-Interaction" element={<VoiceInteraction />} />
//                     <Route path="/Nearby-Hospitals" element={<NearbyHospitals />} />
//                     <Route path="/Health-Reminders" element={<HealthReminders />} />
//                     <Route path="/forgot-password" element={<ForgotPassword />} />
//                     <Route path="/diagnostics" element={<Diagnostics />} />
//                 </Routes>

//                 {/* Footer */}
//                 <Footer />
//             </div>
//         </Router>
//     );
// }

// // ** Symptom Checker Component
// const SymptomChecker = () => {
//     const [symptoms, setSymptoms] = useState("");
//     const [advice, setAdvice] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/symptom-checker', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ symptoms })
//             });
//             const data = await response.json();
//             setAdvice(data.advice);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Symptom Checker</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="symptoms" className="form-label">
//                         Enter your symptoms:
//                     </label>
//                     <textarea
//                         className="form-control"
//                         id="symptoms"
//                         rows="3"
//                         value={symptoms}
//                         onChange={(e) => setSymptoms(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Get Advice
//                 </button>
//             </form>
//             {advice && (
//                 <div className="mt-3">
//                     <h3>Advice:</h3>
//                     <p>{advice}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// // ** Mental Health Component
// const MentalHealth = () => {
//     const [resources, setResources] = useState([]); 
//     useEffect(() => {
//         const fetchResources = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/mental-health');
//                 const data = await response.json();
//                 setResources(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };


//         fetchResources();
//     }, []);
//     return (
//         <div className="container mt-5">
//             <h2>Mental Health Support</h2>
//             <p>Access resources and support for your mental well-being.</p>
//             <ul className="list-group">
//                 <li className="list-group-item">
//                     <a href="https://www.mhanational.org/" target="_blank" rel="noopener noreferrer">
//                         Mental Health America
//                     </a>
//                 </li>
//                 <li className="list-group-item">
//                     <a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">
//                         SAMHSA
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// // ** Family Health Component
// const FamilyHealth = () => {
//     const [familyMembers, setFamilyMembers] = useState([]);
//     const [newMember, setNewMember] = useState({ name: "", age: "", relationship: "" }); // Example state for adding members
//     useEffect(() => {
//         const fetchFamilyMembers = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/family-health');
//                 const data = await response.json();
//                 setFamilyMembers(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchFamilyMembers();
//     }, []);

//     const handleAddMember = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/family-health', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(newMember)
//             });
//             const data = await response.json();
//             setFamilyMembers([...familyMembers, data]);
//             setNewMember({ name: "", age: "", relationship: "" }); // Clear the form
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Family Health Management</h2>
//             <p>Manage and track health records for your family members.</p>
//             {/* Add form to add family members and their health details */}
//             <button className="btn btn-primary">Add Family Member</button>
//             {/* Display family members and their health details */}
//         </div>
//     );
// };

// // ** Doctor Communication Component
// const DoctorCommunication = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [newAppointment, setNewAppointment] = useState({ date: "", time: "", reason: "" });

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/Doctor-Communication');
//                 const data = await response.json();
//                 setAppointments(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleScheduleAppointment = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/Doctor-Communication', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(newAppointment)
//             });
//             const data = await response.json();
//             setAppointments([...appointments, data]);
//             setNewAppointment({ date: "", time: "", reason: "" });
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Doctor Communication</h2>
//             <p>Schedule appointments and communicate with your doctor.</p>
//             {/* Add functionality to schedule appointments and chat with doctors */}
//             <button className="btn btn-primary">Schedule Appointment</button>
//             <button className="btn btn-info">Start Chat</button>
//         </div>
//     );
// };

// // ** Health Statistics Component
// const HealthStatistics = () => {
//     const [statistics, setStatistics] = useState({});

//     useEffect(() => {
//         const fetchStatistics = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/Health-Statistics');
//                 const data = await response.json();
//                 setStatistics(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchStatistics();
//     }, []);

//     return (
//         <div className="container mt-5">
//             <h2>Health Statistics</h2>
//             <p>View health statistics for your region.</p>
//             {/* Display charts and graphs with health statistics */}
//             <img src="health statistics graph.png" alt="Health Statistics Graph" className="img-fluid" />
//         </div>
//     );
// };

// // ** Emergency Assistance Component
// const EmergencyAssistance = () => {
//     const [nearbyHospitals, setNearbyHospitals] = useState([]);

//     const callEmergencyServices = () => {
//         // Implement logic to call emergency services
//         alert("Calling emergency services...");
//     };

//     const findNearbyHospitals = async () => {
//         try {
//             // Get the user's current location
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;

//                     // Call an API to fetch nearby hospitals based on the user's location
//                     const response = await fetch(`http://localhost:5000/api/nearby-hospitals?latitude=${latitude}&longitude=${longitude}`);
//                     const data = await response.json();
//                     setNearbyHospitals(data);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     alert("Could not get your location. Please try again.");
//                 }
//             );
//         } catch (error) {
//             console.error("Error fetching nearby hospitals:", error);
//             alert("Failed to fetch nearby hospitals.");
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Emergency Assistance</h2>
//             <p>Get emergency assistance and guidance.</p>
//             <button className="btn btn-danger">Call Emergency Services</button>
//             <button className="btn btn-warning">Find Nearby Hospitals</button>
//         </div>
//     );
// };

// // ** Tracking Component
// const Tracking = () => {
//     const [trackingData, setTrackingData] = useState({ steps: 0, calories: 0, sleepHours: 0 });

//     useEffect(() => {
//         const fetchTrackingData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/Tracking');
//                 const data = await response.json();
//                 setTrackingData(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchTrackingData();
//     }, []);

//     const handleUpdateTracking = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/Tracking', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(trackingData)
//             });
//             const data = await response.json();
//             setTrackingData(data);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Tracking</h2>
//             <p>Track your steps, calories, nutrition, and sleep.</p>
//             {/* Add forms and charts to track health metrics */}
//             <button className="btn btn-primary">Track Steps</button>
//             <button className="btn btn-info">Track Calories</button>
//         </div>
//     );
// };

// // ** Educational Content Component
// const EducationalContent = () => {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         const fetchArticles = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/educational-content");
//                 const data = await response.json();
//                 setArticles(data);
//             } catch (error) {
//                 console.error("Error fetching articles:", error);
//             }
//         };

//         fetchArticles();
//     }, []);

//     return (
//         <div className="container mt-5">
//             <h2>Educational Content</h2>
//             <p>Access educational resources about health.</p>
//             {/* Display articles and videos about health topics */}
//             <ul className="list-group">
//                 <li className="list-group-item">
//                     <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">
//                         World Health Organization
//                     </a>
//                 </li>
//                 <li className="list-group-item">
//                     <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer">
//                         Centers for Disease Control and Prevention
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// // ** AI-Driven Health Advice Component
// const AIDrivenHealthAdvice = () => {
//     const [symptoms, setSymptoms] = useState("");
//     const [advice, setAdvice] = useState("");

//     const getAdvice = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/ai-health-advice', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ symptoms })
//             });
//             const data = await response.json();
//             setAdvice(data.advice);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>AI-Driven Health Advice</h2>
//             <p>Get personalized health advice based on your symptoms and history.</p>
//             {/* Integrate with AI chatbot to provide health advice */}
//             <textarea className="form-control" rows="3" placeholder="Enter your symptoms"></textarea>
//             <button className="btn btn-primary">Get Advice</button>
//         </div>
//     );
// };

// // ** Voice Interaction Component
// const VoiceInteraction = () => {
//     const [voiceCommands, setVoiceCommands] = useState([]);
//     const [isListening, setIsListening] = useState(false);

//     useEffect(() => {
//         const fetchVoiceCommands = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/voice-interaction");
//                 const data = await response.json();
//                 setVoiceCommands(data);
//             } catch (error) {
//                 console.error("Error fetching voice commands:", error);
//             }
//         };

//         fetchVoiceCommands();
//     }, []);

//     return (
//         <div className="container mt-5">
//             <h2>Voice Interaction</h2>
//             <p>Interact with the app using voice commands.</p>
//             {/* Integrate with voice recognition API */}
//             <button className="btn btn-primary">Start Voice Chat</button>
//         </div>
//     );
// };

// // ** Nearby Hospitals Component
// const NearbyHospitals = () => {
//     const [hospitals, setHospitals] = useState([]);

//     useEffect(() => {
//         const fetchNearbyHospitals = async () => {
//             try {
//                 // Get the user's current location
//                 navigator.geolocation.getCurrentPosition(
//                     async (position) => {
//                         const { latitude, longitude } = position.coords;

//                         // Call an API to fetch nearby hospitals based on the user's location
//                         const response = await fetch(`http://localhost:5000/api/nearby-hospitals?latitude=${latitude}&longitude=${longitude}`);
//                         const data = await response.json();
//                         setHospitals(data);
//                     },
//                     (error) => {
//                         console.error("Error getting location:", error);
//                         alert("Could not get your location. Please try again.");
//                     }
//                 );
//             } catch (error) {
//                 console.error("Error fetching nearby hospitals:", error);
//                 alert("Failed to fetch nearby hospitals.");
//             }
//         };

//         fetchNearbyHospitals();
//     }, []);
    
//     return (
//         <div className="container mt-5">
//             <h2>Nearby Hospitals</h2>
//             <p>Find hospitals near you for immediate assistance.</p>
//             {/* Integrate with Google Maps API to display nearby hospitals */}
//             <iframe
//                 title="Nearby Hospitals"
//                 width="100%"
//                 height="400"
//                 src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120971.63497217721!2d-74.07555947149308!3d40.7590403499748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1hospitals!5e0!3m2!1sen!2sus!4v1625747682951!5m2!1sen!2sus"
//             ></iframe>
//         </div>
//     );
// };

// // ** Health Reminders Component
// // const HealthReminders = () => {
// //     cconst [reminders, setReminders] = useState([]);
// //     const [newTask, setNewTask] = useState("");
// //     const [newTime, setNewTime] = useState("");

// //     useEffect(() => {
// //         const fetchReminders = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:5000/api/Health-Reminders');
// //                 const data = await response.json();
// //                 setReminders(data);
// //             } catch (error) {
// //                 console.error('Error:', error);
// //             }
// //         };
// //         const handleSetReminder = async () => {
// //             try {
// //                 const reminderData = {
// //                     task: newTask,
// //                     time: newTime,
// //                 };
    
// //                 const response = await fetch("http://localhost:5000/api/health-reminders", {
// //                     method: "POST",
// //                     headers: {
// //                         "Content-Type": "application/json",
// //                     },
// //                     body: JSON.stringify(reminderData),
// //                 });
    
// //                 const data = await response.json();
// //                 setReminders([...reminders, data]);
// //                 setNewTask("");
// //                 setNewTime("");
// //             } catch (error) {
// //                 console.error("Error setting reminder:", error);
// //             }
// //         };

// //         fetchReminders();
// //     }, []);

// //     // const handleAddReminder = async () => {
// //     //     try {
// //     //         const response = await fetch('http://localhost:5000/api/Health-Reminders', {
// //     //             method: 'POST',
// //     //             headers: { 'Content-Type': 'application/json' },
// //     //             body: JSON.stringify(newReminder)
// //     //         });
// //     //         const data = await response.json();
// //     //         setReminders([...reminders, data]);
// //     //         setNewReminder({ task: "", time: "" });
// //     //     } catch (error) {
// //     //         console.error('Error:', error);
// //     //     }
// //     // };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Health Reminders</h2>
// //             <p>Set reminders for medications, appointments, and more.</p>
// //             {/* Add form to set reminders */}
// //             <button className="btn btn-primary">Set Reminder</button>
// //             {/* Display list of reminders */}
// //         </div>
// //     );
// // };


// // ** Health Reminders Component
// const HealthReminders = () => {
//     const [reminders, setReminders] = useState([]);
//     const [newTask, setNewTask] = useState("");
//     const [newTime, setNewTime] = useState("");

//     useEffect(() => {
//         const fetchReminders = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/Health-Reminders');
//                 const data = await response.json();
//                 setReminders(data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchReminders();
//     }, []);

//     const handleSetReminder = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/api/Health-Reminders', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ task: newTask, time: newTime })
//             });
//             const data = await response.json();
//             setReminders([...reminders, data]);
//             setNewTask("");
//             setNewTime("");
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     useEffect(() => {
//         // You probably intend to use newTask and newTime here. If not, remove the dependency array
//         console.log("newTask or newTime has changed");
//     }, [newTask, newTime]);

//     const handleDeleteReminder = async (id) => {
//         try {
//             await fetch(`http://localhost:5000/api/Health-Reminders/${id}`, {
//                 method: 'DELETE'
//             });
//             setReminders(reminders.filter(reminder => reminder._id !== id));
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Health Reminders</h2>
//             <p>Set reminders for medications, appointments, and more.</p>
//             {/* Add functionality to set and manage reminders */}
//             <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter task"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//             />
//             <input
//                 type="time"
//                 className="form-control"
//                 value={newTime}
//                 onChange={(e) => setNewTime(e.target.value)}
//             />
//             <button className="btn btn-primary" onClick={handleSetReminder}>Set Reminder</button>
//             <ul>
//                 {reminders.map(reminder => (
//                     <li key={reminder._id}>
//                         {reminder.task} at {reminder.time}
//                         <button className="btn btn-danger" onClick={() => handleDeleteReminder(reminder._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// // ** Features Component
// const Features = () => (
//     <motion.section
//         className="features py-5"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//     >
//         <div className="container">
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="symptom checker.png" className="card-img-top mx-auto symptom-checker-image" alt="Symptom Checker" />
//                         <div className="card-body">
//                             <h5 className="card-title">Symptom Checker</h5>
//                             <p className="card-text">Check your symptoms and get advice.</p>
//                             <Link to="/symptom-checker" className="btn btn-secondary">Check Symptoms</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="mental health.png" className="card-img-top mx-auto mental-health-image" alt="Mental Health Support" />
//                         <div className="card-body">
//                             <h5 className="card-title">Mental Health Support</h5>
//                             <p className="card-text">Access mental health resources.</p>
//                             <Link to="/mental-health" className="btn btn-secondary">Get Support</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="family health management.png" className="card-img-top mx-auto family-health-image" alt="Family Health Management" />
//                         <div className="card-body">
//                             <h5 className="card-title">Family Health Management</h5>
//                             <p className="card-text">Manage your family's health records.</p>
//                             <Link to="/family-health" className="btn btn-secondary">Manage Family Health</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="doctor communication.png" className="card-img-top mx-auto doctor-communication-image" alt="Doctor Communication" />
//                         <div className="card-body">
//                             <h5 className="card-title">Doctor Communication</h5>
//                             <p className="card-text">Schedule Appointments and interact with your Doctor</p>
//                             <Link to="/Doctor-Communication" className="btn btn-secondary">Communicate with your Doctor</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="health statitics.png" className="card-img-top mx-auto health-statistics-image" alt="Health Statistics" />
//                         <div className="card-body">
//                             <h5 className="card-title">Health Statistics</h5>
//                             <p className="card-text">View health statistics for your region</p>
//                             <Link to="/Health-Statistics" className="btn btn-secondary">View Health Statistics</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="emergency assistence.png" className="card-img-top mx-auto emergency-assistance-image" alt="Emergency Assistance" />
//                         <div className="card-body">
//                             <h5 className="card-title">Emergency Assistance</h5>
//                             <p className="card-text">Get emergency assistance and guidance</p>
//                             <Link to="/Emergency-Assistance" className="btn btn-secondary">Get Help</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="tracking.png" className="card-img-top mx-auto tracking-image" alt="Tracking" />
//                         <div className="card-body">
//                             <h5 className="card-title">Tracking</h5>
//                             <p className="card-text">Track your steps, calories, nutrition, and sleep</p>
//                             <Link to="/Tracking" className="btn btn-secondary">Track Progress</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="educational content.jpg" className="card-img-top mx-auto educational-content-image" alt="Educational Content" />
//                         <div className="card-body">
//                             <h5 className="card-title">Educational Content</h5>
//                             <p className="card-text">Access educational resources about health</p>
//                             <Link to="/Educational-Content" className="btn btn-secondary">Educate</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="ai driven.png" className="card-img-top mx-auto ai-driven-image" alt="AI-Driven Health Advice" />
//                         <div className="card-body">
//                             <h5 className="card-title">AI-Driven Health Advice</h5>
//                             <p className="card-text">Get personalized health advice based on your symptoms and history</p>
//                             <Link to="/AI-Driven-Health-Advice" className="btn btn-secondary">AI-assistance</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="voice interaction.png" className="card-img-top mx-auto voice-interaction-image" alt="Voice Interaction" />
//                         <div className="card-body">
//                             <h5 className="card-title">Voice Interaction</h5>
//                             <p className="card-text">Voice Chat</p>
//                             <Link to="/Voice-Interaction" className="btn btn-secondary">Voice Assistance</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="hospital location.png" className="card-img-top mx-auto hospital-location-image" alt="Nearby Hospitals" />
//                         <div className="card-body">
//                             <h5 className="card-title">Nearby Hospitals</h5>
//                             <p className="card-text">Find hospitals near you for immediate assistance.</p>
//                             <Link to="/Nearby-Hospitals" className="btn btn-secondary">Hospital Assistance</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div className="card h-100 text-center">
//                         <img src="health remainder.png" className="card-img-top mx-auto health-reminder-image" alt="Health Reminders" />
//                         <div className="card-body">
//                             <h5 className="card-title">Health Reminders</h5>
//                             <p className="card-text">Set reminders for medications, appointments, and more.</p>
//                             <Link to="/Health-Reminders" className="btn btn-secondary">Health Assistance</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </motion.section>
// );

// // ** Footer Component
// const Footer = () => {
//   return (
//       <footer className="footer bg-light py-3 mt-auto text-center">
//           <div className="container">
//               <p className="footer-note">
//                   © 2025 Smart Healthcare - [Your Name/Group Name]
//               </p>
//               <div>
//                   <Link to="/privacy-policy" className="footer-link">
//                       Privacy Policy
//                   </Link>{" "}
//                   |{" "}
//                   <Link to="/terms-of-service" className="footer-link">
//                       Terms of Service
//                   </Link>
//               </div>
//               <p>Contact: support@example.com</p>
//           </div>
//       </footer>
//   );
// };

// // ** Header Component
// const Header = () => {
//     const [isPharmacyOpen, setIsPharmacyOpen] = useState(false);

//     return (
//         <header className="header bg-primary text-white py-3">
//             <div className="container">
//                 <nav className="navbar navbar-expand-lg navbar-dark">
//                     <Link to="/" className="navbar-brand">
//                         <FaHeartbeat className="logo-icon" /> Smart Healthcare
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
// <li className="nav-item">
//     <Link to="/diagnostics" className="nav-link">
//         <FaClinicMedical className="nav-icon" /> Diagnostics
//     </Link>
// </li>
//                             <li className="nav-item dropdown">
//                                 <button
//                                     className="nav-link dropdown"
//                                     onClick={() => setIsPharmacyOpen(!isPharmacyOpen)}
//                                 >
//                                     <FaPills className="nav-icon" /> Pharmacy <FaCaretDown />
//                                 </button> 
//                                 <div className={`dropdown-menu ${isPharmacyOpen ? 'show' : ''}`}>
//                                     <a className="dropdown-item" href="https://www.1mg.com" target="_blank" rel="noopener noreferrer">Tata 1mg</a>
//                                     <a className="dropdown-item" href="https://www.pharmeasy.in" target="_blank" rel="noopener noreferrer">PharmEasy</a>
//                                     <a className="dropdown-item" href="https://www.netmeds.com" target="_blank" rel="noopener noreferrer">Netmeds</a>
//                                     <a className="dropdown-item" href="https://www.apollo247.com" target="_blank" rel="noopener noreferrer">Apollo 24|7</a>
//                                     <a className="dropdown-item" href="https://www.medplusmart.com" target="_blank" rel="noopener noreferrer">MedPlus Mart</a>
//                                     <a className="dropdown-item" href="https://www.practo.com" target="_blank" rel="noopener noreferrer">Practo</a>
//                                 </div>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/login-signup" className="nav-link">Login/Signup</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// };
// // ** Home Component
// const Home = () => (
//   <motion.section
//     className="home py-5"
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 1 }}
//   >
//     <div className="container">
//       <div className="row justify-content-center align-items-center text-center">
//         <div className="col-md-8">
//           <h1>Welcome to Smart Healthcare Chatbot</h1>
//           <p>Your health, our priority. Get real-time assistance, personalized advice, and more.</p>
//           <Link to="/features" className="btn btn-primary">Explore Features</Link>
//         </div>
//       </div>
//     </div>
//   </motion.section> 
// );

// // ** Auth Component (Login/Sign Up)
// const Auth = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phone, setPhone] = useState("");
//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const [, setUser] = useState(null); // Mock setUser from Header

//     const handleAuth = (e) => {
//       e.preventDefault();
//       if (isLogin) {
//         // Login logic
//         if (email === "user@example.com" && password === "password") {
//           // Mock successful login
//           const mockUser = { email: email };
//           localStorage.setItem('mockUser', JSON.stringify(mockUser)); // Store mock user
//           setUser(mockUser); // Update mock user state in Header
//           navigate("/");
//         } else {
//           setError("Invalid email or password");
//         }
//       } else {
//         // Sign up logic
//         if (email && password && name && phone && address) {
//           console.log("User signed up with:", {
//             email,
//             password,
//             name,
//             phone,
//             address,
//           });
//           // Mock successful signup
//           const mockUser = { email: email, name: name };
//           localStorage.setItem('mockUser', JSON.stringify(mockUser)); // Store mock user
//           setUser(mockUser); // Update mock user state in Header
//           navigate("/");
//         } else {
//           setError("Please fill in all fields");
//         }
//       }
//     };
//     return (
//       <motion.section
//         className="container authContainer"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={{ marginTop: '20px' }} />
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card authCard">
//               <h1 className="mb-3">{isLogin ? "Login" : "Sign Up"}</h1>
//               <form onSubmit={handleAuth}>
//                 {!isLogin && (
//                   <>
//                     <div className="mb-3">
//                       <label htmlFor="name" className="form-label">
//                         Name:
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="phone" className="form-label">
//                         Phone Number:
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         className="form-control"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="address" className="form-label">
//                         Address:
//                       </label>
//                       <input
//                         type="text"
//                         id="address"
//                         className="form-control"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </>
//                 )}
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email:
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password:
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <div className="d-flex justify-content-center">
//                   <button type="submit" className="btn btn-primary">
//                     {isLogin ? "Login" : "Sign Up"}
//                   </button>
//                 </div>
//               </form>
//               <button
//                 type="button"
//                 className="btn btn-link mt-3"
//                 onClick={() => navigate("/forgot-password")}
//               >
//                 Forgot Password?
//               </button>
//               <button
//                 className="btn btn-secondary mt-3"
//                 onClick={() => setIsLogin(!isLogin)}
//               >
//                 {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div style={{ marginBottom: '20px' }} />
//       </motion.section>
//     );
//   };

//   // ** Forgot Password Component
//   const ForgotPassword = () => {
//     const [email, setEmail] = useState("");

//     const handleResetPassword = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/forgot-password", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email }),
//             });
//             const data = await response.json();
//             alert(data.message || "Password reset link sent to your email.");
//         } catch (error) {
//             console.error("Error resetting password:", error);
//             alert("Failed to reset password.");
//         }
//     };

//     const [message, setMessage] = useState("");
//     const [error, setError] = useState("");

//     const handleForgotPassword = (e) => {
//       e.preventDefault();
//       // Simulate password reset logic
//       if (email) {
//         setMessage("Password reset email sent successfully.");
//         setError("");
//       } else {
//         setError("Please enter a valid email.");
//         setMessage("");
//       }
//     };

//     return (
//       <motion.section
//         className="container forgotPasswordContainer"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card forgotPasswordCard">
//               <h1 className="mb-3">Forgot Password</h1>
//               <form onSubmit={handleForgotPassword}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email:
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 {message && <div className="alert alert-success">{message}</div>}
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <div className="d-flex justify-content-center">
//                   <button type="submit" className="btn btn-primary">
//                     Send Reset Email
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     );
//   };

// // ** Diagnostics Component
// const Diagnostics = () => {
//     const [diagnosticTests, setDiagnosticTests] = useState([]);

//     useEffect(() => {
//         const fetchDiagnosticTests = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/diagnostics");
//                 const data = await response.json();
//                 setDiagnosticTests(data);
//             } catch (error) {
//                 console.error("Error fetching diagnostic tests:", error);
//             }
//         };

//         fetchDiagnosticTests();
//     }, []);
    
//     const [location, setLocation] = useState(null);
//     const [diagnosticCenters, setDiagnosticCenters] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Function to get user's location
//         const getLocation = () => {
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                         setLocation({
//                             latitude: position.coords.latitude,
//                             longitude: position.coords.longitude,
//                         });
//                     },
//                     (error) => {
//                         setError(error.message);
//                     }
//                 );
//             } else {
//                 setError("Geolocation is not supported by this browser.");
//             }
//         };

//         getLocation();
//     }, []);

//     useEffect(() => {
//         // Function to fetch nearby diagnostic centers
//         const fetchNearbyDiagnosticCenters = async () => {
//             if (location) {
//                 // Replace with your API call to Google Maps, Yelp, or a similar service
//                 // Example using a mock API:
//                 try {
//                     const response = await fetch(
//                         `/api/diagnostic-centers?lat=${location.latitude}&lng=${location.longitude}` // Replace with your actual API endpoint
//                     );
//                     const data = await response.json();
//                     setDiagnosticCenters(data);
//                 } catch (err) {
//                     setError(err.message);
//                 }
//             }
//         };

//         fetchNearbyDiagnosticCenters();
//     }, [location]);

//     return (
//         <div className="container mt-5">
//             <h2>Nearby Diagnostic Centers</h2>
//             {error && <div className="alert alert-danger">{error}</div>}
//             {location ? (
//                 <div>
//                     <p>
//                         Your location: Latitude {location.latitude}, Longitude{" "}
//                         {location.longitude}
//                     </p>
//                     {diagnosticCenters.length > 0 ? (
//                         <ul>
//                             {diagnosticCenters.map((center) => (
//                                 <li key={center.id}>{center.name}</li> // Adjust based on your API response
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No diagnostic centers found nearby.</p>
//                     )}
//                 </div>
//             ) : (
//                 <p>Loading your location...</p>
//             )}
//         </div>
//     );
// };


// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SymptomChecker from "./components/SymptomChecker";
import MentalHealth from "./components/MentalHealth";
import FamilyHealth from "./components/FamilyHealth";
import DoctorCommunication from "./components/DoctorCommunication";
import HealthStatistics from "./components/HealthStatistics";
import EmergencyAssistance from "./components/EmergencyAssistance";
import Tracking from "./components/Tracking";
import EducationalContent from "./components/EducationalContent";
import AIDrivenHealthAdvice from "./components/AIDrivenHealthAdvice";
import VoiceInteraction from "./components/VoiceInteraction";
import Auth from "./components/Auth";
import ForgotPassword from "./components/ForgotPassword";
import Diagnostics from "./components/Diagnostics";
import NearbyHospitals from "./components/NearbyHospitals";
import HealthReminders from "./components/HealthReminders";
import Features from "./components/Features";

function App() {
        return (
            <Router>
                <div>
                    {/* Header */}
                    <Header />
    
                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login-signup" element={<Auth />} />
                        {/* Define routes for all the features mentioned */}
                        <Route path="/symptom-checker" element={<SymptomChecker />} />
                        <Route path="/mental-health" element={<MentalHealth />} />
                        <Route path="/family-health" element={<FamilyHealth />} />
                        <Route path="/Doctor-Communication" element={<DoctorCommunication />} />
                        <Route path="/Health-Statistics" element={<HealthStatistics />} />
                        <Route path="/Emergency-Assistance" element={<EmergencyAssistance />} />
                        <Route path="/Tracking" element={<Tracking />} />
                        <Route path="/Educational-Content" element={<EducationalContent />} />
                        <Route path="/AI-Driven-Health-Advice" element={<AIDrivenHealthAdvice />} />
                        <Route path="/Voice-Interaction" element={<VoiceInteraction />} />
                        <Route path="/Nearby-Hospitals" element={<NearbyHospitals />} />
                        <Route path="/Health-Reminders" element={<HealthReminders />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/diagnostics" element={<Diagnostics />} />
                        <Route path="/features" element={<Features />} />


                    </Routes>
    
                    {/* Footer */}
                    <Footer />
                </div>
            </Router>
        );
    }

// // ** Home Component
const Home = () => (
  <motion.section
    className="home py-5"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-8">
          <h1>Welcome to Smart Healthcare Chatbot</h1>
          <p>Your health, our priority. Get real-time assistance, personalized advice, and more.</p>
          <Link to="/features" className="btn btn-primary">Explore Features</Link>
        </div>
      </div>
    </div>
  </motion.section> 
);


    
export default App;