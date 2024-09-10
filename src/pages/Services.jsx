import React from 'react';

export default function Services({ ServiceRef }) {
  return (
    <div ref={ServiceRef}>
      <section className="section" id="service">
        <div className="container text-center">
          <p className="section-subtitle">What I Do?</p>
          <h6 className="section-title mb-6">Services</h6>
          <div className="row" style={{ fontFamily: 'Baloo Paaji' }}>
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="icon" />
                  <h6 className="title">React Js</h6>
                  <p className="subtitle">Crafting responsive and user-friendly UI designs using ReactJs and Bootstrap.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp" alt="react Native" className="icon" />
                  <h6 className="title">React Native</h6>
                  <p className="subtitle">Developing mobile applications using React Native.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="icon" />
                  <h6 className="title">Node.js</h6>
                  <p className="subtitle">Proficient backend development with Node.js, specializing in API building and code debugging.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp" alt="Next.js" className="icon" />
                  <h6 className="title">Next.js</h6>
                  <p className="subtitle">Building scalable and performant web applications with Next.js.</p>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" style={{ width: '150px', height: '50px' }}alt="Express" className="icon" />
                  <h6 className="title">Express</h6>
                  <p className="subtitle">Skilled in building web applications and APIs with Express.js.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/mongo.png" alt="MongoDB Atlas" className="icon" />
                  <h6 className="title">MongoDB Atlas</h6>
                  <p className="subtitle">Skilled in MongoDB Atlas and cloud database management for efficient high-frequency operations.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg" style={{ width: '100px', height: '80px' }} alt="Arduino Uno" className="icon" />
                  <h6 className="title">Arduino Uno</h6>
                  <p className="subtitle">Prototyping and developing IoT projects using Arduino Uno microcontroller.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/nodemcu.png" style={{ width: '100px', height: '80px' }} alt="NodeMCU" className="icon" />
                  <h6 className="title">NodeMCU</h6>
                  <p className="subtitle">Building IoT applications with NodeMCU (ESP8266) microcontroller and Node.js.</p>
                </div>
              </div>
            </div>
           
          
            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/tailwind.png" style={{ width: '150px', height: '50px' }} alt="Tailwind CSS" className="icon" />
                  <h6 className="title">Tailwind CSS</h6>
                  <p className="subtitle">Expertise in building modern, utility-first UIs with Tailwind CSS.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://delta-dev-software.fr/wp-content/uploads/2024/02/1_fEyeESs-HxVR7Zlr-fdlvw.png" style={{ width: '150px', height: '80px' }} alt="MUI" className="icon" />
                  <h6 className="title">MUI </h6>
                  <p className="subtitle">Proficient in developing user interfaces with Material-UI.</p>
                </div>
              </div>
            </div>



            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" className="icon" />
                  <h6 className="title">Bootstrap</h6>
                  <p className="subtitle">Proficient in developing responsive and mobile-first websites with Bootstrap.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="service-card">
                <div className="body">
                  <img src="https://w7.pngwing.com/pngs/9/445/png-transparent-github-social-media-logo-social-media-logo-social-brand-3d-icon-thumbnail.png" alt="Git Hub" className="icon" />
                  <h6 className="title">Git Hub</h6>
                  <p className="subtitle">Skilled in version control with Git and GitHub.</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
}
