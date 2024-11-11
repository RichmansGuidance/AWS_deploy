import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <div className={`background ${isScrolled ? "scrolled" : ""}`}>
        <header className="sticky-header">
          <h1 className="header-title">Test AWS Deploy by Kogut Volodymyr aka Richman/Reichman</h1>
          <p className="header-subtitle">
            Exploring the power of AWS with automated deployment pipelines.
          </p>
          <button className="cta-btn" onClick={toggleModal}>
            Learn More
          </button>
        </header>

        <section className="features">
          <div className="feature-card">
            <h3>Scalability</h3>
            <p>Scale your application to handle millions of requests.</p>
          </div>
          <div className="feature-card">
            <h3>Reliability</h3>
            <p>Ensure high availability and fault tolerance with AWS services.</p>
          </div>
          <div className="feature-card">
            <h3>Security</h3>
            <p>Protect your data with top-notch AWS security features.</p>
          </div>
        </section>

        <section className="demo">
          <div className="demo-content">
            <h2>Real-time AWS Deployment Demo</h2>
            <p>Experience the power of AWS deployment with live monitoring.</p>
            <button className="cta-btn" onClick={toggleModal}>
              See Demo
            </button>
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal">
            <h2>AWS Deployment Status</h2>
            <p>
              This deployment is running in a scalable and fault-tolerant AWS
              environment using EC2, developed by Kogut Volodymyr.
            </p>
            <button onClick={toggleModal} className="btn-close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
