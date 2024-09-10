import React from 'react';
import cv from '../../src/MukundHadiya.pdf';

function About({ aboutRef }) {
  const downloadFile = () => {
    const fileName = 'MukundHadiya_Resume.pdf';
    const filePath = cv;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <div ref={aboutRef}>
      <section className="section pt-0" id="about">
        <div className="container text-center">
          <div className="about">
            <div className="about-img-holder App-link" style={{ height: '500px', overflow: 'hidden' }}>
              <img src="assets/imgs/1670339891625.jpg" className="about-img" style={{ padding: '50px' }} alt="Mukund Hadiya" />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p style={{fontFamily:'Baloo Paaji'}}>
                Hello! I'm Mukund Hadiya, a passionate <strong style={{color:'purple' , fontWeight:'bold' }}>MERN STACK DEVELOPER</strong> with expertise in<strong style={{color:'purple' , fontWeight:'bold' }}> Internet of Things (IoT) devices</strong>.
                <br /> My journey in the tech world began with a curiosity to explore and innovate. Over the years, I've honed my skills in technologies like ReactJs, NodeJs, ExpressJS, MongoDB Atlas, and more.
                <br /> i am learning new technologies like <strong style={{color:'purple' , fontWeight:'bold' }}> NextJs  , React Native , Expo </strong> and UI libraries like <strong style={{color:'purple' , fontWeight:'bold' }}> Bootstrap , Tailwind , Material UI </strong>.
                <br /> I'm a quick learner and adaptable, and I'm always looking for new ways to improve my skills.
                <br /> What sets me apart is my knack for self-learning and my ability to translate complex ideas into user-friendly solutions. Whether it's crafting intuitive UI designs or solving intricate coding puzzles, I thrive on challenges that push me to grow.
                <br /> I'm on a quest for a career opportunity that not only allows me to apply my expertise but also provides a platform for continuous learning and professional development. I'm excited about the prospect of contributing to impactful projects and building a brighter future in the IT industry.
              </p>
              <button className="btn-rounded btn btn-outline-primary mt-4 " onClick={downloadFile}>Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
