import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

     if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      navigate("/customer-home");
        alert("Login successful! Welcome back, " + username); 

    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <h2 style={{color: "#0f766e", textAlign: "center"}}>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <button type="submit">Sign In</button>
        <Link to="/register" style={{ color: "#0f766e", textDecoration: "none" }}>
            Does not have an account? Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;