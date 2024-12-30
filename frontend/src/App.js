import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AdmissionPage from "./pages/AdmissionPage";
import AttendanceList from './pages/AttendanceList';
import StudentsAttendancePage from "./pages/StudentsAttendancePage";
import AttendancePage from "./pages/AttendancePage";
import ExamsPage from "./pages/ExamsPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            {!isAuthenticated ? (
              <Route path="*" element={<Navigate to="/login" />} />
            ) : (
              <>
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/attendance_list" element={<AttendanceList />} />
                <Route path="/students_attendances" element={<StudentsAttendancePage />} />
                <Route path="/attendances" element={<AttendancePage />} />
                <Route path="/exams" element={<ExamsPage />} />
                <Route path="/" element={<Navigate to="/admission" />} />
              </>
            )}
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
