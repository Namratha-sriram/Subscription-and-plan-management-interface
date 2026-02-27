import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user
    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("loggedInUser", JSON.stringify(userData));

    // Auto login
    localStorage.setItem("loggedIn", "true");

    navigate("/customer-home");
  };

  return (
    <div className="page-container">
      <h2 style={{ color: "#0f766e", textAlign: "center" }}>Sign Up</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Sign Up</button>

        <Link
          to="/login"
          style={{ color: "#0f766e", textDecoration: "none" }}
        >
          Already have an account? Sign in
        </Link>
      </form>
    </div>
  );
}

export default Register;