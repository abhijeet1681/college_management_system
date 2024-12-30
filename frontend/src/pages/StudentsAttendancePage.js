import React, { useEffect, useState } from "react";
import "../styles/StudentAttendance.css";

const StudentAttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch attendance data from the backend
    fetch("http://localhost:5000/api/attendance") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch attendance data");
        }
        return response.json();
      })
      .then((data) => {
        setAttendanceData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading attendance data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="attendance-page">
      <h1>Student Attendance</h1>
      <div className="attendance-table">
        {attendanceData.length === 0 ? (
          <p>No attendance data available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <tr key={record.id}>
                  <td>{record.studentId}</td>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.date}</td>
                  <td className={record.status.toLowerCase()}>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentAttendancePage;
