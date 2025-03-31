// src/pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Import the CSS for styling

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to ManagerSim</h1>
        <p className="hero-description">
          Immerse yourself in the world of management! Build, grow, and lead your virtual business to success.
        </p>
        <div className="cta-buttons">
          <button className="start-btn">Get Started</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-item">
          <h2 className="feature-title">Real-Time Simulation</h2>
          <p>Experience a real-time business environment with dynamic challenges and decisions.</p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">Multiple Roles</h2>
          <p>Take on different managerial roles to understand the complexity of running a business.</p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">Strategy & Analytics</h2>
          <p>Use data-driven decisions to grow your business with powerful analytics tools.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
