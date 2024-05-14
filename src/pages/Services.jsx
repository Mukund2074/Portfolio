import React from 'react';

export default function Services({ ServiceRef }) {
  return (
    <div ref={ServiceRef}>
      <section className="section" id="service">
        <div className="container text-center">
          <p className="section-subtitle">What I Do?</p>
          <h6 className="section-title mb-6">Services</h6>
          <div className="row" style={{ fontFamily: 'Baloo Paaji' }}>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/pencil-case.svg" alt="React" className="icon" />
                  <h6 className="title">React</h6>
                  <p className="subtitle">Crafting responsive and user-friendly UI designs using React and Bootstrap.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/responsive.svg" alt="Responsive Design" className="icon" />
                  <h6 className="title">Responsive Design</h6>
                  <p className="subtitle">Implementing responsive design principles with expertise in media queries, effects, and animations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/toolbox.svg" alt="Node.js" className="icon" />
                  <h6 className="title">Node.js</h6>
                  <p className="subtitle">Proficient backend development with Node.js, specializing in API building and code debugging.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/analytics.svg" alt="MongoDB Atlas" className="icon" />
                  <h6 className="title">MongoDB Atlas</h6>
                  <p className="subtitle">Skilled in MongoDB Atlas and cloud database management for efficient high-frequency operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
