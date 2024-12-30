import React, { useState } from "react";
import "../styles/AdmissionPage.css";

const AdmissionPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    dateOfAdmission: "",
    branch: "",
    courseName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = async () => {
    if (
      newStudent.firstName &&
      newStudent.lastName &&
      newStudent.dateOfAdmission &&
      newStudent.branch &&
      newStudent.courseName
    ) {
      setLoading(true);

      // Send data to backend
      try {
        const response = await fetch("http://localhost:5000/api/admissions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        });

        if (response.ok) {
          const savedStudent = await response.json();
          setStudents([...students, savedStudent]);
          setNewStudent({
            firstName: "",
            lastName: "",
            dateOfAdmission: "",
            branch: "",
            courseName: "",
          });
          alert("Student added successfully!");
        } else {
          alert("Failed to add student. Please try again.");
        }
      } catch (error) {
        alert("Error connecting to server: " + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  const handleEditStudent = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setNewStudent(studentToEdit);
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admissions/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setStudents(students.filter((student) => student.id !== id));
        alert("Student deleted successfully.");
      } else {
        alert("Failed to delete student.");
      }
    } catch (error) {
      alert("Error connecting to server: " + error.message);
    }
  };

  return (
    <div className="new-admission">
      <h1>New Admission</h1>
      <div className="form-container">
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newStudent.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newStudent.lastName}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dateOfAdmission"
            value={newStudent.dateOfAdmission}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={newStudent.branch}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={newStudent.courseName}
            onChange={handleInputChange}
          />
          <button onClick={handleAddStudent} disabled={loading}>
            {loading ? "Adding..." : "Add Student"}
          </button>
        </div>
      </div>

      <div className="student-table">
        <h2>Student List</h2>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Admission</th>
                <th>Branch</th>
                <th>Course Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.dateOfAdmission}</td>
                  <td>{student.branch}</td>
                  <td>{student.courseName}</td>
                  <td>
                    <button onClick={() => handleEditStudent(student.id)}>Edit</button>
                    <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
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

export default AdmissionPage;
