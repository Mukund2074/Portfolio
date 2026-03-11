import React from 'react';
// import cv from '../../src/MukundHadiya.pdf';

function About({ aboutRef }) {
  // const downloadFile = () => {
  //   const fileName = 'MukundHadiya_Resume.pdf';
  //   const filePath = cv;
  //   const link = document.createElement('a');
  //   link.href = filePath;
  //   link.download = fileName;
  //   link.click();
  // };

  return (
    <div ref={aboutRef}>
      <section className="section pt-0 grid-bg" id="about">
        <div className="container text-center">
          <div className="about">
            <div className="about-img-holder App-link" style={{ height: '500px', overflow: 'hidden' }}>
              <img src="assets/imgs/1670339891625.jpg" className="about-img" style={{ padding: '50px' }} alt="Mukund Hadiya" />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p style={{ fontFamily: 'Baloo Paaji' }}>
                Hello! I'm Mukund Hadiya, currently <strong style={{ color: 'purple', fontWeight: 'bold' }}>Project Manager</strong> at Xmatiq Technologies, with <strong style={{ color: 'purple', fontWeight: 'bold' }}>~3 years</strong> of experience. I'm an emerging <strong style={{ color: 'purple', fontWeight: 'bold' }}>MERN Stack Developer</strong> with a focus on <strong style={{ color: 'purple', fontWeight: 'bold' }}>API and IoT integration</strong>.
                <br /> I've led the development of impactful projects including an API project and a full <strong style={{ color: 'purple', fontWeight: 'bold' }}>MERN</strong> project with <strong style={{ color: 'purple', fontWeight: 'bold' }}>IoT</strong> integration. I work with <strong style={{ color: 'purple', fontWeight: 'bold' }}>ReactJs</strong>, <strong style={{ color: 'purple', fontWeight: 'bold' }}>NodeJs</strong>, <strong style={{ color: 'purple', fontWeight: 'bold' }}>MongoDb</strong>, <strong style={{ color: 'purple', fontWeight: 'bold' }}>React Native</strong>, <strong style={{ color: 'purple', fontWeight: 'bold' }}>NextJS</strong>, <strong style={{ color: 'purple', fontWeight: 'bold' }}>Fastify</strong>, and <strong style={{ color: 'purple', fontWeight: 'bold' }}>Drizzle</strong>.
                <br /> What sets me apart is my knack for self-learning and my ability to translate complex ideas into user-friendly solutions. Whether it's crafting intuitive UI designs or solving intricate coding puzzles, I thrive on challenges that push me to grow.
                <br /> I'm always available to support and connect — feel free to reach out anytime.
              </p>
              {/* <button className="btn-rounded btn btn-outline-primary mt-4 " onClick={downloadFile}>Download CV</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
