import React, { useState } from 'react';

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState("");
    const [advice, setAdvice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/symptom-checker', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ symptoms })
            });
            const data = await response.json();
            setAdvice(data.advice);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Symptom Checker</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="symptoms" className="form-label">
                        Enter your symptoms:
                    </label>
                    <textarea
                        className="form-control"
                        id="symptoms"
                        rows="3"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Get Advice
                </button>
            </form>
            {advice && (
                <div className="mt-3">
                    <h3>Advice:</h3>
                    <p>{advice}</p>
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;