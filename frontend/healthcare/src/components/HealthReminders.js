import React, { useState, useEffect } from 'react';

// ** Health Reminders Component
// const HealthReminders = () => {
//     cconst [reminders, setReminders] = useState([]);
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
//         const handleSetReminder = async () => {
//             try {
//                 const reminderData = {
//                     task: newTask,
//                     time: newTime,
//                 };
    
//                 const response = await fetch("http://localhost:5000/api/health-reminders", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(reminderData),
//                 });
    
//                 const data = await response.json();
//                 setReminders([...reminders, data]);
//                 setNewTask("");
//                 setNewTime("");
//             } catch (error) {
//                 console.error("Error setting reminder:", error);
//             }
//         };

//         fetchReminders();
//     }, []);

//     // const handleAddReminder = async () => {
//     //     try {
//     //         const response = await fetch('http://localhost:5000/api/Health-Reminders', {
//     //             method: 'POST',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify(newReminder)
//     //         });
//     //         const data = await response.json();
//     //         setReminders([...reminders, data]);
//     //         setNewReminder({ task: "", time: "" });
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //     }
//     // };

//     return (
//         <div className="container mt-5">
//             <h2>Health Reminders</h2>
//             <p>Set reminders for medications, appointments, and more.</p>
//             {/* Add form to set reminders */}
//             <button className="btn btn-primary">Set Reminder</button>
//             {/* Display list of reminders */}
//         </div>
//     );
// };


// ** Health Reminders Component
const HealthReminders = () => {
    const [reminders, setReminders] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newTime, setNewTime] = useState("");

    useEffect(() => {
        const fetchReminders = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/Health-Reminders');
                const data = await response.json();
                setReminders(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchReminders();
    }, []);

    const handleSetReminder = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/Health-Reminders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task: newTask, time: newTime })
            });
            const data = await response.json();
            setReminders([...reminders, data]);
            setNewTask("");
            setNewTime("");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        // You probably intend to use newTask and newTime here. If not, remove the dependency array
        console.log("newTask or newTime has changed");
    }, [newTask, newTime]);

    const handleDeleteReminder = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/Health-Reminders/${id}`, {
                method: 'DELETE'
            });
            setReminders(reminders.filter(reminder => reminder._id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Health Reminders</h2>
            <p>Set reminders for medications, appointments, and more.</p>
            {/* Add functionality to set and manage reminders */}
            <input
                type="text"
                className="form-control"
                placeholder="Enter task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <input
                type="time"
                className="form-control"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSetReminder}>Set Reminder</button>
            <ul>
                {reminders.map(reminder => (
                    <li key={reminder._id}>
                        {reminder.task} at {reminder.time}
                        <button className="btn btn-danger" onClick={() => handleDeleteReminder(reminder._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default HealthReminders;