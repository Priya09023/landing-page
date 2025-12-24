import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-cards">
       <div className="card">
    <h3>Personalized Plans</h3>
    <p>Get a roadmap based on your skills and interests.</p>
    </div>
    <div className="card">
     <h3>Course Recommendations</h3>
     <p>Learn the right courses to achieve your career goals.</p>
    </div>
    <div className="card">
     <h3>Project Guidance</h3>
     <p>Get ideas and support for practical projects.</p>
    </div>

    </div>
    </section>
  );
};

export default Features;
