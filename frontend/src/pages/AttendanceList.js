import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceList = () => {
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/attendances')
            .then((response) => setAttendances(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="attendance-list">
            <h2>Attendance Index</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {attendances.map((attendance) => (
                        <tr key={attendance._id}>
                            <td>{attendance.date}</td>
                            <td>{attendance.start_time}</td>
                            <td>{attendance.end_time}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                                <button>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceList;
