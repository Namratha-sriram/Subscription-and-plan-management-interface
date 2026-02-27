
import { Link , Routes, Route } from "react-router-dom";

import "./SideBar.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Plans from "../pages/Plans";
import Subscriptions from "../pages/Subscriptions";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomerHome from "../customer/CustomerHome";

function SideBar() {

  return (
    <div className="layout">
      <div className="sidebar">
        <div>
          <h2 className="logo">SubSage</h2>

          <nav className="nav-menu">
            <Link to="/"  className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/plans" className="nav-link">Plans</Link>
            <Link to="/subscriptions" className="nav-link">Subscriptions</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <p>Subscription Manager</p>
          <small>2026 © All Rights Reserved</small>
        </div>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer-home" element={<CustomerHome />} />
          <Route path="/plans" element={<Plans/>}/>
          <Route path="/subscriptions" element={<Subscriptions />}/>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1 style={{color: "Black", textAlign: "center"}}>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  
  );
}


export default SideBar;