import React, { useState, useEffect } from 'react';
import "../styles/ExamPage.css";

const ExamPage = () => {
    const [exams, setExams] = useState([]);
    const [newExam, setNewExam] = useState({
        examName: "",
        examDate: "",
        startTime: "",
        endTime: "",
        courseName: "",
    });

    // Fetch all exams from the backend
    useEffect(() => {
        fetch('http://localhost:5000/api/exams')
            .then((res) => res.json())
            .then((data) => setExams(data))
            .catch((err) => console.error("Error fetching exams:", err));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExam({ ...newExam, [name]: value });
    };

    const handleAddExam = () => {
        if (
            newExam.examName &&
            newExam.examDate &&
            newExam.startTime &&
            newExam.endTime &&
            newExam.courseName
        ) {
            fetch('http://localhost:5000/api/exams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newExam),
            })
                .then((res) => res.json())
                .then((addedExam) => {
                    setExams([...exams, addedExam]);
                    setNewExam({
                        examName: "",
                        examDate: "",
                        startTime: "",
                        endTime: "",
                        courseName: "",
                    });
                })
                .catch((err) => console.error("Error adding exam:", err));
        } else {
            alert("Please fill all fields");
        }
    };

    const handleDeleteExam = (id) => {
        fetch(`http://localhost:5000/api/exams/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setExams(exams.filter((exam) => exam.id !== id));
            })
            .catch((err) => console.error("Error deleting exam:", err));
    };

    return (
        <div className="exam-page">
            <h1>Manage Exams</h1>
            <div className="form-container">
                <div className="form-row">
                    <input
                        type="text"
                        name="examName"
                        placeholder="Exam Name"
                        value={newExam.examName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="date"
                        name="examDate"
                        placeholder="Exam Date"
                        value={newExam.examDate}
                        onChange={handleInputChange}
                    />
                    <input
                        type="time"
                        name="startTime"
                        placeholder="Start Time"
                        value={newExam.startTime}
                        onChange={handleInputChange}
                    />
                    <input
                        type="time"
                        name="endTime"
                        placeholder="End Time"
                        value={newExam.endTime}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="courseName"
                        placeholder="Course Name"
                        value={newExam.courseName}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddExam}>Add Exam</button>
                </div>
            </div>

            <div className="exam-table">
                <h2>Exam List</h2>
                {exams.length === 0 ? (
                    <p>No exams added yet.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Exam Name</th>
                                <th>Exam Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Course Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exams.map((exam) => (
                                <tr key={exam.id}>
                                    <td>{exam.exam_name}</td>
                                    <td>{exam.exam_date}</td>
                                    <td>{exam.start_time}</td>
                                    <td>{exam.end_time}</td>
                                    <td>{exam.course_name}</td>
                                    <td>
                                        <button onClick={() => handleDeleteExam(exam.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ExamPage;
