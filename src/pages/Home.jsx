import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="Container">
       <h1 style={{color: "Black", textAlign: "center"}}>SubSage - Subscription Management Portal</h1>
      <section className="section">
        <div className="content">
          <h1>All Your Subscriptions. One Smart Dashboard.</h1>
          <p>
            Track, manage, and optimize your subscription plans with our SubSage.
          </p>

          <div className="links">
            <Link to="/plans" className="pbtn">
              Explore Plans
            </Link>
            <Link to="/Subscriptions" className="sbtn">
              View My Subscription
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="statbox">
          <h2>10+</h2>
          <p>Plans Available</p>
        </div>
        <div className="statbox">
          <h2>100%</h2>
          <p>Secure Management</p>
        </div>
        <div className="statbox">
          <h2>Real-Time</h2>
          <p>Updates</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2> Features Of Our App:</h2>

        <div className="feature">
          <div className="card">
            <h3>Smart Plan Comparison</h3>
            <p>
              Compare features, pricing, and benefits side by side before making decisions.
            </p>
          </div>

          <div className="card">
            <h3>Centralized State Management</h3>
            <p>
              Manage selected plans and features efficiently with real-time updates.
            </p>
          </div>

          <div className="card">
            <h3>Derived Calculations</h3>
            <p>
              Automatic total price and feature summaries calculated instantly.
            </p>
          </div>
        </div>
      </section>

     
      <section className="action">
        <h2>Ready to Simplify Your Subscriptions?</h2>
        <button onClick={() => window.location.href = "/plans"} className="btn">
          Get Started Now
        </button>
      </section>

      <footer className="footer">
        <p>© 2026 SubSage. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;