import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/admission" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Admission
      </NavLink><br></br>
      <NavLink to="/students_attendances" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Students Attendance
      </NavLink><br></br>
      <NavLink to="/attendances" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Attendance
      </NavLink><br></br>
      <NavLink to="/attendance_list" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Attendance List
      </NavLink><br></br>
      <NavLink to="/exams" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Exams
      </NavLink><br></br>
      <NavLink to="/course" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Course
      </NavLink><br></br>
      <NavLink to="/branch" className={({ isActive }) => (isActive ? "active-link" : "sidebar-link")}>
        Branch
      </NavLink><br></br>
    </div>
  );
};

export default Sidebar;
