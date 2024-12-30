import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/admission");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
